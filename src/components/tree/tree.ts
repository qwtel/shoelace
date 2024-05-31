import SlTree from './tree.component.js';

export * from './tree.component.js';
export default SlTree;

SlTree.define('sl-tree');

declare global {
  interface HTMLElementTagNameMap {
    'sl-tree': SlTree;
  }
  interface CustomAttributesMap {
    'sl-tree': PickAttrs<SlTree, 'selection'>
  }
}
