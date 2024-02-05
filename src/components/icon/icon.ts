import SlIcon from './icon.component.js';

export * from './icon.component.js';
export default SlIcon;

SlIcon.define('sl-icon');

declare global {
  interface HTMLElementTagNameMap {
    'sl-icon': SlIcon;
  }
  interface CustomAttributesMap {
    'sl-icon': Partial<Pick<SlIcon, 'name'>>
  }
}
