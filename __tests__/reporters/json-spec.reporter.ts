/**
 * @file Test Reporters - JsonSpec
 * @module tests/reporters/JsonSpec
 */

import { ObjectEmpty } from '@flex-development/tutils'
import { JsonSpecOptions, JsonSpecReport } from '@tests/interfaces'
import Mocha from 'mocha'
import fs from 'node:fs'

/**
 * Intergrated [Mocha Spec][1] and `JSON` file reporter.
 *
 * [1]: https://mochajs.org/#spec
 *
 * @see https://mochajs.org/api/tutorial-custom-reporter.html
 *
 * @extends Mocha.reporters.Spec
 */
class Reporter extends Mocha.reporters.Spec {
  /**
   * @public
   * @static
   * @property {string} DEFAULT_REPORT_FILENAME - Default output filename
   */
  static DEFAULT_REPORT_FILENAME: string = '__tests__/report.json'

  /**
   * Creates a new Mocha reporter that writes test results to a `json` file.
   *
   * @param {Mocha.Runner} runner - Current runner
   * @param {Mocha.RunnerOptions} options - Runner options
   * @param {JsonSpecOptions} [options.reporterOptions] - Reporter options
   * @param {string} [options.reporterOptions.filename] - Output filename
   */
  constructor(runner: Mocha.Runner, options: Mocha.RunnerOptions) {
    super(runner, options)

    /** @const {Record<string, Mocha.Suite>} suites_map - Suite object map */
    const suites_map: Record<string, Mocha.Suite> = {}

    /** @const {Mocha.Test[]} tests - Test objects */
    const tests: Mocha.Test[] = []

    // Add suite object to suites array
    runner.on(Mocha.Runner.constants.EVENT_SUITE_END, suite => {
      if (!suite.root) suites_map[suite.title] = suite
    })

    // Add test object to tests array
    runner.on(Mocha.Runner.constants.EVENT_TEST_END, test => {
      if (test.file && test.title) tests.push(test)
    })

    // Create new report once all tests have been run
    runner.once(Mocha.Runner.constants.EVENT_RUN_END, () => {
      /** @const {Record<string, Mocha.Test[]>} tests_map - Test objects map */
      const tests_map: Record<string, Mocha.Test[]> = {}

      /** @const {string[]} test_files - Test filenames */
      const test_files = [...new Set(tests.map(r => r.file!)).values()]

      // Map tests to files
      for (const file of test_files) {
        tests_map[file] = tests.filter(s => s.file === file)
      }

      /** @const {JsonSpecReport} report - Test report */
      const report = Reporter.createReport(this.stats, suites_map, tests_map)

      // Write report
      Reporter.writeReport(report, options.reporterOptions as JsonSpecOptions)
    })
  }

  /**
   * Creates a `JsonSpecReport` object.
   *
   * @public
   * @static
   *
   * @param {Mocha.Stats} stats - Stats object
   * @param {Record<string, Mocha.Suite>} [suites_map={}] - Test suites map
   * @param {Record<string, Mocha.Test[]>} [tests_map={}] - Tests map
   * @return {JsonSpecReport} Report object
   */
  static createReport(
    stats: Mocha.Stats,
    suites_map: Record<Mocha.Suite['title'], Mocha.Suite> = {},
    tests_map: Record<NonNullable<Mocha.Test['file']>, Mocha.Test[]> = {}
  ): JsonSpecReport {
    return {
      stats,
      results: Object.entries(tests_map).map(([file, tests]) => {
        const s = suites_map[tests[0]!.titlePath()[0]!]!

        return {
          __mocha_id__: s['__mocha_id__'],
          file,
          title: s.title,
          isPending: s.isPending(),
          bail: s['_bail'],
          assertionResults: tests.map(t => ({
            __mocha_id__: t['__mocha_id__'],
            body: t.body,
            currentRetry: t['currentRetry'](),
            duration: t.duration,
            err: t.err ?? null,
            failureMessages: t.err ? [t.err.message] : [],
            file: t.file!,
            fullTitle: t.fullTitle(),
            isPending: t.isPending() || false,
            parent: (() => {
              if (!t.parent) return

              return {
                __mocha_id__: t.parent['__mocha_id__'],
                fullTitle: t.parent.fullTitle()
              }
            })(),
            speed: t.speed,
            state: t.state,
            status: t.isPending() ? 'pending' : t.state ?? 'pending',
            title: t.title,
            titlePath: t.titlePath()
          }))
        }
      }),
      suites: Object.values(suites_map).map(s => ({
        __mocha_id__: s['__mocha_id__'],
        _bail: s['_bail'],
        parent: s.parent!['__mocha_id__'],
        root: s.root || false,
        title: s.title
      }))
    }
  }

  /**
   * Writes a report to `filename`.
   *
   * @public
   * @static
   *
   * @param {JsonSpecReport | ObjectEmpty} [report={}] - Report object
   * @param {JsonSpecOptions} [options={}] - Reporter options
   * @return {void} Nothing when complete
   */
  static writeReport(
    report: JsonSpecReport | ObjectEmpty = {},
    options: JsonSpecOptions = {}
  ): void {
    return void fs.writeFileSync(
      options.filename ?? Reporter.DEFAULT_REPORT_FILENAME,
      JSON.stringify(report, null, 2)
    )
  }
}

export = Reporter
