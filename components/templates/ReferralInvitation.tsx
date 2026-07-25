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

const SANS = {
  label: "Inter",
  value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
};

const HR = {
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: HAIRLINE,
};

// ─── Attendee preview card (2-col grid) ──────────────────────────────────────
function attendeeCard(
  initials: string,
  name: string,
  role: string,
  company: string,
  color = BRAND,
) {
  return (
    <Column key={name} backgroundColor="#F8F8FC" borderRadius="8px" padding="14px">
      <Heading
        headingType="h3"
        fontSize="20px"
        fontWeight={700}
        color={color}
        textAlign="center"
        fontFamily={SANS}
      >
        {initials}
      </Heading>
      <Paragraph
        html={`<b style="color:${INK};font-size:13px;">${name}</b>`}
        textAlign="center" fontSize="13px"
      />
      <Paragraph
        html={`${role}<br/><span style="color:${MUTED}">${company}</span>`}
        fontSize="12px"
        color={BRAND}
        textAlign="center"
        lineHeight="145%"
      />
    </Column>
  );
}

// ─── Conversation starter card ────────────────────────────────────────────────
function starterCard(number: string, prompt: string, accentColor: string) {
  const cell = { padding: "0 8px 0 0", border: undefined };
  return (
    <Row key={number} layout={ColumnLayouts.TwoNarrowWide} backgroundColor={SURFACE} padding="0 48px">
      <Column padding="14px 12px 14px 0">
        <Heading
          headingType="h3"
          fontSize="22px"
          fontWeight={700}
          color={accentColor}
          textAlign="center"
          fontFamily={SANS}
        >
          {number}
        </Heading>
      </Column>
      <Column padding="14px 0">
        <Paragraph
          html={`<i style="color:${INK};">"${prompt}"</i>`}
          fontSize="14px"
          color={INK}
          lineHeight="155%"
        />
      </Column>
    </Row>
  );
}

// ─── Session detail row ───────────────────────────────────────────────────────
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

// ─── Main Template ────────────────────────────────────────────────────────────
export function ReferralInvitation() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="620px"
      contentAlign="center"
      fontFamily={SANS}
      textColor={INK}
      previewText="Summit Networking Dinner — Thursday, April 24 · See who's attending and what to expect."
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
            html={`<b style="background:#FDF4FF;color:#7E22CE;padding:4px 12px;border-radius:20px;font-size:11px;letter-spacing:0.06em;">🤝 NETWORKING</b>`}
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
            SUMMIT 2026 · NETWORKING DINNER
          </Heading>
          <Heading headingType="h1" fontSize="32px" fontWeight={700} color={INK} lineHeight="116%" fontFamily={SANS}>
            The people are the agenda. Come ready to talk.
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 28px 48px">
        <Column>
          <Paragraph
            html="We don't do awkward mixers. Summit's networking dinner is structured around small rotating tables, curated seating, and actual conversation starters — no name-badge-scanning, no pitch decks."
            fontSize="15px" color={MUTED} lineHeight="162%"
          />
        </Column>
      </Row>

      {/* ── RSVP CTA ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px 32px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/networking/rsvp"
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
            RSVP for the Networking Dinner →
          </Button>
        </Column>
      </Row>

      {/* ── Hairline ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── Session details label ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            SESSION DETAILS
          </Heading>
        </Column>
      </Row>

      {detailRow("Date", "Thursday, April 24, 2026")}
      {detailRow("Time", "5:30 PM – 9:00 PM")}
      {detailRow("Location", "The Interval at Long Now, Fort Mason")}
      {detailRow("Format", "Curated dinner · Rotating tables")}
      {detailRow("Table size", "6 people per table · 3 rotations")}
      {detailRow("Dress code", "Smart casual")}
      {detailRow("Included in", "All ticket types", true)}

      {/* ── Attendee previews ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            WHO'S ATTENDING
          </Heading>
          <Paragraph
            html="152 attendees have RSVP'd. A preview of who's in the room:"
            fontSize="13px" color={MUTED} lineHeight="150%"
          />
        </Column>
      </Row>

      {/* Row 1 of attendee cards */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="12px 48px 8px 48px">
        {attendeeCard("SK", "Sarah Kim", "Head of Product", "Vercel", BRAND)}
        {attendeeCard("MC", "Marcus Chen", "Co-founder", "Linear", "#059669")}
        {attendeeCard("AP", "Aisha Patel", "VP Engineering", "Stripe", "#F59E0B")}
      </Row>

      {/* Row 2 of attendee cards */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="8px 48px 16px 48px">
        {attendeeCard("LN", "Layla Nguyen", "Founder", "Resend", "#0EA5E9")}
        {attendeeCard("JO", "James O'Brien", "Design Lead", "Figma", "#EC4899")}
        {attendeeCard("+147", "More", "across Product,", "Eng & Design", MUTED)}
      </Row>

      {/* ── Conversation starters label ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            CONVERSATION STARTERS
          </Heading>
          <Paragraph
            html="Every table gets a card with these prompts — no icebreaker games, just good questions."
            fontSize="13px" color={MUTED} lineHeight="150%"
          />
        </Column>
      </Row>

      {starterCard("01", "What's the most important thing you've shipped in the last 12 months — and what did it teach you?", BRAND)}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {starterCard("02", "What's a widely-held belief in your industry that you think is wrong?", "#059669")}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {starterCard("03", "If you could only use one metric to track the health of your team, what would it be?", "#F59E0B")}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {starterCard("04", "What's something you changed your mind about in the last year?", "#EC4899")}

      {/* ── Evening schedule ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            EVENING SCHEDULE
          </Heading>
        </Column>
      </Row>

      {detailRow("5:30 PM", "Arrival & welcome drinks")}
      {detailRow("6:00 PM", "Table rotation 1 — dinner service begins")}
      {detailRow("7:00 PM", "Table rotation 2")}
      {detailRow("8:00 PM", "Table rotation 3 + dessert")}
      {detailRow("8:45 PM", "Open floor — stay as long as you like", true)}

      {/* ── Bottom CTA repeat ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 32px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/networking/rsvp"
            backgroundColor={SURFACE}
            color={BRAND}
            fontSize="14px"
            fontWeight={700}
            padding="14px 28px"
            borderRadius="10px"
            textAlign="center"
            fontFamily={SANS}
          >
            RSVP Now — Seats filling up
          </Button>
        </Column>
      </Row>

      {/* ── Location note ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="22px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK}">Getting there:</b> The Interval at Long Now is a 12-minute cab ride from Moscone Center. We'll share a shuttle schedule closer to the event. <a href="https://maps.google.com/?q=The+Interval+Fort+Mason" style="color:${BRAND};font-weight:600;">View on map →</a>`}
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
              { text: "RSVP", href: "https://summit2026.example.com/networking/rsvp" },
              { text: "Full Agenda", href: "https://summit2026.example.com/agenda" },
              { text: "Venue Info", href: "https://summit2026.example.com/venue" },
              { text: "Unsubscribe", href: "https://summit2026.example.com/unsubscribe" },
            ]}
            layout="horizontal" separator="·" align="center"
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BG} padding="0 48px 32px 48px">
        <Column>
          <Paragraph
            html="Summit Events Inc. · 535 Mission St, San Francisco, CA 94105<br/>You received this because you're registered for Summit 2026."
            fontSize="11px" color={MUTED} textAlign="center" lineHeight="160%"
          />
        </Column>
      </Row>
    </Email>
  );
}
