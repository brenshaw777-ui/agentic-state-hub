import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CommandScene {
  command: string;
  output: string[];
}

const scenes: CommandScene[] = [
  {
    command: 'put /tg/user/123/prefs/tone {"tone":"direct"} --ttl 30d --searchable',
    output: [
      'ok  version=ver_9f2...  expires=30d  indexed=true',
    ],
  },
  {
    command: 'get /tg/user/123/prefs/tone',
    output: [
      '{',
      '  "tone": "direct",',
      '  "version": "ver_9f2...",',
      '  "ttl": "29d 23h"',
      '}',
    ],
  },
  {
    command: 'history /tg/user/123/prefs/tone',
    output: [
      'ver_9f2...  2024-01-15T10:23:45Z  {"tone":"direct"}',
      'ver_8a1...  2024-01-14T08:12:30Z  {"tone":"friendly"}',
    ],
  },
];

const HeroTerminal = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const scene = scenes[currentScene];
    let charIndex = 0;
    setDisplayedCommand("");
    setShowOutput(false);
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < scene.command.length) {
        setDisplayedCommand(scene.command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentScene]);

  useEffect(() => {
    if (showOutput) {
      const nextTimeout = setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      }, 3000);
      return () => clearTimeout(nextTimeout);
    }
  }, [showOutput]);

  const scene = scenes[currentScene];

  return (
    <div className="relative">
      {/* Terminal frame - light version */}
      <div className="relative bg-background border border-foreground rounded-sm overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <div className="w-3 h-3 rounded-full bg-foreground" />
          </div>
          <span className="text-xs font-mono text-foreground-muted ml-2">agentfs-terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 md:p-6 font-mono text-sm min-h-[200px]">
          {/* Prompt line */}
          <div className="flex flex-wrap items-start gap-1">
            <span className="text-primary font-semibold shrink-0">agentfs&gt;</span>
            <span className="text-foreground break-all">
              {displayedCommand}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-foreground ml-0.5 cursor-blink" />
              )}
            </span>
          </div>

          {/* Output */}
          {showOutput && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 space-y-1"
            >
              {scene.output.map((line, i) => (
                <div key={i} className="text-foreground-muted">
                  {line}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
