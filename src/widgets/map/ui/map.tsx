"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao?: {
      maps: {
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (container: HTMLElement, options: { center: unknown; level: number }) => unknown;
        load: (callback: () => void) => void;
      };
    };
  }
}

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    if (!container || !window.kakao?.maps) {
      return;
    }
    

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao!.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // Initialize Kakao map once the SDK is ready.
      new window.kakao!.maps.Map(container, options);
    });
  }, []);

  return <div id="map" className="z-map h-full w-full" />;
};

export default Map;
