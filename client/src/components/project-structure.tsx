import { Card, CardContent } from "@/components/ui/card";
import { FaReact } from "react-icons/fa";
import { Folder, FileText, Settings } from "lucide-react";

export default function ProjectStructure() {
  const files = [
    { name: "public/", type: "folder", icon: Folder, color: "text-blue-500" },
    { name: "index.html", type: "file", icon: FileText, color: "text-orange-500", indent: 1 },
    { name: "src/", type: "folder", icon: Folder, color: "text-blue-500" },
    { name: "App.jsx", type: "file", icon: FaReact, color: "text-cyan-500", indent: 1 },
    { name: "main.jsx", type: "file", icon: FaReact, color: "text-cyan-500", indent: 1 },
    { name: "index.css", type: "file", icon: FileText, color: "text-purple-500", indent: 1 },
    { name: "package.json", type: "file", icon: FileText, color: "text-green-500" },
    { name: "vite.config.js", type: "file", icon: Settings, color: "text-slate-500" }
  ];

  const keyFiles = [
    {
      name: "index.html",
      icon: FileText,
      color: "text-orange-500",
      description: "Main HTML template"
    },
    {
      name: "App.jsx", 
      icon: FaReact,
      color: "text-cyan-500",
      description: "Main React component"
    },
    {
      name: "vite.config.js",
      icon: Settings,
      color: "text-slate-500", 
      description: "Vite configuration file"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Project Structure</h2>
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Directory Tree</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1 text-slate-700">
                  <div className="flex items-center">
                    <Folder className="text-blue-500 mr-2 w-4 h-4" />
                    <span className="font-semibold">my-react-app/</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    {files.map((file, index) => {
                      const IconComponent = file.icon;
                      return (
                        <div 
                          key={index} 
                          className="flex items-center"
                          style={{ marginLeft: `${(file.indent || 0) * 16}px` }}
                        >
                          <IconComponent className={`${file.color} mr-2 w-4 h-4`} />
                          <span>{file.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Key Files Description</h3>
              <div className="space-y-3">
                {keyFiles.map((file, index) => {
                  const IconComponent = file.icon;
                  return (
                    <div key={index} className="border border-slate-200 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <IconComponent className={`${file.color} mr-2 w-4 h-4`} />
                        <span className="font-medium text-slate-900">{file.name}</span>
                      </div>
                      <p className="text-sm text-slate-600">{file.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
