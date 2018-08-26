export function getElement<T extends HTMLElement>(element: HTMLElement, selectors: string): T {
  const target = element.querySelector<T>(selectors);
  if (target == null) {
    throw new Error(`Element not found for selector '${selectors}'`);
  }
  return target;
}

export function limit(x: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, x));
}

export function shuffle<T>(xs: T[]): T[] {
  let j: number;
  let x: T;
  let i: number;
  for (i = xs.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = xs[i];
    xs[i] = xs[j];
    xs[j] = x;
  }
  return xs;
}

interface ISwipeHandler {
  down?(): void;
  left?(): void;
  right?(): void;
  up?(): void;
}

export function handleSwipe(element: HTMLElement, handler: ISwipeHandler): void {
  let xDown: number;
  let yDown: number;

  const handleTouchStart = (event: TouchEvent) => {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (handler.left) { handler.left(); }
      } else {
        if (handler.right) { handler.right(); }
      }
    } else {
      if (yDiff > 0) {
        if (handler.up) { handler.up(); }
      } else {
        if (handler.down) { handler.down(); }
      }
    }

    xDown = 0;
    yDown = 0;
  };

  element.addEventListener("touchstart", handleTouchStart, false);
  element.addEventListener("touchmove", handleTouchMove, false);
}

export function averageGrade(grades: number[]): number {
  return grades.length > 0
    ? grades.reduce((a, x) => a + x, 0) / grades.length
    : 0;
}

export function utoa(x: string): string {
  return window.btoa(unescape(encodeURIComponent(x)));
}

export function atou(x: string): string {
  return decodeURIComponent(escape(window.atob(x)));
}
