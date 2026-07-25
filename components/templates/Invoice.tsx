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

// Slate — formal/neutral invoice tone (warm earth equivalents)
const SLATE     = "#57534e"; // warm gray-600 — invoice label
const SLATE_LT  = "#f5f5f4"; // warm gray-50  — subtle bg
const SLATE_BD  = "#d6d3d1"; // warm gray-200 — border

// Green — PAID status
const GREEN     = "#166534"; // green-800  — paid text
const GREEN_LT  = "#f0fdf4"; // green-50   — paid bg
const GREEN_BD  = "#bbf7d0"; // green-200  — paid border

// Table header bg
const TABLE_HEAD = "#fafaf9"; // warm gray-50 — subtle column header

const fontSans = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
};

const fontSerif = {
  label: "Merriweather",
  value: "'Merriweather', Georgia, 'Times New Roman', serif",
};

// ─── Helper Types ──────────────────────────────────────────────────────────────
interface LineItem {
  description: string;
  detail: string;
  amount: string;
  credit?: boolean;
}

interface DetailRow {
  label: string;
  value: string;
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
//  INVOICE — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function Invoice() {
  const metaRows: DetailRow[] = [
    { label: "Invoice No.", value: "#INV-2025-0081" },
    { label: "Issue Date",  value: "Aug 6, 2025" },
    { label: "Paid On",     value: "Aug 6, 2025" },
  ];

  const lineItems: LineItem[] = [
    {
      description: "abc Pro — Monthly Subscription",
      detail: "Billing period: Aug 6 – Sep 5, 2025",
      amount: "$29.00",
    },
    {
      description: "Trial credit applied",
      detail: "14-day trial conversion discount",
      amount: "–$0.00",
      credit: true,
    },
  ];

  const summaryRows: DetailRow[] = [
    { label: "Subtotal", value: "$29.00" },
    { label: "Tax (0%)", value: "$0.00" },
  ];

