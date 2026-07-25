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

const BRAND     = "#b45309"; // amber-700  — primary accent
const BRAND_DK  = "#92400e"; // amber-800  — hover / pressed states
const BRAND_MID = "#a16207"; // amber-800  — secondary highlights
const BRAND_LT  = "#f1e9da"; // warm cream — subtle fills
const INK       = "#4a3b33"; // deep brown — headings
const MUTED     = "#78716c"; // warm gray  — body / subtext
const SUBTLE    = "#a8a29e"; // soft gray  — de-emphasized
const LINK      = "#b45309"; // amber      — links
const BG        = "#fdfbf7"; // cream      — canvas background
const CARD      = "#f8f4ee"; // warm white — card surface
const HAIRLINE  = "#e4d9bc"; // sand       — borders / dividers

// Urgency + warning palette (warm earth-tone equivalents)
const AMBER     = "#a16207"; // amber-800  — expiry badge text
const AMBER_LT  = "#fef3c7"; // amber-100  — expiry badge bg
const AMBER_BD  = "#fde68a"; // amber-200  — expiry badge border
const RED       = "#991b1b"; // red-800    — security warning text
const RED_LT    = "#fef2f2"; // red-50     — security warning bg
const RED_BD    = "#fecaca"; // red-200    — security warning border

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

interface SafetyTip {
  icon: string;
  title: string;
  description: string;
}

// ─── Helper Functions ──────────────────────────────────────────────────────────
const serifBody = (text: string, color: string = MUTED): string =>
  `<span style="font-family:'Merriweather',Georgia,serif;font-size:15px;line-height:1.75;color:${color};">${text}</span>`;

const boldSans = (text: string): string =>
  `<b style="font-family:'Oxanium',sans-serif;color:${INK};">${text}</b>`;

const labelSans = (text: string): string =>
  `<span style="font-family:'Oxanium',sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${SUBTLE};">${text}</span>`;

const valueSerif = (text: string): string =>
  `<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${INK};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  PASSWORD RESET — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function PasswordReset() {
  const detailRows: DetailRow[] = [
    { label: "Requested at",  value: "Jul 23, 2025 · 09:12 AM" },
    { label: "Link expires",  value: "Jul 23, 2025 · 09:42 AM" },
    { label: "Device",        value: "Chrome on macOS" },
    { label: "Location",      value: "Faisalabad, PK" },
  ];

  const safetyTips: SafetyTip[] = [
    {
      icon: "🔑",
      title: "Use a strong password",
      description: "At least 12 characters with a mix of letters, numbers, and symbols.",
    },
    {
      icon: "🔒",
      title: "Enable two-factor auth",
      description: "Add an extra layer of security to your abc account in Settings.",
    },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Reset your abc password — this link expires in 30 minutes."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. HEADER — wordmark left-aligned on warm card ────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="32px 48px 20px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="abc"
            fontSize="28px"
            fontWeight={700}
            color={BRAND}
            textAlign="left"
            lineHeight="1.1"
            letterSpacing="0.06em"
          />
        </Column>
      </Row>

      {/* ── 3. DIVIDER under header ─────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 4. URGENCY PILL — amber expiry notice ─────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 0px 48px"
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
              `⏱ ${boldSans("Link expires in 30 minutes")} — please reset your password promptly.`,
              AMBER
            )}
            fontSize="13px"
            color={AMBER}
            textAlign="left"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 5. MAIN HEADLINE + BODY (left-aligned, editorial) ─────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="32px 48px 10px 48px"
      >
        <Column>
          {/* Eyebrow — warm amber label */}
          <Heading
            headingType="h4"
            text="PASSWORD RESET"
            fontSize="11px"
            fontWeight={600}
            color={BRAND}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
          {/* Main headline */}
          <Heading
            headingType="h1"
            text="Reset your password"
            fontSize="30px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.15"
            letterSpacing="-0.01em"
          />
          {/* Body copy — serif for readability */}
          <Paragraph
            html={serifBody(
              `Hi there! We received a request to reset the password for your ${boldSans("abc")} account. Click the button below to choose a new password.`
            )}
            fontSize="15px"
            color={MUTED}
            textAlign="left"
            lineHeight="175%"
          />
          <Paragraph
            html={serifBody(
              "If you didn't make this request, you can safely ignore this email — your password will not be changed."
            )}
            fontSize="15px"
            color={MUTED}
            textAlign="left"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 6. CTA BUTTON ─────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 10px 48px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={BRAND}
            color="#ffffff"
            hoverBackgroundColor={BRAND_DK}
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            Reset My Password
          </Button>
        </Column>
      </Row>

      {/* ── 7. LINK FALLBACK BOX ──────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="10px 48px 40px 48px"
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
              html={`<a href="#" style="color:${LINK};word-break:break-all;font-family:'Fira Code',monospace;font-size:12px;">https://abc.app/reset-password?token=eyJhbGci…Xk8Qw</a>`}
              fontSize="12px"
              color={LINK}
              textAlign="left"
              lineHeight="160%"
            />
          </Column>
        </Column>
      </Row>

      {/* ── 8. DIVIDER ────────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 9. SECTION LABEL — Keep your account safe ─────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="KEEP YOUR ACCOUNT SAFE"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* ── 10. SAFETY TIPS — 2-column grid (warm cards) ─────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="12px 48px 32px 48px"
      >
        {safetyTips.map((tip) => (
          <Column
            key={tip.title}
            backgroundColor={BG}
            borderRadius="8px"
            padding="20px 20px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Heading
              headingType="h3"
              text={`${tip.icon}  ${tip.title}`}
              fontSize="14px"
              fontWeight={700}
              color={INK}
              textAlign="left"
              lineHeight="1.4"
            />
            <Paragraph
              html={serifBody(tip.description, MUTED)}
              fontSize="13px"
              color={MUTED}
              textAlign="left"
              lineHeight="165%"
            />
          </Column>
        ))}
      </Row>

      {/* ── 11. RED SECURITY WARNING — didn't request this? ───────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 40px 48px"
      >
        <Column
          backgroundColor={RED_LT}
          borderRadius="8px"
          padding="18px 24px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: RED_BD,
          }}
        >
          <Paragraph
            html={serifBody(
              `${boldSans("⚠ Didn't request a password reset?")}`,
              RED
            )}
            fontSize="13px"
            color={RED}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              `Your account may be at risk. We recommend you <a href="#" style="color:${RED};font-weight:600;text-decoration:none;border-bottom:1px solid ${RED};padding-bottom:1px;">secure your account immediately</a> and change your password. If you need help, <a href="#" style="color:${RED};text-decoration:none;border-bottom:1px solid ${RED};padding-bottom:1px;">contact our security team</a>.`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 12. REQUEST DETAILS LABEL ─────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="REQUEST DETAILS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* ── 13. SECURITY DETAIL ROWS (spec-sheet style) ──────────────────── */}
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

      {/* ── 14. BOTTOM PADDING SPACER ─────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="24px 48px 0px 48px">
        <Column>
          <Paragraph html="" fontSize="1px" color={CARD} lineHeight="1" />
        </Column>
      </Row>

      {/* ── 15. DIVIDER BEFORE FOOTER ─────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 16. SOCIAL ICONS ──────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="28px 48px 8px 48px">
        <Column>
          <Social
            icons={[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Github", url: "https://github.com" },
            ]}
            iconType="rounded"
            iconSize={26}
            spacing={12}
            align="center"
          />
        </Column>
      </Row>

      {/* ── 17. COPYRIGHT ─────────────────────────────────────────────────── */}
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

      {/* ── 18. FOOTER LINKS ──────────────────────────────────────────────── */}
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