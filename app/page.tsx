// app/page.tsx
"use client";

import { MiniAppDemo } from "@/components/cdp-demo/MiniAppDemo";

import { useMiniKit } from "@coinbase/onchainkit/minikit";

export default function HomePage() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  return <MiniAppDemo />;
}
