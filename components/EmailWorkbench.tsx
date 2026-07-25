"use client";

import { useMemo, useState } from "react";

type TemplatePreview = {
  id: string;
  name: string;
  description: string;
  html: string;
  code: string;
};

type EmailWorkbenchProps = {
  templates: TemplatePreview[];
};

export function EmailWorkbench({ templates }: EmailWorkbenchProps) {
  const [selectedId, setSelectedId] = useState(templates[0]?.id ?? "");
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const [query, setQuery] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  const filteredTemplates = useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      return templates;
    }

    return templates.filter((template) =>
      `${template.name} ${template.description}`.toLowerCase().includes(needle),
    );
  }, [query, templates]);

  const selected = useMemo(
    () =>
      templates.find((template) => template.id === selectedId) ?? templates[0],
    [selectedId, templates],
  );

  if (!selected) {
    return (
      <main className="dashboard-shell">
        <section className="workspace-main empty-workspace">
          <p>No email templates found.</p>
        </section>
      </main>
    );
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(selected.code);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 2500);
    }
  };

  return (
    <main className="dashboard-shell">
      <aside className="template-sidebar" aria-label="Email templates">
        <div className="sidebar-topline">
          <a className="dashboard-link" href="/">
            Home
          </a>
          <span>{templates.length} templates</span>
        </div>
        <div className="sidebar-heading">
          <h1 className="workbench-wordmark">emailki</h1>
          <p>Preview, code, repeat.</p>
        </div>

        <label className="template-search">
          <span>Search templates</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="billing, trial, magic link"
            type="search"
            value={query}
          />
        </label>

        <div className="template-list">
          {filteredTemplates.map((template) => (
            <button
              className="template-item"
              data-active={template.id === selected.id}
              key={template.id}
              onClick={() => setSelectedId(template.id)}
              type="button"
            >
              <span className="font-bold">{template.name}</span>
              <span className="text-sm text-muted-foreground">
                {template.description}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <section className="workspace-main">
        <header className="workspace-header">
          <div>
            <p className="workspace-kicker">Rendered email</p>
            <h2>{selected.name}</h2>
          </div>
          <div className="workspace-actions">
            <fieldset className="mode-switch">
              <legend className="sr-only">Template view mode</legend>
              <button
                data-active={mode === "preview"}
                onClick={() => setMode("preview")}
                type="button"
              >
                Preview
              </button>
              <button
                data-active={mode === "code"}
                onClick={() => setMode("code")}
                type="button"
              >
                Code
              </button>
            </fieldset>
            {mode === "code" ? (
              <button
                className="copy-code"
                data-state={copyState}
                onClick={copyCode}
                type="button"
              >
                {copyState === "copied"
                  ? "Copied"
                  : copyState === "error"
                    ? "Copy failed"
                    : "Copy code"}
              </button>
            ) : null}
          </div>
        </header>

        <div className="workspace-meta">
          <span>{selected.description}</span>
          <span>{mode === "preview" ? "HTML preview" : "Template source"}</span>
        </div>

        <div className="workspace-panel">
          {mode === "preview" ? (
            <iframe
              className="email-frame"
              srcDoc={selected.html}
              title={`${selected.name} preview`}
            />
          ) : (
            <pre className="code-view">
              <code>{selected.code}</code>
            </pre>
          )}
        </div>
      </section>
    </main>
  );
}
