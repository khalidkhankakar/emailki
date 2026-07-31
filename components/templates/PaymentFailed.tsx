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
// ═══════════════════════════════════════════════════════════════════════════════

const BRAND     = "#b45309"; // amber-700  — primary accent
const BRAND_DK  = "#92400e"; // amber-800  — hover / pressed states
const BRAND_LT  = "#f1e9da"; // warm cream — subtle fills
const INK       = "#4a3b33"; // deep brown — headings
const MUTED     = "#78716c"; // warm gray  — body / subtext
const SUBTLE    = "#a8a29e"; // soft gray  — de-emphasized
const LINK      = "#b45309"; // amber      — links
const BG        = "#fdfbf7"; // cream      — canvas background
const CARD      = "#f8f4ee"; // warm white — card surface
const HAIRLINE  = "#e4d9bc"; // sand       — borders / dividers

// Red — payment failure (warm earth-tone equivalents)
const RED       = "#991b1b"; // red-800    — failure text
const RED_DK    = "#450a0a"; // red-950    — dark top bar
const RED_MID   = "#dc2626"; // red-600    — secondary on dark
const RED_LT    = "#fef2f2"; // red-50     — failure bg
const RED_BD    = "#fecaca"; // red-200    — failure border
const RED_DIM   = "#fca5a5"; // red-300    — muted text on dark

// Amber — "action needed" nudge
const AMBER     = "#a16207"; // amber-800  — action text
const AMBER_LT  = "#fef3c7"; // amber-100  — action bg
const AMBER_BD  = "#fde68a"; // amber-200  — action border

// Green — access still safe (reassurance)
const GREEN     = "#166534"; // green-800  — success text
const GREEN_LT  = "#f0fdf4"; // green-50   — success bg
const GREEN_BD  = "#bbf7d0"; // green-200  — success border

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
  loss?: boolean;
}

interface TimelineStep {
  day: string;
  title: string;
  description: string;
  accent: "amber" | "red" | "neutral";
}

interface ReasonCard {
  title: string;
  description: string;
}

// ─── Helper Functions ──────────────────────────────────────────────────────────
const serifBody = (text: string, color: string = MUTED): string =>
  `<span style="font-family:'Merriweather',Georgia,serif;font-size:15px;line-height:1.75;color:${color};">${text}</span>`;

const boldSans = (text: string): string =>
  `<b style="font-family:'Oxanium',sans-serif;color:${BRAND_LT};">${text}</b>`;

