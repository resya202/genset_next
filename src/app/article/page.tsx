// src/app/article/page.tsx
export const revalidate = 0
export const dynamic = "force-dynamic"
import Link from "next/link";
import { prisma } from "../utils/prisma";
import CoverImage from "@/app/components/coverImage";
import { ArticleCoverImage } from "@/app/translations/about";

export default async function ArticleList() {
  const articles = await prisma.article.findMany({
    orderBy: { published_at: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      published_at: true,
      hero_image: true,
    },
  });

  return (
    <main className="w-full">
      {/* HERO BANNER */}
      <CoverImage
        imageSrc="/FAQ/COVERIMAGEABOUT.webp"
        translationObject={ArticleCoverImage}
      />

      {/* ARTICLE GRID */}
      <section className="container mx-auto py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => {
          const imgUrl = a.hero_image || "/default-hero.jpg";

          return (
            <Link
              href={`/article/${a.slug}`}
              key={a.id}
              className="
                group block 
                bg-white shadow rounded-lg overflow-hidden 
                transform transition-transform duration-300 ease-out 
                hover:scale-105 hover:shadow-lg
                cursor-pointer
              "
            >
              {/* image */}
              <div
                className="h-40 bg-center bg-cover"
                style={{ backgroundImage: `url('${imgUrl}')` }}
              />

              {/* content */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-black group-hover:text-primaryDarkBlue transition-colors">
                  {a.title}
                </h2>
                <time className="text-sm text-gray-500 mb-4">
                  {new Date(a.published_at).toLocaleDateString()}
                </time>
                <p className="text-gray-700 flex-1">{a.summary}</p>
                <span className="mt-4 inline-block text-primaryDarkBlue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-primaryOrange py-12">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Want deeper insights?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Reach out to learn more about our services or request a custom quote.
          </p>
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
