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

// ─── Track color map ─────────────────────────────────────────────────────────
const TRACKS = {
  Keynote:   { bg: "#EEF2FF", color: "#4338CA", dot: "#6C63FF" },
  Product:   { bg: "#ECFDF5", color: "#065F46", dot: "#059669" },
  Eng:       { bg: "#FFF7ED", color: "#92400E", dot: "#F59E0B" },
  Design:    { bg: "#FDF2F8", color: "#831843", dot: "#EC4899" },
  Growth:    { bg: "#EFF6FF", color: "#1E40AF", dot: "#3B82F6" },
  Break:     { bg: "#F9FAFB", color: "#6B7280", dot: "#D1D5DB" },
};

type TrackName = keyof typeof TRACKS;

// ─── Agenda slot helper ──────────────────────────────────────────────────────
// Renders a single agenda row: time | track pill | title + speaker
function agendaSlot(
  time: string,
  track: TrackName,
  title: string,
  speaker?: string,
  last = false,
) {
  const t = TRACKS[track] || TRACKS.Break;
  const HR = {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#E8E8F0",
  };
  const cell = { padding: "14px 0", border: last ? undefined : HR };

  return (
    <Row key={`${time}-${title}`} layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="0 48px">
      {/* Time */}
      <Column {...cell}>
        <Paragraph
          html={`<b style="color:${INK}">${time}</b>`}
          fontSize="12px"
          color={INK}
          lineHeight="140%"
        />
      </Column>

      {/* Track pill */}
      <Column {...cell}>
        <Paragraph
          html={`<span style="background:${t.bg};color:${t.color};padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:0.04em;">${track}</span>`}
          fontSize="11px"
        />
      </Column>

      {/* Title + Speaker */}
      <Column {...cell}>
        <Paragraph
          html={`<b style="color:${INK};font-size:13px;">${title}</b>`}
          fontSize="13px"
          color={INK}
          lineHeight="140%"
        />
        {speaker && (
          <Paragraph
            html={`<span style="color:${MUTED};font-size:12px;">${speaker}</span>`}
            fontSize="12px"
            color={MUTED}
            lineHeight="130%"
          />
        )}
      </Column>
    </Row>
  );
}

// ─── Day label helper ─────────────────────────────────────────────────────────
function dayLabel(date: string, label: string) {
  return (
    <Row key={label} layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="10px 48px">
      <Column>
        <Heading
          headingType="h4"
          fontSize="11px"
          fontWeight={700}
          color={BRAND}
          letterSpacing="0.08em"
          fontFamily={SANS}
        >
          {label} · {date}
        </Heading>
      </Column>
    </Row>
  );
}

