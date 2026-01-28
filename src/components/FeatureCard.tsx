import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  color: "primary" | "secondary" | "accent";
  index: number;
}

const colorClasses = {
  primary: "border-primary/20 hover:border-primary/50 group-hover:text-primary",
  secondary: "border-secondary/20 hover:border-secondary/50 group-hover:text-secondary",
  accent: "border-accent/20 hover:border-accent/50 group-hover:text-accent",
};

const iconColorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const FeatureCard = ({ icon: Icon, title, bullets, color, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group p-6 bg-background-panel border rounded-lg transition-all duration-300 ${colorClasses[color]}`}
    >
      <Icon className={`w-10 h-10 mb-4 transition-colors ${iconColorClasses[color]}`} />
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-foreground-muted flex items-start gap-2">
            <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${iconColorClasses[color]} bg-current`} />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
