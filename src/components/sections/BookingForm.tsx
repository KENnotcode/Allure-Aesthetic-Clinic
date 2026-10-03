"use client";

import React, { useState } from "react";
import { User, Phone, MapPin, Calendar } from "lucide-react";
import type { CardConfig } from "@/types/card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  config: CardConfig;
}

export function BookingForm({ config }: BookingFormProps) {
  const { sectionTitles, formFields, locations } = config;
  const [formData, setFormData] = useState<Record<string, string>>({});
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
    <section className="px-5 mt-8">
      <SectionTitle title={sectionTitles.booking} />
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand to-brand/90 p-px">
        <Card className="relative overflow-hidden" padding={false}>
          {submitted ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-brand">
                Thank you! We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              {formFields.map((field) => {
                const Icon = iconMap[field.name];
                return (
                  <div key={field.name} className="relative">
                    <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
                      {field.label}
                      {field.required && <span className="text-accent ml-0.5">*</span>}
                    </label>
                    <div className="relative">
                      {Icon && (
                        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-charcoal/40" />
                      )}
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] ?? ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full h-12 rounded-xl border-2 border-charcoal/10 bg-white text-sm text-charcoal transition-colors",
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
                            "w-full h-12 rounded-xl border-2 border-charcoal/10 bg-white text-sm text-charcoal transition-colors",
                            Icon && "pl-10 pr-4",
                            !Icon && "px-4",
                            "placeholder:text-charcoal/40",
                            "focus:border-brand focus:outline-hidden focus:ring-2 focus:ring-brand/20"
                          )}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <Button type="submit" fullWidth size="lg" shimmer>
                Submit Request
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
