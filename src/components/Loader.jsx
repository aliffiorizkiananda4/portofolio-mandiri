import { useEffect, useState } from 'react';
import logoFerrari from '../assets/kuda.png';
import './Loader.css';

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('enter'); // enter -> hold -> exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 2000);
    const t2 = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`loader ${phase}`}>
      <div className="loader-content">
        <img src={logoFerrari} alt="Ferrari" className="loader-logo" />
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
        <p className="loader-text">Forza Ferrari</p>
      </div>
    </div>
  );
}
