import { useEffect, useState } from "react";

export function useDataTheme() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme);
  const [observerOn, setObserverOn] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const _theme = mutation.target.dataset.theme;
          if (_theme) setTheme(mutation.target.dataset.theme);
        }
      });
    });

    if (!observerOn) {
      setObserverOn(true);

      observer.observe(document.documentElement, {
        attributes: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
}
