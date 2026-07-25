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

// ─── Design Tokens ────────────────────────────────────────────────────────────
const BRAND     = "#4338CA"; // deep indigo  — primary accent
const BRAND_LT  = "#EEF2FF"; // lavender tint — icon bg, help box bg
const INK       = "#18181B"; // near-black    — headings
const MUTED     = "#52525B"; // zinc-600      — body / subtext
const LINK      = "#4338CA"; // same as brand for links
const BG        = "#F4F4F8"; // email canvas
const WHITE     = "#FFFFFF";
const HAIRLINE  = "#E4E4E7"; // zinc-200

const uiFont = {
  label: "Poppins",
  value: "'Poppins', 'Segoe UI', Arial, sans-serif",
};

// ─── Hairline divider style for Column borders ────────────────────────────────
const BORDER_BOTTOM = {
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: HAIRLINE,
};

// ─── Feature helper — returns a Column (called inside a ThreeEqual Row) ───────
// NOTE: This is used inline inside <Row>, not as a JSX component.
function featureCell(iconUrl: string, title: string, desc: string) {
  return (
    <Column padding="16px 24px 24px 24px">
      {/* Icon box — fixed small centered image */}
      <Image
        src={{ url: iconUrl, autoWidth: false, maxWidth: "22%" }}
        altText={title}
        textAlign="center"
      />
      <Heading
        headingType="h3"
        text={title}
        fontSize="15px"
        fontWeight={700}
        color={INK}
        textAlign="center"
        lineHeight="1.3"
      />
      <Paragraph
        html={desc}
        fontSize="13px"
        color={MUTED}
        textAlign="center"
        lineHeight="155%"
      />
    </Column>
  );
}

// ─── Main Email Component ─────────────────────────────────────────────────────
export function Welcome() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={uiFont}
      previewText="Welcome to abc — here's everything you need to get started."
    >
      {/* ── 1. HEADER — Logo + Wordmark ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={WHITE}
        padding="28px 40px 20px 40px"
      >
        {/* Logo icon — right-aligned so it sits flush against the wordmark */}
        <Column padding="0px">
          <Image
            src={{ url: "/avatar.svg", autoWidth: false, maxWidth: "40%" }}
            altText="abc logo"
            textAlign="right"
          />
        </Column>

        {/* Wordmark */}
        <Column padding="4px 0px 0px 8px">
          <Heading
            headingType="h2"
            text="abc"
            fontSize="28px"
            fontWeight={900}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
          />
        </Column>
      </Row>

      {/* ── 2. HERO IMAGE ──────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="0px 40px 0px 40px"
      >
        <Column>
          <Image
            src={{ url: "/man_city.jpg", autoWidth: false, maxWidth: "100%" }}
            altText="Welcome illustration"
            textAlign="center"
          />
        </Column>
      </Row>

      {/* ── 3. WELCOME HEADLINE + BODY COPY ────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="32px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h1"
            text="Welcome to abc! 🎉"
            fontSize="26px"
            fontWeight={800}
            color={INK}
            textAlign="center"
            lineHeight="1.25"
          />
          <Paragraph
            html="Hi there,"
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="160%"
          />
          <Paragraph
            html="We're excited to have you on board. <b>abc</b> is designed to help you do amazing things with ease and efficiency."
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="160%"
          />
          <Paragraph
            html="Get started by exploring your account and discovering everything <b>abc</b> has to offer."
            fontSize="15px"
            color={MUTED}
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 4. CTA BUTTON ──────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="20px 48px 12px 48px"
      >
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={BRAND}
            color={WHITE}
            hoverBackgroundColor="#3730A3"
            fontSize="16px"
            fontWeight={700}
            padding="15px 28px"
            borderRadius="10px"
            textAlign="center"
          >
            Get Started
          </Button>
        </Column>
      </Row>

      {/* ── 5. HELP LINK BELOW BUTTON ──────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="4px 48px 28px 48px"
      >
        <Column>
          <Paragraph
            html={`Need help getting started? Check out our <a href="#" style="color:${LINK}">docs</a> or contact our <a href="#" style="color:${LINK}">support team</a>.`}
            fontSize="13px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 6. SECTION DIVIDER + "What you can do" HEADING ────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
            textAlign="center"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={WHITE}
        padding="20px 40px 4px 40px"
      >
        <Column>
          <Heading
            headingType="h2"
            text="What you can do with abc"
            fontSize="17px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.3"
          />
        </Column>
      </Row>

      {/* ── 7. FEATURE GRID (3 columns) ────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={WHITE}
        padding="16px 24px 32px 24px"
      >
        {featureCell("/favicon.svg", "Fast & Powerful", "Built for speed and performance.")}
        {featureCell("/favicon.svg", "Secure & Reliable", "Your data is safe with us.")}
        {featureCell("/favicon.svg", "Made for You", "Tools that adapt to your needs.")}
      </Row>

      {/* ── 8. HELP BOX (lavender bg, icon + text) ─────────────────────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={WHITE}
        padding="0px 40px 32px 40px"
      >
        {/* Left: question-mark icon */}
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="12px"
          padding="20px 12px"
        >
          <Image
            src={{ url: "/avatar.svg", autoWidth: false, maxWidth: "70%" }}
            altText="Help"
            textAlign="center"
          />
        </Column>

        {/* Right: help text */}
        <Column
          backgroundColor={BRAND_LT}
          borderRadius="12px"
          padding="20px 20px 20px 16px"
        >
          <Heading
            headingType="h3"
            text="Questions? We're here to help."
            fontSize="14px"
            fontWeight={700}
            color={INK}
            lineHeight="1.3"
          />
          <Paragraph
            html={`Visit our <a href="#" style="color:${LINK}">Help Center</a> or reply to this email.`}
            fontSize="13px"
            color={MUTED}
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 9. SOCIAL ICONS ────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        padding="24px 40px 8px 40px"
      >
        <Column>
          <Social
            icons={[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Github", url: "https://github.com" },
            ]}
            iconType="rounded"
            iconSize={32}
            spacing={12}
            align="center"
          />
        </Column>
      </Row>

      {/* ── 10. COPYRIGHT ──────────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        padding="4px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="© 2025 abc. All rights reserved."
            fontSize="12px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 11. FOOTER LINKS ───────────────────────────────────────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        padding="4px 40px 32px 40px"
      >
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`}
            fontSize="12px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Terms of Service</a>`}
            fontSize="12px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<a href="#" style="color:${LINK}; text-decoration:none;">Unsubscribe</a>`}
            fontSize="12px"
            color={MUTED}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>
    </Email>
  );
}