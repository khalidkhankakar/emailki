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
const PRIMARY    = "#b45309";
const PRIMARY_LT = "#fef3c7";
const PRIMARY_DK = "#78350f";

const INK        = "#4a3b33";
const MUTED_FG   = "#78716c";
const SUBTLE     = "#a8a29e";
const LINK       = "#b45309";

const BG         = "#fdfbf7";
const MUTED      = "#f1e9da";
const ACCENT     = "#f2daba";
const WHITE      = "#ffffff";
const BORDER     = "#e4d9bc";

// Green — confirmed download
const GREEN      = "#15803d";
const GREEN_DARK = "#14532d";
const GREEN_MID  = "#16a34a";
const GREEN_LT   = "#f0fdf4";
const GREEN_BD   = "#bbf7d0";
const GREEN_DIM  = "#86efac";

// Amber — expiry warning
const AMBER      = "#d97706";
const AMBER_LT   = "#fffbeb";
const AMBER_BD   = "#fde68a";

const serifFont = {
  label: "Merriweather",
  value: "'Merriweather', 'Georgia', serif",
};

const sansFont = {
  label: "Oxanium",
  value: "'Oxanium', 'Segoe UI', Arial, sans-serif",
};

export function DownloadConfirmation() {
  return (
    <Email
      backgroundColor={BG}
      contentWidth="600px"
      contentAlign="center"
      fontFamily={serifFont}
      previewText="Your download is ready — Emailki-data-export.zip · 24.3 MB · link expires in 24 hours."
    >

      {/* ── 1. GREEN CONFIRMED BANNER ────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={GREEN_DARK} padding="40px 40px 16px 40px">
        <Column>
          <Heading headingType="h4" text="YOUR DOWNLOAD IS READY" fontSize="11px" fontWeight={700} color={GREEN_MID} textAlign="center" lineHeight="1.3" letterSpacing="0.12em" fontFamily={sansFont} />
          <Heading headingType="h1" text="↓" fontSize="52px" fontWeight={900} color={GREEN_LT} textAlign="center" lineHeight="1.0" fontFamily={sansFont} />
          <Heading headingType="h2" text="Your file is ready" fontSize="28px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.15" fontFamily={serifFont} />
          <Paragraph
            html="Your requested download has been prepared and is ready to save. Click below to download your file."
            fontSize="14px"
            color={GREEN_DIM}
            textAlign="center"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* Date + size strip on banner */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={GREEN_DARK} padding="16px 40px 36px 40px">
        <Column backgroundColor="#166534" borderRadius="6px" padding="12px 16px">
          <Paragraph html="PREPARED" fontSize="10px" color={GREEN_DIM} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="Aug 6, 2025" fontSize="14px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="09:41 AM" fontSize="11px" color={GREEN_DIM} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column backgroundColor="#166534" borderRadius="6px" padding="12px 16px">
          <Paragraph html="FILE SIZE" fontSize="10px" color={GREEN_DIM} textAlign="center" lineHeight="140%" letterSpacing="0.08em" fontFamily={sansFont} />
          <Heading headingType="h3" text="24.3 MB" fontSize="14px" fontWeight={700} color={WHITE} textAlign="center" lineHeight="1.2" fontFamily={sansFont} />
          <Paragraph html="Compressed ZIP" fontSize="11px" color={GREEN_DIM} textAlign="center" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 2. HEADER ───────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="24px 40px 20px 40px">
        <Column padding="0px">
          <Heading headingType="h2" text="Emailki" fontSize="22px" fontWeight={900} color={INK} textAlign="left" lineHeight="1.2" letterSpacing="0.02em" fontFamily={sansFont} />
        </Column>
        <Column padding="4px 0px 0px 0px">
          <Paragraph
            html={`<span style="background:${GREEN_LT}; color:${GREEN}; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700; letter-spacing:0.05em;">↓ DOWNLOAD READY</span>`}
            fontSize="11px"
            color={GREEN}
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

      {/* ── 4. AMBER EXPIRY STRIP ────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="20px 40px 0px 40px">
        <Column
          backgroundColor={AMBER_LT}
          borderRadius="6px"
          padding="10px 16px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: AMBER_BD }}
        >
          <Paragraph
            html={`⏱ <b style="color:${AMBER}">Download link expires in 24 hours</b> — after Aug 7, 2025 at 09:41 AM, the link will no longer work.`}
            fontSize="13px"
            color={AMBER}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── 5. FILE DETAILS ─────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 4px 40px">
        <Column>
          <Heading headingType="h4" text="FILE DETAILS" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* File name */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="File name" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html={`<b style="color:${INK}">Emailki-data-export.zip</b>`} fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Format */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Format" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>ZIP Archive (.zip)</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Size */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="File size" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Heading headingType="h3" text="24.3 MB" fontSize="15px" fontWeight={700} color={INK} textAlign="right" lineHeight="1.2" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Contents */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Contains" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Projects, files, settings</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Requested by */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="Requested by" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px" border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: BORDER }}>
          <Paragraph html="<b>Khalid Khan</b>" fontSize="13px" color={INK} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* Link expires */}
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="0px 40px">
        <Column padding="13px 0px">
          <Paragraph html="Link expires" fontSize="13px" color={MUTED_FG} lineHeight="140%" fontFamily={sansFont} />
        </Column>
        <Column padding="13px 0px">
          <Paragraph html={`<b style="color:${AMBER}">Aug 7, 2025 · 09:41 AM</b>`} fontSize="13px" color={AMBER} textAlign="right" lineHeight="140%" fontFamily={sansFont} />
        </Column>
      </Row>

      {/* ── 6. PRIMARY DOWNLOAD CTA ─────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="24px 40px 8px 40px">
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
            ↓ Download Emailki-data-export.zip
          </Button>
        </Column>
      </Row>

      {/* Fallback note */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="8px 40px 8px 40px">
        <Column>
          <Paragraph
            html="Button not working? Copy this link into your browser:"
            fontSize="12px"
            color={SUBTLE}
            textAlign="left"
            lineHeight="150%"
            fontFamily={sansFont}
          />
          <Column backgroundColor={MUTED} borderRadius="4px" padding="10px 14px">
            <Paragraph
              html={`<a href="#" style="color:${LINK}; word-break:break-all; font-size:12px;">https://Emailki.app/downloads?token=dl_eyJhbGci…9sX2lk</a>`}
              fontSize="12px"
              color={LINK}
              textAlign="left"
              lineHeight="160%"
              fontFamily={sansFont}
            />
          </Column>
        </Column>
      </Row>

      {/* ── 7. DIVIDER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="16px 40px 0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>

      {/* ── 8. SECURITY NOTICE ──────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="20px 40px 8px 40px">
        <Column>
          <Heading headingType="h4" text="SECURITY NOTICE" fontSize="10px" fontWeight={700} color={SUBTLE} textAlign="left" lineHeight="1.3" letterSpacing="0.10em" fontFamily={sansFont} />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={WHITE} padding="8px 32px 28px 32px">
        <Column backgroundColor={MUTED} borderRadius="6px" padding="14px 16px">
          <Paragraph html={`<b style="color:${INK}">Single-use link</b>`} fontSize="13px" color={INK} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="This link can only be downloaded once per session for your protection." fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={serifFont} />
        </Column>
        <Column backgroundColor={MUTED} borderRadius="6px" padding="14px 16px">
          <Paragraph html={`<b style="color:${INK}">Don't share this link</b>`} fontSize="13px" color={INK} textAlign="left" lineHeight="145%" fontFamily={sansFont} />
          <Paragraph html="This download contains your personal account data. Keep it private." fontSize="12px" color={MUTED_FG} textAlign="left" lineHeight="150%" fontFamily={serifFont} />
        </Column>
      </Row>

      {/* ── 9. HELP STRIP ───────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={WHITE} padding="0px 40px 32px 40px">
        <Column
          backgroundColor={PRIMARY_LT}
          borderRadius="6px"
          padding="14px 20px"
          border={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: ACCENT }}
        >
          <Paragraph
            html={`<b style="color:${PRIMARY}">Having trouble?</b> If your download fails or the link has expired, you can <a href="#" style="color:${LINK}; font-weight:600;">request a new download link</a> or <a href="#" style="color:${LINK}; font-weight:600;">contact support</a>.`}
            fontSize="13px"
            color={MUTED_FG}
            textAlign="left"
            lineHeight="160%"
            fontFamily={serifFont}
          />
        </Column>
      </Row>

      {/* ── 10. FOOTER ─────────────────────────────────────────────────────── */}
      <Row layout={ColumnLayouts.OneColumn} padding="0px 40px">
        <Column><Divider borderTopWidth="1px" borderTopColor={BORDER} borderTopStyle="solid" /></Column>
      </Row>
      <Row layout={ColumnLayouts.OneColumn} padding="20px 40px 4px 40px">
        <Column>
          <Paragraph html="© 2025 Emailki. All rights reserved." fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} padding="8px 40px 32px 40px">
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Privacy Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Data Policy</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
        <Column><Paragraph html={`<a href="#" style="color:${LINK}; text-decoration:none;">Contact Support</a>`} fontSize="12px" color={SUBTLE} textAlign="center" lineHeight="150%" fontFamily={sansFont} /></Column>
      </Row>

    </Email>
  );
}