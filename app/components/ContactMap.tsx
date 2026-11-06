'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// Musanze town centre (the shop's main branch)
const MUSANZE: [number, number] = [-1.4998, 29.6342];
const GREEN = '#47A15E';
const YELLOW = '#F7C35F';

// Small decorative pins around town, as in the design
const PINS: [number, number][] = [
  [-1.4938, 29.6265],
  [-1.4925, 29.6395],
  [-1.5045, 29.6285],
  [-1.5058, 29.6412],
  [-1.4972, 29.6468],
];

const pinSvg = (size: number) =>
  `<svg width="${size}" height="${size * 1.3}" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 30C12 30 23 18.5 23 11.5A11 11 0 0 0 1 11.5C1 18.5 12 30 12 30Z" fill="${GREEN}"/>
    <circle cx="12" cy="11.5" r="4" fill="#ffffff"/>
  </svg>`;

// Light grey map (OpenStreetMap, desaturated) with a pulsing green highlight on the
// shop, a yellow place label and small green pins, matching the contact design.
// Leaflet touches `window`, so the map is created on the client only.
const ContactMap = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    let map: import('leaflet').Map | undefined;

    import('leaflet').then((L) => {
      map = L.map(el, { center: MUSANZE, zoom: 15, scrollWheelZoom: false, zoomControl: false });
      // OpenStreetMap tiles, desaturated with CSS (.leaflet-tile-pane in globals.css) for the muted grey look
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Concentric green highlight (fixed pixel size, so it looks the same at any zoom)
      L.marker(MUSANZE, {
        interactive: false,
        icon: L.divIcon({
          className: 'contact-map-glow',
          html: '<span class="ring ring-outer"></span><span class="ring ring-mid"></span><span class="ring ring-core"></span>',
          iconSize: [96, 96],
          iconAnchor: [48, 48],
        }),
      }).addTo(map);

      // Yellow place label above the highlight
      L.marker(MUSANZE, {
        interactive: false,
        icon: L.divIcon({
          className: 'contact-map-label',
          html: `<span style="background:${YELLOW}">Musanze, Rwanda</span>`,
          iconSize: [0, 0],
          iconAnchor: [0, 96],
        }),
      }).addTo(map);

      for (const point of PINS) {
        L.marker(point, {
          interactive: false,
          icon: L.divIcon({ className: 'contact-map-pin', html: pinSvg(20), iconSize: [20, 26], iconAnchor: [10, 26] }),
        }).addTo(map);
      }
    });

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={container}
      role="img"
      aria-label="Map of Musanze, Rwanda, with Duhingeneza Shop highlighted"
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ContactMap;
