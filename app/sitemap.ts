import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.carlosraul.am',
      lastModified: new Date(),
    },
  ]
}
