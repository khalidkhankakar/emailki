import {
  Email,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Button,
  Divider,
  Menu,
} from "@unlayer/react-elements";

// ─── Shared Design Tokens ────────────────────────────────────────────────────
const BRAND    = "#6C63FF";
const BRAND_DK = "#4F46E5";
const INK      = "#1A1A2E";
const MUTED    = "#6B7280";
const SURFACE  = "#FFFFFF";
const BG       = "#F4F4F8";
const HAIRLINE = "#E8E8F0";
const TICKET_BG = "#1A1A2E";   // dark ticket stub feel
const TICKET_ACCENT = "#6C63FF";

const SANS = {
  label: "Inter",
  value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
};

const HR = {
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: HAIRLINE,
};

function detailRow(label: string, value: string, last = false) {
  const cell = { padding: "12px 0", border: last ? undefined : HR };
  return (
    <Row key={label} layout={ColumnLayouts.TwoEqual} backgroundColor={SURFACE} padding="0 48px">
      <Column {...cell}>
        <Paragraph html={label} fontSize="13px" color={MUTED} lineHeight="140%" />
      </Column>
      <Column {...cell}>
        <Paragraph html={`<b>${value}</b>`} fontSize="13px" color={INK} textAlign="right" lineHeight="140%" />
      </Column>
    </Row>
  );
}