function sectionDivider() {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
      <Column>
        <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
      </Column>
    </Row>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────
export function CustomerFeedback() {
  const trackRows = [
    Object.entries(TRACKS).slice(0, 3),
    Object.entries(TRACKS).slice(3, 6),
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="620px"
      contentAlign="center"
      fontFamily={SANS}
      textColor={INK}
      previewText="The Summit 2026 agenda is live — 40+ sessions across 3 days. Plan your schedule now."
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
            html={`<b style="background:#EEF2FF;color:#4338CA;padding:4px 12px;border-radius:20px;font-size:11px;letter-spacing:0.06em;">📋 AGENDA LIVE</b>`}
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
            SUMMIT 2026 · APRIL 24–26 · SAN FRANCISCO
          </Heading>
          <Heading headingType="h1" fontSize="34px" fontWeight={700} color={INK} lineHeight="116%" fontFamily={SANS}>
            The full agenda is live. Plan your three days.
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 28px 48px">
        <Column>
          <Paragraph
            html="40+ sessions across product, engineering, design, and growth. Build your personal schedule before the best workshops fill up."
            fontSize="15px" color={MUTED} lineHeight="162%"
          />
        </Column>
      </Row>

      {/* ── Build schedule CTA ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px 32px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/agenda"
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
            Build My Schedule →
          </Button>
        </Column>
      </Row>

      {/* ── Track legend ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px 8px 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="16px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            TRACKS
          </Heading>
        </Column>
      </Row>

      {trackRows.map((row, index) => (
        <Row
          key={`tracks-${index}`}
          layout={ColumnLayouts.ThreeEqual}
          backgroundColor={SURFACE}
          padding={index === 0 ? "8px 48px 8px 48px" : "0 48px 24px 48px"}
        >
          {row.map(([name, t]) => (
            <Column key={name}>
              <Paragraph
                html={`<span style="background:${t.bg};color:${t.color};padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">${name}</span>`}
                fontSize="11px"
              />
            </Column>
          ))}
        </Row>
      ))}

      {/* ───────────────────────── DAY 1 ────────────────────────── */}
      {dayLabel("Thursday, April 24", "DAY 1 — FOUNDATIONS")}

      {/* Column headers */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="10px 48px 4px 48px">
        <Column>
          <Paragraph html="TIME" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="TRACK" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="SESSION" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
      </Row>

      {agendaSlot("8:00 AM",  "Break",   "Registration & Badge Pickup", "")}
      {agendaSlot("9:00 AM",  "Keynote", "Opening Keynote: The Product Decade Ahead", "Sarah Kim, Vercel")}
      {agendaSlot("10:15 AM", "Product", "How Linear thinks about roadmaps", "Marcus Chen, Linear")}
      {agendaSlot("10:15 AM", "Eng",     "Shipping fast without breaking prod", "Aisha Patel, Stripe")}
      {agendaSlot("11:30 AM", "Break",   "Coffee & Networking", "")}
      {agendaSlot("12:00 PM", "Design",  "Design tokens in 2026", "James O'Brien, Figma")}
      {agendaSlot("1:00 PM",  "Break",   "Lunch", "")}
      {agendaSlot("2:00 PM",  "Growth",  "Zero to 50k devs without a sales team", "Layla Nguyen, Resend")}
      {agendaSlot("3:15 PM",  "Keynote", "What product teams get wrong about AI", "Rafael Wozniak, Anthropic")}
      {agendaSlot("4:30 PM",  "Break",   "Afternoon Break", "")}
      {agendaSlot("5:00 PM",  "Product", "Workshop: Prioritization under uncertainty", "Open enrolment", true)}

      {/* ───────────────────────── DAY 2 ────────────────────────── */}
      {dayLabel("Friday, April 25", "DAY 2 — BUILD")}

      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="10px 48px 4px 48px">
        <Column>
          <Paragraph html="TIME" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="TRACK" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="SESSION" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
      </Row>

      {agendaSlot("9:00 AM",  "Keynote", "Morning Keynote: Speed as culture", "Marcus Chen, Linear")}
      {agendaSlot("10:15 AM", "Eng",     "Async-first engineering orgs", "Priya Sharma, GitLab")}
      {agendaSlot("10:15 AM", "Design",  "Prototyping with AI tools", "Nina Kovač, Figma")}
      {agendaSlot("11:30 AM", "Break",   "Coffee & Networking", "")}
      {agendaSlot("12:00 PM", "Product", "The PM who codes — is it worth it?", "Panel")}
      {agendaSlot("1:00 PM",  "Break",   "Lunch + Sponsor Demos", "")}
      {agendaSlot("2:00 PM",  "Growth",  "From PLG to Enterprise: the hard parts", "Tom Becker, Loom")}
      {agendaSlot("3:15 PM",  "Eng",     "Observability that actually helps on-call", "Yuki Tanaka, Datadog")}
      {agendaSlot("5:30 PM",  "Break",   "Networking Dinner (ticket holders)", "", true)}

      {/* ───────────────────────── DAY 3 ────────────────────────── */}
      {dayLabel("Saturday, April 26", "DAY 3 — SHIP")}

      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={SURFACE} padding="10px 48px 4px 48px">
        <Column>
          <Paragraph html="TIME" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="TRACK" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          <Paragraph html="SESSION" fontSize="10px" color={MUTED} lineHeight="140%" />
        </Column>
      </Row>

      {agendaSlot("9:00 AM",  "Product", "Lessons from 1,000 customer interviews", "Elena Marsh, Intercom")}
      {agendaSlot("10:15 AM", "Design",  "The new design system stack", "James O'Brien, Figma")}
      {agendaSlot("10:15 AM", "Growth",  "Email in 2026: what still works", "Layla Nguyen, Resend")}
      {agendaSlot("11:30 AM", "Break",   "Coffee & Open Networking", "")}
      {agendaSlot("12:00 PM", "Keynote", "Closing Keynote: The next 10 years", "Sarah Kim, Vercel")}
      {agendaSlot("1:30 PM",  "Break",   "Lunch & Farewell", "", true)}

      {/* ── Bottom CTA ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 12px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/agenda"
            backgroundColor={SURFACE}
            color={BRAND}
            fontSize="14px"
            fontWeight={700}
            padding="14px 28px"
            borderRadius="10px"
            textAlign="center"
            fontFamily={SANS}
          >
            View Interactive Agenda + Add to Calendar
          </Button>
        </Column>
      </Row>

      {/* ── Highlight nudge ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="22px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK}">Workshop seats are limited.</b> Day 1 and Day 2 workshops are first-come, first-served. <a href="https://summit2026.example.com/workshops" style="color:${BRAND};font-weight:600;">Reserve yours now →</a>`}
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
              { text: "Full Agenda", href: "https://summit2026.example.com/agenda" },
              { text: "Speakers", href: "https://summit2026.example.com/speakers" },
              { text: "Workshops", href: "https://summit2026.example.com/workshops" },
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
