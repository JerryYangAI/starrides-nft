import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SetupGuide() {
  const { toast } = useToast();
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      toast({
        title: "Copied to clipboard",
        description: "Command has been copied to your clipboard",
      });
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the command manually",
        variant: "destructive",
      });
    }
  };

  const steps = [
    {
      id: "step1",
      number: "1",
      title: "Create New Vite Project",
      description: "Initialize a new React project with Vite using the following command:",
      command: "npm create vite@latest my-react-app -- --template react",
      note: "Creates a new React project with Vite configuration"
    },
    {
      id: "step2",
      number: "2", 
      title: "Navigate and Install Dependencies",
      description: "Move into the project directory and install all required packages:",
      commands: [
        "cd my-react-app",
        "npm install"
      ]
    },
    {
      id: "step3",
      number: "3",
      title: "Start Development Server", 
      description: "Launch the development server with hot reload:",
      command: "npm run dev",
      note: "Server will start at http://localhost:5173"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Quick Setup Guide</h2>
      
      <div className="space-y-6">
        {steps.map((step) => (
          <Card key={step.id} className="border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium text-slate-900">{step.title}</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-4">{step.description}</p>
              
              {step.command && (
                <div className="code-bg rounded-lg p-4 text-code-text font-mono text-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-emerald-400">$</span>
                    <span className="ml-2">{step.command}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ml-auto bg-slate-700 hover:bg-slate-600 text-white"
                      onClick={() => copyToClipboard(step.command!, `${step.id}-single`)}
                      data-testid={`button-copy-${step.id}`}
                    >
                      {copiedStates[`${step.id}-single`] ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  {step.note && (
                    <div className="text-slate-400 text-xs">{step.note}</div>
                  )}
                </div>
              )}
              
              {step.commands && (
                <div className="code-bg rounded-lg p-4 text-code-text font-mono text-sm space-y-2">
                  {step.commands.map((cmd, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-emerald-400">$</span>
                      <span className="ml-2">{cmd}</span>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="ml-auto bg-slate-700 hover:bg-slate-600 text-white"
                        onClick={() => copyToClipboard(cmd, `${step.id}-${index}`)}
                        data-testid={`button-copy-${step.id}-${index}`}
                      >
                        {copiedStates[`${step.id}-${index}`] ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
