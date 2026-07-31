import {
  Button,
  Column,
  ColumnLayouts,
  Divider,
  Email,
  Heading,
  Paragraph,
  Row,
  Social,
} from "@unlayer/react-elements";

// ─── Design Tokens — warm artisan palette ─────────────────────────────────────
const PRIMARY    = "#b45309"; // --primary         amber-700
const PRIMARY_LT = "#fef3c7"; // amber-100         subtle tint
const PRIMARY_DK = "#78350f"; // amber-900         dark banner bg
const PRIMARY_MD = "#d97706"; // amber-600         eyebrow / secondary on dark
const PRIMARY_XL = "#451a03"; // amber-950         deepest — pill on dark

const INK        = "#4a3b33"; // --foreground      warm dark brown
const MUTED_FG   = "#78716c"; // --muted-foreground warm gray
const SUBTLE     = "#a8a29e"; // stone-400          de-emphasised
const LINK       = "#b45309"; // --ring

const BG         = "#fdfbf7"; // --background      warm off-white canvas
const CARD       = "#f8f4ee"; // --card            warm cream
const MUTED      = "#f1e9da"; // --muted           warm linen
const ACCENT     = "#f2daba"; // --accent          warm peach
const WHITE      = "#ffffff"; // --primary-foreground
const BORDER     = "#e4d9bc"; // --border          warm sand
const SECONDARY  = "#e4c090"; // --secondary       tan

// Banner shades (on amber-900)
const BANNER_MUTED = "#fde68a"; // amber-200 — body on dark
const BANNER_DIM   = "#fcd34d"; // amber-300 — eyebrow on dark

// Green — account confirmed (semantic)
const GREEN      = "#15803d";
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";

// Dual font system
const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', 'Times New Roman', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

// Monospace — for code-feel snippet
const monoFont = {
  label: "Fira Code",
  value: "'Fira Code', 'Courier New', monospace",
};

