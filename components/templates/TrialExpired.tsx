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

// Slate — calm "expired" state (no urgency, no panic)
const SLATE     = "#57534e"; // warm gray-600 — expired badge text
const SLATE_LT  = "#f5f5f4"; // warm gray-50  — expired bg
const SLATE_BD  = "#d6d3d1"; // warm gray-200 — expired border
const SLATE_DK  = "#292524"; // warm gray-900 — dark card bg

// Green — data safety / reassurance
const GREEN     = "#166534"; // green-800  — success text
const GREEN_LT  = "#f0fdf4"; // green-50   — success bg
const GREEN_BD  = "#bbf7d0"; // green-200  — success border

// Red — "lost access" indicators
const RED       = "#991b1b"; // red-800    — loss indicators

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
  loss?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
  accent?: "green" | "brand";
}

// ─── Helper Functions ──────────────────────────────────────────────────────────
const serifBody = (text: string, color: string = MUTED): string =>
  `<span style="font-family:'Merriweather',Georgia,serif;font-size:15px;line-height:1.75;color:${color};">${text}</span>`;

const boldSans = (text: string): string =>
  `<b style="font-family:'Oxanium',sans-serif;color:${INK};">${text}</b>`;

const valueSerif = (text: string): string =>
  `<b style="font-family:'Merriweather',Georgia,serif;font-size:13px;color:${INK};">${text}</b>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  TRIAL EXPIRED — Redesigned (Warm Earth-Tone / Editorial)
// ═══════════════════════════════════════════════════════════════════════════════

export function TrialExpired() {
  const detailRows: DetailRow[] = [
    { label: "Projects",    value: "3 max",        loss: true },
    { label: "AI Tools",    value: "Disabled",     loss: true },
    { label: "Team seats",  value: "1 seat",       loss: true },
    { label: "Support",     value: "Community",    loss: true },
  ];

  const faqItems: FaqItem[] = [
    {
      question: "Will my data be deleted?",
      answer: "No. Your projects, files, and settings are permanently preserved. We never delete data when a trial ends — it stays safe on the free plan indefinitely.",
      accent: "green",
    },
    {
      question: "Can I reactivate my Pro access anytime?",
      answer: "Yes, anytime. Reactivating restores full Pro access instantly — all your existing work carries over automatically. No setup needed.",
      accent: "brand",
    },
    {
      question: "What happened to my team members?",
      answer: "Team members above the free plan limit (1 seat) have been paused — not removed. Reactivate Pro to restore their access instantly.",
    },
  ];

  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={fontSans}
      previewText="Your Emailki Pro trial has ended — your data is safe and you can reactivate anytime."
    >

      {/* ── 1. TOP ACCENT STRIP (4px amber bar) ─────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={BRAND} padding="0px">
        <Column>
          <Paragraph html="&nbsp;" fontSize="4px" lineHeight="1" />
        </Column>
      </Row>

      {/* ── 2. SLIM SLATE TOP BAR — calm, not alarming ──────────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={SLATE}
        padding="12px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `${boldSans("Your Emailki Pro trial has ended.")} <span style="color:#d6d3d1"> Your data is safe — no action required.</span>`,
              "#ffffff"
            )}
            fontSize="14px"
            color="#ffffff"
            textAlign="center"
            lineHeight="160%"
          />
        </Column>
      </Row>

      {/* ── 3. HEADER — wordmark left · expired badge right ─────────────────── */}
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
            html={`<span style="background:${SLATE_LT};color:${SLATE};padding:4px 12px;border-radius:20px;font-family:'Oxanium',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;">TRIAL EXPIRED</span>`}
            fontSize="11px"
            color={SLATE}
            textAlign="right"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 4. DIVIDER ────────────────────────────────────────────────────── */}
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

      {/* ── 5. HERO — split card: expired marker + reassurance copy ─────────── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor={CARD}
        padding="36px 48px 32px 48px"
      >
        {/* Left — expired status block */}
        <Column
          backgroundColor={SLATE_LT}
          borderRadius="10px"
          padding="28px 14px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: SLATE_BD,
          }}
        >
          <Heading
            headingType="h1"
            text="✕"
            fontSize="40px"
            fontWeight={700}
            color={SLATE}
            textAlign="center"
            lineHeight="1.0"
          />
          <Paragraph
            html="Trial<br/>Expired"
            fontSize="12px"
            color={SLATE}
            textAlign="center"
            lineHeight="140%"
            fontWeight={700}
          />
          <Paragraph
            html="Aug 6, 2025"
            fontSize="11px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        {/* Right — warm reassurance copy */}
        <Column padding="0px 0px 0px 24px">
          <Heading
            headingType="h1"
            text="Your trial has ended"
            fontSize="24px"
            fontWeight={700}
            color={INK}
            textAlign="left"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              `Your ${boldSans("Emailki Pro")} trial expired on Aug 6, 2025. Your account has moved to the free plan.`
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="175%"
          />
          <Paragraph
            html={serifBody(
              `${boldSans("✓ All your data, projects, and settings are completely safe.")} Nothing has been deleted.`,
              GREEN
            )}
            fontSize="14px"
            color={GREEN}
            textAlign="left"
            lineHeight="175%"
          />
        </Column>
      </Row>

      {/* ── 6. STATUS STRIP — 3 columns: Trial · Data · Plan ──────────────── */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={CARD}
        padding="0px 48px 32px 48px"
      >
        <Column
          backgroundColor={SLATE_LT}
          borderRadius="8px"
          padding="16px 10px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: SLATE_BD,
          }}
        >
          <Paragraph
            html="TRIAL"
            fontSize="10px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Expired"
            fontSize="18px"
            fontWeight={700}
            color={SLATE}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="Aug 6, 2025"
            fontSize="10px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        <Column
          backgroundColor={GREEN_LT}
          borderRadius="8px"
          padding="16px 10px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: GREEN_BD,
          }}
        >
          <Paragraph
            html="DATA"
            fontSize="10px"
            color={GREEN}
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Safe ✓"
            fontSize="18px"
            fontWeight={700}
            color={GREEN}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="Nothing deleted"
            fontSize="10px"
            color={GREEN}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>

        <Column
          backgroundColor={BRAND_LT}
          borderRadius="8px"
          padding="16px 10px"
          border={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: HAIRLINE,
          }}
        >
          <Paragraph
            html="PLAN"
            fontSize="10px"
            color={BRAND}
            textAlign="center"
            lineHeight="140%"
            letterSpacing="0.10em"
          />
          <Heading
            headingType="h3"
            text="Free"
            fontSize="18px"
            fontWeight={700}
            color={BRAND}
            textAlign="center"
            lineHeight="1.2"
          />
          <Paragraph
            html="Active now"
            fontSize="10px"
            color={BRAND}
            textAlign="center"
            lineHeight="140%"
          />
        </Column>
      </Row>

      {/* ── 7. DIVIDER ────────────────────────────────────────────────────── */}
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

      {/* ── 8. SPECIAL REACTIVATION OFFER — dark warm card ──────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column
          backgroundColor={SLATE_DK}
          borderRadius="12px"
          padding="32px 32px 28px 32px"
        >
          <Heading
            headingType="h4"
            text="✦  WELCOME BACK OFFER"
            fontSize="11px"
            fontWeight={600}
            color="#b8a48c"
            textAlign="center"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
          <Heading
            headingType="h1"
            text="20% off your first month"
            fontSize="28px"
            fontWeight={700}
            color="#ffffff"
            textAlign="center"
            lineHeight="1.15"
            letterSpacing="-0.01em"
          />
          <Paragraph
            html={serifBody(
              `Use code ${boldSans("WELCOME20")} at checkout. Valid for the next 7 days only.`,
              "#d4c4b0"
            )}
            fontSize="14px"
            color="#d4c4b0"
            textAlign="center"
            lineHeight="175%"
          />

          <Button
            width="100%"
            href="#"
            backgroundColor="#f8f4ee"
            color={BRAND}
            hoverBackgroundColor="#f1e9da"
            fontSize="16px"
            fontWeight={700}
            padding="16px 28px"
            borderRadius="6px"
            textAlign="center"
          >
            Reactivate Emailki Pro →
          </Button>

          <Paragraph
            html={serifBody(
              "Offer expires Aug 13, 2025 · No contracts · Cancel anytime",
              "#b8a48c"
            )}
            fontSize="12px"
            color="#b8a48c"
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* Secondary free path */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="12px 48px 32px 48px"
      >
        <Column>
          <Paragraph
            html={serifBody(
              `Staying on the free plan? <a href="#" style="color:${LINK};font-weight:600;text-decoration:none;border-bottom:1px solid ${LINK};padding-bottom:1px;">Explore what's included →</a>`,
              SUBTLE
            )}
            fontSize="13px"
            color={SUBTLE}
            textAlign="center"
            lineHeight="150%"
          />
        </Column>
      </Row>

      {/* ── 9. DIVIDER ────────────────────────────────────────────────────── */}
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

      {/* ── 10. WHAT CHANGED — current free vs Pro comparison ───────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="YOUR CURRENT FREE PLAN"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {detailRows.map((item, idx) => (
        <Row
          key={item.label}
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={CARD}
          padding="0px 48px"
        >
          <Column
            padding="14px 0px"
            border={
              idx < detailRows.length - 1
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
              idx < detailRows.length - 1
                ? {
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: HAIRLINE,
                  }
                : undefined
            }
          >
            <Paragraph
              html={item.loss
                ? `<span style="color:${RED};font-family:'Oxanium',sans-serif;font-size:13px;">${item.value}</span> <span style="color:${SUBTLE};font-family:'Merriweather',serif;font-size:11px;"> (was unlimited)</span>`
                : valueSerif(item.value)
              }
              fontSize="13px"
              color={item.loss ? RED : INK}
              textAlign="right"
              lineHeight="140%"
            />
          </Column>
        </Row>
      ))}

      {/* Spacer */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="16px 48px 0px 48px">
        <Column>
          <Paragraph html="" fontSize="1px" color={CARD} lineHeight="1" />
        </Column>
      </Row>

      {/* ── 11. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 12. FAQ STRIP — three most common expired-trial questions ───────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="28px 48px 8px 48px"
      >
        <Column>
          <Heading
            headingType="h4"
            text="COMMON QUESTIONS"
            fontSize="11px"
            fontWeight={600}
            color={SUBTLE}
            textAlign="left"
            lineHeight="1.3"
            letterSpacing="0.14em"
          />
        </Column>
      </Row>

      {faqItems.map((faq, idx) => {
        const accentColors = {
          green: GREEN,
          brand: BRAND,
          undefined: INK,
        };
        const accentColor = faq.accent ? accentColors[faq.accent] : INK;

        return (
          <Row
            key={faq.question}
            layout={ColumnLayouts.OneColumn}
            backgroundColor={CARD}
            padding="0px 48px"
          >
            <Column
              padding="18px 0px"
              border={
                idx < faqItems.length - 1
                  ? {
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderBottomColor: HAIRLINE,
                    }
                  : undefined
              }
            >
              <Paragraph
                html={`<b style="font-family:'Oxanium',sans-serif;font-size:14px;color:${INK};">${faq.question}</b>`}
                fontSize="14px"
                color={INK}
                textAlign="left"
                lineHeight="150%"
              />
              <Paragraph
                html={serifBody(
                  faq.accent
                    ? `<span style="color:${accentColor};font-weight:600;">${faq.answer.split('.')[0]}.</span>${faq.answer.slice(faq.answer.indexOf('.') + 1)}`
                    : faq.answer,
                  MUTED
                )}
                fontSize="13px"
                color={MUTED}
                textAlign="left"
                lineHeight="170%"
              />
            </Column>
          </Row>
        );
      })}

      {/* Spacer */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={CARD} padding="12px 48px 0px 48px">
        <Column>
          <Paragraph html="" fontSize="1px" color={CARD} lineHeight="1" />
        </Column>
      </Row>

      {/* ── 13. DIVIDER ─────────────────────────────────────────────────────── */}
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

      {/* ── 14. GREEN DATA SAFETY NOTICE — final reassurance ────────────────── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={CARD}
        padding="24px 48px 32px 48px"
      >
        <Column
          backgroundColor={GREEN_LT}
          borderRadius="8px"
          padding="18px 24px"
          border={{
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: GREEN_BD,
          }}
        >
          <Paragraph
            html={serifBody(
              `${boldSans("✓ Your data is safe for as long as you have an account.")}`,
              GREEN
            )}
            fontSize="13px"
            color={GREEN}
            textAlign="left"
            lineHeight="150%"
          />
          <Paragraph
            html={serifBody(
              `We never delete data when a trial ends. If you ever decide to upgrade, everything will be right where you left it. <a href="#" style="color:${GREEN};font-weight:600;text-decoration:none;border-bottom:1px solid ${GREEN};padding-bottom:1px;">Learn about our data policy →</a>`,
              MUTED
            )}
            fontSize="14px"
            color={MUTED}
            textAlign="left"
            lineHeight="170%"
          />
        </Column>
      </Row>

      {/* ── 15. DIVIDER BEFORE FOOTER ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 48px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor={HAIRLINE}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── 15. SOCIAL ─────────────────────────────────────────────────────── */}
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
     
           {/* ── 16. COPYRIGHT ──────────────────────────────────────────────────── */}
           <Row layout={ColumnLayouts.OneColumn} padding="4px 40px 4px 40px">
             <Column>
               <Paragraph
                 html="© 2025 Emailki. All rights reserved."
                 fontSize="12px"
                 color={SUBTLE}
                 textAlign="center"
                 lineHeight="150%"
               />
             </Column>
           </Row>
     
           {/* ── 17. FOOTER LINKS ───────────────────────────────────────────────── */}
           <Row layout={ColumnLayouts.ThreeEqual} padding="4px 40px 32px 40px">
             <Column>
               <Paragraph
                 html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`}
                 fontSize="12px"
                 color={SUBTLE}
                 textAlign="center"
                 lineHeight="150%"
               />
             </Column>
             <Column>
               <Paragraph
                 html={`<a href="#" style="color:${LINK}; text-decoration:none;">Terms of Service</a>`}
                 fontSize="12px"
                 color={SUBTLE}
                 textAlign="center"
                 lineHeight="150%"
               />
             </Column>
             <Column>
               <Paragraph
                 html={`<a href="#" style="color:${LINK}; text-decoration:none;">Manage Subscription</a>`}
                 fontSize="12px"
                 color={SUBTLE}
                 textAlign="center"
                 lineHeight="150%"
               />
             </Column>
           </Row>
     
         </Email>
       );
     }