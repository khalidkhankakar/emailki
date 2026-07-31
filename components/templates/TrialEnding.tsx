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

// ─── Design Tokens ────────────────────────────────────────────────────────────
const BRAND      = "#4338CA"; // deep indigo — primary
const BRAND_LT   = "#EEF2FF"; // lavender tint
const BRAND_DARK = "#312E81"; // indigo-900
const INK        = "#18181B"; // near-black
const MUTED      = "#52525B"; // zinc-600
const SUBTLE     = "#A1A1AA"; // zinc-400
const LINK       = "#4338CA"; // indigo links
const BG         = "#F4F4F8"; // canvas
const WHITE      = "#FFFFFF";
const HAIRLINE   = "#E4E4E7"; // zinc-200

// Orange — final urgency (distinct from amber Reminder, red security)
const ORANGE      = "#EA580C"; // orange-600 — dominant hero color
const ORANGE_DARK = "#9A3412"; // orange-900 — deep text on orange bg
const ORANGE_LT   = "#FFF7ED"; // orange-50  — subtle bg
const ORANGE_BD   = "#FED7AA"; // orange-200 — border
const ORANGE_MID  = "#FB923C"; // orange-400 — muted text on dark bg

// Green — data safety / cancel reassurance
const GREEN      = "#059669"; // emerald-600
const GREEN_LT   = "#ECFDF5"; // emerald-50
const GREEN_BD   = "#A7F3D0"; // emerald-200

// Red — "lose access" indicators in comparison table
const RED        = "#DC2626"; // red-600
const RED_LT     = "#FEF2F2"; // red-50

// Progress — fully filled
const PROGRESS_FILL = "#EA580C"; // orange — all used, none left

const uiFont = {
  label: "Inter",
  value: "'Inter', 'Segoe UI', Arial, sans-serif",
};

