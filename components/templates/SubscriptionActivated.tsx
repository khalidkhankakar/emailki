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

// Green — success / payment confirmed
const GREEN     = "#166534"; // green-800  — success text
const GREEN_DK  = "#14532d"; // green-900  — dark banner bg
const GREEN_MID = "#16a34a"; // green-600  — secondary on banner
const GREEN_LT  = "#f0fdf4"; // green-50   — success bg
const GREEN_BD  = "#bbf7d0"; // green-200  — success border
const GREEN_DIM = "#86efac"; // green-300  — muted text on dark

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
  highlight?: boolean;
}

interface PerkCard {
  icon: string;
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

const highlightSerif = (text: string): string =>
  `<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${BRAND};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  SUBSCRIPTION ACTIVATED — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function SubscriptionActivated() {
  const receiptRows: DetailRow[] = [
    { label: "Invoice",        value: "#INV-2025-0081" },
    { label: "Plan",           value: "Emailki Pro — Monthly", highlight: true },
    { label: "Date",           value: "Aug 6, 2025" },
    { label: "Payment method", value: "Visa •••• 4242" },
  ];

  const billingRows: DetailRow[] = [
    { label: "Billing cycle",  value: "Monthly" },
    { label: "Next charge",    value: "Sep 6, 2025" },
    { label: "Cancellation",   value: "Cancel anytime", highlight: true },
  ];

  const perks: PerkCard[] = [
    { icon: "✦", title: "Unlimited",    description: "Projects & workspaces." },
    { icon: "✦", title: "AI Tools",     description: "All AI features enabled." },
    { icon: "✦", title: "Team",         description: "Unlimited seats." },
    { icon: "✦", title: "Analytics",    description: "Advanced reports." },
    { icon: "✦", title: "Priority",     description: "24/7 support access." },
    { icon: "✦", title: "Integrations", description: "50+ connected apps." },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Welcome to Emailki Pro — your subscription is active and your receipt is inside."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. DARK GREEN CELEBRATION BANNER ────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={GREEN_DK}
        padding="44px 48px 16px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="✦  SUBSCRIPTION ACTIVATED"
            fontSize="11px"
            fontWeight={600}
            color={GREEN_MID}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
          <Heading
            headingType="h1"
            text="You're now a Pro member"
            fontSize="34px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.1"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              `Welcome to ${boldSans("Emailki Pro")}. Your subscription is active and your full access is ready — right now.`,
              "#d4c4b0"
            )}
            fontSize="15px"
            color="#d4c4b0"
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 3. GREEN CONFIRMED PILL — attached to banner ────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={GREEN_DK}
        padding="16px 48px 44px 48px"
      >
        <Column
          backgroundColor="#14532d"
          borderRadius="8px"
          padding="14px 24px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: GREEN_BD,
          }}
        >
          <Paragraph
            html={serifBody(
              `${boldSans("✓ Payment confirmed")} <span style="color:#86efac"> · Aug 6, 2025 · $29.00 charged to Visa ending 4242</span>`,
              "#f0fdf4"
            )}
            fontSize="13px"
            color="#f0fdf4"
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 4. HEADER — wordmark + Pro badge ────────────────────────────────── */}
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
            html={`<span style="background:${BRAND_LT};color:${BRAND};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">✦ PRO MEMBER</span>`}
            fontSize="11px"
            color={BRAND}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 5. DIVIDER ──────────────────────────────────────────────────────── */}
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

      {/* ── 6. EXPLORE CTA ──────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="36px 48px 10px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="Your workspace is ready"
            fontSize="24px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              "Everything is unlocked. Jump in and start building."
            )}
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="16px 48px 32px 48px"
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
            Go to My Workspace
          </Button>
        </Column>
      </Row>

      {/* ── 7. DIVIDER ──────────────────────────────────────────────────────── */}
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

      {/* ── 8. WHAT'S UNLOCKED — section label ──────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="EVERYTHING YOU'VE UNLOCKED"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {/* Perk grid row 1 */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="12px 40px 6px 40px"
      >
        {perks.slice(0, 3).map((perk) => (
          <Column
            key={perk.title}
            backgroundColor={BG}
            borderRadius="8px"
            padding="20px 16px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Heading
              headingType="h3"
              text={`${perk.icon}  ${perk.title}`}
              fontSize="14px"
              fontWeight={700}
              color={BRAND}
              textAlign="left"
              lineHeight="1.4"
            />
            <Paragraph
              html={serifBody(perk.description, MUTED)}
              fontSize="12px"
              color={MUTED}
              textAlign="left"
              lineHeight="165%"
            />
          </Column>
        ))}
      </Row>

      {/* Perk grid row 2 */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="6px 40px 32px 40px"
      >
        {perks.slice(3, 6).map((perk) => (
          <Column
            key={perk.title}
            backgroundColor={BG}
            borderRadius="8px"
            padding="20px 16px"
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: HAIRLINE,
            }}
          >
            <Heading
              headingType="h3"
              text={`${perk.icon}  ${perk.title}`}
              fontSize="14px"
              fontWeight={700}
              color={BRAND}
              textAlign="left"
              lineHeight="1.4"
            />
            <Paragraph
              html={serifBody(perk.description, MUTED)}
              fontSize="12px"
              color={MUTED}
              textAlign="left"
              lineHeight="165%"
            />
          </Column>
        ))}
      </Row>

      {/* ── 9. DIVIDER ──────────────────────────────────────────────────────── */}
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

      {/* ── 10. RECEIPT — section label ─────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="YOUR RECEIPT"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* Receipt rows */}
      {receiptRows.map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < receiptRows.length - 1
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
              idx < receiptRows.length - 1
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={item.highlight ? highlightSerif(item.value) : valueSerif(item.value)}
              fontSize="13px"
              color={item.highlight ? BRAND : INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* Amount paid — larger, green */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="0px 48px"
      >
        <Column padding="16px 0px">
          <Paragraph
            html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">Amount paid</b>`}
            fontSize="14px"
            color={INK}
            lineHeight="140%"
          />
        </Column>
        <Column padding="16px 0px">
          <Heading
            headingType="h2"
            text="$29.00"
            fontSize="24px"
            fontWeight={700}
            color={GREEN}
            textAlign="right"
            lineHeight="1.1"
          />
        </Column>
      </Row>

      {/* Download receipt link */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 8px 48px"
      >
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK};font-family:'Oxanium',sans-serif;font-weight:600;font-size:13px;text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">↓ Download PDF receipt →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 11. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 12. BILLING DETAILS — section label ─────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="BILLING"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* Billing rows */}
      {billingRows.map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < billingRows.length - 1
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
              idx < billingRows.length - 1
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={item.highlight
                ? `<span style="color:${GREEN};font-family:'Merriweather',serif;font-size:13px;font-weight:700;">${item.value}</span>`
                : valueSerif(item.value)
              }
              fontSize="13px"
              color={item.highlight ? GREEN : INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 13. GREEN REASSURANCE ───────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 40px 48px"
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
              `${boldSans("✓ You're all set.")} Manage your subscription, update payment details, or cancel anytime from <a href="#" style="color:${GREEN};font-weight:600;text-decoration:none;border-bottom:1px solid ${GREEN};padding-bottom:1px;">your billing settings</a>.`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 14. DIVIDER BEFORE FOOTER ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 15. SOCIAL ICONS ────────────────────────────────────────────────── */}
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

      {/* ── 16. COPYRIGHT ───────────────────────────────────────────────────── */}
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

      {/* ── 17. FOOTER LINKS ────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 48px 40px 48px">
        {["Privacy Policy", "Billing Settings", "Cancel Subscription"].map((link) => (
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