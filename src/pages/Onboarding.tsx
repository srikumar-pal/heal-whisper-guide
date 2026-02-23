import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, User, Stethoscope, BookOpen, Heart, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const symptoms = [
  "Headache", "Fever", "Fatigue", "Cough", "Chest Pain",
  "Back Pain", "Nausea", "Dizziness", "Joint Pain", "Skin Issues",
  "Breathing Difficulty", "Stomach Pain", "Insomnia", "Anxiety",
];

const steps = [
  { label: "Basic Info", icon: User },
  { label: "Symptoms", icon: Stethoscope },
  { label: "History", icon: BookOpen },
  { label: "Willingness", icon: Heart },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "", age: "", gender: "",
    symptoms: [] as string[],
    otherSymptoms: "",
    medicalHistory: "",
    allergies: "",
    willingness: "",
    curePref: "",
    concerns: "",
  });

  const progress = ((step + 1) / steps.length) * 100;

  const updateField = (field: string, value: any) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleSymptom = (s: string) =>
    setForm((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(s)
        ? prev.symptoms.filter((x) => x !== s)
        : [...prev.symptoms, s],
    }));

  const next = () => step < steps.length - 1 && setStep(step + 1);
  const prev = () => step > 0 && setStep(step - 1);
  const submit = () => navigate("/advisor");

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {i + 1}
            </div>
            <span className={`text-xs font-medium hidden md:block ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
              {s.label}
            </span>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${i < step ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>
      <Progress value={progress} className="mb-6 h-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <Card className="border-0 card-shadow">
            <CardHeader>
              <CardTitle className="font-display text-2xl flex items-center gap-2">
                {(() => { const Icon = steps[step].icon; return <Icon className="w-6 h-6 text-primary" />; })()}
                {steps[step].label}
              </CardTitle>
              <CardDescription>
                {step === 0 && "Let's start with some basic information about you."}
                {step === 1 && "Tell us what you're experiencing — select all that apply."}
                {step === 2 && "Share any relevant medical history so we can assist you better."}
                {step === 3 && "Help us understand what you'd like to know and how we can help."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 0 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Your age" value={form.age} onChange={(e) => updateField("age", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup value={form.gender} onValueChange={(v) => updateField("gender", v)} className="flex gap-4">
                      {["Male", "Female", "Other"].map((g) => (
                        <div key={g} className="flex items-center gap-2">
                          <RadioGroupItem value={g.toLowerCase()} id={g} />
                          <Label htmlFor={g} className="cursor-pointer">{g}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {symptoms.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSymptom(s)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
                          form.symptoms.includes(s)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label>Other symptoms</Label>
                    <Textarea placeholder="Describe any other symptoms..." value={form.otherSymptoms} onChange={(e) => updateField("otherSymptoms", e.target.value)} />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label>Medical History</Label>
                    <Textarea placeholder="Any previous conditions, surgeries, or ongoing treatments..." value={form.medicalHistory} onChange={(e) => updateField("medicalHistory", e.target.value)} rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label>Allergies</Label>
                    <Input placeholder="Known allergies (if any)" value={form.allergies} onChange={(e) => updateField("allergies", e.target.value)} />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-2">
                    <Label>What would you like to know?</Label>
                    <Textarea placeholder="What are you most curious or concerned about regarding your health?" value={form.willingness} onChange={(e) => updateField("willingness", e.target.value)} rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label>Cure Preferences</Label>
                    <RadioGroup value={form.curePref} onValueChange={(v) => updateField("curePref", v)}>
                      {["Natural / Home Remedies", "Medication-based", "Combination of both", "Open to any suggestion"].map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <RadioGroupItem value={c} id={c} />
                          <Label htmlFor={c} className="cursor-pointer">{c}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label>Any other concerns?</Label>
                    <Textarea placeholder="Anything else you'd like us to know..." value={form.concerns} onChange={(e) => updateField("concerns", e.target.value)} rows={2} />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={prev} disabled={step === 0} className="rounded-xl">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button onClick={next} className="rounded-xl">
            Next <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={submit} className="rounded-xl coral-gradient border-0">
            Talk to AI Advisor <Mic className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
