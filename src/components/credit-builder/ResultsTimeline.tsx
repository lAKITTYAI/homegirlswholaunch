import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Target, Award } from "lucide-react";

const timelineSteps = [
  {
    icon: Calendar,
    title: "30 Days",
    subtitle: "Reporting Begins",
    description: "Your payments start being reported to credit bureaus"
  },
  {
    icon: TrendingUp,
    title: "60-90 Days",
    subtitle: "First Credit Report Entry",
    description: "Your business/personal credit report shows the new account"
  },
  {
    icon: Target,
    title: "3-6 Months",
    subtitle: "Credit Score Impact",
    description: "Consistent payments begin positively affecting your credit score"
  },
  {
    icon: Award,
    title: "6-12 Months",
    subtitle: "Significant Improvement",
    description: "Substantial credit score gains with established payment history"
  }
];

export default function ResultsTimeline() {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Expected Results Timeline</h3>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Here's what you can expect as you build your credit with our programs
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {timelineSteps.map((step, index) => (
          <Card key={step.title} className="text-center relative">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{step.title}</div>
              <h4 className="font-semibold mb-2">{step.subtitle}</h4>
              <p className="text-sm text-neutral-600">{step.description}</p>
              
              {/* Timeline connector */}
              {index < timelineSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-primary/20"></div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <p className="text-sm text-amber-800 text-center">
          <strong>Important:</strong> Results may vary based on your current credit profile, payment consistency, 
          and other factors in your credit history. These timelines represent typical experiences based on our client data.
        </p>
      </div>
    </div>
  );
}