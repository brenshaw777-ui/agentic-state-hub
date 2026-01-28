const BackgroundFX = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base white background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-pixel-grid opacity-50" />
      
      {/* Geometric arc decorations - red/orange technical drawing style */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] border border-primary/10 rounded-full" />
      <div className="absolute top-32 right-1/3 w-[300px] h-[300px] border border-secondary/10 rounded-full" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] border border-primary/5 rounded-full" />
      
      {/* Diagonal accent lines */}
      <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <line x1="60%" y1="0" x2="100%" y2="40%" stroke="hsl(4, 84%, 55%)" strokeWidth="1" />
        <line x1="70%" y1="0" x2="100%" y2="30%" stroke="hsl(24, 100%, 50%)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default BackgroundFX;
