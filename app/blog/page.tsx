import BlurFade from "@/components/magicui/blur-fade";
import { PageWrapper, SectionWrapper } from "@/components/page-structure";
import { getBlogPosts } from "@/data/blog";
import { formatDate, formatDateSimple } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <PageWrapper className="bg-yellow-50 dark:bg-background">
      <SectionWrapper>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => {
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                <Link className="flex flex-col space-y-1 mb-4 group" href={`/blog/${post.slug}`}>
                  <div className="w-full flex flex-col">
                    <p className="tracking-tight group-hover:underline transition underline-offset-2">{post.metadata.title}</p>
                    <p className="h-6 text-xs text-muted-foreground">{formatDateSimple(post.metadata.publishedAt)}</p>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
      </SectionWrapper>
    </PageWrapper>
  );
}
