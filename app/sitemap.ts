import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.carlosraul.am',
      lastModified: new Date(),
    },
    {
      url: 'https://www.carlosraul.am/es',
      lastModified: new Date(),
    },
    {
      url: 'https://www.carlosraul.am/en',
      lastModified: new Date(),
    },
    {
      url: 'https://www.carlosraul.am/pt: ',
      lastModified: new Date(),
    },
  ]
}
