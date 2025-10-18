"use client";
import React, { useEffect, useState } from "react";

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className={mounted ? "animations-enabled" : "animations-disabled"}>
      {children}
    </div>
  );
}