export function Welcome() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Your EmailKit account is active — start sending beautiful transactional emails in minutes."
    >

      {/* ── 1. HEADER — wordmark left · version badge right ─────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="24px 40px 20px 40px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="EmailKit"
            fontSize="22px"
            fontWeight={900}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
            letterSpacing="0.01em"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Beautiful transactional emails, fast."
            fontSize="11px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="140%"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${MUTED}; color:${MUTED_FG}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.06em; font-family:'Fira Code','Courier New',monospace;">v1.0 · free plan</span>`}
            fontSize="11px"
            color={MUTED_FG}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 2. ACCENT TOP DIVIDER — 2px brand stripe ────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={PRIMARY} padding="3px 0px">
        <Column>
          <Paragraph html="" fontSize="1px" color={PRIMARY} lineHeight="1" />
        </Column>
      </Row>

      {/* ── 3. DARK AMBER HERO BANNER ───────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PRIMARY_DK}
        padding="48px 40px 12px 40px"
      >
        <Column>
          {/* Eyebrow — monospace feel */}
          <Paragraph
            html={`<span style="font-family:'Fira Code','Courier New',monospace; color:${BANNER_DIM}; font-size:12px; font-weight:600; letter-spacing:0.06em;">// account.status = "active"</span>`}
            fontSize="12px"
            color={BANNER_DIM}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          {/* Main headline — serif for warmth */}
          <Heading
            headingType="h1"
            text="Welcome to EmailKit"
            fontSize="32px"
            fontWeight={700}
            color={WHITE}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          {/* Subhead */}
          <Paragraph
            html="Your account is live. You can now build, preview, and send beautiful transactional emails — without touching a design tool."
            fontSize="15px"
            color={BANNER_MUTED}
            textAlign="center"
            lineHeight="165%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* Confirmed pill on banner */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PRIMARY_DK}
        padding="16px 40px 36px 40px"
      >
        <Column
          backgroundColor={PRIMARY_XL}
          borderRadius="4px"
          padding="11px 20px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#92400e" }}
        >
          <Paragraph
            html={`<b style="color:#fde68a">✓ Account active</b> <span style="color:#fcd34d"> · khalid@example.com · Free plan · 500 emails/mo</span>`}
            fontSize="13px"
            color="#fde68a"
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 4. PLAN STATUS STRIP — 3 cols ───────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="20px 40px 8px 40px"
      >
        {/* Emails / mo */}
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="4px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: GREEN_BD }}
        >
          <Paragraph html="EMAILS / MO" fontSize="10px" color={GREEN} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="500" fontSize="20px" fontWeight={900} color={GREEN} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="Free plan" fontSize="10px" color={GREEN} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* Templates */}
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="4px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Paragraph html="TEMPLATES" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Unlimited" fontSize="16px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="All plans" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* API access */}
        <Column
          backgroundColor={MUTED}
          borderRadius="4px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html="API ACCESS" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Active" fontSize="16px" fontWeight={900} color={INK} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="Key in dashboard" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 5. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="16px 40px 0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 6. CAPABILITY STRIP — 3-col horizontal "what you can do" ────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="WHAT'S INCLUDED" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
          <Heading headingType="h2" text="Everything you need to ship email" fontSize="20px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.25" fontFamily={serifFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={CARD} padding="8px 40px 28px 40px">
        {/* Capability 1 */}
        <Column backgroundColor={MUTED} borderRadius="4px" padding="16px 14px">
          <Heading headingType="h3" text="✦" fontSize="20px" fontWeight={400} color={PRIMARY} textAlign="left" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>Visual builder</b>" fontSize="13px" color={INK} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Drag-and-drop or code — your choice. No design skills required." fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={serifFont} />
        </Column>

        {/* Capability 2 */}
        <Column backgroundColor={MUTED} borderRadius="4px" padding="16px 14px">
          <Heading headingType="h3" text="✦" fontSize="20px" fontWeight={400} color={PRIMARY} textAlign="left" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>React components</b>" fontSize="13px" color={INK} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Ship email templates as typed React components. renderToHtml() ready." fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={serifFont} />
        </Column>

        {/* Capability 3 */}
        <Column backgroundColor={MUTED} borderRadius="4px" padding="16px 14px">
          <Heading headingType="h3" text="✦" fontSize="20px" fontWeight={400} color={PRIMARY} textAlign="left" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>Email-safe HTML</b>" fontSize="13px" color={INK} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Table-based output that renders in Outlook, Gmail, and every inbox." fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* ── 7. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 8. 3-STEP QUICK START TIMELINE ──────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="QUICK START" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
          <Heading headingType="h2" text="Up and running in 3 steps" fontSize="20px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.25" fontFamily={serifFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={CARD} padding="8px 40px 28px 40px">
        {/* Step 1 */}
        <Column
          backgroundColor={ACCENT}
          borderRadius="4px"
          padding="18px 14px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h3" text="01" fontSize="24px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="<b>Install</b>" fontSize="13px" color={INK} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph
            html={`<span style="font-family:'Fira Code','Courier New',monospace; font-size:11px; color:${PRIMARY}; background:${PRIMARY_LT}; padding:2px 6px; border-radius:3px;">npm i @unlayer/react-elements</span>`}
            fontSize="11px"
            color={PRIMARY}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>

        {/* Step 2 */}
        <Column
          backgroundColor={ACCENT}
          borderRadius="4px"
          padding="18px 14px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h3" text="02" fontSize="24px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="<b>Build</b>" fontSize="13px" color={INK} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Pick a template or start from scratch in the visual editor." fontSize="12px" color={MUTED_FG} textAlign="center" lineHeight="150%" fontFamily={serifFont} />
        </Column>

        {/* Step 3 */}
        <Column
          backgroundColor={ACCENT}
          borderRadius="4px"
          padding="18px 14px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h3" text="03" fontSize="24px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="<b>Send</b>" fontSize="13px" color={INK} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Render to HTML and send via any ESP — Resend, SendGrid, SES." fontSize="12px" color={MUTED_FG} textAlign="center" lineHeight="150%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* ── 9. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 10. CODE SNIPPET BOX — makes it feel like a dev tool ─────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="EXAMPLE · RENDER YOUR FIRST EMAIL" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
          <Heading headingType="h2" text="It's just React" fontSize="18px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.25" fontFamily={serifFont} />
          <Paragraph html="Write your template as a React component, call renderToHtml(), and pass the output to your email provider. That's it." fontSize="14px" color={MUTED_FG} textAlign="left" lineHeight="165%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* Code block — MUTED bg with monospace Paragraph */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="0px 40px 8px 40px">
        <Column
          backgroundColor={PRIMARY_DK}
          borderRadius="4px"
          padding="20px 20px"
        >
          <Paragraph
            html={`<span style="font-family:'Fira Code','Courier New',monospace; font-size:12px; color:#fcd34d; line-height:1.8;">import { renderToHtml } from '@emailkit/react';<br/>import { WelcomeEmail } from './emails/Welcome';<br/><br/><span style="color:#86efac;">const html = renderToHtml(&lt;WelcomeEmail /&gt;);</span><br/><br/><span style="color:#fde68a;">// Send via Resend, SendGrid, SES — your choice</span><br/>await resend.emails.send({<br/>&nbsp;&nbsp;to: user.email,<br/>&nbsp;&nbsp;subject: 'Welcome!',<br/>&nbsp;&nbsp;<span style="color:#86efac;">html,</span><br/>});</span>`}
            fontSize="12px"
            color="#fcd34d"
            textAlign="left"
            lineHeight="180%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="8px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:600; font-size:13px; text-decoration:none;">Read the full API docs →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 11. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 12. PRIMARY CTA ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="28px 40px 8px 40px">
        <Column>
          <Heading headingType="h2" text="Start building your first template" fontSize="20px" fontWeight={700} color={INK} textAlign="center" lineHeight="1.2" fontFamily={serifFont} />
          <Paragraph html="Your dashboard has 20+ pre-built templates — welcome emails, receipts, magic links, password resets, and more." fontSize="14px" color={MUTED_FG} textAlign="center" lineHeight="160%" fontFamily={serifFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="16px 40px 8px 40px">
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={PRIMARY}
            color={WHITE}
            hoverBackgroundColor={PRIMARY_DK}
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Open My Dashboard →
          </Button>
        </Column>
      </Row>

      {/* Secondary links */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={CARD} padding="8px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:600; font-size:13px; text-decoration:none;">Browse templates →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:600; font-size:13px; text-decoration:none;">View API docs →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 13. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 14. UPGRADE NUDGE — slim TwoNarrowWide ──────────────────────────── */}
      {/* Free plan limit left · upgrade link right */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={CARD}
        padding="20px 40px 8px 40px"
      >
        {/* Left — usage badge */}
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="4px"
          padding="14px 10px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h3" text="500" fontSize="22px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="emails / mo" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Free plan" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* Right — upgrade copy */}
        <Column padding="0px 0px 0px 16px">
          <Heading headingType="h3" text="Need more volume?" fontSize="14px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.3" fontFamily={serifFont} />
          <Paragraph html="Upgrade to Pro for 50,000 emails/mo, custom domains, open &amp; click tracking, and priority support." fontSize="13px" color={MUTED_FG} textAlign="left" lineHeight="155%" fontFamily={serifFont} />
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:700; font-size:13px; text-decoration:none;">Upgrade to Pro — $19/mo →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="left"
            lineHeight="145%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 15. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="20px 40px 0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 16. HELP STRIP ──────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={CARD}
        padding="20px 40px 28px 40px"
      >
        {/* Left icon */}
        <Column
          backgroundColor={MUTED}
          borderRadius="4px"
          padding="20px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Heading headingType="h2" text="?" fontSize="26px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
        </Column>

        {/* Right — help copy */}
        <Column padding="0px 0px 0px 16px">
          <Heading headingType="h3" text="Questions or stuck?" fontSize="14px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.3" fontFamily={serifFont} />
          <Paragraph
            html={`Check the <a href="#" style="color:${LINK}; font-weight:600; text-decoration:none;">docs</a>, browse <a href="#" style="color:${LINK}; font-weight:600; text-decoration:none;">examples on GitHub</a>, or email us at <a href="mailto:support@emailkit.dev" style="color:${LINK}; font-weight:600; text-decoration:none;">support@emailkit.dev</a>. We respond fast.`}
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 17. FOOTER — minimal, B2B dev tool ──────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="20px 40px 4px 40px">
        <Column>
          <Paragraph
            html="EmailKit · Built for developers who care about email."
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph
            html="© 2025 EmailKit Inc. All rights reserved. · San Francisco, CA"
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Unsubscribe</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="https://github.com/emailkit" style="color:${LINK}; text-decoration:none;">GitHub</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

    </Email>
  );
}

export default Welcome;