export function Changelog() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="620px"
      contentAlign="center"
      fontFamily={SANS}
      textColor={INK}
      previewText="Your Summit 2026 ticket is ready — save it before the event."
    >

      {/* ── Top spacer ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BG} padding="32px 0 0 0">
        <Column />
      </Row>

      {/* ── Brand header ── */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={SURFACE} padding="22px 48px 18px 48px">
        <Column>
          <Heading headingType="h2" fontSize="20px" fontWeight={700} color={BRAND} textAlign="left" fontFamily={SANS}>
            Summit
          </Heading>
          <Paragraph html="by Unlayer Events" fontSize="11px" color={MUTED} lineHeight="100%" />
        </Column>
        <Column>
          <Paragraph
            html={`<b style="background:#EEF2FF;color:#4338CA;padding:4px 12px;border-radius:20px;font-size:11px;letter-spacing:0.06em;">🎟 TICKET READY</b>`}
            textAlign="right" fontSize="11px"
          />
        </Column>
      </Row>

      {/* ── Accent bar ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column padding="4px 0px" />
      </Row>

      {/* ── Hero ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="40px 48px 8px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={BRAND} letterSpacing="0.10em" fontFamily={SANS}>
            YOUR TICKET IS READY
          </Heading>
          <Heading headingType="h1" fontSize="32px" fontWeight={700} color={INK} lineHeight="116%" fontFamily={SANS}>
            Summit 2026 — General Admission
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 32px 48px">
        <Column>
          <Paragraph
            html="Save or print your ticket below. You'll need it at check-in on April 24."
            fontSize="15px" color={MUTED} lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── TICKET STUB (dark card) ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={TICKET_BG} padding="0px">
        <Column padding="0px">

          {/* Ticket top: event name band */}
          <Row layout={ColumnLayouts.OneColumn} backgroundColor={TICKET_ACCENT} padding="14px 48px">
            <Column>
              <Heading headingType="h3" fontSize="13px" fontWeight={700} color="#FFFFFF" letterSpacing="0.08em" textAlign="center" fontFamily={SANS}>
                SUMMIT 2026 · MOSCONE CENTER WEST · SAN FRANCISCO
              </Heading>
            </Column>
          </Row>

          {/* Ticket body: 2-col — attendee info + barcode area */}
          <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={TICKET_BG} padding="28px 48px 12px 48px">
            <Column>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:10px;letter-spacing:0.08em;font-weight:700;">ATTENDEE</span>`} fontSize="10px" />
              <Heading headingType="h2" fontSize="22px" fontWeight={700} color="#FFFFFF" fontFamily={SANS}>
                Jordan Rivera
              </Heading>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:11px;">jordan@example.com</span>`} fontSize="11px" />
            </Column>
            <Column>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:10px;letter-spacing:0.08em;font-weight:700;">TICKET TYPE</span>`} fontSize="10px" />
              <Heading headingType="h3" fontSize="16px" fontWeight={700} color="#FFFFFF" fontFamily={SANS}>
                General Admission
              </Heading>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:11px;">Full 3-day access</span>`} fontSize="11px" />
            </Column>
          </Row>

          {/* Ticket mid: 3-col event facts */}
          <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={TICKET_BG} padding="4px 48px 20px 48px">
            <Column>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:10px;letter-spacing:0.08em;font-weight:700;">DATES</span>`} fontSize="10px" />
              <Paragraph html={`<span style="color:#FFFFFF;font-size:13px;font-weight:600;">Apr 24–26</span>`} fontSize="13px" />
            </Column>
            <Column>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:10px;letter-spacing:0.08em;font-weight:700;">CHECK-IN</span>`} fontSize="10px" />
              <Paragraph html={`<span style="color:#FFFFFF;font-size:13px;font-weight:600;">8:00 AM</span>`} fontSize="13px" />
            </Column>
            <Column>
              <Paragraph html={`<span style="color:#A5B4FC;font-size:10px;letter-spacing:0.08em;font-weight:700;">DOOR</span>`} fontSize="10px" />
              <Paragraph html={`<span style="color:#FFFFFF;font-size:13px;font-weight:600;">Hall B · Gate 3</span>`} fontSize="13px" />
            </Column>
          </Row>

          {/* Dashed tear line */}
          <Row layout={ColumnLayouts.OneColumn} backgroundColor={TICKET_BG} padding="0 48px">
            <Column>
              <Divider
                borderTopWidth="1px"
                borderTopColor="#3B3B5C"
                borderTopStyle="dashed"
              />
            </Column>
          </Row>

          {/* Barcode area */}
          <Row layout={ColumnLayouts.OneColumn} backgroundColor={TICKET_BG} padding="24px 48px 12px 48px">
            <Column>
              {/* Barcode visual via monospace characters */}
              <Paragraph
                html={`<span style="font-family:monospace;font-size:32px;letter-spacing:2px;color:#FFFFFF;display:block;text-align:center;line-height:1;">
                  ▐█▌▐▌█▐▌▌▐█▌
                </span>`}
                textAlign="center" fontSize="32px"
              />
              <Heading headingType="h3" fontSize="14px" fontWeight={700} color="#FFFFFF" textAlign="center" letterSpacing="0.14em" fontFamily={SANS}>
                SMT-2026-08842
              </Heading>
              <Paragraph
                html={`<span style="color:#6B7280;font-size:11px;">Scan at check-in · One-time use only</span>`}
                textAlign="center" fontSize="11px"
              />
            </Column>
          </Row>

          {/* Bottom padding on dark stub */}
          <Row layout={ColumnLayouts.OneColumn} backgroundColor={TICKET_BG} padding="16px 0 0 0">
            <Column />
          </Row>

        </Column>
      </Row>

      {/* ── Download CTA ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="28px 48px 12px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/ticket/SMT-2026-08842/download"
            backgroundColor={BRAND}
            hoverBackgroundColor={BRAND_DK}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="10px"
            textAlign="center"
            fontFamily={SANS}
          >
            Download Ticket (PDF)
          </Button>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px 28px 48px">
        <Column>
          <Button
            width="100%"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Summit+2026"
            backgroundColor={SURFACE}
            color={BRAND}
            fontSize="14px"
            fontWeight={700}
            padding="14px 28px"
            borderRadius="10px"
            textAlign="center"
            fontFamily={SANS}
          >
            + Add to Calendar
          </Button>
        </Column>
      </Row>

      {/* ── Hairline ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── Order summary label ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            ORDER SUMMARY
          </Heading>
        </Column>
      </Row>

      {detailRow("Order #", "SMT-2026-08842")}
      {detailRow("Ticket", "General Admission × 1")}
      {detailRow("Subtotal", "$299.00")}
      {detailRow("Discount", '<span style="color:#059669">–$0.00</span>')}
      {detailRow("Tax", "$26.91")}
      {detailRow("Total Charged", "<b style='font-size:15px'>$325.91</b>", true)}

      {/* ── Help note ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="22px 48px">
        <Column>
          <Paragraph
            html={`Need to transfer or cancel your ticket? Visit your <a href="https://summit2026.example.com/my-registration" style="color:${BRAND};font-weight:600;">registration page</a> or reply to this email — changes are free up to 14 days before the event.`}
            fontSize="13px" color={MUTED} textAlign="center" lineHeight="162%"
          />
        </Column>
      </Row>

      {/* ── Footer ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BG} padding="8px 0 0 0">
        <Column />
      </Row>
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BG} padding="20px 48px 8px 48px">
        <Column>
          <Menu
            items={[
              { text: "My Ticket", href: "https://summit2026.example.com/my-registration" },
              { text: "Agenda", href: "https://summit2026.example.com/agenda" },
              { text: "Venue Map", href: "https://summit2026.example.com/venue" },
              { text: "Unsubscribe", href: "https://summit2026.example.com/unsubscribe" },
            ]}
            layout="horizontal" separator="·" align="center"
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BG} padding="0 48px 32px 48px">
        <Column>
          <Paragraph
            html="Summit Events Inc. · 535 Mission St, San Francisco, CA 94105<br/>This is your official ticket confirmation. Please keep for your records."
            fontSize="11px" color={MUTED} textAlign="center" lineHeight="160%"
          />
        </Column>
      </Row>

    </Email>
  );
}
