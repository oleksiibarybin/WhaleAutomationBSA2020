/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type PageHelper = import('./lib/helpers/page_helper')

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Puppeteer, PageHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
