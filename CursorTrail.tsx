import React, { useState, useEffect } from 'react';

interface CursorTrailProps {
  mousePosition: { x: number; y: number };
}

const CursorTrail: React.FC<CursorTrailProps> = ({ mousePosition }) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const newTrail = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now(),
    };

    setTrail(prevTrail => {
      const updatedTrail = [newTrail, ...prevTrail.slice(0, 19)];
      return updatedTrail;
    });
  }, [mousePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prevTrail => prevTrail.slice(0, -1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const colors = [
    'hsl(262, 83%, 58%)', // primary
    'hsl(199, 89%, 48%)', // neon-blue
    'hsl(142, 76%, 36%)', // neon-green
    'hsl(330, 81%, 60%)', // neon-pink
    'hsl(25, 95%, 53%)',  // neon-orange
  ];

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            backgroundColor: colors[index % colors.length],
            opacity: Math.max(0, 1 - index * 0.05),
            transform: `scale(${Math.max(0.1, 1 - index * 0.05)})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;