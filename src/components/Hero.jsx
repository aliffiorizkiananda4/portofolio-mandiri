import heroBg from '../assets/image.png';
import './Hero.css';
import Hyperspeed from './Hyperspeed';
import { useMemo } from 'react';

export default function Hero() {
  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }), []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-line" />
          <span>SMK Wikrama Kota Bogor</span>
        </div>
        <h1 className="hero-title">
          Aliffio<br />
          <span className="hero-title-red">Rizki</span><br />
          Ananda
        </h1>
        <p className="hero-subtitle">Frontend Developer &amp; Tifosi</p>
        <div className="hero-actions">
          <button className="btn-red cursor-target" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Lihat Project
          </button>
          <button className="btn-outline cursor-target" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Tentang Saya
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
