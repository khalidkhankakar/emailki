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
const PRIMARY    = "#b45309"; // amber-700
const PRIMARY_LT = "#fef3c7"; // amber-100
const PRIMARY_DK = "#78350f"; // amber-900
const PRIMARY_MD = "#d97706"; // amber-600

const INK        = "#4a3b33";
const MUTED_FG   = "#78716c";
const SUBTLE     = "#a8a29e";
const LINK       = "#b45309";

const BG         = "#fdfbf7";
const CARD       = "#f8f4ee";
const MUTED      = "#f1e9da";
const ACCENT     = "#f2daba";
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc";
const SECONDARY  = "#e4c090";

// Green — new features
const GREEN      = "#15803d";
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";

// Red — breaking changes
const RED        = "#991b1b";
const RED_LT     = "#fef2f2";
const RED_BD     = "#fecaca";

// Blue — improvements (neutral from outside palette)
const BLUE       = "#1d4ed8";
const BLUE_LT    = "#eff6ff";
const BLUE_BD    = "#bfdbfe";

const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function Changelog() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Emailki v2.4.0 is here — AI workspaces, real-time collaboration, and 14 bug fixes."
    >

      {/* ── 1. DARK AMBER VERSION HERO BANNER ───────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={PRIMARY_DK} padding="44px 40px 16px 40px">
        <Column>
          {/* Eyebrow */}
          <Heading
            headingType="h4"
            text="✦  PRODUCT UPDATE"
            fontSize="11px"
            fontWeight={700}
            color={PRIMARY_MD}
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.12em"
            fontFamily={sansFont}
          />
          {/* Version number — the hero */}
          <Heading
            headingType="h1"
            text="v2.4.0"
            fontSize="56px"
            fontWeight={900}
            color={WHITE}
            textAlign="center"
            lineHeight="1.0"
            letterSpacing="-0.02em"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h2"
            text="The collaboration update"
            fontSize="20px"
            fontWeight={700}
            color="#fde68a"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Released Aug 6, 2025 · 3 new features · 14 bug fixes · 1 breaking change"
            fontSize="13px"
            color="#fcd34d"
            textAlign="center"
            lineHeight="155%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Stats strip on banner */}
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={PRIMARY_DK} padding="16px 40px 36px 40px">
        <Column backgroundColor="#92400e" borderRadius="6px" padding="12px 8px">
          <Heading headingType="h2" text="3" fontSize="28px" fontWeight={900} color={WHITE} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="New features" fontSize="11px" color="#fde68a" textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column backgroundColor="#92400e" borderRadius="6px" padding="12px 8px">
          <Heading headingType="h2" text="14" fontSize="28px" fontWeight={900} color={WHITE} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="Bug fixes" fontSize="11px" color="#fde68a" textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column backgroundColor="#92400e" borderRadius="6px" padding="12px 8px">
          <Heading headingType="h2" text="1" fontSize="28px" fontWeight={900} color={WHITE} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Paragraph html="Breaking change" fontSize="11px" color="#fde68a" textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 2. HEADER ───────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="24px 40px 20px 40px">
        <Column padding="0px">
          <Heading headingType="h2" text="Emailki" fontSize="22px" fontWeight={900} color={INK} textAlign="left" lineHeight="1.2" letterSpacing="0.02em" fontFamily={sansFont} />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${PRIMARY_LT}; color:${PRIMARY}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.06em;">v2.4.0 · Aug 6, 2025</span>`}
            fontSize="11px"
            color={PRIMARY}
            textAlign="right"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 3. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 4. WHAT'S NEW — section label ───────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="28px 40px 8px 40px">
        <Column>
          <Heading
            headingType="h4"
            text="✦  WHAT'S NEW"
            fontSize="10px"
            fontWeight={700}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.10em"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 5. FEATURE 1 — wide left, narrow right (text + badge) ───────────── */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="8px 40px 16px 40px">
        <Column>
          <Paragraph
            html={`<span style="background:${GREEN_LT}; color:${GREEN}; padding:2px 8px; border-radius:4px; font-size:10px; font-weight:700; letter-spacing:0.06em;">NEW</span>`}
            fontSize="10px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h3"
            text="AI Workspaces"
            fontSize="17px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.3"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Each project now gets its own dedicated AI workspace — a context-aware assistant that remembers your project goals, stack, and preferences. No more re-explaining yourself."
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:700; text-decoration:none; font-size:13px;">Read the docs →</a>`}
            fontSize="13px"
            color={PRIMARY}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="6px"
          padding="20px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: GREEN_BD }}
        >
          <Heading headingType="h2" text="✦" fontSize="28px" fontWeight={400} color={GREEN} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="AI<br/>Workspace" fontSize="12px" color={GREEN} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Pro only" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Hairline between features */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="dashed" /></Column>
      </Row>

      {/* ── 6. FEATURE 2 — narrow left (badge), wide right (text) ───────────── */}
      {/* Layout flipped from Feature 1 — visual rhythm */}
      <Row layout={ColumnLayouts.TwoNarrowWide} backgroundColor={WHITE} padding="16px 40px 16px 40px">
        <Column
          backgroundColor={BLUE_LT}
          borderRadius="6px"
          padding="20px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: BLUE_BD }}
        >
          <Heading headingType="h2" text="⟳" fontSize="28px" fontWeight={400} color={BLUE} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="Real-time<br/>Sync" fontSize="12px" color={BLUE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="All plans" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="0px 0px 0px 20px">
          <Paragraph
            html={`<span style="background:${BLUE_LT}; color:${BLUE}; padding:2px 8px; border-radius:4px; font-size:10px; font-weight:700; letter-spacing:0.06em;">IMPROVED</span>`}
            fontSize="10px"
            color={BLUE}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h3"
            text="Real-time collaboration"
            fontSize="17px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.3"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Multiple team members can now edit the same document simultaneously with live cursors, presence indicators, and instant conflict resolution — no refresh needed."
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:700; text-decoration:none; font-size:13px;">See it in action →</a>`}
            fontSize="13px"
            color={PRIMARY}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Hairline */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="dashed" /></Column>
      </Row>

      {/* ── 7. FEATURE 3 — back to wide left ────────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoWideNarrow} backgroundColor={WHITE} padding="16px 40px 28px 40px">
        <Column>
          <Paragraph
            html={`<span style="background:${PRIMARY_LT}; color:${PRIMARY}; padding:2px 8px; border-radius:4px; font-size:10px; font-weight:700; letter-spacing:0.06em;">NEW</span>`}
            fontSize="10px"
            color={PRIMARY}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Heading
            headingType="h3"
            text="Smart export templates"
            fontSize="17px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.3"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Export to PDF, CSV, Notion, or Markdown with one click — using saved templates that remember your formatting preferences per project."
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<a href="#" style="color:${LINK}; font-weight:700; text-decoration:none; font-size:13px;">Set up templates →</a>`}
            fontSize="13px"
            color={PRIMARY}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="6px"
          padding="20px 12px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: SECONDARY }}
        >
          <Heading headingType="h2" text="↗" fontSize="28px" fontWeight={400} color={PRIMARY} textAlign="center" lineHeight="1.1" fontFamily={sansFont} />
          <Paragraph html="Smart<br/>Export" fontSize="12px" color={PRIMARY} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="All plans" fontSize="10px" color={SUBTLE} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 8. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 9. BUG FIXES — 2×3 compact grid ────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="🐛  BUG FIXES · 14 resolved" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="8px 32px 6px 32px">
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<b style="color:${INK}">Fixed: export timeout</b>`} fontSize="12px" color={INK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Large exports no longer time out after 30s." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<b style="color:${INK}">Fixed: Safari scroll bug</b>`} fontSize="12px" color={INK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Sidebar scrolling now works on Safari 17+." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="6px 32px 6px 32px">
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<b style="color:${INK}">Fixed: mention notifications</b>`} fontSize="12px" color={INK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="@mentions now send emails reliably." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<b style="color:${INK}">Fixed: dark mode colors</b>`} fontSize="12px" color={INK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Code blocks now render correctly in dark mode." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="6px 32px 28px 32px">
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<b style="color:${INK}">Fixed: CSV import</b>`} fontSize="12px" color={INK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="UTF-8 encoded files import without corruption." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="12px 14px">
          <Paragraph html={`<a href="#" style="color:${LINK}; font-weight:700; text-decoration:none;">View all 14 fixes →</a>`} fontSize="12px" color={LINK} textAlign="left" lineHeight="140%" fontFamily={sansFont} />
          <Paragraph html="Full list on our changelog page." fontSize="11px" color={MUTED_FG} textAlign="left" lineHeight="145%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* ── 10. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 11. BREAKING CHANGE — red notice ────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="⚠  BREAKING CHANGE" fontSize="10px" fontWeight={700} color={RED} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px 28px 40px">
        <Column
          backgroundColor={RED_LT}
          borderRadius="6px"
          padding="18px 20px"
          border={{ borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: RED_BD }}
        >
          <Paragraph
            html={`<b style="color:${RED}">API v1 endpoints deprecated</b>`}
            fontSize="14px"
            color={RED}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Paragraph
            html="The <b>v1 REST API</b> will be sunset on <b>Oct 1, 2025</b>. Please migrate to the v2 API before this date. All v1 endpoints will return <code>410 Gone</code> after sunset."
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="165%"
            fontFamily={serifFont}
          />
          <Paragraph
            html={`<a href="#" style="color:${RED}; font-weight:700; text-decoration:none;">View migration guide →</a>`}
            fontSize="13px"
            color={RED}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 12. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 13. CTA — try the update ────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="28px 40px 8px 40px">
        <Column>
          <Heading
            headingType="h2"
            text="Ready to explore v2.4.0?"
            fontSize="20px"
            fontWeight={700}
            color={INK}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={serifFont}
          />
          <Paragraph
            html="Everything is live — open your workspace and try the new features now."
            fontSize="14px"
            color={MUTED_FG}
            textAlign="center"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="12px 40px 8px 40px">
        <Column>
          <Button
            width="100%"
            href="#"
            backgroundColor={PRIMARY}
            color={WHITE}
            hoverBackgroundColor={PRIMARY_DK}
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="4px"
            textAlign="center"
            fontFamily={sansFont}
          >
            Open My Workspace →
          </Button>
        </Column>
      </Row>

      {/* Secondary links */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="8px 40px 28px 40px">
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; font-weight:600; text-decoration:none; font-size:13px;">Full changelog →</a>`} fontSize="13px" color={LINK} textAlign="left" lineHeight="150%" fontFamily={sansFont} />
        </Column>
        <Column>
          <Paragraph html={`<a href="#" style="color:${LINK}; font-weight:600; text-decoration:none; font-size:13px;">GitHub release →</a>`} fontSize="13px" color={LINK} textAlign="right" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 14. FOOTER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="24px 40px 8px 40px">
        <Column>
          <Social
            icons={[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Github", url: "https://github.com" },
            ]}
            iconType="rounded"
            iconSize={28}
            spacing={10}
            align="center"
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph html="© 2025 Emailki. All rights reserved." fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
        <Column>
          <Paragraph
            html={`You're receiving this because you opted in to product updates. <a href="#" style="color:${LINK}; text-decoration:none;">Unsubscribe from changelogs</a>`}
            fontSize="12px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Changelog</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">GitHub</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
      </Row>

    </Email>
  );
}