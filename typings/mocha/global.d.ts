declare global {
  namespace Mocha {
    interface Context {
      echo: typeof echo
      faker: typeof faker
      inspect: typeof inspect
      pf: typeof pf
      restoreConsole: typeof restoreConsole
      sandbox: typeof sandbox
    }

    interface RunnerOptions {
      reporterOptions?: any
    }
  }
}

export {}
