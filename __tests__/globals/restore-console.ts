/**
 * @file Test Globals - restoreConsole
 * @module tests/globals/restoreConsole
 */

import mockConsole from 'jest-mock-console'

/** @const {Console} logger - Original Node.js `console` function */
const logger: Console = console

/**
 * Logs error messages to the console. The following errors will be ignored:
 *
 * - `Using kebab-case for css properties in objects is not supported`
 *
 * @param {any} message - Log entry
 * @param {any[]} params - Additional log arguments
 * @return {void} Nothing when complete
 */
function error(message?: any, ...params: any[]): void {
  const ignore = /kebab-case for css properties in objects is not supported/

  if (typeof message === 'string' && ignore.test(message)) return
  return void logger.error(message, ...params)
}

// Update global namespace
global.restoreConsole = mockConsole({ error })
