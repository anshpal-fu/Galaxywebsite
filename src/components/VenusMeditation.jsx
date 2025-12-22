import React, { useState, useEffect } from 'react';

const VenusMeditation = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [phase, setPhase] = useState('ready'); // ready, breathing, holding, releasing
  const [breathPhase, setBreathPhase] = useState('inhale'); // inhale, hold, exhale

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    let breathInterval = null;
    
    if (isActive) {
      breathInterval = setInterval(() => {
        setBreathPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, 4000); // Change phase every 4 seconds
    }
    
    return () => clearInterval(breathInterval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(600);
    setPhase('ready');
    setBreathPhase('inhale');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getBreathInstruction = () => {
    switch (breathPhase) {
      case 'inhale':
        return 'Breathe in...';
      case 'hold':
        return 'Hold...';
      case 'exhale':
        return 'Breathe out...';
      default:
        return 'Breathe naturally';
    }
  };

  const getVenusInspiration = () => {
    const inspirations = [
      "Like Venus, find beauty in stillness",
      "Embrace your inner radiance",
      "Creativity flows through calm",
      "Vision emerges in quiet moments",
      "Self-growth begins with awareness",
      "Let your intuition guide you",
      "Trust the journey of transformation",
      "Balance strength with grace"
    ];
    
    return inspirations[Math.floor(Math.random() * inspirations.length)];
  };

  return (
    <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-[family-name:Playfair_Display] font-bold mb-6 gradient-text">
        Venus-Inspired Meditation
      </h3>
      
      <div className="mb-8">
        <div className="text-5xl font-bold mb-2 gradient-text">
          {formatTime(timeLeft)}
        </div>
        <p className="text-gray-100 mb-6">
          {isActive ? getBreathInstruction() : 'Ready to begin your cosmic journey?'}
        </p>
        
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 ${
            breathPhase === 'inhale' ? 'animate-ping' : ''
          }`}></div>
          <div className={`absolute inset-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center ${
            breathPhase === 'inhale' ? 'scale-110' : 
            breathPhase === 'hold' ? 'scale-105' : 
            'scale-95'
          } transition-transform duration-1000`}>
            <span className="text-white text-lg font-bold">♀</span>
          </div>
        </div>
        
        <p className="text-gray-100 italic mb-6">
          "{getVenusInspiration()}"
        </p>
      </div>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={toggleTimer}
          className="btn-primary px-8 py-3"
        >
          {isActive ? 'Pause' : 'Begin Journey'}
        </button>
        
        <button
          onClick={resetTimer}
          className="btn-outline px-8 py-3"
        >
          Reset
        </button>
      </div>
      
      <div className="mt-8 text-sm text-gray-400">
        <p>Connect with the energy of Venus - goddess of love, beauty, and creativity</p>
      </div>
    </div>
  );
};

export default VenusMeditation;