const valueSerif = (text: string): string =>
  `<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${INK};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  PAYMENT FAILED — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function PaymentFailed() {
  const detailRows: DetailRow[] = [
    { label: "Invoice",    value: "#INV-2025-0083" },
    { label: "Plan",       value: "Emailki Pro — Monthly", loss: false },
    { label: "Attempted",  value: "Aug 6, 2025 · 11:02 AM" },
    { label: "Card",       value: "Visa •••• 4242" },
    { label: "Reason",     value: "Insufficient funds", loss: true },
  ];

  const timelineSteps: TimelineStep[] = [
    { day: "Day 3",  title: "Auto retry",     description: "We'll retry your card automatically.", accent: "amber" },
    { day: "Day 7",  title: "Final warning",  description: "Last chance email before access pauses.", accent: "red" },
    { day: "Day 14", title: "Access paused",  description: "Account moves to free plan.", accent: "neutral" },
  ];

  const reasonCards: ReasonCard[] = [
    { title: "Insufficient funds", description: "Ensure enough balance is available on the card." },
    { title: "Card expired",       description: "Update your card with a new expiry date." },
    { title: "Bank declined",      description: "Contact your bank to authorize the charge." },
    { title: "Incorrect details",  description: "Re-enter your card number, CVV, or billing address." },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Action needed — your Emailki Pro payment didn't go through. Update your payment method to keep access."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. RED TOP BAR — slim, firm not scary ───────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={RED_DK}
        padding="12px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `${boldSans("⚠ Payment failed")} <span style="color:#FFF"> — action needed to keep your Emailki Pro access.</span>`,
              "#ffffff"
            )}
            fontSize="14px"
            color="#ffffff"
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 3. HEADER — wordmark + failed badge ─────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="28px 48px 20px 48px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="Emailki"
            fontSize="26px"
            fontWeight={700}
            color={BRAND}
            textAlign="left"
            lineHeight="1.1"
            letterSpacing="0.06em"
          />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${RED_LT};color:${RED};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">⚠ PAYMENT FAILED</span>`}
            fontSize="11px"
            color={RED}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 4. DIVIDER ──────────────────────────────────────────────────────── */}
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

      {/* ── 5. HERO — split: failed amount left · explanation right ─────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={CARD}
        padding="36px 48px 32px 48px"
      >
        {/* Left — failed amount block */}
        <Column
          backgroundColor={RED_LT}
          borderRadius="10px"
          padding="28px 14px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: RED_BD,
          }}
        >
          <Heading
            headingType="h1"
            text="✕"
            fontSize="36px"
            fontWeight={700}
            color={RED}
            textAlign="center"
            lineHeight="1.0"
          />
          <Heading
            headingType="h2"
            text="$29.00"
            fontSize="22px"
            fontWeight={700}
            color={RED}
            textAlign="center"
            lineHeight="1.1"
          />
          <Paragraph
            html="Not charged"
            fontSize="11px"
            color={RED}
            textAlign="center"
            lineHeight="140%"
          />
          <Paragraph
            html="Aug 6, 2025"
            fontSize="11px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        {/* Right — warm explanation */}
        <Column padding="0px 0px 0px 24px">
          <Heading
            headingType="h1"
            text="Your payment didn't go through"
            fontSize="22px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              `We tried to charge ${boldSans("Visa •••• 4242")} for your Emailki Pro subscription but the payment was declined.`
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="175%"
          />
          <Paragraph
            html={serifBody(
              `${boldSans("✓ Your Pro access is still active")} — we'll retry automatically. Please update your payment method to avoid any interruption.`,
              GREEN
            )}
            fontSize="14px"
            color={GREEN}
            textAlign="left"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 6. FAILED CHARGE DETAILS — section label ────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="FAILED CHARGE DETAILS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {/* Detail rows */}
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
              html={item.loss
                ? `<span style="color:${RED};font-family:'Merriweather',serif;font-size:13px;font-weight:700;">${item.value}</span>`
                : valueSerif(item.value)
              }
              fontSize="13px"
              color={item.loss ? RED : INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 7. DUAL CTA — retry + update card ───────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 10px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="Fix your payment"
            fontSize="20px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              "Update your payment method to retry the charge and keep uninterrupted Pro access."
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="12px 48px 10px 48px"
      >
        <Column padding="0px 6px 0px 0px">
          <Button
            width="100%"
            href="#"
            backgroundColor={BRAND}
            color="#ffffff"
            hoverBackgroundColor={BRAND_DK}
            fontSize="14px"
            fontWeight={700}
            padding="14px 12px"
            borderRadius="6px"
            textAlign="center"
          >
            Update Payment Method
          </Button>
        </Column>
        <Column padding="0px 0px 0px 6px">
          <Button
            width="100%"
            href="#"
            backgroundColor={BG}
            color={MUTED}
            hoverBackgroundColor={HAIRLINE}
            fontSize="14px"
            fontWeight={600}
            padding="14px 12px"
            borderRadius="6px"
            textAlign="center"
          >
            Retry Payment
          </Button>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="6px 48px 32px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `Need help? <a href="#" style="color:${LINK};font-weight:600;text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">Contact billing support →</a>`,
              SUBTLE
            )}
            fontSize="13px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 8. DIVIDER ──────────────────────────────────────────────────────── */}
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

      {/* ── 9. WHAT HAPPENS NEXT — 3-step timeline ────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="WHAT HAPPENS NEXT"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="8px 40px 32px 40px"
      >
        {timelineSteps.map((step) => {
          const bgColors = {
            amber: AMBER_LT,
            red: RED_LT,
            neutral: BG,
          };
          const borderColors = {
            amber: AMBER_BD,
            red: RED_BD,
            neutral: HAIRLINE,
          };
          const titleColors = {
            amber: AMBER,
            red: RED,
            neutral: SUBTLE,
          };

          return (
            <Column
              key={step.day}
              backgroundColor={bgColors[step.accent]}
              borderRadius="8px"
              padding="20px 14px"
              border={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: borderColors[step.accent],
              }}
            >
              <Heading
                headingType="h3"
                text={step.day}
                fontSize="16px"
                fontWeight={700}
                color={titleColors[step.accent]}
                textAlign="center"
                lineHeight="1.2"
              />
              <Paragraph
                html={`<b style="font-family:'Oxanium',sans-serif;font-size:12px;color:${INK};">${step.title}</b>`}
                fontSize="12px"
                color={INK}
                textAlign="center"
                lineHeight="145%"
              />
              <Paragraph
                html={serifBody(step.description, MUTED)}
                fontSize="11px"
                color={MUTED}
                textAlign="center"
                lineHeight="155%"
              />
            </Column>
          );
        })}
      </Row>

      {/* ── 10. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 11. COMMON REASONS — section label ────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="COMMON REASONS FOR FAILURE"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {/* Reason cards row 1 */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="8px 40px 6px 40px"
      >
        {reasonCards.slice(0, 2).map((card) => (
          <Column
            key={card.title}
            backgroundColor={BG}
            borderRadius="8px"
            padding="18px 16px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<b style="font-family:'Oxanium',sans-serif;font-size:13px;color:${INK};">${card.title}</b>`}
              fontSize="13px"
              color={INK}
              textAlign="left"
              lineHeight="145%"
            />
            <Paragraph
              html={serifBody(card.description, MUTED)}
              fontSize="12px"
              color={MUTED}
              textAlign="left"
              lineHeight="165%"
            />
          </Column>
        ))}
      </Row>

      {/* Reason cards row 2 */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="6px 40px 32px 40px"
      >
        {reasonCards.slice(2, 4).map((card) => (
          <Column
            key={card.title}
            backgroundColor={BG}
            borderRadius="8px"
            padding="18px 16px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<b style="font-family:'Oxanium',sans-serif;font-size:13px;color:${INK};">${card.title}</b>`}
              fontSize="13px"
              color={INK}
              textAlign="left"
              lineHeight="145%"
            />
            <Paragraph
              html={serifBody(card.description, MUTED)}
              fontSize="12px"
              color={MUTED}
              textAlign="left"
              lineHeight="165%"
            />
          </Column>
        ))}
      </Row>

      {/* ── 12. GREEN ACCESS SAFE NOTICE ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 32px 48px"
      >
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="8px"
          padding="16px 24px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: GREEN_BD,
          }}
        >
          <Paragraph
            html={serifBody(
              `${boldSans("✓ Your Pro access is still fully active.")}`,
              GREEN
            )}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              `You have a grace period to fix this — we'll notify you before anything changes. <a href="#" style="color:${GREEN};font-weight:600;text-decoration:none;border-bottom:1px solid ${GREEN};padding-bottom:1px;">Update your payment method now →</a>`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 13. DIVIDER BEFORE FOOTER ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 14. SOCIAL ICONS ────────────────────────────────────────────────── */}
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

      {/* ── 15. COPYRIGHT ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="4px 48px 4px 48px">
        <Column>
          <Paragraph
            html={serifBody("© 2025 Emailki. All rights reserved.", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 16. FOOTER LINKS ──────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 48px 40px 48px">
        {["Privacy Policy", "Update Payment", "Billing Support"].map((link) => (
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