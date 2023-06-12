import { NextRequest, NextResponse } from 'next/server'
import newsData from '@/public/newsData.json'

const DATA_SOURCE_URL = "https://api.newscatcherapi.com/v2/search"
// https://api.newscatcherapi.com/v2/
const API_KEY: string = process.env.NEWSCATCHER_API_KEY as string

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get('page');
    try {

        const newsApiData = await fetch(`${DATA_SOURCE_URL}?q="crypto"&lang=en&page_size=6&page=${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                "Access-Control-Allow-Methods": "GET"
            },
        })

        if (newsApiData.status !== 200) {
            throw newsApiData
        }

        const data = await newsApiData.json()

        return NextResponse.json(data.articles)
    } catch {
        const maxArticles = newsData.articles.length -1
        const nextPageCount = Number(page) * 6

        const articles = {
            ...newsData,
            articles: newsData.articles.slice(0, nextPageCount <= maxArticles ? nextPageCount : maxArticles)
        }

        return NextResponse.json(articles)
    }


}

