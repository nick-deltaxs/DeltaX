"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

let _fired = false;

export function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (_fired) return;
    _fired = true;

    if (sessionStorage.getItem("dx_preloader")) {
      document.body.classList.add("page-loaded");
      return;
    }
    sessionStorage.setItem("dx_preloader", "1");
    setVisible(true);

    const minTime = new Promise<void>((resolve) => setTimeout(resolve, 2400));
    const maxTime = new Promise<void>((resolve) => setTimeout(resolve, 3200));
    const loadEvent = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    Promise.race([
      Promise.all([minTime, loadEvent]),
      maxTime,
    ]).then(() => {
      document.body.classList.add("page-loaded");
      setVisible(false);
    });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#0A0A0B" }}
        >
          <div className="flex flex-col items-center">
            {/* Mark — scale settle, snaps in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              style={{ color: "#FFFFFF" }}
            >
              <DeltaXLogo size={80} />
            </motion.div>

            {/* Rule — draws from center outward */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.35, ease: EASE_OUT }}
              style={{
                width: "120px",
                height: "1px",
                background: "#333333",
                marginTop: "14px",
                transformOrigin: "center",
              }}
            />

            {/* Label — fades in quietly */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55, ease: EASE_OUT }}
              className="font-mono uppercase"
              style={{
                fontSize: "14px",
                letterSpacing: "0.18em",
                color: "#999999",
                marginTop: "10px",
              }}
            >
              THE NEXT-GEN SOLUTIONS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
