import { useState } from "react";

const docs = [
  { id: "doc-1", title: "API Reference", children: [
    { id: "doc-1-1", title: "Authentication" },
    { id: "doc-1-2", title: "Endpoints" },
    { id: "doc-1-3", title: "Rate Limits" },
  ]},
  { id: "doc-2", title: "Architecture", children: [
    { id: "doc-2-1", title: "System Overview" },
    { id: "doc-2-2", title: "Data Flow" },
  ]},
  { id: "doc-3", title: "Onboarding Guide", children: [] },
  { id: "doc-4", title: "Security Policies", children: [
    { id: "doc-4-1", title: "Access Control" },
    { id: "doc-4-2", title: "Encryption" },
  ]},
];

const KnowledgeDocs = () => {
  const [selected, setSelected] = useState("doc-1-1");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-foreground min-h-[600px]">
      {/* Doc Tree */}
      <div className="lg:col-span-3 border-r border-foreground p-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Documents</h3>
        <div className="space-y-1">
          {docs.map((doc) => (
            <div key={doc.id}>
              <button
                onClick={() => setSelected(doc.id)}
                className={`w-full text-left px-2 py-1.5 text-xs font-medium transition-colors ${
                  selected === doc.id ? "text-primary border-l-2 border-primary bg-muted/30" : "text-foreground hover:bg-muted/30"
                }`}
              >
                {doc.title}
              </button>
              {doc.children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => setSelected(child.id)}
                  className={`w-full text-left pl-5 pr-2 py-1 text-xs transition-colors ${
                    selected === child.id ? "text-primary font-medium" : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {child.title}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Document Viewer */}
      <div className="lg:col-span-6 border-r border-foreground p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Authentication</h2>
        <div className="prose prose-sm max-w-none text-foreground-muted space-y-4 text-xs leading-relaxed">
          <p>All API requests must include a valid authentication token in the Authorization header.</p>
          <div className="border border-foreground bg-muted/20 p-3 font-mono text-xs">
            <span className="text-primary">Authorization:</span> Bearer &lt;your-api-key&gt;
          </div>
          <p>Tokens can be generated from the Settings page under API Access & Keys. Each token has configurable scopes and expiration.</p>
          <h3 className="text-sm font-bold text-foreground mt-6 mb-2">Token Scopes</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li><code className="font-mono text-primary">read</code> — Read-only access to all resources</li>
            <li><code className="font-mono text-primary">write</code> — Create and update resources</li>
            <li><code className="font-mono text-primary">admin</code> — Full administrative access</li>
          </ul>
        </div>
      </div>

      {/* Linked Context */}
      <div className="lg:col-span-3 p-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Linked Context</h3>
        <div className="space-y-3">
          <div className="border border-border p-3 text-xs">
            <p className="font-medium text-foreground">Related Memory</p>
            <p className="text-foreground-muted mt-1">API rate limit is 1000 req/min for tier-2</p>
          </div>
          <div className="border border-border p-3 text-xs">
            <p className="font-medium text-foreground">Referenced By</p>
            <p className="text-foreground-muted mt-1">agent-alpha, agent-gamma</p>
          </div>
          <div className="border border-border p-3 text-xs">
            <p className="font-medium text-foreground">Last Updated</p>
            <p className="font-mono text-foreground-muted mt-1">2h ago · v4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeDocs;
