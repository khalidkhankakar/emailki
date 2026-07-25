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

// ═══════════════════════════════════════════════════════════════════════════════
//  WARM EARTH-TONE DESIGN TOKENS
//  Palette: cream canvas, amber accents, deep brown ink, warm borders
//  Typography: Oxanium (headings/UI) + Merriweather (body)
// ═══════════════════════════════════════════════════════════════════════════════

const BRAND      = "#b45309"; // amber-700  — primary accent
const BRAND_DK   = "#92400e"; // amber-800  — hover / pressed states
const BRAND_MID  = "#a16207"; // amber-800  — secondary highlights
const BRAND_LT   = "#f1e9da"; // warm cream — subtle fills
const INK        = "#4a3b33"; // deep brown — headings
const MUTED      = "#78716c"; // warm gray  — body / subtext
const SUBTLE     = "#a8a29e"; // soft gray  — de-emphasized
const LINK       = "#b45309"; // amber      — links
const BG         = "#fdfbf7"; // cream      — canvas background
const CARD       = "#f8f4ee"; // warm white — card surface
const HAIRLINE   = "#e4d9bc"; // sand       — borders / dividers

// Urgency palette (warm earth-tone equivalents)
const AMBER      = "#a16207"; // amber-800  — expiry text
const AMBER_LT   = "#fef3c7"; // amber-100  — expiry bg
const AMBER_BD   = "#fde68a"; // amber-200  — expiry border

// Hero card text shades (warm dark brown palette)
const HERO_BG    = "#3d2b1f"; // deep brown — dark hero bg
const HERO_MUTED = "#d4c4b0"; // warm sand  — muted text on dark bg
const HERO_DIM   = "#b8a48c"; // light sand — secondary text on dark bg

const fontSans = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
};

const fontSerif = {
  label: "Merriweather",
  value: "'Merriweather', Georgia, 'Times New Roman', serif",
};

// ─── Helper Types ──────────────────────────────────────────────────────────────
interface DetailRow {
  label: string;
  value: string;
}

interface StepCard {
  number: string;
  title: string;
  description: string;
}

// ─── Helper Functions ──────────────────────────────────────────────────────────
const serifBody = (text: string, color: string = MUTED): string =>
  `<span style="font-family:'Merriweather',Georgia,serif;font-size:15px;line-height:1.75;color:${color};">${text}</span>`;

const boldSans = (text: string): string =>
  `<b style="font-family:'Oxanium',sans-serif;color:${INK};">${text}</b>`;

