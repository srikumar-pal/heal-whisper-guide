import { Link } from "react-router-dom";
import { Mic, ClipboardList, FileText, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const quickActions = [
  {
    title: "Talk to AI Advisor",
    description: "Share your health concerns through a friendly voice conversation",
    icon: Mic,
    href: "/advisor",
    gradient: "warm-gradient",
  },
  {
    title: "Start Health Checkup",
    description: "Complete a guided questionnaire about your symptoms and needs",
    icon: ClipboardList,
    href: "/onboarding",
    gradient: "coral-gradient",
  },
  {
    title: "View My Reports",
    description: "Access your health summaries and advisory recommendations",
    icon: FileText,
    href: "/reports",
    gradient: "warm-gradient",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Heart className="w-4 h-4" />
          Your Wellness Partner
        </div>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Welcome to MediCare Advisory
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We're here to listen, understand your health concerns, and guide you towards 
          better wellness — as your caring advisory partner.
        </p>
      </motion.div>

      {/* Quick Action Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-3 mb-10"
      >
        {quickActions.map((action) => (
          <motion.div key={action.title} variants={item}>
            <Link to={action.href} className="block group">
              <Card className="h-full border-0 card-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center`}>
                    <action.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{action.description}</p>
                  </div>
                  <div className="flex items-center text-primary text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-secondary/50 rounded-2xl p-6 text-center"
      >
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Advisory Notice:</strong> MediCare Advisory provides 
          general wellness guidance and is not a substitute for professional medical diagnosis or treatment. 
          Always consult a qualified healthcare provider for medical advice.
        </p>
      </motion.div>
    </div>
  );
};

export default Index;
