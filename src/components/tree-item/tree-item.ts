import SlTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default SlTreeItem;

SlTreeItem.define('sl-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'sl-tree-item': SlTreeItem;
  }
  interface CustomAttributesMap {
    'sl-tree-item': PickAttrs<SlTreeItem, 'selected'|'expanded'|'disabled'|'lazy'>
  }
}
