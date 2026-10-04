import { NextResponse } from "next/server";
import { cardConfig } from "@/config/card.config";
import { generateVCard } from "@/lib/vcard";

export async function GET() {
  const vCard = generateVCard({
    name: cardConfig.profile.name,
    title: "Owner",
    org: cardConfig.profile.clinicName || "Allure Aesthetic Clinic",
    phone: cardConfig.contact.phone,
    email: cardConfig.contact.email,
    website: cardConfig.contact.website,
  });

  return new NextResponse(vCard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${cardConfig.profile.name.replace(/\s+/g, "_")}.vcf"`,
    },
  });
}
