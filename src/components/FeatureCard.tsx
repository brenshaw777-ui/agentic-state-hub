import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  color: "primary" | "secondary" | "accent";
  index: number;
}

const FeatureCard = ({ icon: Icon, title, bullets, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-background border border-border rounded-sm card-accent-bar transition-all duration-300 hover:border-foreground"
    >
      <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.5} />
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-foreground-muted flex items-start gap-2">
            <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
