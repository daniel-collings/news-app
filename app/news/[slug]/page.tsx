'use client'

import { useQuery } from "@tanstack/react-query"

const fetchArticleData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/article?id=${id}`).then(res => res.json())
  return res
}

export default function NewsArticle({ params }: any) {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchArticleData(params.slug),
    retry: 3
  })

  if (isLoading) return <>Loading article...</>

  return (
    <article className="container mx-auto px-8 py-8 sm:px-6 lg:px-8">
      <h1 className="py-4">{data.articles[0].title}</h1>
      <p>{data.articles[0].summary}</p>
    </article>
  )
}

