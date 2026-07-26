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
const PRIMARY    = "#b45309";
const PRIMARY_LT = "#fef3c7";
const PRIMARY_DK = "#78350f";

const INK        = "#4a3b33";
const MUTED_FG   = "#78716c";
const SUBTLE     = "#a8a29e";
const LINK       = "#b45309";

const BG         = "#fdfbf7";
const CARD       = "#f8f4ee";
const MUTED      = "#f1e9da";
const ACCENT     = "#f2daba";
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc";
const SECONDARY  = "#e4c090";

// Slate — neutral "closed" tone
const SLATE      = "#475569";
const SLATE_LT   = "#f1f5f9";
const SLATE_BD   = "#cbd5e1";
const SLATE_DARK = "#1e293b";

// Green — preserved data / safe
const GREEN      = "#15803d";
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";

// Red — deleted data
const RED        = "#991b1b"; // --destructive
const RED_LT     = "#fef2f2";
const RED_BD     = "#fecaca";

const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function AccountDeleted() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Your abc account has been deleted. Your data has been removed — you have 30 days to reactivate."
    >

      {/* ── 1. SLATE TOP BAR — neutral, not alarming ────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SLATE} padding="10px 40px">
        <Column>
          <Paragraph
            html={`<b style="color:${WHITE}">Your abc account has been deleted.</b> <span style="color:#cbd5e1"> You have 30 days to reactivate if you change your mind.</span>`}
            fontSize="13px"
            color={WHITE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 2. HEADER ───────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="24px 40px 20px 40px">
        <Column padding="0px">
          <Heading headingType="h2" text="abc" fontSize="22px" fontWeight={900} color={INK} textAlign="left" lineHeight="1.2" letterSpacing="0.02em" fontFamily={sansFont} />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${SLATE_LT}; color:${SLATE}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.06em;">ACCOUNT DELETED</span>`}
            fontSize="11px"
            color={SLATE}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 3. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 4. HERO — split: status left · warm copy right ──────────────────── */}
      <Row layout={ColumnLayouts.TwoNarrowWide} backgroundColor={WHITE} padding="32px 40px 28px 40px">
        {/* Left — closed status */}
        <Column
          backgroundColor={SLATE_LT}
          borderRadius="6px"
          padding="24px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SLATE_BD }}
        >
          <Heading headingType="h1" text="✕" fontSize="32px" fontWeight={900} color={SLATE} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="Account<br/>Closed" fontSize="12px" color={SLATE} textAlign="center" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Aug 6, 2025" fontSize="11px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>

        {/* Right — respectful copy */}
        <Column padding="0px 0px 0px 20px">
          <Heading headingType="h1" text="Account closed" fontSize="22px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.25" fontFamily={serifFont} />
          <Paragraph
            html="Your abc account and all associated data have been permanently deleted as requested."
            fontSize="14px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<b style="color:${GREEN}">✓ Billing has been cancelled.</b> You will not be charged again.`}
            fontSize="14px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 5. STATUS STRIP — 3 cards ───────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={WHITE} padding="0px 40px 28px 40px">
        <Column
          backgroundColor={RED_LT}
          borderRadius="6px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: RED_BD }}
        >
          <Paragraph html="ACCOUNT" fontSize="10px" color={RED} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Deleted" fontSize="15px" fontWeight={700} color={RED} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="Aug 6, 2025" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="6px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: GREEN_BD }}
        >
          <Paragraph html="BILLING" fontSize="10px" color={GREEN} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Cancelled ✓" fontSize="15px" fontWeight={700} color={GREEN} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="No further charges" fontSize="10px" color={GREEN} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="6px"
          padding="14px 8px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Paragraph html="REACTIVATE" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="30 days" fontSize="15px" fontWeight={700} color={PRIMARY} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="Window open" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 6. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 7. WHAT WAS DELETED vs RETAINED ─────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="DATA STATUS" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Profile & content */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Profile &amp; content" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<span style="color:${RED}; font-weight:700;">✕ Permanently deleted</span>`} fontSize="13px" color={RED} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Projects & files */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Projects &amp; files" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<span style="color:${RED}; font-weight:700;">✕ Permanently deleted</span>`} fontSize="13px" color={RED} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Integrations */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Connected integrations" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<span style="color:${RED}; font-weight:700;">✕ Revoked</span>`} fontSize="13px" color={RED} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Billing records — retained (legal) */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Billing records" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<span style="color:${GREEN}; font-weight:700;">✓ Retained 7 years</span>`} fontSize="13px" color={GREEN} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Legal requirement" fontSize="11px" color={SUBTLE} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Email address — retained (legal) */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Email address" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
          <Paragraph html={`<span style="color:${GREEN}; font-weight:700;">✓ Retained</span>`} fontSize="13px" color={GREEN} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="For reactivation only" fontSize="11px" color={SUBTLE} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 8. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 9. REACTIVATION OFFER — warm amber card ──────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column
          backgroundColor={PRIMARY_DK}
          borderRadius="6px"
          padding="28px 28px 24px 28px"
        >
          <Heading headingType="h4" text="✦  CHANGED YOUR MIND?" fontSize="11px" fontWeight={700} color="#d97706" textAlign="center" lineHeight="1.3" letterSpacing="0.12em" fontFamily={sansFont} />
          <Heading headingType="h1" text="Reactivate within 30 days" fontSize="22px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={serifFont} />
          <Paragraph
            html="We hold your account details for 30 days after deletion. Reactivating within this window restores your subscription history and billing information."
            fontSize="14px"
            color="#fde68a"
            textAlign="center"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Button
            width="100%"
            href="#"
            backgroundColor={WHITE}
            color={PRIMARY}
            hoverBackgroundColor={PRIMARY_LT}
            fontSize="15px"
            fontWeight={700}
            padding="14px 28px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Reactivate My Account →
          </Button>
          <Paragraph
            html={`<span style="color:#fcd34d; font-size:11px;">Offer expires Sep 5, 2025 · No commitment required</span>`}
            fontSize="11px"
            color="#fcd34d"
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 10. OPTIONAL FEEDBACK ───────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="12px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`Mind sharing why you left? <a href="#" style="color:${LINK}; font-weight:600; text-decoration:none;">Take our 2-minute survey →</a> Your feedback helps us improve.`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 11. FOOTER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="20px 40px 4px 40px">
        <Column>
          <Paragraph html="abc Inc. · 123 Market St, San Francisco, CA 94105" fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph html="© 2025 abc. All rights reserved." fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Data Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Reactivate Account</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
      </Row>

    </Email>
  );
}