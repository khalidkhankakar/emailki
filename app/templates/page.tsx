import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderToHtml } from "@unlayer/react-elements";
import { EmailWorkbench } from "@/components/EmailWorkbench";
import { Invoice } from "@/components/templates/Invoice";
import { MagicLink } from "@/components/templates/MagicLink";
import { PasswordReset } from "@/components/templates/PasswordReset";
import { PaymentFailed } from "@/components/templates/PaymentFailed";
import { PaymentSuccessful } from "@/components/templates/PaymentSuccessful";
import { SubscriptionActivated } from "@/components/templates/SubscriptionActivated";
import { TrialEnding } from "@/components/templates/TrialEnding";
import { TrialExpired } from "@/components/templates/TrialExpired";
import { TrialReminder } from "@/components/templates/TrialReminder";
import { TrialStarted } from "@/components/templates/TrialStarted";
import { VerifyEmail } from "@/components/templates/VerifyEmail";
import { Welcome } from "@/components/templates/Welcome";
import { RenewalReminder } from "@/components/templates/RenewalReminder";
import { Receipt } from "@/components/templates/Receipt";
import { DownloadConfirmation } from "@/components/templates/DownloadConfirmation";
import { AccountDeleted } from "@/components/templates/AccountDeleted";
import { EmailChanged } from "@/components/templates/EmailChanged";
import { Changelog } from "@/components/templates/Changelog";

const templateRegistry = [
  { id: "welcome", name: "Welcome", file: "Welcome.tsx", component: Welcome },
  {
    id: "verify-email",
    name: "Verify Email",
    file: "VerifyEmail.tsx",
    component: VerifyEmail,
  },
  {
    id: "password-reset",
    name: "Password Reset",
    file: "PasswordReset.tsx",
    component: PasswordReset,
  },
  {
    id: "magic-link",
    name: "Magic Link",
    file: "MagicLink.tsx",
    component: MagicLink,
  },
  { id: "invoice", name: "Invoice", file: "Invoice.tsx", component: Invoice },
  {
    id: "payment-successful",
    name: "Payment Successful",
    file: "PaymentSuccessful.tsx",
    component: PaymentSuccessful,
  },
  {
    id: "payment-failed",
    name: "Payment Failed",
    file: "PaymentFailed.tsx",
    component: PaymentFailed,
  },
  {
    id: "trial-started",
    name: "Trial Started",
    file: "TrialStarted.tsx",
    component: TrialStarted,
  },
  {
    id: "trial-ending",
    name: "Trial Ending",
    file: "TrialEnding.tsx",
    component: TrialEnding,
  },
  {
    id: "trial-reminder",
    name: "Trial Reminder",
    file: "TrialReminder.tsx",
    component: TrialReminder,
  },
  {
    id: "trial-expired",
    name: "Trial Expired",
    file: "TrialExpired.tsx",
    component: TrialExpired,
  },
  {
    id: "subscription-activated",
    name: "Subscription Activated",
    file: "SubscriptionActivated.tsx",
    component: SubscriptionActivated,
  },
  {
    id: "renewal-reminder",
    name: "Renewal Reminder",
    file: "RenewalReminder.tsx",
    component: RenewalReminder,
  },
  {
    id:"download-confirmation",
    name: "Download Confirmation",
    file: "DownloadConfirmation.tsx",
    component: DownloadConfirmation,
  },
  {
    id: "account-deleted",
    name: "Account Deleted",
    file: "AccountDeleted.tsx",
    component: AccountDeleted,
  },
  {
    id: "email-changed",
    name: "Email Changed",
    file: "EmailChanged.tsx",
    component: EmailChanged,
  },
  {
    id: "receipt",
    name: "Receipt",
    file: "Receipt.tsx",
    component: Receipt,
  },
  {
    id: "changelog",
    name: "Changelog",
    file: "Changelog.tsx",
    component: Changelog,
  }
];

async function readTemplateSource(file: string) {
  return readFile(
    path.join(process.cwd(), "components", "templates", file),
    "utf8",
  );
}

export default async function Dashboard() {
  const templates = await Promise.all(
    templateRegistry.map(async (template) => ({
      id: template.id,
      name: template.name,
      description: template.file,
      html: renderToHtml(template.component()),
      code: await readTemplateSource(template.file),
    })),
  );

  return <EmailWorkbench templates={templates} />;
}
