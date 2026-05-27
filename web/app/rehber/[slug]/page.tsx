import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogSeo";
import { SITE_URL, buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/rehber/${post.slug}`,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const pageUrl = `${SITE_URL}/rehber/${post.slug}`;
  const schemas = [
    articleSchema({
      headline: post.title,
      description: post.metaDescription,
      url: pageUrl,
      datePublished: post.publishDate,
    }),
    breadcrumbSchema([
      { name: "Ana Sayfa", url: SITE_URL },
      { name: "Rehber", url: `${SITE_URL}/rehber` },
      { name: post.title, url: pageUrl },
    ]),
  ];

  return (
    <main className="pt-16">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <div className="bg-[#F7F7F5] border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <nav
            className="flex items-center gap-2 text-xs text-[#8A8A8A] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link href="/" className="hover:text-[#E8620C] transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#4B4B4B]">Rehber</span>
            <span>/</span>
            <span className="text-[#4B4B4B] line-clamp-1">{post.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#E8620C]" />
            <span
              className="text-[#E8620C] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Mevzuat Rehberi
            </span>
          </div>
          <h1
            className="text-[26px] md:text-[38px] font-extrabold text-[#1C1C1C] leading-snug mb-5 max-w-[720px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {post.title}
          </h1>
          <div
            className="flex items-center gap-4 text-[#8A8A8A] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span>
              {new Date(post.publishDate).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime} okuma
            </span>
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-14 items-start">

            {/* Ana içerik */}
            <article className="max-w-[680px]">
              {post.sections.map((section) => (
                <section key={section.h2} className="mb-10">
                  <h2
                    className="text-xl font-extrabold text-[#1C1C1C] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {section.h2}
                  </h2>
                  <div className="w-8 h-0.5 bg-[#E8620C] mb-4" />
                  <p
                    className="text-[#4B4B4B] text-base leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {section.body}
                  </p>
                </section>
              ))}

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-[#F7F7F5] border border-[#E2E2E2] rounded-xl">
                <div>
                  <p
                    className="text-[#1C1C1C] font-bold text-base mb-1"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    İşletmeniz için değerlendirme yapın
                  </p>
                  <p className="text-[#4B4B4B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    Başvuru formunu doldurarak ön görüşme talep edebilirsiniz.
                  </p>
                </div>
                <Link
                  href="/basvuru"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8620C] text-white text-sm font-semibold rounded-lg hover:bg-[#CF5409] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Başvuru Yap
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </div>
            </article>

            {/* Sidebar — diğer yazılar */}
            {otherPosts.length > 0 && (
              <aside className="hidden lg:block">
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-[#8A8A8A] mb-4"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Diğer Rehberler
                </p>
                <div className="flex flex-col gap-3">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/rehber/${p.slug}`}
                      className="group flex flex-col gap-1.5 p-4 border border-[#E2E2E2] rounded-xl hover:border-[#E8620C]/50 transition-colors"
                    >
                      <span
                        className="text-sm font-semibold text-[#1C1C1C] leading-snug group-hover:text-[#E8620C] transition-colors"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {p.title}
                      </span>
                      <span
                        className="text-xs text-[#8A8A8A] flex items-center gap-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <Clock size={11} />
                        {p.readingTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </aside>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
