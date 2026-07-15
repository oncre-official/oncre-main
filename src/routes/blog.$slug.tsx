import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        <article className="container-page py-16 md:py-24">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          
          <div className="mx-auto max-w-3xl">
            <header className="mb-12 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                {post.title}
              </h1>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg prose-slate mx-auto max-w-none text-muted-foreground">
              {post.content ? (
                <ReactMarkdown>{post.content}</ReactMarkdown>
              ) : (
                <p>Content coming soon...</p>
              )}
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
