declare module '*.css' {
  const styles: string;
  export default styles;
}

declare namespace Chai {
  interface Assertion {
    // chai-a11y-axe returns a promise-like object and should be awaited but the types are incorrect
    // eslint-disable-next-line @typescript-eslint/ban-types
    accessible: (options?: Object) => PromiseLike<Assertion>;
  }
}

interface HTMLInputElement {
  showPicker: () => void;
}

/* eslint-disable */
interface CloseWatcher extends EventTarget {
  new (options?: CloseWatcherOptions): CloseWatcher;
  requestClose(): void;
  close(): void;
  destroy(): void;

  oncancel: (event: Event) => void | null;
  onclose: (event: Event) => void | null;
}

declare const CloseWatcher: CloseWatcher;

interface CloseWatcherOptions {
  signal: AbortSignal;
}

declare interface Window {
  CloseWatcher?: CloseWatcher;
}
/* eslint-enable */

type CamelToDashCase<T extends string, P extends string = ""> = string extends T ? string :
  T extends `${infer C0}${infer R}` ?
  CamelToDashCase<R, `${P}${C0 extends Lowercase<C0> ? "" : "-"}${Lowercase<C0>}`> : P

type CamelToDash<T> = { [P in keyof T as CamelToDashCase<P & string>]: T[P] }

type PickAttrs<T, K extends keyof T> = Partial<CamelToDash<Pick<T, K>>>
