import { Card, CardContent } from "@/components/ui/card";
import { Moon, Apple, Dumbbell, Brain, Droplets, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const recommendations = [
  {
    title: "Improve Sleep Quality",
    description: "Maintain a consistent sleep schedule. Avoid screens 1 hour before bed. Keep your room cool and dark.",
    icon: Moon,
    category: "Lifestyle",
  },
  {
    title: "Balanced Nutrition",
    description: "Include anti-inflammatory foods like berries, leafy greens, and omega-3 rich fish in your diet.",
    icon: Apple,
    category: "Diet",
  },
  {
    title: "Gentle Exercise",
    description: "Start with 20 minutes of walking daily. Gentle stretching can help relieve tension and improve mood.",
    icon: Dumbbell,
    category: "Activity",
  },
  {
    title: "Stress Management",
    description: "Try deep breathing exercises or guided meditation for 10 minutes daily to reduce anxiety and tension.",
    icon: Brain,
    category: "Mental Health",
  },
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily. Proper hydration supports overall body function and energy.",
    icon: Droplets,
    category: "Hydration",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Recommendations = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Wellness Recommendations</h1>
        <p className="text-muted-foreground">Personalized guidance based on your health profile</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2"
      >
        {recommendations.map((rec) => (
          <motion.div key={rec.title} variants={item}>
            <Card className="border-0 card-shadow h-full hover:soft-shadow transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <rec.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold">{rec.category}</span>
                    <h3 className="font-display font-bold text-foreground mb-1">{rec.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* When to seek help */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-5 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-foreground mb-1">When to Seek Professional Help</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Symptoms persist for more than a week or worsen</li>
                <li>• You experience severe pain, high fever, or difficulty breathing</li>
                <li>• You feel your condition is not improving with self-care</li>
                <li>• You need prescription medication or specialized treatment</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Recommendations;
