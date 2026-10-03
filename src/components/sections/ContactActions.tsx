"use client";

import { Phone, MessageSquare, Calendar, Contact } from "lucide-react";
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
        <a href="#booking" className="block">
          <Button fullWidth size="lg" variant="primary">
            <Calendar className="size-5" />
            {primaryCta}
          </Button>
        </a>
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
        <Button
          fullWidth
          size="md"
          variant="ghost"
          onClick={handleSaveContact}
        >
          <Contact className="size-4" />
          Save Contact Details
        </Button>
      </div>
    </section>
  );
}
