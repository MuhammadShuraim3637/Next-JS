/**
 * Custom hooks — reusable stateful logic
 *
 * TEACHING NOTES — Custom hooks:
 * ────────────────────────────────
 * A custom hook is just a function that starts with `use`.
 * It can call other hooks (useState, useEffect) and return anything.
 * This pattern keeps component code clean — components describe UI,
 * hooks describe *behavior*.
 *
 * Rule: never call hooks conditionally or in loops.
 * Always call them at the top level of a function.
 */

"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ══════════════════════════════════════════════════
   useScrollProgress — tracks page scroll 0→1
   ══════════════════════════════════════════════════ */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/* ══════════════════════════════════════════════════
   useMediaQuery — responsive breakpoint detection
   ══════════════════════════════════════════════════ */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/* ══════════════════════════════════════════════════
   useIntersectionObserver — lazy reveal on scroll
   ══════════════════════════════════════════════════

   Usage in a component:
   ```tsx
   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
   return (
     <div
       ref={ref}
       className={cn("transition-opacity duration-700", isVisible ? "opacity-100" : "opacity-0")}
     />
   );
   ```
*/
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [React.RefCallback<Element>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: Element | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (!node) return;

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animate-in once)
          observerRef.current?.disconnect();
        }
      }, options);

      observerRef.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options.threshold, options.rootMargin]
  );

  return [ref, isVisible];
}

/* ══════════════════════════════════════════════════
   useLocalStorage — persist state to localStorage
   ══════════════════════════════════════════════════ */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`useLocalStorage: Failed to set ${key}`, error);
    }
  };

  return [storedValue, setValue];
}