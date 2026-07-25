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

// ─── Capacity badge helper ────────────────────────────────────────────────────
// Returns inline HTML for a status pill
function capacityBadge(filled: number, total: number) {
  const pct = filled / total;
  if (pct >= 1)   return `<span style="background:#FEF2F2;color:#991B1B;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">FULL · Waitlist open</span>`;
  if (pct >= 0.8) return `<span style="background:#FFF7ED;color:#92400E;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">Only ${total - filled} seats left</span>`;
  return `<span style="background:#ECFDF5;color:#065F46;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">${total - filled} of ${total} seats open</span>`;
}

// ─── Workshop card helper ─────────────────────────────────────────────────────
function workshopCard(
  time: string,
  room: string,
  title: string,
  instructor: string,
  company: string,
  description: string,
  tags: string,
  filled: number,
  total: number,
  isRegistered = false,
) {
  const pct = filled / total;
  const barColor = pct >= 1 ? "#EF4444" : pct >= 0.8 ? "#F59E0B" : "#059669";
  const barWidth = Math.min(pct, 1) * 100;
  const btnLabel = pct >= 1 ? "Join Waitlist" : isRegistered ? "✓ Seat Reserved" : "Reserve Seat";
  const btnBg    = pct >= 1 ? MUTED : isRegistered ? "#059669" : BRAND;

  return (
    <>
      {/* Workshop header row */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={SURFACE} padding="20px 48px 4px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK};font-size:12px;">${time}</b> · <span style="color:${MUTED};font-size:12px;">${room}</span>`}
            fontSize="12px" color={INK} lineHeight="140%"
          />
        </Column>
        <Column>
          <Paragraph
            html={capacityBadge(filled, total)}
            textAlign="right" fontSize="11px"
          />
        </Column>
      </Row>

      {/* Title + instructor */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 4px 48px">
        <Column>
          <Heading headingType="h3" fontSize="17px" fontWeight={700} color={INK} fontFamily={SANS}>
            {title}
          </Heading>
          <Paragraph
            html={`<b style="color:${BRAND}">${instructor}</b> <span style="color:${MUTED};">— ${company}</span>`}
            fontSize="13px" color={MUTED} lineHeight="140%"
          />
        </Column>
      </Row>

      {/* Description */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 10px 48px">
        <Column>
          <Paragraph html={description} fontSize="13px" color={MUTED} lineHeight="158%" />
        </Column>
      </Row>

      {/* Tags + capacity bar row */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={SURFACE} padding="4px 48px 4px 48px">
        <Column>
          <Paragraph html={tags} fontSize="11px" color={MUTED} lineHeight="140%" />
        </Column>
        <Column>
          {/* Capacity bar: fake progress via two inline spans */}
          <Paragraph
            html={`<span style="display:block;height:4px;border-radius:2px;background:#E8E8F0;overflow:hidden;margin-top:6px;"><span style="display:block;height:4px;width:${barWidth}%;background:${barColor};border-radius:2px;"></span></span>`}
            fontSize="4px"
          />
        </Column>
      </Row>

      {/* CTA */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="8px 48px 16px 48px">
        <Column>
          <Button
            href={`https://summit2026.example.com/workshops/${title.toLowerCase().replace(/\s+/g, "-")}`}
            backgroundColor={btnBg}
            color="#FFFFFF"
            fontSize="13px"
            fontWeight={700}
            padding="10px 20px"
            borderRadius="8px"
            textAlign="left"
            fontFamily={SANS}
          >
            {btnLabel}
          </Button>
        </Column>
      </Row>

      {/* Hairline divider */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>
    </>
  );
}

// ─── Day block label ──────────────────────────────────────────────────────────
function dayBlock(label: string) {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="10px 48px">
      <Column>
        <Heading headingType="h4" fontSize="11px" fontWeight={700} color={BRAND} letterSpacing="0.08em" fontFamily={SANS}>
          {label}
        </Heading>
      </Column>
    </Row>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────
export function ReferralReward() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="620px"
      contentAlign="center"
      fontFamily={SANS}
      textColor={INK}
      previewText="Workshop seats are filling fast — reserve yours before Summit 2026."
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
            html={`<b style="background:#EEF2FF;color:#4338CA;padding:4px 12px;border-radius:20px;font-size:11px;letter-spacing:0.06em;">🛠 WORKSHOPS</b>`}
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
            SUMMIT 2026 · 12 WORKSHOPS ACROSS 3 DAYS
          </Heading>
          <Heading headingType="h1" fontSize="32px" fontWeight={700} color={INK} lineHeight="116%" fontFamily={SANS}>
            Small rooms, hands-on work, real takeaways.
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 20px 48px">
        <Column>
          <Paragraph
            html="Every workshop runs with 20–30 people max. You'll leave with something you can open on your laptop the next morning."
            fontSize="15px" color={MUTED} lineHeight="162%"
          />
        </Column>
      </Row>

      {/* ── Stats strip ── */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor="#F0EEFF" padding="20px 48px">
        <Column>
          <Heading headingType="h2" fontSize="28px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>12</Heading>
          <Paragraph html="Workshops" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
        <Column>
          <Heading headingType="h2" fontSize="28px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>3</Heading>
          <Paragraph html="Hours each" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
        <Column>
          <Heading headingType="h2" fontSize="28px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>30</Heading>
          <Paragraph html="Seats max per session" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
      </Row>

      {/* ────────── DAY 1 ────────── */}
      {dayBlock("DAY 1 — THURSDAY, APRIL 24")}

      {workshopCard(
        "2:00 PM", "Room 101",
        "Prioritization Under Uncertainty",
        "Marcus Chen", "Linear",
        "A live exercise in ruthless roadmap prioritization. Bring your real backlog — we'll work through a real-world cut together using the frameworks Linear uses internally.",
        `<span style="background:#EEF2FF;color:#4338CA;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Product</span> <span style="background:#F0EEFF;color:#6C63FF;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Intermediate</span>`,
        24, 30, true
      )}

      {workshopCard(
        "2:00 PM", "Room 102",
        "AI-Assisted Prototyping in 60 Minutes",
        "Nina Kovač", "Figma",
        "Build a fully interactive prototype from a rough brief using AI tooling inside Figma. No prior experience with AI features needed.",
        `<span style="background:#FDF2F8;color:#831843;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Design</span> <span style="background:#F0EEFF;color:#6C63FF;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">All levels</span>`,
        30, 30
      )}

      {workshopCard(
        "5:30 PM", "Room 103",
        "Incident Response Drills",
        "Aisha Patel", "Stripe",
        "A tabletop simulation of a real production incident. Teams compete to diagnose and resolve a cascading failure. Facilitated debrief included.",
        `<span style="background:#FFF7ED;color:#92400E;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Engineering</span> <span style="background:#F0EEFF;color:#6C63FF;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Advanced</span>`,
        18, 30
      )}

      {/* ────────── DAY 2 ────────── */}
      {dayBlock("DAY 2 — FRIDAY, APRIL 25")}

      {workshopCard(
        "10:15 AM", "Room 201",
        "Design System Audit in Real Time",
        "James O'Brien", "Figma",
        "Bring your company's design system. We'll audit it live against modern token architecture and leave you with a concrete migration plan.",
        `<span style="background:#FDF2F8;color:#831843;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Design</span> <span style="background:#FFF7ED;color:#92400E;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Teams</span>`,
        27, 30
      )}

      {workshopCard(
        "2:00 PM", "Room 202",
        "From Zero to 1000 Customers: Growth Loops That Actually Work",
        "Layla Nguyen", "Resend",
        "Map out your product's real growth loop and identify the one lever that moves it. Worksheets provided. Small-group critique in the final 45 minutes.",
        `<span style="background:#EFF6FF;color:#1E40AF;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Growth</span> <span style="background:#F0EEFF;color:#6C63FF;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Founder-friendly</span>`,
        11, 30
      )}

      {/* ────────── DAY 3 ────────── */}
      {dayBlock("DAY 3 — SATURDAY, APRIL 26")}

      {workshopCard(
        "10:15 AM", "Room 301",
        "Building with LLMs: From Prototype to Production",
        "Rafael Wozniak", "Anthropic",
        "Hands-on with real LLM APIs. Walk through evaluation, prompt engineering, and guardrails. Participants leave with a working demo and a checklist for production readiness.",
        `<span style="background:#FFF7ED;color:#92400E;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Engineering</span> <span style="background:#ECFDF5;color:#065F46;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;">Product</span>`,
        20, 30
      )}

      {/* ── Note ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="22px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK}">Already registered for Summit?</b> You can add workshops to your ticket at no extra cost. Each attendee may book up to 2 workshops. <a href="https://summit2026.example.com/workshops" style="color:${BRAND};font-weight:600;">Manage your schedule →</a>`}
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
              { text: "All Workshops", href: "https://summit2026.example.com/workshops" },
              { text: "Agenda", href: "https://summit2026.example.com/agenda" },
              { text: "My Schedule", href: "https://summit2026.example.com/my-schedule" },
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
