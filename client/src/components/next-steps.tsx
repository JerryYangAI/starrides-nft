import { Card, CardContent } from "@/components/ui/card";
import { FileText, Wand2, Rocket } from "lucide-react";

export default function NextSteps() {
  const steps = [
    {
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Copy Your Code",
      description: "Replace the default files with your existing website code"
    },
    {
      icon: Wand2,
      color: "text-emerald-600", 
      bgColor: "bg-emerald-100",
      title: "Customize",
      description: "Modify components and add new features as needed"
    },
    {
      icon: Rocket,
      color: "text-purple-600",
      bgColor: "bg-purple-100", 
      title: "Deploy",
      description: "Build and deploy your optimized React application"
    }
  ];

  return (
    <section className="mb-12">
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`${step.color} text-xl w-6 h-6`} />
                  </div>
                  <h3 className="font-medium text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
