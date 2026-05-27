import { redirect } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogSeo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/rehber/${slug}`);
}
