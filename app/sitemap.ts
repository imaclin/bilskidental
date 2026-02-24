import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bilskidental.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/meet-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/general-dentistry`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/general-dentistry/root-canal`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/general-dentistry/wisdom-teeth`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/general-dentistry/general-implants`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/general-dentistry/bridges-and-partials`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/general-dentistry/laser-gum-therapy`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/general-dentistry/family-dentistry`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cosmetic-dentistry`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cosmetic-dentistry/dental-veneers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cosmetic-dentistry/clear-aligners`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cosmetic-dentistry/teeth-whitening`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cosmetic-dentistry/crowns`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cosmetic-dentistry/dentures`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cosmetic-dentistry/cosmetic-implants`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cosmetic-dentistry/gum-lift`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/patient-center`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/patient-center/new-patients`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/patient-center/insurance-financing`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/advanced-ai-dentistry`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/sedation`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
