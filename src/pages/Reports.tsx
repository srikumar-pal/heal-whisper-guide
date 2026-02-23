import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const sampleReports = [
  {
    id: 1,
    date: "Feb 20, 2026",
    symptoms: ["Headache", "Fatigue", "Insomnia"],
    willingness: "Wants to understand root causes, open to lifestyle changes",
    recommendations: ["Improve sleep hygiene", "Reduce screen time before bed", "Consider magnesium supplements"],
  },
  {
    id: 2,
    date: "Feb 15, 2026",
    symptoms: ["Back Pain", "Joint Pain"],
    willingness: "Prefers natural remedies, concerned about medication side effects",
    recommendations: ["Daily stretching routine", "Warm compresses", "Anti-inflammatory foods"],
  },
];

const Reports = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Health Reports</h1>
        <p className="text-muted-foreground">Your advisory session summaries and recommendations</p>
      </div>

      {sampleReports.length === 0 ? (
        <Card className="border-0 card-shadow text-center p-10">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No reports yet. Start a checkup to generate your first report.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {sampleReports.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-0 card-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-display text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Health Summary
                    </CardTitle>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {report.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Symptoms Discussed</h4>
                    <div className="flex flex-wrap gap-2">
                      {report.symptoms.map((s) => (
                        <span key={s} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Patient Willingness</h4>
                    <p className="text-sm text-muted-foreground">{report.willingness}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Recommendations</h4>
                    <ul className="space-y-1">
                      {report.recommendations.map((r, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="rounded-xl text-xs">
                      <Download className="w-3 h-3 mr-1" /> Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 bg-accent/10 rounded-xl p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground">
          These reports are advisory in nature and do not constitute a medical diagnosis. 
          Please consult a qualified healthcare provider for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default Reports;
