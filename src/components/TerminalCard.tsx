interface TerminalCardProps {
  lines: string[];
}

const TerminalCard = ({ lines }: TerminalCardProps) => {
  return (
    <div className="bg-background border border-foreground rounded-sm overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-foreground">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 font-mono text-xs md:text-sm space-y-1 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="text-foreground whitespace-nowrap">
            {line.startsWith('/') ? (
              <span className="text-foreground">{line}</span>
            ) : line.startsWith('#') ? (
              <span className="text-foreground-muted">{line}</span>
            ) : line.startsWith('agentfs>') ? (
              <>
                <span className="text-primary font-semibold">agentfs&gt;</span>
                <span className="text-foreground">{line.replace('agentfs>', '')}</span>
              </>
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
