const BackgroundFX = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Pixel grid */}
      <div className="absolute inset-0 bg-pixel-grid" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]" />
    </div>
  );
};

export default BackgroundFX;
