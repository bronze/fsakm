import { source } from '@/lib/source';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { slug, lang } = await params;
  // get page
  source.getPage(slug, lang);

  // get pages
  source.getPages(lang);
}