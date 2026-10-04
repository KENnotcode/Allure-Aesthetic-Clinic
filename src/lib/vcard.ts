export function generateVCard(config: {
  name: string;
  title: string;
  org: string;
  phone: string;
  email: string;
  website: string;
}) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${config.name}`,
    `ORG:${config.org}`,
    `TITLE:${config.title}`,
    `TEL;TYPE=WORK:${config.phone}`,
    `EMAIL;TYPE=HOME:${config.email}`,
    `URL:${config.website}`,
    "END:VCARD",
  ];
  return lines.join("\n");
}

export function downloadVCard(vCardData: string, filename = "contact.vcf") {
  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
