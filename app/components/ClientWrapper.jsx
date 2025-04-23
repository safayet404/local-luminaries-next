'use client';

import dynamic from 'next/dynamic';

// Dynamically import Slider, disabling SSR
const Slider = dynamic(() => import('./Slider'), { ssr: false });

export default function ClientSliderWrapper() {
  return <Slider />;
}
