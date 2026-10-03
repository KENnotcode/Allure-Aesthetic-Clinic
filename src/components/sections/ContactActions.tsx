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
          shimmer
          onClick={handleSaveContact}
        >
          <Phone className="size-5" />
          Save Contact
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <a href={`tel:${contact.phone}`} className="block">
            <Button fullWidth variant="secondary" className="glass text-charcoal">
              <Phone className="size-5" />
              Call
            </Button>
          </a>
          <a href={`sms:${contact.phone}`} className="block">
            <Button fullWidth variant="outline" className="glass">
              <MessageSquare className="size-5" />
              Message
            </Button>
          </a>
        </div>
        <a href={contact.website} target="_blank" rel="noopener noreferrer" className="block">
          <Button fullWidth size="lg" variant="primary">
            <Calendar className="size-5" />
            {primaryCta}
          </Button>
        </a>
      </div>
    </section>
  );
}
