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

// Banner text shades (on dark bg)
const BANNER_BG    = "#3d2b1f"; // deep brown — dark hero bg
const BANNER_MUTED = "#d4c4b0"; // warm sand  — muted text on dark bg
const BANNER_DIM   = "#b8a48c"; // light sand — secondary text on dark bg

// Green — success / included features (warm earth-tone equivalents)
const GREEN      = "#166534"; // green-800  — success text
const GREEN_LT   = "#f0fdf4"; // green-50   — success bg
const GREEN_BD   = "#bbf7d0"; // green-200  — success border

// Amber — trial urgency nudge
const AMBER      = "#a16207"; // amber-800  — urgency text
const AMBER_LT   = "#fef3c7"; // amber-100  — urgency bg
const AMBER_BD   = "#fde68a"; // amber-200  — urgency border

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
//  TRIAL STARTED — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function TrialStarted() {
  const detailRows: DetailRow[] = [
    { label: "Plan",         value: "abc Pro",  highlight: true },
    { label: "Trial period", value: "14 days" },
    { label: "Started",      value: "Jul 23, 2025" },
    { label: "Expires",      value: "Aug 6, 2025" },
  ];

  const perks: PerkCard[] = [
    { icon: "✦", title: "Unlimited",    description: "Projects & workspaces with no caps." },
    { icon: "✦", title: "AI Tools",     description: "Full access to all AI-powered features." },
    { icon: "✦", title: "Priority",     description: "24/7 priority support from our team." },
    { icon: "✦", title: "Analytics",    description: "Advanced insights and reporting." },
    { icon: "✦", title: "Team",         description: "Invite unlimited team members." },
    { icon: "✦", title: "Integrations", description: "Connect with 50+ apps and tools." },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Your 14-day abc Pro trial has started — here's everything you've unlocked."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. CELEBRATION BANNER (warm dark brown, not indigo) ───────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={BANNER_BG}
        padding="44px 48px 16px 48px"
      >
        <Column>
          {/* Eyebrow — warm accent label */}
          <Heading
            headingType="h4"
            text="🎉  YOUR TRIAL HAS STARTED"
            fontSize="11px"
            fontWeight={600}
            color={BANNER_DIM}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
          {/* Main headline */}
          <Heading
            headingType="h1"
            text="Welcome to abc Pro"
            fontSize="34px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.1"
            letterSpacing="-0.01em"
          />
          {/* Subhead — serif for warmth on dark bg */}
          <Paragraph
            html={serifBody(
              `You now have full access to everything ${boldSans("abc Pro")} has to offer — free for 14 days. No credit card charged until your trial ends.`,
              BANNER_MUTED
            )}
            fontSize="15px"
            color={BANNER_MUTED}
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 3. TRIAL TIMELINE STRIP (on dark banner) ────────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={BANNER_BG}
        padding="24px 48px 48px 48px"
      >
        {/* Start date */}
        <Column
          backgroundColor={BRAND}
          borderRadius="8px"
          padding="16px 10px"
        >
          <Paragraph
            html="TRIAL STARTS"
            fontSize="10px"
            color="#ffffff"
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Jul 23"
            fontSize="20px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="2025"
            fontSize="11px"
            color={BANNER_MUTED}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        {/* Middle — days counter */}
        <Column padding="10px 14px">
          <Heading
            headingType="h2"
            text="14"
            fontSize="44px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.0"
          />
          <Paragraph
            html="days free"
            fontSize="12px"
            color={BANNER_MUTED}
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.04em"
          />
          {/* Arrow divider */}
          <Paragraph
            html={`<span style="color:${BANNER_DIM};font-size:20px;">→</span>`}
            fontSize="20px"
            color={BANNER_DIM}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        {/* End date */}
        <Column
          backgroundColor={BRAND}
          borderRadius="8px"
          padding="16px 10px"
        >
          <Paragraph
            html="TRIAL ENDS"
            fontSize="10px"
            color="#ffffff"
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Aug 6"
            fontSize="20px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="2025"
            fontSize="11px"
            color={BANNER_MUTED}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* ── 4. EXPLORE CTA ─────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="36px 48px 10px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="Start exploring"
            fontSize="24px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              "Your workspace is ready. Dive in and discover everything you've unlocked."
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
            Explore Your Workspace
          </Button>
        </Column>
      </Row>

      {/* ── 5. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 6. WHAT'S INCLUDED — section label ────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="WHAT'S INCLUDED IN YOUR TRIAL"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {/* ── 7. PLAN PERKS — 3-col feature grid (2 rows) ───────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="12px 40px 8px 40px"
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

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="8px 40px 32px 40px"
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

      {/* ── 8. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 9. TRIAL DETAILS LABEL ──────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="TRIAL DETAILS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
        </Column>
      </Row>

      {/* ── 10. TRIAL DETAIL ROWS (spec-sheet style) ──────────────────────── */}
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

      {/* ── 11. GREEN SUCCESS NOTICE ────────────────────────────────────────── */}
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
              `${boldSans("✓ No charge until Aug 6, 2025")}`,
              GREEN
            )}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              "Your trial is completely free. We'll send you a reminder 3 days before it ends so you're never surprised.",
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 12. UPGRADE NUDGE — 2-col asymmetric row ──────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={CARD}
        padding="16px 48px 40px 48px"
      >
        <Column
          backgroundColor={AMBER_LT}
          borderRadius="8px"
          padding="18px 16px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: AMBER_BD,
          }}
        >
          <Heading
            headingType="h3"
            text="⏱ 14"
            fontSize="28px"
            fontWeight={700}
            color={AMBER}
            textAlign="center"
            lineHeight="1.0"
          />
          <Paragraph
            html="days left"
            fontSize="12px"
            color={MUTED}
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.04em"
          />
          <Paragraph
            html="Trial ends Aug 6"
            fontSize="11px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        <Column
          backgroundColor={BRAND_LT}
          borderRadius="8px"
          padding="18px 24px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: HAIRLINE,
          }}
        >
          <Paragraph
            html={serifBody(
              "Love what you see? Lock in your plan now and keep full access after your trial."
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="165%"
          />
          <Paragraph
            html={`<a href="#" style="color:${BRAND};font-family:'Oxanium',sans-serif;font-weight:700;font-size:14px;text-decoration:none;border-bottom:1px solid ${BRAND};padding-bottom:1px;">Upgrade to Pro →</a>`}
            fontSize="14px"
            color={BRAND}
            textAlign="left"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 13. DIVIDER BEFORE FOOTER ──────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 14. SOCIAL ICONS ──────────────────────────────────────────────── */}
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

      {/* ── 15. COPYRIGHT ───────────────────────────────────────────────────── */}
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

      {/* ── 16. FOOTER LINKS ────────────────────────────────────────────────── */}
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