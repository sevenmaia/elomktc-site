import { redirect } from "next/navigation";

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

export default function BlogSlugRedirectPage({ params }: BlogSlugPageProps) {
  redirect(`/artigos/${params.slug}`);
}