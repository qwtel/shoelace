interface DragOptions {
  /** Callback that runs as dragging occurs. */
  onMove: (x: number, y: number, event: PointerEvent) => void;
  /** Callback that runs when dragging stops. */
  onStop: () => void;
  /**
   * When an initial event is passed, the first drag will be triggered immediately using the coordinates therein. This
   * is useful when the drag is initiated by a mousedown/touchstart event but you want the initial "click" to activate
   * a drag (e.g. positioning a handle initially at the click target).
   */
  initialEvent: PointerEvent;
}

/** Begins listening for dragging. */
export function drag(container: HTMLElement, options?: Partial<DragOptions>) {
  function move(pointerEvent: PointerEvent) {
    if (pointerEvent.buttons === 0) return;

    const dims = container.getBoundingClientRect(); // Could this cause layout recalculation?
    const defaultView = container.ownerDocument.defaultView!; // What if I use this inside a scroll container? iframes?
    const offsetX = dims.left + defaultView.scrollX;
    const offsetY = dims.top + defaultView.scrollY;
    const x = pointerEvent.pageX - offsetX;
    const y = pointerEvent.pageY - offsetY;

    if (options?.onMove) {
      options.onMove(x, y, pointerEvent);
    }
  }

  function stop(event: PointerEvent) {
    if (event.cancelable) {
      event.preventDefault();
    }

    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', stop);

    if (options?.onStop) {
      options.onStop();
    }
  }

  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', stop);

  // If an initial event is set, trigger the first drag immediately
  if (options?.initialEvent instanceof PointerEvent) {
    move(options.initialEvent);
  }
}
