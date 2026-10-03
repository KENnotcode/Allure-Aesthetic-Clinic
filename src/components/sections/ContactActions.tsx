"use client";

import { Phone, MessageSquare, Calendar } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { Button } from "@/components/ui/Button";
import { generateVCard, downloadVCard } from "@/lib/vcard";

interface ContactActionsProps {
  config: CardConfig;
}

export function ContactActions({ config }: ContactActionsProps) {
  const { contact, primaryCta } = config;

  const handleSaveContact = () => {
    const vCard = generateVCard({
      name: config.profile.name,
      title: config.profile.title,
      phone: contact.phone,
      email: contact.email,
      website: contact.website,
    });
    downloadVCard(vCard, `${config.profile.name.replace(/\s+/g, "_")}.vcf`);
  };

  return (
    <section className="px-5 mt-6">
      <div className="flex flex-col gap-3">
        <Button
          fullWidth
          size="lg"
          variant="primary"
          onClick={handleSaveContact}
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a4 4 0 011.5-8.5A4 4 0 0112 8a4 4 0 018 4 4 4 0 01-2.5 5.5" />
          </svg>
          Save Contact Details
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <a href={`tel:${contact.phone}`} className="block">
            <Button fullWidth variant="secondary">
              <Phone className="size-5" />
              Call Now
            </Button>
          </a>
          <a href={`mailto:${contact.email}`} className="block">
            <Button fullWidth variant="secondary">
              <MessageSquare className="size-5" />
              Email
            </Button>
          </a>
        </div>
        <a href="#booking" className="block">
          <Button fullWidth size="lg" variant="primary">
            <Calendar className="size-5" />
            {primaryCta}
          </Button>
        </a>
      </div>
    </section>
  );
}
