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

// Green — payment success
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
//  PAYMENT SUCCESSFUL — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function PaymentSuccessful() {
  const receiptRows: DetailRow[] = [
    { label: "Invoice",        value: "#INV-2025-0082" },
    { label: "Plan",           value: "Emailki Pro — Monthly", highlight: true },
    { label: "Billing period", value: "Aug 6 – Sep 5, 2025" },
    { label: "Subtotal",       value: "$29.00" },
    { label: "Tax",            value: "$0.00" },
  ];

  const billingRows: DetailRow[] = [
    { label: "Next charge",    value: "Sep 6, 2025" },
    { label: "Amount",         value: "$29.00" },
    { label: "Card on file",   value: "Visa •••• 4242" },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Payment confirmed — your Emailki Pro receipt for $29.00 is inside."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. GREEN SUCCESS BANNER ─────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={GREEN_DK}
        padding="44px 48px 16px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="PAYMENT SUCCESSFUL"
            fontSize="11px"
            fontWeight={600}
            color={GREEN_MID}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
          <Heading
            headingType="h1"
            text="✓"
            fontSize="60px"
            fontWeight={700}
            color="#f0fdf4"
            textAlign="center"
            lineHeight="1.0"
          />
          <Heading
            headingType="h2"
            text="$29.00 paid"
            fontSize="36px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.1"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              "Your payment was processed successfully. A receipt has been sent to your email on file.",
              "#86efac"
            )}
            fontSize="14px"
            color="#86efac"
            textAlign="center"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 3. DATE + METHOD STRIP — on green banner ────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={GREEN_DK}
        padding="16px 48px 44px 48px"
      >
        <Column
          backgroundColor="#14532d"
          borderRadius="8px"
          padding="14px 16px"
        >
          <Paragraph
            html="DATE"
            fontSize="10px"
            color="#86efac"
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Aug 6, 2025"
            fontSize="15px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.2"
          />
        </Column>
        <Column
          backgroundColor="#14532d"
          borderRadius="8px"
          padding="14px 16px"
        >
          <Paragraph
            html="METHOD"
            fontSize="10px"
            color="#86efac"
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Visa •••• 4242"
            fontSize="15px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.2"
          />
        </Column>
      </Row>

      {/* ── 4. HEADER ─────────────────────────────────────────────────────────── */}
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
            html={`<span style="background:${GREEN_LT};color:${GREEN};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">✓ PAYMENT CONFIRMED</span>`}
            fontSize="11px"
            color={GREEN}
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

      {/* ── 6. RECEIPT — section label ──────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="RECEIPT"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
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

      {/* Total — larger weight */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="0px 48px"
      >
        <Column padding="16px 0px">
          <Paragraph
            html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">Total paid</b>`}
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

      {/* Download link */}
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

      {/* ── 8. NEXT BILLING — section label ─────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="NEXT BILLING"
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
              html={valueSerif(item.value)}
              fontSize="13px"
              color={INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 9. GO TO WORKSPACE CTA ──────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 32px 48px"
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
            padding="15px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            Go to My Workspace
          </Button>
        </Column>
      </Row>

      {/* ── 10. DIVIDER BEFORE FOOTER ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 11. SOCIAL ICONS ────────────────────────────────────────────────── */}
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

      {/* ── 12. COPYRIGHT ───────────────────────────────────────────────────── */}
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

      {/* ── 13. FOOTER LINKS ────────────────────────────────────────────────── */}
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