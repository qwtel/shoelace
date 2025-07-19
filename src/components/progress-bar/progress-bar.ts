import SlProgressBar from './progress-bar.component.js';

export * from './progress-bar.component.js';
export default SlProgressBar;

SlProgressBar.define('sl-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'sl-progress-bar': SlProgressBar;
  }
  interface CustomAttributesMap {
    'sl-progress-bar': PickAttrs<SlProgressBar, 'value' | 'indeterminate'>;
  }
}
