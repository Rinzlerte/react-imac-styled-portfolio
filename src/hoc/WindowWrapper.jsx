import useWindwStore from "@store/window";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {

  const Wrapped = (props) => {
    const ref = useRef(null);
    const { focusWindow, windows } = useWindwStore();
    const { isOpen = false, zIndex = 0 } = windows[windowKey];

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
        }
      );

        const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (!isOpen) {
        el.style.display = "none";
      }
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  } )`;

  return Wrapped;
};

export default WindowWrapper;
