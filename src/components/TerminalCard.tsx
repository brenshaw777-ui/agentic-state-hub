interface TerminalCardProps {
  lines: string[];
}

const TerminalCard = ({ lines }: TerminalCardProps) => {
  return (
    <div className="bg-background-panel border border-border rounded-lg overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-background-panel-alt border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 font-mono text-xs md:text-sm space-y-1 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="text-foreground-muted whitespace-nowrap">
            {line.startsWith('/') ? (
              <span className="text-primary">{line}</span>
            ) : line.startsWith('#') ? (
              <span className="text-foreground-muted/50">{line}</span>
            ) : (
              line
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalCard;
