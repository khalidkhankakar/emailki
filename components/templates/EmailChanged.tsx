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
const MUTED      = "#f1e9da";
const ACCENT     = "#f2daba";
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc";

// Amber — security alert (not red — this could be intentional)
const AMBER      = "#d97706";
const AMBER_DARK = "#92400e";
const AMBER_LT   = "#fffbeb";
const AMBER_BD   = "#fde68a";
const AMBER_TEXT = "#fde68a"; // on dark bg

// Red — "this wasn't me" urgency
const RED        = "#991b1b"; // --destructive
const RED_LT     = "#fef2f2";
const RED_BD     = "#fecaca";

// Green — "this was me" reassurance
const GREEN      = "#15803d";
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";

const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function EmailChanged() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Security notice — the email address on your Emailki account was changed on Aug 6, 2025."
    >

      {/* ── 1. AMBER SECURITY BAR ────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={AMBER_DARK} padding="10px 40px">
        <Column>
          <Paragraph
            html={`<b style="color:${WHITE}">⚠ Security notice</b> <span style="color:${AMBER_TEXT}"> — the email address on your Emailki account was changed.</span>`}
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
          <Heading headingType="h2" text="Emailki" fontSize="22px" fontWeight={900} color={INK} textAlign="left" lineHeight="1.2" letterSpacing="0.02em" fontFamily={sansFont} />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${AMBER_LT}; color:${AMBER}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.06em;">⚠ EMAIL CHANGED</span>`}
            fontSize="11px"
            color={AMBER}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 3. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 4. HERO — headline + change summary ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="32px 40px 8px 40px">
        <Column>
          <Heading
            headingType="h1"
            text="Your email address was changed"
            fontSize="24px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.25"
            fontFamily={serifFont}
          />
          <Paragraph
            html="The email address associated with your Emailki account was updated on <b>Aug 6, 2025 at 10:22 AM</b>. Review the details below."
            fontSize="15px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 5. OLD → NEW EMAIL DISPLAY ──────────────────────────────────────── */}
      {/* Visual flow: old (crossed/muted) → arrow → new (highlighted) */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={WHITE} padding="16px 40px 24px 40px">
        {/* Old email */}
        <Column
          backgroundColor={MUTED}
          borderRadius="6px"
          padding="16px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html="PREVIOUS" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Paragraph
            html={`<span style="color:${SUBTLE}; text-decoration:line-through; font-size:12px; font-weight:600;">old@example.com</span>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="145%"
            fontFamily={sansFont}
          />
        </Column>

        {/* Arrow */}
        <Column padding="16px 4px">
          <Heading headingType="h2" text="→" fontSize="28px" fontWeight={400} color={AMBER} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
        </Column>

        {/* New email */}
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="6px"
          padding="16px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: AMBER_BD }}
        >
          <Paragraph html="NEW" fontSize="10px" color={PRIMARY} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Paragraph
            html={`<b style="color:${PRIMARY}; font-size:12px;">new@example.com</b>`}
            fontSize="12px"
            color={PRIMARY}
            textAlign="center"
            lineHeight="145%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 6. CHANGE DETAILS ───────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px 4px 40px">
        <Column>
          <Heading headingType="h4" text="CHANGE DETAILS" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Changed on */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Changed on" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Aug 6, 2025 · 10:22 AM</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Device */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Device" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Chrome on macOS</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Location */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Location" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>KSF, PK</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* IP */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="IP address" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
          <Paragraph html="<b>203.0.113.42</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 7. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 8. THE CRITICAL DUAL PATH — "Was this me?" ──────────────────────── */}
      {/* The most important UX in this entire email — two clear user paths       */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Heading
            headingType="h2"
            text="Was this you?"
            fontSize="20px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Choose the option that applies to you."
            fontSize="14px"
            color={MUTED_FG}
            textAlign="center"
            lineHeight="150%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="12px 40px 28px 40px">
        {/* "This was me" */}
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="6px"
          padding="20px 16px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: GREEN_BD }}
        >
          <Heading headingType="h3" text="✓ This was me" fontSize="14px" fontWeight={700} color={GREEN} textAlign="center" lineHeight="1.3" fontFamily={sansFont} />
          <Paragraph
            html="No action needed. Your email has been updated successfully."
            fontSize="12px"
            color={MUTED_FG}
            textAlign="center"
            lineHeight="150%"
            fontFamily={serifFont}
          />
          <Button
            width="100%"
            href="#"
            backgroundColor={GREEN}
            color={WHITE}
            fontSize="13px"
            fontWeight={700}
            padding="11px 12px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            All good, thanks
          </Button>
        </Column>

        {/* "This wasn't me" */}
        <Column
          backgroundColor={RED_LT}
          borderRadius="6px"
          padding="20px 16px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: RED_BD }}
        >
          <Heading headingType="h3" text="⚠ This wasn't me" fontSize="14px" fontWeight={700} color={RED} textAlign="center" lineHeight="1.3" fontFamily={sansFont} />
          <Paragraph
            html="Act immediately — secure your account and revert this change."
            fontSize="12px"
            color={MUTED_FG}
            textAlign="center"
            lineHeight="150%"
            fontFamily={serifFont}
          />
          <Button
            width="100%"
            href="#"
            backgroundColor={RED}
            color={WHITE}
            fontSize="13px"
            fontWeight={700}
            padding="11px 12px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Secure My Account
          </Button>
        </Column>
      </Row>

      {/* ── 9. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 10. SECURITY STEPS — if it wasn't them ──────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="IF THIS WASN'T YOU — ACT NOW" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={WHITE} padding="8px 32px 28px 32px">
        <Column backgroundColor={MUTED} borderRadius="6px" padding="16px 14px">
          <Heading headingType="h3" text="01" fontSize="20px" fontWeight={800} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>Secure your account</b>" fontSize="12px" color={INK} textAlign="center" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Use the red button above immediately." fontSize="11px" color={MUTED_FG} textAlign="center" lineHeight="145%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="16px 14px">
          <Heading headingType="h3" text="02" fontSize="20px" fontWeight={800} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>Change your password</b>" fontSize="12px" color={INK} textAlign="center" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="Use a strong, unique password." fontSize="11px" color={MUTED_FG} textAlign="center" lineHeight="145%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="16px 14px">
          <Heading headingType="h3" text="03" fontSize="20px" fontWeight={800} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="<b>Contact support</b>" fontSize="12px" color={INK} textAlign="center" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="We'll help you recover access." fontSize="11px" color={MUTED_FG} textAlign="center" lineHeight="145%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* ── 11. RED ALERT BOX — bottom of email ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px 32px 40px">
        <Column
          backgroundColor={RED_LT}
          borderRadius="6px"
          padding="16px 20px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: RED_BD }}
        >
          <Paragraph
            html={`<b style="color:${RED}">⚠ If you didn't make this change, your account may be compromised.</b>`}
            fontSize="13px"
            color={RED}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Paragraph
            html={`Contact our security team immediately at <a href="mailto:security@Emailki.app" style="color:${RED}; font-weight:600;">security@Emailki.app</a> or use the button above. We respond within 1 hour.`}
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
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="20px 40px 4px 40px">
        <Column>
          <Paragraph html="© 2025 Emailki. All rights reserved." fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Account Settings</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="mailto:security@Emailki.app" style="color:${LINK}; text-decoration:none;">Security Team</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
      </Row>

    </Email>
  );
}