// ─── Component ────────────────────────────────────────────────────────────────
export function TrialEnding() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={uiFont}
      previewText="Today is your last day — keep your Emailki Pro access before midnight."
    >

      {/* ── 1. ORANGE HERO BANNER — "TODAY IS YOUR LAST DAY" ──────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={ORANGE}
        padding="44px 40px 16px 40px"
      >
        <Column>
          {/* Eyebrow */}
          <Heading
            headingType="h4"
            text="⚠  TRIAL ENDING TODAY"
            fontSize="11px"
            fontWeight={700}
            color={ORANGE_MID}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.12em"
          />
          {/* Main headline */}
          <Heading
            headingType="h1"
            text="Today is your last day"
            fontSize="34px"
            fontWeight={900}
            color={WHITE}
            textAlign="center"
            lineHeight="1.15"
          />
          {/* Subhead */}
          <Paragraph
            html={`Your <b style="color:${WHITE}">Emailki Pro</b> trial expires at <b style="color:${WHITE}">midnight tonight</b>. Upgrade now to keep everything — or your account moves to the free plan.`}
            fontSize="15px"
            color="#FED7AA"
            textAlign="center"
            lineHeight="165%"
          />
        </Column>
      </Row>

      {/* ── 2. PROGRESS BAR — fully filled, 0 remaining ────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={ORANGE}
        padding="20px 40px 8px 40px"
      >
        <Column>
          <Paragraph
            html={`<b style="color:${WHITE}">Day 14 of 14</b> <span style="color:${ORANGE_MID}"> — 0 days remaining</span>`}
            fontSize="13px"
            color={WHITE}
            textAlign="left"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* Fully filled progress bar — single wide column, orange on orange-dark */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={ORANGE}
        padding="4px 40px 40px 40px"
      >
        <Column
          backgroundColor={ORANGE_DARK}
          borderRadius="6px"
          padding="8px 0px"
        >
          <Paragraph
            html={`<span style="color:${ORANGE_MID}; font-size:11px; font-weight:700;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓  14 / 14 days used</span>`}
            fontSize="11px"
            color={ORANGE_MID}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* ── 3. HEADER — wordmark + "Last day" badge on white ──────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="24px 40px 20px 40px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="Emailki"
            fontSize="22px"
            fontWeight={900}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
            letterSpacing="0.02em"
          />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${ORANGE_LT}; color:${ORANGE}; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:0.05em;">LAST DAY</span>`}
            fontSize="11px"
            color={ORANGE}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 4. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 5. PRIMARY UPGRADE CTA — top of white card ─────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="32px 40px 8px 40px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="Keep your Pro access"
            fontSize="22px"
            fontWeight={800}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="One click to upgrade. Your projects, data, and team stay exactly as they are."
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* Dual CTA — primary indigo + secondary ghost */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="16px 40px 8px 40px"
      >
        {/* Primary — Upgrade */}
        <Column padding="0px 6px 0px 0px">
          <Button
            width="100%"
            href="#"
            backgroundColor={BRAND}
            color={WHITE}
            hoverBackgroundColor="#3730A3"
            fontSize="15px"
            fontWeight={700}
            padding="15px 16px"
            borderRadius="10px"
            textAlign="center"
          >
            Upgrade Now
          </Button>
        </Column>
        {/* Secondary — Continue Free */}
        <Column padding="0px 0px 0px 6px">
          <Button
            width="100%"
            href="#"
            backgroundColor={BG}
            color={MUTED}
            hoverBackgroundColor={HAIRLINE}
            fontSize="15px"
            fontWeight={600}
            padding="15px 16px"
            borderRadius="10px"
            textAlign="center"
          >
            Continue Free
          </Button>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="4px 40px 28px 40px"
      >
        <Column>
          <Paragraph
            html={`Questions about pricing? <a href="#" style="color:${LINK}; font-weight:600; text-decoration:none;">Talk to our team →</a>`}
            fontSize="13px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 6. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 7. PRO vs FREE COMPARISON ──────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="24px 40px 8px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="WHAT CHANGES TONIGHT"
            fontSize="11px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.08em"
          />
        </Column>
      </Row>

      {/* Column headers */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="8px 40px 4px 40px"
      >
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="8px 8px 0px 0px"
          padding="10px 16px"
        >
          <Heading
            headingType="h3"
            text="✦  Emailki Pro"
            fontSize="13px"
            fontWeight={700}
            color={BRAND}
            textAlign="center"
            lineHeight="1.3"
          />
          <Paragraph
            html="What you have now"
            fontSize="11px"
            color={BRAND}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
        <Column
          backgroundColor={BG}
          borderRadius="8px 8px 0px 0px"
          padding="10px 16px"
        >
          <Heading
            headingType="h3"
            text="Free plan"
            fontSize="13px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="center"
            lineHeight="1.3"
          />
          <Paragraph
            html="After midnight tonight"
            fontSize="11px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* Comparison row 1 — Projects */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column
          backgroundColor={BRAND_LT}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#C7D2FE" }}
        >
          <Paragraph html={`<b style="color:${BRAND}">✓</b>  Unlimited projects`} fontSize="13px" color={INK} lineHeight="145%" />
        </Column>
        <Column
          backgroundColor={BG}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: HAIRLINE }}
        >
          <Paragraph html={`<span style="color:${RED}">✕</span>  3 projects max`} fontSize="13px" color={MUTED} lineHeight="145%" />
        </Column>
      </Row>

      {/* Comparison row 2 — AI Tools */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column
          backgroundColor={BRAND_LT}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#C7D2FE" }}
        >
          <Paragraph html={`<b style="color:${BRAND}">✓</b>  All AI tools`} fontSize="13px" color={INK} lineHeight="145%" />
        </Column>
        <Column
          backgroundColor={BG}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: HAIRLINE }}
        >
          <Paragraph html={`<span style="color:${RED}">✕</span>  AI disabled`} fontSize="13px" color={MUTED} lineHeight="145%" />
        </Column>
      </Row>

      {/* Comparison row 3 — Team */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column
          backgroundColor={BRAND_LT}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#C7D2FE" }}
        >
          <Paragraph html={`<b style="color:${BRAND}">✓</b>  Unlimited team members`} fontSize="13px" color={INK} lineHeight="145%" />
        </Column>
        <Column
          backgroundColor={BG}
          padding="12px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: HAIRLINE }}
        >
          <Paragraph html={`<span style="color:${RED}">✕</span>  1 seat only`} fontSize="13px" color={MUTED} lineHeight="145%" />
        </Column>
      </Row>

      {/* Comparison row 4 — Support (no border — last row) */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px 0px 40px">
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="0px 0px 8px 0px"
          padding="12px 16px"
        >
          <Paragraph html={`<b style="color:${BRAND}">✓</b>  Priority 24/7 support`} fontSize="13px" color={INK} lineHeight="145%" />
        </Column>
        <Column
          backgroundColor={BG}
          borderRadius="0px 0px 0px 8px"
          padding="12px 16px"
        >
          <Paragraph html={`<span style="color:${RED}">✕</span>  Community only`} fontSize="13px" color={MUTED} lineHeight="145%" />
        </Column>
      </Row>

      {/* Spacer */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="16px 40px 0px 40px">
        <Column>
          <Paragraph html="" fontSize="1px" color={WHITE} lineHeight="1" />
        </Column>
      </Row>

      {/* ── 8. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 9. WHAT HAPPENS TONIGHT — 3-step timeline ──────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="24px 40px 8px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="WHAT HAPPENS TONIGHT"
            fontSize="11px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.08em"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={WHITE}
        padding="8px 32px 28px 32px"
      >
        {/* Step 1 */}
        <Column
          backgroundColor={ORANGE_LT}
          borderRadius="10px"
          padding="18px 14px"
          border={{
            borderBottomWidth: "2px",
            borderBottomStyle: "solid",
            borderBottomColor: ORANGE_BD,
          }}
        >
          <Heading
            headingType="h3"
            text="11:59 PM"
            fontSize="15px"
            fontWeight={800}
            color={ORANGE}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="<b>Trial ends</b>"
            fontSize="12px"
            color={INK}
            textAlign="center"
            lineHeight="145%"
          />
          <Paragraph
            html="Pro access expires at midnight."
            fontSize="11px"
            color={MUTED}
            textAlign="center"
            lineHeight="145%"
          />
        </Column>

        {/* Step 2 */}
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="10px"
          padding="18px 14px"
          border={{
            borderBottomWidth: "2px",
            borderBottomStyle: "solid",
            borderBottomColor: GREEN_BD,
          }}
        >
          <Heading
            headingType="h3"
            text="✓ Safe"
            fontSize="15px"
            fontWeight={800}
            color={GREEN}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="<b>Data preserved</b>"
            fontSize="12px"
            color={INK}
            textAlign="center"
            lineHeight="145%"
          />
          <Paragraph
            html="All your work stays intact, always."
            fontSize="11px"
            color={MUTED}
            textAlign="center"
            lineHeight="145%"
          />
        </Column>

        {/* Step 3 */}
        <Column
          backgroundColor={BG}
          borderRadius="10px"
          padding="18px 14px"
          border={{
            borderBottomWidth: "2px",
            borderBottomStyle: "solid",
            borderBottomColor: HAIRLINE,
          }}
        >
          <Heading
            headingType="h3"
            text="Free"
            fontSize="15px"
            fontWeight={800}
            color={SUBTLE}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="<b>Plan activates</b>"
            fontSize="12px"
            color={INK}
            textAlign="center"
            lineHeight="145%"
          />
          <Paragraph
            html="Limited features, no charge."
            fontSize="11px"
            color={MUTED}
            textAlign="center"
            lineHeight="145%"
          />
        </Column>
      </Row>

      {/* ── 10. DIVIDER ────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 11. PRICING — anchor right above final CTA ──────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="PRICING"
            fontSize="11px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.08em"
          />
        </Column>
      </Row>

      {/* Row 1 — Monthly */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column
          padding="13px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: HAIRLINE }}
        >
          <Paragraph html="Monthly billing" fontSize="13px" color={SUBTLE} lineHeight="140%" />
        </Column>
        <Column
          padding="13px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: HAIRLINE }}
        >
          <Heading
            headingType="h3"
            text="$29 / mo"
            fontSize="15px"
            fontWeight={700}
            color={INK}
            textAlign="right"
            lineHeight="1.2"
          />
        </Column>
      </Row>

      {/* Row 2 — Annual with savings */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Annual billing" fontSize="13px" color={SUBTLE} lineHeight="140%" />
        </Column>
        <Column padding="13px 0px">
          <Paragraph
            html={`<b>$19 / mo</b> <span style="color:${GREEN}; font-size:11px; font-weight:700;"> Save 34%</span>`}
            fontSize="13px"
            color={INK}
            textAlign="right"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* ── 12. GREEN CANCEL NOTICE — last window ────────────────────────────  */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="20px 40px 0px 40px"
      >
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="10px"
          padding="14px 20px"
          border={{
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: GREEN_BD,
          }}
        >
          <Paragraph
            html={`<b style="color:${GREEN}">✓ Still no charge if you don't upgrade</b>`}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={`Your trial ends tonight — you will not be billed unless you upgrade. <a href="#" style="color:${GREEN}; font-weight:600;">Manage your account →</a>`}
            fontSize="13px"
            color={MUTED}
            textAlign="left"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 13. FINAL ORANGE CTA — highest urgency, different from top CTA ──── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="20px 40px 32px 40px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={ORANGE}
            color={WHITE}
            hoverBackgroundColor="#C2410C"
            fontSize="16px"
            fontWeight={700}
            padding="17px 28px"
            borderRadius="10px"
            textAlign="center"
          >
            Upgrade Before Midnight →
          </Button>
        </Column>
      </Row>

      {/* ── 14. DIVIDER BEFORE FOOTER ──────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 15. SOCIAL ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="24px 40px 8px 40px">
        <Column>
          <Social
            icons={[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Github", url: "https://github.com" },
            ]}
            iconType="rounded"
            iconSize={28}
            spacing={10}
            align="center"
          />
        </Column>
      </Row>

      {/* ── 16. COPYRIGHT ──────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph
            html="© 2025 Emailki. All rights reserved."
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 17. FOOTER LINKS ───────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 40px 32px 40px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Terms of Service</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Manage Subscription</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

    </Email>
  );
}