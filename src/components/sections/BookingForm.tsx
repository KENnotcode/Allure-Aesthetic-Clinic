"use client";

import React, { useState } from "react";
import { User, Phone, MapPin, Calendar } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  config: CardConfig;
}

export function BookingForm({ config }: BookingFormProps) {
  const { sectionTitles, formFields, locations } = config;
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const locationOptions = locations.map((l) => l.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const iconMap: Record<string, React.ElementType> = {
    name: User,
    phone: Phone,
    location: MapPin,
    date: Calendar,
  };

  return (
    <section id="booking" className="bg-warm-ivory">
      <div className="px-5 py-14 sm:py-16">
        <div className="flex flex-col gap-5">
          <SectionTitle title={sectionTitles.booking} subtitle="Let&apos;s discuss your aesthetic goals." align="left" eyebrow="Book a Consultation" />
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-charcoal/5">
            {submitted ? (
              <div className="py-10 text-center">
                <p className="text-lg font-semibold text-brand">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                {formFields.map((field) => {
                  const Icon = iconMap[field.name];
                  return (
                    <div key={field.name}>
                      <label className="block text-xs font-medium text-muted mb-1.5 uppercase tracking-wide">
                        {field.label}
                        {field.required && <span className="text-champagne ml-1">*</span>}
                      </label>
                      <div className="relative">
                        {Icon && (
                          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" />
                        )}
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            required={field.required}
                            value={formData[field.name] ?? ""}
                            onChange={handleChange}
                            className={cn(
                              "w-full h-12 rounded-lg border border-charcoal/10 bg-white text-sm text-charcoal transition-colors",
                              Icon && "pl-10 pr-4",
                              !Icon && "px-4",
                              "focus:border-brand focus:outline-hidden focus:ring-2 focus:ring-brand/20"
                            )}
                          >
                            <option value="">{field.placeholder}</option>
                            {locationOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name] ?? ""}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className={cn(
                              "w-full h-12 rounded-lg border border-charcoal/10 bg-white text-sm text-charcoal transition-colors",
                              Icon && "pl-10 pr-4",
                              !Icon && "px-4",
                              "placeholder:text-muted",
                              "focus:border-brand focus:outline-hidden focus:ring-2 focus:ring-brand/20"
                            )}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
                <Button type="submit" fullWidth size="lg" className="mt-1">
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
