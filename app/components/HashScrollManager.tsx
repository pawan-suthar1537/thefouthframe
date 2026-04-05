"use client";

import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent } from "react";
import { scrollToHash } from "../lib/scrollToHash";

export default function HashScrollManager() {
  const pathname = usePathname();

  const syncHashScroll = useEffectEvent(() => {
    const { hash } = window.location;

    if (!hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToHash(hash);
      });
    });
  });

  useEffect(() => {
    syncHashScroll();
  }, [pathname, syncHashScroll]);

  useEffect(() => {
    window.addEventListener("hashchange", syncHashScroll);

    return () => {
      window.removeEventListener("hashchange", syncHashScroll);
    };
  }, [syncHashScroll]);

  return null;
}