  const paymentRows: DetailRow[] = [
    { label: "Payment method", value: "Visa •••• 4242" },
    { label: "Transaction ID", value: "txn_3Pq8…mX92" },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Invoice #INV-2025-0081 from abc — $29.00 · Aug 6, 2025."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. HEADER — logo left · INVOICE label right ─────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="32px 48px 20px 48px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="abc"
            fontSize="28px"
            fontWeight={700}
            color={BRAND}
            textAlign="left"
            lineHeight="1.1"
            letterSpacing="0.06em"
          />
          <Paragraph
            html={serifBody("abc Inc. · San Francisco, CA", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="150%"
          />
        </Column>
        <Column padding="0px">
          <Heading
            headingType="h1"
            text="INVOICE"
            fontSize="32px"
            fontWeight={700}
            color={SLATE}
            textAlign="right"
            lineHeight="1.1"
            letterSpacing="0.04em"
          />
          <Paragraph
            html={`<span style="background:${GREEN_LT};color:${GREEN};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">✓ PAID</span>`}
            fontSize="11px"
            color={GREEN}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 3. DIVIDER (thicker amber for invoice authority) ────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="0px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="2px"
            borderTopColor={BRAND}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 4. INVOICE META — 3 columns ─────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="24px 48px 8px 48px"
      >
        {metaRows.map((item) => (
          <Column key={item.label}>
            <Paragraph
              html={item.label}
              fontSize="10px"
              color={SUBTLE}
              textAlign="left"
              lineHeight="140%"
              letterSpacing="0.10em"
            />
            <Heading
              headingType="h3"
              text={item.value}
              fontSize="14px"
              fontWeight={700}
              color={item.label === "Paid On" ? GREEN : INK}
              textAlign="left"
              lineHeight="1.3"
            />
          </Column>
        ))}
      </Row>

      {/* ── 5. DIVIDER ──────────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="8px 48px 0px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 6. BILL TO / FROM — side by side ────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={CARD}
        padding="24px 48px 24px 48px"
      >
        {/* Bill To */}
        <Column>
          <Paragraph
            html="BILL TO"
            fontSize="10px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Paragraph
            html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">Khalid Khan</b>`}
            fontSize="14px"
            color={INK}
            textAlign="left"
            lineHeight="160%"
          />
          <Paragraph
            html={serifBody("khalid@example.com", MUTED)}
            fontSize="13px"
            color={MUTED}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody("Faisalabad, Pakistan", MUTED)}
            fontSize="13px"
            color={MUTED}
            textAlign="left"
            lineHeight="150%"
          />
        </Column>
        {/* From */}
        <Column>
          <Paragraph
            html="FROM"
            fontSize="10px"
            color={SUBTLE}
            textAlign="right"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Paragraph
            html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">abc Inc.</b>`}
            fontSize="14px"
            color={INK}
            textAlign="right"
            lineHeight="160%"
          />
          <Paragraph
            html={serifBody("billing@abc.app", MUTED)}
            fontSize="13px"
            color={MUTED}
            textAlign="right"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody("San Francisco, CA 94105", MUTED)}
            fontSize="13px"
            color={MUTED}
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

      {/* ── 8. LINE ITEMS TABLE HEADER ────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={TABLE_HEAD}
        padding="0px 48px"
      >
        <Column padding="10px 0px">
          <Paragraph html="" fontSize="1px" color={TABLE_HEAD} lineHeight="1" />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={TABLE_HEAD}
        padding="0px 48px"
      >
        <Column padding="10px 0px">
          <Paragraph
            html="DESCRIPTION"
            fontSize="10px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
        </Column>
        <Column padding="10px 0px">
          <Paragraph
            html="AMOUNT"
            fontSize="10px"
            color={SUBTLE}
            textAlign="right"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
        </Column>
      </Row>

      {/* ── 9. LINE ITEMS ───────────────────────────────────────────────────── */}
      {lineItems.map((item, idx) => (
        <Row
          key={item.description}
          layout={ColumnLayouts.TwoWideNarrow}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="18px 0px"
            border={{
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">${item.description}</b>`}
              fontSize="14px"
              color={INK}
              textAlign="left"
              lineHeight="145%"
            />
            <Paragraph
              html={serifBody(item.detail, SUBTLE)}
              fontSize="12px"
              color={SUBTLE}
              textAlign="left"
              lineHeight="145%"
            />
          </Column>
          <Column
            padding="18px 0px"
            border={{
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<b style="font-family:'Merriweather',serif;font-size:14px;color:${item.credit ? GREEN : INK};">${item.amount}</b>`}
              fontSize="14px"
              color={item.credit ? GREEN : INK}
              textAlign="right"
              lineHeight="145%"
            />
          </Column>
        </Row>
      ))}

      {/* ── 10. SUMMARY ROWS — subtotal, tax ────────────────────────────────── */}
      {summaryRows.map((item) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoWideNarrow}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={{
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={item.label}
              fontSize="13px"
              color={SUBTLE}
              textAlign="left"
              lineHeight="140%"
            />
          </Column>
          <Column
            padding="14px 0px"
            border={{
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: HAIRLINE,
            }}
          >
            <Paragraph
              html={`<span style="font-family:'Merriweather',serif;font-size:13px;color:${MUTED};">${item.value}</span>`}
              fontSize="13px"
              color={MUTED}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* Total — full-width warm cream bg block */}
      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={BRAND_LT}
        padding="0px 48px"
      >
        <Column padding="18px 0px">
          <Heading
            headingType="h3"
            text="Total Paid"
            fontSize="15px"
            fontWeight={700}
            color={BRAND}
            textAlign="left"
            lineHeight="1.2"
          />
        </Column>
        <Column padding="18px 0px">
          <Heading
            headingType="h2"
            text="$29.00"
            fontSize="28px"
            fontWeight={700}
            color={BRAND}
            textAlign="right"
            lineHeight="1.1"
          />
        </Column>
      </Row>

      {/* ── 11. PAYMENT METHOD ROWS ─────────────────────────────────────────── */}
      {paymentRows.map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < paymentRows.length - 1
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
              idx < paymentRows.length - 1
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

      {/* ── 12. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 13. DOWNLOAD CTA + PORTAL LINK ──────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 10px 48px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={BRAND}
            color="#ffffff"
            hoverBackgroundColor={BRAND_DK}
            fontSize="15px"
            fontWeight={700}
            padding="15px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            ↓ Download PDF Invoice
          </Button>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="10px 48px 32px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `View all invoices and billing history in your <a href="#" style="color:${LINK};font-weight:600;text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">billing portal →</a>`,
              SUBTLE
            )}
            fontSize="13px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
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

      {/* ── 15. MINIMAL FOOTER — no social for B2B invoice ──────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="24px 48px 8px 48px">
        <Column>
          <Paragraph
            html={serifBody("abc Inc. · 123 Market St, San Francisco, CA 94105 · billing@abc.app", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 48px 4px 48px">
        <Column>
          <Paragraph
            html={serifBody("© 2025 abc. All rights reserved. This invoice was generated automatically.", SUBTLE)}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 48px 32px 48px">
        {["Privacy Policy", "Billing Portal", "Contact Billing"].map((link) => (
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