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

// ─── Speaker Card Helper ─────────────────────────────────────────────────────
// Each speaker gets a 2-col row: avatar initial block (left) + bio (right)
function speakerCard(
  initials: string,
  name: string,
  role: string,
  company: string,
  topic: string,
  accentColor = BRAND,
) {
  return (
    <Row key={name} layout={ColumnLayouts.TwoNarrowWide} backgroundColor={SURFACE} padding="16px 48px">
      <Column padding="0 16px 0 0">
        {/* Avatar circle rendered as a styled heading */}
        <Heading
          headingType="h2"
          fontSize="26px"
          fontWeight={700}
          color={accentColor}
          textAlign="center"
          fontFamily={SANS}
        >
          {initials}
        </Heading>
        <Paragraph
          html={`<span style="display:block;width:52px;height:3px;background:${accentColor};border-radius:2px;margin:0 auto;"></span>`}
          textAlign="center"
          fontSize="10px"
        />
      </Column>
      <Column>
        <Heading headingType="h3" fontSize="16px" fontWeight={700} color={INK} fontFamily={SANS}>
          {name}
        </Heading>
        <Paragraph
          html={`<b style="color:${accentColor}">${role}</b> · ${company}`}
          fontSize="13px"
          color={MUTED}
          lineHeight="140%"
        />
        <Paragraph
          html={`"${topic}"`}
          fontSize="13px"
          color={MUTED}
          lineHeight="155%"
        />
      </Column>
    </Row>
  );
}

function speakerDivider() {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
      <Column>
        <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
      </Column>
    </Row>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────
export function NPSSurvey() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="620px"
      contentAlign="center"
      fontFamily={SANS}
      textColor={INK}
      previewText="Meet the speakers shaping Summit 2026 — 12 world-class voices confirmed."
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
            html={`<b style="background:#EEF2FF;color:#4338CA;padding:4px 12px;border-radius:20px;font-size:11px;letter-spacing:0.06em;">★ SPEAKERS</b>`}
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
            SUMMIT 2026 · APRIL 24–26
          </Heading>
          <Heading headingType="h1" fontSize="34px" fontWeight={700} color={INK} lineHeight="116%" fontFamily={SANS}>
            Meet the speakers who will change how you think.
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="4px 48px 32px 48px">
        <Column>
          <Paragraph
            html="We've spent months curating a lineup of practitioners — not pundits. Every speaker at Summit 2026 has shipped real products and learned hard lessons in public."
            fontSize="15px" color={MUTED} lineHeight="162%"
          />
        </Column>
      </Row>

      {/* ── Headline stat: speaker count ── */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor="#F0EEFF" padding="24px 48px">
        <Column>
          <Heading headingType="h2" fontSize="30px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>
            12
          </Heading>
          <Paragraph html="Confirmed speakers" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
        <Column>
          <Heading headingType="h2" fontSize="30px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>
            8
          </Heading>
          <Paragraph html="Keynote slots" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
        <Column>
          <Heading headingType="h2" fontSize="30px" fontWeight={700} color={BRAND} textAlign="center" fontFamily={SANS}>
            3
          </Heading>
          <Paragraph html="Days of talks" fontSize="12px" color={MUTED} textAlign="center" lineHeight="140%" />
        </Column>
      </Row>

      {/* ── Speakers label ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="28px 48px 4px 48px">
        <Column>
          <Heading headingType="h4" fontSize="11px" fontWeight={700} color={MUTED} letterSpacing="0.08em" fontFamily={SANS}>
            FEATURED SPEAKERS
          </Heading>
        </Column>
      </Row>

      {/* ── Speaker cards ── */}
      {speakerCard("SK", "Sarah Kim", "Head of Product", "Vercel",
        "Building for the post-AI web — what's still hard and why it matters", BRAND)}
      {speakerDivider()}
      {speakerCard("MC", "Marcus Chen", "Co-founder & CEO", "Linear",
        "Speed as a company value: how opinionated software wins", "#059669")}
      {speakerDivider()}
      {speakerCard("AP", "Aisha Patel", "VP Engineering", "Stripe",
        "The hidden cost of 'just ship it' — a retrospective on technical debt at scale", "#F59E0B")}
      {speakerDivider()}
      {speakerCard("JO", "James O'Brien", "Design Systems Lead", "Figma",
        "Design tokens in 2026: from fashion to foundation", "#EC4899")}
      {speakerDivider()}
      {speakerCard("LN", "Layla Nguyen", "Founder", "Resend",
        "How we grew from zero to 50k developers in 18 months without a sales team", "#0EA5E9")}
      {speakerDivider()}
      {speakerCard("RW", "Rafael Wozniak", "Head of AI", "Anthropic",
        "What product teams get wrong about large language models", BRAND)}

      {/* ── More speakers teaser ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="20px 48px 4px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK}">+ 6 more speakers</b> being announced over the next four weeks.`}
            fontSize="14px" color={MUTED} textAlign="center" lineHeight="155%"
          />
        </Column>
      </Row>

      {/* ── CTA ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="20px 48px 36px 48px">
        <Column>
          <Button
            width="100%"
            href="https://summit2026.example.com/speakers"
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
            View Full Speaker Lineup →
          </Button>
        </Column>
      </Row>

      {/* ── Hairline ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="0 48px">
        <Column>
          <Divider borderTopWidth="1px" borderTopColor={HAIRLINE} borderTopStyle="solid" />
        </Column>
      </Row>

      {/* ── Submit to speak nudge ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={SURFACE} padding="24px 48px 28px 48px">
        <Column>
          <Heading headingType="h3" fontSize="16px" fontWeight={700} color={INK} fontFamily={SANS}>
            Know someone who should speak?
          </Heading>
          <Paragraph
            html={`We're filling two community speaker slots. <a href="https://summit2026.example.com/speak" style="color:${BRAND};font-weight:600;">Submit a nomination →</a>`}
            fontSize="14px" color={MUTED} lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── Share nudge strip ── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor="#F0EEFF" padding="20px 48px">
        <Column>
          <Paragraph
            html={`<b style="color:${INK}">Share this lineup</b> — tag us <a href="https://twitter.com/summit2026" style="color:${BRAND};font-weight:600;">@summit2026</a> and we'll amplify your post.`}
            fontSize="13px" color={MUTED} textAlign="center" lineHeight="160%"
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
              { text: "Speakers", href: "https://summit2026.example.com/speakers" },
              { text: "Agenda", href: "https://summit2026.example.com/agenda" },
              { text: "Register", href: "https://summit2026.example.com/register" },
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
