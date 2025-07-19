import SlButton from './button.component.js';

export * from './button.component.js';
export default SlButton;

SlButton.define('sl-button');

declare global {
  interface HTMLElementTagNameMap {
    'sl-button': SlButton;
  }
  interface CustomAttributesMap {
    'sl-button': PickAttrs<SlButton, 'variant' | 'size' | 'caret' | 'disabled' | 'loading' | 'outline' | 'pill' | 'circle'>
  }
}
