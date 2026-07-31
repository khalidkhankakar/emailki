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
const PRIMARY    = "#b45309"; // amber-700  — brand accent
const PRIMARY_LT = "#fef3c7"; // amber-100  — soft tint
const PRIMARY_DK = "#78350f"; // amber-900  — dark banner bg
const PRIMARY_MD = "#d97706"; // amber-600  — secondary accent / eyebrow

const INK        = "#4a3b33"; // foreground — warm dark brown
const MUTED_FG   = "#78716c"; // muted-foreground — warm gray
const SUBTLE     = "#a8a29e"; // stone-400 — de-emphasised
const LINK       = "#b45309"; // same as primary

const BG         = "#fdfbf7"; // background — warm off-white canvas
const CARD       = "#f8f4ee"; // card — warm cream
const MUTED      = "#f1e9da"; // muted — warm linen
const ACCENT     = "#f2daba"; // accent — warm peach
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc"; // border — warm sand
const SECONDARY  = "#e4c090"; // secondary — tan

// Destructive
const DESTR      = "#991b1b"; // destructive — deep red
const DESTR_LT   = "#fef2f2"; // red-50
const DESTR_BD   = "#fecaca"; // red-200

// Success green (kept neutral — not in the palette but needed semantically)
const GREEN      = "#15803d"; // green-700
const GREEN_LT   = "#f0fdf4"; // green-50
const GREEN_BD   = "#bbf7d0"; // green-200

// Font
const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function RenewalReminder() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Your Emailki subscription renews in 7 days — $29.00 on Aug 13, 2025."
    >

      {/* ── 1. WARM AMBER TOP STRIPE ────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PRIMARY}
        padding="10px 40px"
      >
        <Column>
          <Paragraph
            html={`<b style="color:${WHITE}">Renewal reminder</b> <span style="color:#fde68a"> — your Emailki Pro subscription renews in 7 days.</span>`}
            fontSize="13px"
            color={WHITE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 2. HEADER — wordmark left · renewal badge right ─────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="28px 40px 20px 40px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="Emailki"
            fontSize="24px"
            fontWeight={900}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
            letterSpacing="0.02em"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${PRIMARY_LT}; color:${PRIMARY}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.06em;">RENEWAL IN 7 DAYS</span>`}
            fontSize="11px"
            color={PRIMARY}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 3. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 4. HERO — dark amber banner with renewal info ───────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PRIMARY_DK}
        padding="36px 40px 16px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="✦  UPCOMING RENEWAL"
            fontSize="11px"
            fontWeight={700}
            color={PRIMARY_MD}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.12em"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h1"
            text="Your plan renews Aug 13"
            fontSize="28px"
            fontWeight={700}
            color={WHITE}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          <Paragraph
            html="We'll automatically charge your card on file. No action needed if everything looks good."
            fontSize="14px"
            color="#fde68a"
            textAlign="center"
            lineHeight="165%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 5. RENEWAL STAT STRIP — 3 cards on banner ───────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PRIMARY_DK}
        padding="16px 40px 36px 40px"
      >
        {/* Renews in */}
        <Column
          backgroundColor="#92400e"
          borderRadius="6px"
          padding="14px 8px"
        >
          <Paragraph html="RENEWS IN" fontSize="10px" color="#fcd34d" textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="7 days" fontSize="18px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
        </Column>

        {/* Amount */}
        <Column padding="10px 12px">
          <Heading headingType="h2" text="$29.00" fontSize="36px" fontWeight={900} color={WHITE} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="per month" fontSize="11px" color="#fde68a" textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* Date */}
        <Column
          backgroundColor="#92400e"
          borderRadius="6px"
          padding="14px 8px"
        >
          <Paragraph html="RENEWS ON" fontSize="10px" color="#fcd34d" textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Aug 13" fontSize="18px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="2025" fontSize="11px" color="#fde68a" textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 6. RENEWAL DETAILS SECTION ──────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="RENEWAL DETAILS"
            fontSize="10px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.10em"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Plan */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Plan" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<b style="color:${PRIMARY}">Emailki Pro — Monthly</b>`} fontSize="13px" color={PRIMARY} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Renewal date */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Renewal date" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Aug 13, 2025</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Amount */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Amount" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Heading headingType="h3" text="$29.00" fontSize="15px" fontWeight={700} color={INK} textAlign="right" lineHeight="1.2" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Card on file */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Card on file" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph
            html={`<b>Visa •••• 4242</b>  <a href="#" style="color:${LINK}; font-size:11px; font-weight:600; text-decoration:none;">Update</a>`}
            fontSize="13px"
            color={INK}
            textAlign="right"
            lineHeight="140%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Billing cycle */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Billing cycle" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
          <Paragraph html="<b>Monthly</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 7. DUAL CTA — "looks good" + "update card" ──────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="24px 40px 8px 40px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="Everything look right?"
            fontSize="18px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          <Paragraph
            html="If your card is up to date, you're all set — no action needed. We'll send a receipt after the charge."
            fontSize="14px"
            color={MUTED_FG}
            textAlign="center"
            lineHeight="165%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="12px 40px 8px 40px">
        {/* Primary — Update card */}
        <Column padding="0px 6px 0px 0px">
          <Button
            width="100%"
            href="#"
            backgroundColor={PRIMARY}
            color={WHITE}
            hoverBackgroundColor={PRIMARY_DK}
            fontSize="14px"
            fontWeight={700}
            padding="14px 12px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Update Payment Method
          </Button>
        </Column>
        {/* Secondary — Manage subscription */}
        <Column padding="0px 0px 0px 6px">
          <Button
            width="100%"
            href="#"
            backgroundColor={MUTED}
            color={MUTED_FG}
            hoverBackgroundColor={ACCENT}
            fontSize="14px"
            fontWeight={600}
            padding="14px 12px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Manage Subscription
          </Button>
        </Column>
      </Row>

      {/* Cancel link */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="4px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`Don't want to renew? <a href="#" style="color:${MUTED_FG}; text-decoration:underline; font-size:12px;">Cancel before Aug 13 →</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 8. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 9. SWITCH TO ANNUAL NUDGE ────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={WHITE}
        padding="20px 40px 28px 40px"
      >
        {/* Left — savings badge */}
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="6px"
          padding="16px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h3" text="Save" fontSize="14px" fontWeight={700} color={PRIMARY} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Heading headingType="h2" text="34%" fontSize="28px" fontWeight={900} color={PRIMARY} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="annually" fontSize="11px" color={PRIMARY} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* Right — switch copy */}
        <Column padding="0px 0px 0px 20px">
          <Heading
            headingType="h3"
            text="Switch to annual billing"
            fontSize="15px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.3"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Pay $19/mo billed yearly instead of $29/mo. That's $120 back in your pocket every year."
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="160%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:700; text-decoration:none;">Switch to annual →</a>`}
            fontSize="13px"
            color={PRIMARY}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 10. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 11. NO-CHARGE REASSURANCE ────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="20px 40px 32px 40px">
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="6px"
          padding="14px 20px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: GREEN_BD }}
        >
          <Paragraph
            html={`<b style="color:${GREEN}">✓ Cancel before Aug 13 and you won't be charged — ever.</b>`}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Paragraph
            html={`You have full control. <a href="#" style="color:${GREEN}; font-weight:600;">Manage your subscription →</a>`}
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 12. FOOTER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>
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
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph html="© 2025 Emailki. All rights reserved." fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 40px 32px 40px">
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Billing Settings</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Cancel Subscription</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>

    </Email>
  );
}