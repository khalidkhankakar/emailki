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

// Amber — urgency (dominant in this email)
const AMBER     = "#a16207"; // amber-800  — urgency text
const AMBER_LT  = "#fef3c7"; // amber-100  — urgency bg
const AMBER_BD  = "#fde68a"; // amber-200  — urgency border
const AMBER_MID = "#ca8a04"; // amber-600  — progress fill

// Green — reassurance / cancel safety
const GREEN     = "#166534"; // green-800  — success text
const GREEN_LT  = "#f0fdf4"; // green-50   — success bg
const GREEN_BD  = "#bbf7d0"; // green-200  — success border

// Progress bar shades
const PROGRESS_FILL = "#b45309"; // amber — days used
const PROGRESS_BG   = "#f1e9da"; // warm cream — days remaining

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

interface FomoCard {
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
//  TRIAL REMINDER — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function TrialReminder() {
  const detailRows: DetailRow[] = [
    { label: "Plan",         value: "abc Pro",  highlight: true },
    { label: "Monthly",      value: "$29 / mo" },
    { label: "Annual",       value: "$19 / mo" },
    { label: "First charge", value: "Aug 6, 2025" },
  ];

  const fomoCards: FomoCard[] = [
    { icon: "✦", title: "Unlimited projects", description: "Reverts to 3 projects on the free plan." },
    { icon: "✦", title: "AI Tools",           description: "All AI features will be disabled." },
    { icon: "✦", title: "Team members",       description: "Limit drops to 1 seat (just you)." },
    { icon: "✦", title: "Priority support",   description: "Support reverts to community only." },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Your abc Pro trial ends in 3 days — don't lose access to everything you've built."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. AMBER URGENCY STRIPE ─────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={AMBER}
        padding="12px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `${boldSans("⏱ Your abc Pro trial ends in 3 days")} <span style="color:#fde68a"> — Aug 6, 2025</span>`,
              "#ffffff"
            )}
            fontSize="14px"
            color="#ffffff"
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 3. HEADER — wordmark left · plan badge right ────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="28px 48px 20px 48px"
      >
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
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${AMBER_LT};color:${AMBER};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">PRO TRIAL</span>`}
            fontSize="11px"
            color={AMBER}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 4. DIVIDER under header ─────────────────────────────────────────── */}
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

      {/* ── 5. COUNTDOWN HERO ───────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="40px 48px 0px 48px"
      >
        <Column>
          <Paragraph
            html="DAYS REMAINING IN YOUR TRIAL"
            fontSize="11px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            letterSpacing="0.14em"
          />
          <Heading
            headingType="h1"
            text="3"
            fontSize="104px"
            fontWeight={700}
            color={BRAND}
            textAlign="center"
            lineHeight="1.0"
            letterSpacing="-0.02em"
          />
          <Paragraph
            html={serifBody(
              `Your ${boldSans("abc Pro")} trial expires on ${boldSans("Aug 6, 2025")}. Upgrade now to keep full access to everything you've built.`
            )}
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 6. PROGRESS BAR — "Day 11 of 14" ────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Paragraph
            html={`<b style="font-family:'Oxanium',sans-serif;font-size:13px;color:${INK};">Day 11</b> <span style="color:${SUBTLE};font-family:'Merriweather',serif;font-size:13px;">of 14</span>`}
            fontSize="13px"
            color={INK}
            textAlign="left"
            lineHeight="140%"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={CARD}
        padding="4px 48px 32px 48px"
      >
        <Column
          backgroundColor={PROGRESS_FILL}
          borderRadius="6px"
          padding="8px 0px"
        >
          <Paragraph
            html={`<span style="color:#ffffff;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;"> 11 days used</span>`}
            fontSize="11px"
            color="#ffffff"
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
        <Column
          backgroundColor={PROGRESS_BG}
          borderRadius="6px"
          padding="8px 0px"
        >
          <Paragraph
            html={`<span style="color:${BRAND};font-family:'Oxanium',sans-serif;font-size:11px;font-weight:700;">3 left</span>`}
            fontSize="11px"
            color={BRAND}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* ── 7. PRIMARY UPGRADE CTA ──────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px 10px 48px"
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
            Upgrade to abc Pro
          </Button>
        </Column>
      </Row>

      {/* Secondary text link */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="6px 48px 36px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `Not ready yet? <a href="#" style="color:${LINK};text-decoration:none;font-weight:600;border-bottom:1px solid ${LINK};padding-bottom:1px;">Remind me tomorrow →</a>`,
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

      {/* ── 9. WHAT YOU'LL LOSE — FOMO section label ────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="WHAT YOU'LL LOSE AFTER AUG 6"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {/* FOMO grid */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="12px 40px 6px 40px"
      >
        {fomoCards.slice(0, 2).map((card) => (
          <Column
            key={card.title}
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
              text={`${card.icon}  ${card.title}`}
              fontSize="14px"
              fontWeight={700}
              color={INK}
              textAlign="left"
              lineHeight="1.4"
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

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="6px 40px 32px 40px"
      >
        {fomoCards.slice(2, 4).map((card) => (
          <Column
            key={card.title}
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
              text={`${card.icon}  ${card.title}`}
              fontSize="14px"
              fontWeight={700}
              color={INK}
              textAlign="left"
              lineHeight="1.4"
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

      {/* ── 11. PRICING ─────────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="PRICING"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

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
              html={item.highlight ? highlightSerif(item.value) : valueSerif(item.value)}
              fontSize="13px"
              color={item.highlight ? BRAND : INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 12. GREEN CANCEL REASSURANCE ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 0px 48px"
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
              `${boldSans("✓ Cancel anytime before Aug 6 — no charge, ever.")}`,
              GREEN
            )}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              `Not the right time? You can <a href="#" style="color:${GREEN};font-weight:600;text-decoration:none;border-bottom:1px solid ${GREEN};padding-bottom:1px;">cancel your trial</a> before it ends and you won't be billed a single cent.`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 13. FINAL UPGRADE CTA REPEAT ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="20px 48px 40px 48px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={AMBER}
            color="#ffffff"
            hoverBackgroundColor="#92400e"
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            Keep My Pro Access →
          </Button>
        </Column>
      </Row>

      {/* ── 14. DIVIDER BEFORE FOOTER ───────────────────────────────────────── */}
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
            html={serifBody("© 2025 abc. All rights reserved.", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 17. FOOTER LINKS ──────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 48px 40px 48px">
        {["Privacy Policy", "Terms of Service", "Manage Trial"].map((link) => (
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