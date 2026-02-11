import { Card, CardContent } from "@/components/ui/card";
import { Play, Box, Eye, CheckCircle } from "lucide-react";

export default function AvailableScripts() {
  const scripts = [
    {
      icon: Play,
      color: "text-emerald-500",
      title: "Development",
      command: "npm run dev",
      description: "Starts development server with hot reload at localhost:5173"
    },
    {
      icon: Box,
      color: "text-blue-500", 
      title: "Production Build",
      command: "npm run build",
      description: "Creates optimized production build in dist/ folder"
    },
    {
      icon: Eye,
      color: "text-purple-500",
      title: "Preview Build", 
      command: "npm run preview",
      description: "Preview production build locally before deployment"
    },
    {
      icon: CheckCircle,
      color: "text-orange-500",
      title: "Lint Code",
      command: "npm run lint",
      description: "Check code quality and fix issues with ESLint"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Available Scripts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {scripts.map((script, index) => {
          const IconComponent = script.icon;
          return (
            <Card key={index} className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <IconComponent className={`${script.color} mr-3 w-5 h-5`} />
                  <h3 className="text-lg font-medium text-slate-900">{script.title}</h3>
                </div>
                <div className="code-bg rounded-lg p-3 text-code-text font-mono text-sm mb-3">
                  {script.command}
                </div>
                <p className="text-slate-600 text-sm">{script.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
