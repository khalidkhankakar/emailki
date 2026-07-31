import Link from "next/link";

const HomePage = () => {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <Link className="site-wordmark" href="/">
          emailki
        </Link>
        <nav className="site-nav-links" aria-label="Primary">
          <Link href="/templates">Templates</Link>
        </nav>
      </header>

      <section className="marquee-hero" aria-labelledby="hero-title">
        <p className="hero-side-note">
          Unlayer templates, set a little sideways.
        </p>
        <div className="hero-content">
          <div className="hero-display-block">
            <h1 className="hero-title" id="hero-title">
              Emails that remember paper.
            </h1>
            <div className="hero-register" aria-hidden="true">
              warm
              <span>off-register</span>
              exact
            </div>
          </div>

          <div className="hero-workbench-card" aria-label="Preview and code sample">
            <div className="hero-workbench-top">
              <span className="hero-chip">Preview</span>
              <span className="hero-chip hero-chip--alt">Code</span>
            </div>
            <div className="hero-workbench-surface">
              <div className="hero-email-preview">
                <div className="hero-email-preview-top">
                  <span>From</span>
                  <strong>hello@emailki</strong>
                </div>
                <div className="hero-email-preview-body">
                  <p className="hero-email-label">Subject</p>
                  <h3>Your signup feels ready</h3>
                  <p>
                    Preview the message, inspect the JSX, ship with confidence.
                  </p>
                </div>
              </div>
              <pre className="hero-code-snippet">
                <code>{`import {Email} from @unlayer/react-elements`}</code>
              </pre>
              <pre className="hero-code-snippet">
                <code>{`<Email title="Welcome" />`}</code>
                <code>{`</Email>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="product-strip" id="templates">
        <div className="product-copy">
          <h2>Pick a message. See the email. Read the code.</h2>
          <p>
            emailki is a compact workbench for React email templates built with
            @unlayer/react-elements. It keeps preview and source beside each
            other, so the template never becomes a black box.
          </p>
          <Link className="primary-action" href="/templates">
            Browse templates
          </Link>
        </div>

        <figure
          className="offset-template"
          aria-label="Template workbench summary"
        >
          <div className="offset-template-sheet">
            <div className="sheet-row">
              <span>Selected</span>
              <strong>Welcome</strong>
            </div>
            <div className="sheet-row">
              <span>Modes</span>
              <strong>Preview / Code</strong>
            </div>
            <div className="sheet-row">
              <span>Renderer</span>
              <strong>@unlayer/react-elements</strong>
            </div>
          </div>
          <figcaption>
            One library, many transactional moments: verification, billing,
            trials, security, feedback, product updates.
          </figcaption>
        </figure>
      </section>

      <section className="system-band" id="system">
        <h2>Soft surface. Strict output.</h2>
        <dl className="system-list">
          <div>
            <dt>Preview</dt>
            <dd>Rendered email HTML stays live inside the dashboard.</dd>
          </div>
          <div>
            <dt>Source</dt>
            <dd>Template JSX is one switch away for review and reuse.</dd>
          </div>
          <div>
            <dt>Library</dt>
            <dd>The sidebar is tuned for scanning real template names.</dd>
          </div>
        </dl>
      </section>

      <footer className="statement-footer">
        <p>Small emails deserve a real room to work in.</p>
        <div>
          <span className="site-wordmark">emailki</span>
          <Link href="/templates">Open workbench</Link>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
