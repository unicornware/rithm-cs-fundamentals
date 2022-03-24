/**
 * @file Test Interfaces - JsonSpecReport
 * @module tests/interfaces/JsonSpecReport
 */

import type { MochaSuiteSummary, MochaTestSummary } from '@tests/types'

/**
 * Object representing output from the `JsonSpecReporter`.
 */
interface JsonSpecReport {
  readonly results: MochaSuiteSummary[]
  readonly stats: Mocha.Stats
  readonly suites: Required<
    Pick<Mocha.Suite, 'root' | 'title'> & {
      _bail: boolean
      parent: NonNullable<MochaTestSummary['parent']>['__mocha_id__']
    }
  >[]
}

export default JsonSpecReport
