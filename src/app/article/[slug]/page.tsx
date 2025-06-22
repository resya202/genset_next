// src/app/article/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../utils/prisma";
import CoverImage from "@/app/components/coverImage";

interface Props {
  params: { slug: string };
}

export default async function ArticleDetail({ params }: Props) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    select: {
      title: true,
      summary: true,
      content: true,
      published_at: true,
      hero_image: true,
    },
  });

  if (!article) return notFound();

  const bgUrl = article.hero_image || "/default-hero.jpg";

  return (
    <main className="w-full">
      {/* BACK BUTTON */}
      <section className="container mx-auto py-4">
        <Link
          href="/article"
          className="text-primaryDarkBlue hover:underline font-medium flex items-center gap-1"
        >
          ← Back to Articles
        </Link>
      </section>

      {/* HERO */}
      <CoverImage
        imageSrc={bgUrl}
        titleOverride={article.title}
        descriptionOverride={article.summary ?? ""}
      />

      {/* SUMMARY */}
      <section className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto text-gray-900">
          <time className="text-sm text-gray-900">
            {new Date(article.published_at).toLocaleDateString()}
          </time>
          {article.summary && (
            <p className="mt-2 text-lg text-gray-900">{article.summary}</p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto prose prose-lg mb-16 text-gray-900">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </section>

      {/* CTA */}
      <section className="bg-primaryOrange py-12">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Interested in more?</h2>
          <a
            href="/#contact"
            className="inline-block bg-white text-primaryDarkBlue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