const valueSerif = (text: string): string =>
  `<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${INK};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  MAGIC LINK — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function MagicLink() {
  const detailRows: DetailRow[] = [
    { label: "Requested at", value: "Jul 23, 2025 · 02:45 PM" },
    { label: "Sent to",      value: "kh***@gmail.com" },
    { label: "Device",       value: "Chrome on macOS" },
    { label: "Location",     value: "Faisalabad, PK" },
  ];

  const steps: StepCard[] = [
    { number: "01", title: "Click the button", description: "Tap \"Sign In\" above." },
    { number: "02", title: "Auto sign-in",     description: "No password required." },
    { number: "03", title: "You're in",        description: "Landed on your dashboard." },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Your magic sign-in link for abc — tap to sign in instantly."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. HEADER — wordmark left · "Magic Link" label right ────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="28px 48px 20px 48px"
      >
        {/* Wordmark */}
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="abc"
            fontSize="26px"
            fontWeight={700}
            color={BRAND}
            textAlign="left"
            lineHeight="1.1"
            letterSpacing="0.06em"
          />
        </Column>

        {/* Right label — context pill */}
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${BRAND_LT}; color:${BRAND}; padding:4px 12px; border-radius:20px; font-family:'Oxanium',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.08em;">✦ MAGIC LINK</span>`}
            fontSize="11px"
            color={BRAND}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 3. DARK HERO CARD (warm brown, not indigo) ────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={HERO_BG}
        padding="52px 48px 16px 48px"
      >
        <Column>
          {/* Hero icon — warm star */}
          <Heading
            headingType="h1"
            text="✦"
            fontSize="52px"
            fontWeight={400}
            color={BRAND}
            textAlign="center"
            lineHeight="1.0"
          />
          {/* Primary headline */}
          <Heading
            headingType="h1"
            text="Sign in to abc"
            fontSize="32px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.15"
            letterSpacing="-0.01em"
          />
          {/* Subhead — warm sand on dark bg */}
          <Paragraph
            html={serifBody(
              "No password needed. Click the button below to sign in instantly — it's that simple.",
              HERO_MUTED
            )}
            fontSize="15px"
            color={HERO_MUTED}
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* CTA inside the dark card — warm cream button */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={HERO_BG}
        padding="20px 48px 12px 48px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor="#f8f4ee"
            color={BRAND}
            hoverBackgroundColor="#f1e9da"
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            Sign In to abc
          </Button>
        </Column>
      </Row>

      {/* Expiry note inside the dark card */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={HERO_BG}
        padding="8px 48px 48px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `⏱ This link expires in ${boldSans("15 minutes")} and can only be used once.`,
              HERO_DIM
            )}
            fontSize="13px"
            color={HERO_DIM}
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 4. AMBER EXPIRY STRIP — repeated outside for email clients ────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 0px 48px"
      >
        <Column
          backgroundColor={AMBER_LT}
          borderRadius="8px"
          padding="12px 18px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: AMBER_BD,
          }}
        >
          <Paragraph
            html={serifBody(
              `⏱ ${boldSans("Expires 15 min from now")} — one-time use only. Do not share this link.`,
              AMBER
            )}
            fontSize="13px"
            color={AMBER}
            textAlign="left"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 5. "HOW IT WORKS" — 3-column explainer strip ──────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="32px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="HOW MAGIC LINK WORKS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="12px 40px 32px 40px"
      >
        {steps.map((step) => (
          <Column
            key={step.number}
            backgroundColor={BG}
            borderRadius="8px"
            padding="20px 14px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Heading
              headingType="h3"
              text={step.number}
              fontSize="24px"
              fontWeight={700}
              color={BRAND}
              textAlign="center"
              lineHeight="1.1"
            />
            <Paragraph
              html={`<b style="font-family:'Oxanium',sans-serif;font-size:13px;color:${INK};">${step.title}</b>`}
              fontSize="13px"
              color={INK}
              textAlign="center"
              lineHeight="145%"
            />
            <Paragraph
              html={serifBody(step.description, MUTED)}
              fontSize="12px"
              color={MUTED}
              textAlign="center"
              lineHeight="155%"
            />
          </Column>
        ))}
      </Row>

      {/* ── 6. LINK FALLBACK BOX ────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 12px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              "Button not working? Copy and paste this link into your browser:",
              SUBTLE
            )}
            fontSize="13px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="150%"
          />
          <Column
            backgroundColor={BRAND_LT}
            borderRadius="6px"
            padding="12px 16px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<a href="#" style="color:${LINK};word-break:break-all;font-family:'Fira Code',monospace;font-size:12px;">https://abc.app/magic?token=ml_eyJhbGci…9zX2lk</a>`}
              fontSize="12px"
              color={LINK}
              textAlign="left"
              lineHeight="160%"
            />
          </Column>
        </Column>
      </Row>

      {/* ── 7. DIVIDER ──────────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="12px 48px 0px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 8. SIGN-IN DETAILS LABEL ────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="SIGN-IN DETAILS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* ── 9. SECURITY DETAIL ROWS (spec-sheet style) ────────────────────── */}
      {detailRows.map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < detailRows.length - 1
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={item.label}
              fontSize="11px"
              color={SUBTLE}
              lineHeight="140%"
              letterSpacing="0.08em"
            />
          </Column>
          <Column
            padding="14px 0px"
            border={
              idx < detailRows.length - 1
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={valueSerif(item.value)}
              fontSize="13px"
              color={INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 10. "DIDN'T REQUEST?" NOTICE (warm info tone) ──────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 40px 48px"
      >
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="8px"
          padding="18px 24px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: BRAND,
          }}
        >
          <Paragraph
            html={serifBody(
              `${boldSans("Didn't request this sign-in?")}`,
              BRAND
            )}
            fontSize="13px"
            color={BRAND}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              `No action needed — simply ignore this email and the link will expire automatically. If you're seeing unexpected sign-in attempts, <a href="#" style="color:${LINK};text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">secure your account</a> or <a href="#" style="color:${LINK};text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">contact support</a>.`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 11. DIVIDER BEFORE FOOTER ───────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 12. SOCIAL ICONS ──────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="28px 48px 8px 48px">
        <Column>
          <Social
            icons={[
              { name: "Twitter",  url: "https://twitter.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Github",   url: "https://github.com" },
            ]}
            iconType="rounded"
            iconSize={26}
            spacing={12}
            align="center"
          />
        </Column>
      </Row>

      {/* ── 13. COPYRIGHT ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="4px 48px 4px 48px">
        <Column>
          <Paragraph
            html={serifBody("© 2025 abc. All rights reserved.", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 14. FOOTER LINKS ────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 48px 40px 48px">
        {["Privacy Policy", "Terms of Service", "Unsubscribe"].map((link) => (
          <Column key={link}>
            <Paragraph
              html={`<a href="#" style="color:${LINK};text-decoration:none;font-family:'Oxanium',sans-serif;font-size:12px;">${link}</a>`}
              fontSize="12px"
              color={SUBTLE}
              textAlign="center"
              lineHeight="150%"
            />
          </Column>
        ))}
      </Row>

    </Email>
  );
}