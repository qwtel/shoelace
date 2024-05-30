export type SlMoveEvent = CustomEvent<{ position: number, positionInPixels: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-before-move': SlMoveEvent;
    'sl-move': SlMoveEvent;
    'sl-after-move': SlMoveEvent;
  }
}
