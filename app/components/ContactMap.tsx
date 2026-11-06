'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// The three branches. Musanze is the head office and gets the glowing highlight.
const BRANCHES: { name: string; label: string; position: [number, number]; hq?: boolean }[] = [
  { name: 'Musanze', label: 'Musanze, Rwanda (HQ)', position: [-1.4998, 29.6342], hq: true },
  { name: 'Mahoko', label: 'Mahoko, Rwanda', position: [-1.653, 29.33] },
  { name: 'Nyabugogo', label: 'Nyabugogo, Rwanda', position: [-1.941, 30.0455] },
];
const GREEN = '#47A15E';
const YELLOW = '#F7C35F';

const pinSvg = (size: number) =>
  `<svg width="${size}" height="${size * 1.3}" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 30C12 30 23 18.5 23 11.5A11 11 0 0 0 1 11.5C1 18.5 12 30 12 30Z" fill="${GREEN}" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="12" cy="11.5" r="4" fill="#ffffff"/>
  </svg>`;

// A clean vector map of Rwanda (country outline + district lines from /geo/rwanda.json,
// no street tiles) with a pulsing green highlight on the head office and a green pin and
// yellow label on each branch. Leaflet touches `window`, so it is created on the client only.
const ContactMap = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    let map: import('leaflet').Map | undefined;
    let cancelled = false;

    Promise.all([import('leaflet'), fetch('/geo/rwanda.json').then((r) => r.json())]).then(([L, rwanda]) => {
      if (cancelled) return;
      map = L.map(el, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      const country = L.geoJSON(rwanda, {
        filter: (f) => f.properties?.level === 'country',
        style: { color: '#9CA3AF', weight: 1.5, fillColor: '#ffffff', fillOpacity: 1 },
      }).addTo(map);
      L.geoJSON(rwanda, {
        filter: (f) => f.properties?.level === 'district',
        style: { color: '#D1D5DB', weight: 0.8, fill: false },
        interactive: false,
      }).addTo(map);

      for (const branch of BRANCHES) {
        if (branch.hq) {
          // Concentric green highlight (fixed pixel size, so it looks the same at any zoom)
          L.marker(branch.position, {
            interactive: false,
            icon: L.divIcon({
              className: 'contact-map-glow',
              html: '<span class="ring ring-outer"></span><span class="ring ring-mid"></span><span class="ring ring-core"></span>',
              iconSize: [96, 96],
              iconAnchor: [48, 48],
            }),
          }).addTo(map);
        }
        L.marker(branch.position, {
          interactive: false,
          title: `${branch.name} branch`,
          icon: L.divIcon({ className: 'contact-map-pin', html: pinSvg(26), iconSize: [26, 34], iconAnchor: [13, 34] }),
        }).addTo(map);
        // Yellow place label: above the glow for the HQ, below the pin for the others
        L.marker(branch.position, {
          interactive: false,
          icon: L.divIcon({
            className: 'contact-map-label',
            html: `<span style="background:${YELLOW}">${branch.label}</span>`,
            iconSize: [0, 0],
            iconAnchor: [0, branch.hq ? 92 : -6],
          }),
        }).addTo(map);
      }

      // Frame the whole country; the labels sit inside it
      map.fitBounds(country.getBounds(), { padding: [12, 12] });
      const refit = () => map?.fitBounds(country.getBounds(), { padding: [12, 12] });
      const observer = new ResizeObserver(() => {
        map?.invalidateSize();
        refit();
      });
      observer.observe(el);
      map.on('remove', () => observer.disconnect());
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        ref={container}
        role="img"
        aria-label="Map of Rwanda showing the Musanze head office and the Mahoko and Nyabugogo branches"
        className="absolute inset-0 w-full h-full z-0"
      />
      <span className="absolute bottom-1.5 right-2 text-[0.625rem] text-gray-400 pointer-events-none">
        Boundaries: geoBoundaries (CC BY 4.0)
      </span>
    </div>
  );
};

export default ContactMap;
