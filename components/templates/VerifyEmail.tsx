import {
  Button,
  Column,
  ColumnLayouts,
  Divider,
  Email,
  Heading,
  Image,
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

const fontSans = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
};

const fontSerif = {
  label: "Merriweather",
  value: "'Merriweather', Georgia, 'Times New Roman', serif",
};

// Helper to wrap body copy in Merriweather with proper sizing
const body = (text: string, color = MUTED) =>
  `<span style="font-family:'Merriweather',Georgia,serif;font-size:15px;line-height:1.75;color:${color};">${text}</span>`;

// Helper for bold inline snippets inside serif body
const bold = (text: string) =>
  `<b style="font-family:'Oxanium',sans-serif;color:${INK};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  VERIFY EMAIL — Redesigned
// ═══════════════════════════════════════════════════════════════════════════════

export function VerifyEmail() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Your abc verification code — expires in 10 minutes."
    >

      {/* ── 1. TOP ACCENT BAR (4px amber strip) ─────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. BRAND HEADER (warm cream, centered wordmark) ─────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="36px 48px 20px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="abc"
            fontSize="30px"
            fontWeight={700}
            color={BRAND}
            textAlign="center"
            lineHeight="1.1"
            letterSpacing="0.08em"
          />
          <Paragraph
            html="EMAIL VERIFICATION"
            fontSize="11px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
            letterSpacing="0.16em"
          />
        </Column>
      </Row>

      {/* ── 3. SHIELD ICON (visual anchor, warm pill backdrop) ──────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="8px 48px 0px 48px"
      >
        <Column>
          <Image
            src={{ url: "/avatar.svg", autoWidth: false, maxWidth: "12%" }}
            altText="Security shield"
            textAlign="center"
          />
        </Column>
      </Row>

      {/* ── 4. HEADLINE + SUBHEAD (editorial hierarchy) ─────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 56px 10px 56px"
      >
        <Column>
          <Heading
            headingType="h1"
            text="Verify your email address"
            fontSize="28px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={body(
              `Hi there! Thanks for signing up. Please use the code below to verify your email address and activate your ${bold("abc")} account.`
            )}
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 5. OTP CODE BLOCK (embossed warm card) ──────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 56px 10px 56px"
      >
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="10px"
          padding="32px 28px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: HAIRLINE,
          }}
        >
          <Paragraph
            html="YOUR VERIFICATION CODE"
            fontSize="11px"
            color={BRAND}
            textAlign="center"
            lineHeight="150%"
            letterSpacing="0.14em"
          />
          <Heading
            headingType="h1"
            text="4 8 2 9 1 6"
            fontSize="52px"
            fontWeight={700}
            color={BRAND}
            textAlign="center"
            lineHeight="1.05"
            letterSpacing="0.14em"
          />
          <Paragraph
            html={body(
              `This code expires in ${bold("10 minutes")}.`
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 6. PRIMARY CTA (solid amber, confident) ─────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 56px 10px 56px"
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
            Verify My Email
          </Button>
        </Column>
      </Row>

      {/* ── 7. FALLBACK NOTE ────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="10px 56px 40px 56px"
      >
        <Column>
          <Paragraph
            html={body(
              `Button not working? <a href="#" style="color:${LINK};text-decoration:underline;text-underline-offset:3px;">Click here to verify directly</a>.`,
              SUBTLE
            )}
            fontSize="13px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 8. DIVIDER ──────────────────────────────────────────────────── */}
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

      {/* ── 9. REQUEST DETAILS LABEL ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
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

      {/* ── 10. SECURITY DETAIL ROWS (editorial spec-sheet style) ───────── */}
      {[
        { label: "REQUESTED AT",  value: "Jul 22, 2025 · 10:34 AM" },
        { label: "EXPIRES AT",    value: "Jul 22, 2025 · 10:44 AM" },
        { label: "DEVICE",        value: "Chrome on macOS" },
        { label: "LOCATION",      value: "Faisalabad, PK" },
      ].map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < 3
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
              idx < 3
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={`<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${INK};">${item.value}</b>`}
              fontSize="13px"
              color={INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 11. SECURITY NOTICE (left amber accent bar) ─────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 40px 48px"
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
            html={body(
              `${bold("Didn't request this?")} If you didn't create an abc account, you can safely ignore this email. If you're concerned, <a href="#" style="color:${LINK};text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">contact our support team</a>.`
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 12. FOOTER DIVIDER ──────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 13. SOCIAL ICONS ────────────────────────────────────────────── */}
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

      {/* ── 14. COPYRIGHT ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="4px 48px 4px 48px">
        <Column>
          <Paragraph
            html={body("© 2025 abc. All rights reserved.", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 15. FOOTER LINKS ────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.ThreeEqual} padding="4px 48px 40px 48px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK};text-decoration:none;font-family:'Oxanium',sans-serif;font-size:12px;">Privacy Policy</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK};text-decoration:none;font-family:'Oxanium',sans-serif;font-size:12px;">Terms of Service</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK};text-decoration:none;font-family:'Oxanium',sans-serif;font-size:12px;">Unsubscribe</a>`}
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
