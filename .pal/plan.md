
# MediCare Advisory — Patient Wellness Companion

A warm, friendly medical advisory platform where patients can share their health concerns, interact with an AI voice assistant, and receive personalized wellness guidance.

## Design Philosophy
- **Warm & friendly** aesthetic: Teal/soft green primary colors, coral/peach accents, rounded cards, gentle gradients, and soothing illustrations
- Large readable fonts, calming whitespace, and reassuring iconography
- Mobile-first responsive design — patients may use phones

---

## Pages & Features

### 1. Welcome / Home Screen
- Warm greeting with calming health illustration
- Quick-action cards: "Talk to AI Advisor", "Start Health Checkup", "View My Reports"
- Brief intro text explaining the advisory (non-doctor) nature of the service

### 2. Patient Onboarding Form
- Multi-step, gentle form collecting:
  - Basic info (name, age, gender)
  - Current symptoms / health concerns (with visual body-part selector or checklist)
  - Medical history highlights
  - What the patient **wants to know** — their willingness, concerns, cure preferences
- Progress bar to make it feel approachable, not overwhelming

### 3. AI Voice Advisory Screen (Core Feature)
- Prominent voice interaction area with a pulsing mic button and animated waveform
- AI voice assistant that:
  - Asks about symptoms and listens to patient concerns
  - Understands patient willingness and cure preferences
  - Provides general wellness advisory guidance
- Live transcript showing the conversation
- Option to type instead of speak
- Powered by ElevenLabs voice + Lovable AI for intelligence

### 4. Health Summary & Report
- Auto-generated summary after the AI conversation, including:
  - Symptoms discussed
  - Patient's willingness & preferences
  - Advisory recommendations (lifestyle tips, suggested next steps)
- Clean, printable card-based report layout
- Disclaimer that this is advisory, not a medical diagnosis

### 5. Recommendations Dashboard
- Personalized wellness cards based on patient's input:
  - Suggested lifestyle changes
  - Relevant health resources & articles
  - When to seek professional medical help
- Visual icons and warm illustrations for each recommendation

### 6. Sidebar Navigation
- Warm-toned collapsible sidebar with sections:
  - Home, New Checkup, AI Advisor, My Reports, Recommendations
- Friendly icons and smooth transitions

---

## Tech Approach
- Supabase backend for storing patient data and reports
- AI for intelligent conversation and report generation
- ElevenLabs for voice interaction (speech-to-text + text-to-speech)
- Warm color theme applied globally via Tailwind CSS variables
