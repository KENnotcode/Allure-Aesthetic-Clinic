"use client";

import { Phone, MessageSquare, Calendar, Contact } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { Button } from "@/components/ui/Button";
import { generateVCard, downloadVCard } from "@/lib/vcard";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

interface ContactActionsProps {
  config: CardConfig;
}

export function ContactActions({ config }: ContactActionsProps) {
  const { contact, primaryCta, socials } = config;

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

  const iconMap: Record<string, React.ElementType> = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    TikTok: FaTiktok,
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
          className="bg-white border-2 border-gray-200"
        >
          <Contact className="size-6 text-charcoal" />
          Save Contact Details
        </Button>
        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-8 pt-6">
            {socials.map((social) => {
              const Icon = iconMap[social.platform];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-10 rounded-full border border-charcoal/10 text-charcoal hover:border-charcoal/30 hover:text-brand transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
