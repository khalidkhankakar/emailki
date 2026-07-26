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
const PRIMARY_LT = "#fef3c7"; // amber-100
const PRIMARY_DK = "#78350f"; // amber-900
const PRIMARY_MD = "#d97706"; // amber-600

const INK        = "#4a3b33"; // warm dark brown
const MUTED_FG   = "#78716c"; // warm gray
const SUBTLE     = "#a8a29e"; // stone-400
const LINK       = "#b45309";

const BG         = "#fdfbf7"; // warm off-white canvas
const CARD       = "#f8f4ee"; // warm cream
const MUTED      = "#f1e9da"; // warm linen
const ACCENT     = "#f2daba"; // warm peach
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc"; // warm sand
const SECONDARY  = "#e4c090"; // tan

// Green — receipt confirmed
const GREEN      = "#15803d";
const GREEN_DARK = "#14532d"; // banner bg
const GREEN_MID  = "#16a34a"; // emerald-600
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";
const GREEN_DIM  = "#86efac"; // green-300 — muted on dark

// Table
const TABLE_HEAD = "#fdf6ec"; // warm linen-tinted header

const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function Receipt() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Your abc receipt — $29.00 · Receipt #REC-2025-0082 · Aug 6, 2025."
    >

      {/* ── 1. GREEN CONFIRMED BANNER ────────────────────────────────────────── */}
      {/* Deep green hero — distinct from every other email in the palette set   */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={GREEN_DARK}
        padding="40px 40px 16px 40px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="PAYMENT RECEIPT"
            fontSize="11px"
            fontWeight={700}
            color={GREEN_MID}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.12em"
            fontFamily={sansFont}
          />
          {/* Large checkmark — always Heading */}
          <Heading
            headingType="h1"
            text="✓"
            fontSize="52px"
            fontWeight={900}
            color={GREEN_LT}
            textAlign="center"
            lineHeight="1.1"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h2"
            text="$29.00 received"
            fontSize="30px"
            fontWeight={700}
            color={WHITE}
            textAlign="center"
            lineHeight="1.15"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Thank you — your payment has been confirmed and this is your official receipt."
            fontSize="14px"
            color={GREEN_DIM}
            textAlign="center"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 2. DATE + METHOD STRIP — still on green banner ──────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={GREEN_DARK}
        padding="16px 40px 36px 40px"
      >
        <Column
          backgroundColor="#166534"
          borderRadius="6px"
          padding="12px 16px"
        >
          <Paragraph html="DATE" fontSize="10px" color={GREEN_DIM} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Aug 6, 2025" fontSize="14px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
        </Column>
        <Column
          backgroundColor="#166534"
          borderRadius="6px"
          padding="12px 16px"
        >
          <Paragraph html="METHOD" fontSize="10px" color={GREEN_DIM} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Visa •••• 4242" fontSize="14px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 3. HEADER — wordmark left · receipt badge right ─────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="24px 40px 20px 40px"
      >
        <Column padding="0px">
          <Heading
            headingType="h2"
            text="abc"
            fontSize="22px"
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
            html={`<span style="background:${GREEN_LT}; color:${GREEN}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.05em;">✓ CONFIRMED</span>`}
            fontSize="11px"
            color={GREEN}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 4. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 5. RECEIPT META — number + issued to ────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="24px 40px 20px 40px"
      >
        <Column>
          <Paragraph html="RECEIPT NO." fontSize="10px" color={SUBTLE} textAlign="left" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="#REC-2025-0082" fontSize="15px" fontWeight={700} color={INK} textAlign="left" lineHeight="1.3" fontFamily={sansFont} />
          <Paragraph html="Aug 6, 2025" fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html="ISSUED TO" fontSize="10px" color={SUBTLE} textAlign="right" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Khalid Khan" fontSize="15px" fontWeight={700} color={INK} textAlign="right" lineHeight="1.3" fontFamily={sansFont} />
          <Paragraph html="khalid@example.com" fontSize="12px" color={MUTED_FG} textAlign="right" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 6. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 7. LINE ITEMS TABLE HEADER ──────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={TABLE_HEAD}
        padding="0px 40px"
      >
        <Column padding="10px 0px">
          <Paragraph html="DESCRIPTION" fontSize="10px" color={SUBTLE} textAlign="left" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
        </Column>
        <Column padding="10px 0px">
          <Paragraph html="AMOUNT" fontSize="10px" color={SUBTLE} textAlign="right" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 8. LINE ITEM 1 — Subscription ───────────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="0px 40px">
        <Column
          padding="16px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html={`<b style="color:${INK}">abc Pro — Monthly Subscription</b>`} fontSize="14px" color={INK} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
          <Paragraph html="Billing period: Aug 6 – Sep 5, 2025" fontSize="12px" color={SUBTLE} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="1 × $29.00" fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
        </Column>
        <Column
          padding="16px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html="<b>$29.00</b>" fontSize="14px" color={INK} textAlign="right" lineHeight="145%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 9. LINE ITEM 2 — Discount / credit ──────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="0px 40px">
        <Column
          padding="16px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html={`<b style="color:${INK}">Loyalty discount</b>`} fontSize="14px" color={INK} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
          <Paragraph html="Applied at checkout" fontSize="12px" color={SUBTLE} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
        </Column>
        <Column
          padding="16px 0px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}
        >
          <Paragraph html={`<b style="color:${GREEN}">–$0.00</b>`} fontSize="14px" color={GREEN} textAlign="right" lineHeight="145%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 10. SUMMARY — subtotal, tax, total ──────────────────────────────── */}

      {/* Subtotal */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="12px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Subtotal" fontSize="13px" color={MUTED_FG} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="12px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="$29.00" fontSize="13px" color={MUTED_FG} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Tax */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="12px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Tax (0%)" fontSize="13px" color={MUTED_FG} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="12px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="$0.00" fontSize="13px" color={MUTED_FG} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Total — warm amber bg block */}
      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={PRIMARY_LT}
        padding="0px 40px"
      >
        <Column padding="18px 0px">
          <Heading
            headingType="h3"
            text="Total Paid"
            fontSize="15px"
            fontWeight={700}
            color={PRIMARY}
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="18px 0px">
          <Heading
            headingType="h2"
            text="$29.00"
            fontSize="28px"
            fontWeight={900}
            color={PRIMARY}
            textAlign="right"
            lineHeight="1.1"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 11. TRANSACTION DETAILS ─────────────────────────────────────────── */}

      {/* Transaction ID */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Transaction ID" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>txn_3Pq8…mX92</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Payment method */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Payment method" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Visa •••• 4242</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Status */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Status" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
          <Paragraph html={`<b style="color:${GREEN}">✓ Paid</b>`} fontSize="13px" color={GREEN} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 12. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 13. PRIMARY CTA — PDF download ──────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={PRIMARY}
            color={WHITE}
            hoverBackgroundColor={PRIMARY_DK}
            fontSize="15px"
            fontWeight={700}
            padding="15px 28px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            ↓ Download PDF Receipt
          </Button>
        </Column>
      </Row>

      {/* Secondary links */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="8px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:600; text-decoration:none; font-size:13px;">View all receipts →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:600; text-decoration:none; font-size:13px;">Billing settings →</a>`}
            fontSize="13px"
            color={LINK}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 14. WARM DIVIDER ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── 15. NEXT CHARGE REMINDER ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="20px 40px 4px 40px">
        <Column>
          <Heading headingType="h4" text="NEXT BILLING" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Next charge */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Next charge" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Sep 6, 2025</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Amount */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Amount" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>$29.00</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Card */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Card on file" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
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

      {/* Spacer */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="20px 40px 0px 40px">
        <Column><Paragraph html="" fontSize="1px" color={WHITE} lineHeight="1" /></Column>
      </Row>

      {/* ── 16. FOOTER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="20px 40px 8px 40px">
        <Column>
          <Paragraph
            html="abc Inc. · 123 Market St, San Francisco, CA 94105 · billing@abc.app"
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph
            html="© 2025 abc. All rights reserved. This receipt was generated automatically."
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Billing Portal</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Contact Billing</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>

    </Email>
  );
}