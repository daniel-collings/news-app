'use client'

import Article from "@/app/components/Article"
import { useQuery } from "@tanstack/react-query"

const fetchArticleData = async (id: string) => {
  const res = await fetch(`/api/article?id=${id}`).then(res => res.json())
  return res
}

export default function NewsArticle({ params }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ['news', params.slug],
    queryFn: () => fetchArticleData(params.slug),
    retry: 3
  })

  if (isLoading) return <>Loading article...</>

  return (
      <Article props={data.articles[0]}/>
  )
}

