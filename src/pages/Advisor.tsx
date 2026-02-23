import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, Send, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };

const Advisor = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your MediCare wellness advisor. How are you feeling today? You can speak or type your concerns." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleListening = () => setIsListening(!isListening);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Thank you for sharing that. I understand your concern. Let me help guide you with some wellness advice based on what you've told me." },
      ]);
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="text-center mb-4">
        <h1 className="font-display text-2xl font-bold text-foreground">AI Wellness Advisor</h1>
        <p className="text-sm text-muted-foreground">Speak or type your health concerns</p>
      </div>

      {/* Voice Interaction Area */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <motion.button
            onClick={toggleListening}
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-colors ${
              isListening ? "bg-accent text-accent-foreground" : "warm-gradient text-primary-foreground"
            }`}
          >
            {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </motion.button>
          {isListening && (
            <>
              <div className="absolute inset-0 rounded-full bg-accent/30 animate-pulse-ring" />
              <div className="flex items-end justify-center gap-1 absolute -bottom-8 left-1/2 -translate-x-1/2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-accent rounded-full animate-wave"
                    style={{ animationDelay: `${i * 0.15}s`, height: "8px" }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mb-4">
        {isListening ? "Listening... tap to stop" : "Tap the microphone to speak"}
      </p>

      {/* Chat / Transcript */}
      <Card className="flex-1 border-0 card-shadow overflow-hidden flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-3" ref={scrollRef}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </CardContent>

        {/* Input Area */}
        <div className="p-4 border-t border-border flex gap-2">
          <Textarea
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
            className="min-h-[44px] max-h-[120px] resize-none rounded-xl"
            rows={1}
          />
          <Button onClick={sendMessage} size="icon" className="rounded-xl shrink-0 h-11 w-11">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Advisor;
