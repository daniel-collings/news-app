import { NextRequest, NextResponse } from 'next/server'
import newsData from '@/public/newsData.json'

const DATA_SOURCE_URL = "https://api.newscatcherapi.com/v2/search"
// https://api.newscatcherapi.com/v2/
const API_KEY: string = process.env.NEWSCATCHER_API_KEY as string
const ORIGIN_ENV: string = process.env.ORIGIN_ENV as string

export async function GET(req: NextRequest) {
    const _id = req.nextUrl.searchParams.get('id');

    try{
        const newsApiData = await fetch(`${DATA_SOURCE_URL}?q="crypto"&lang=en`,{
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                "Access-Control-Allow-Origin": ORIGIN_ENV,
                "Access-Control-Allow-Methods": "GET"
            },
        })

        if(newsApiData.status !== 200){
            throw newsApiData
        }
    
        const data = await newsApiData.json()
    
        const article = data.json.articles.find((f:any) => f._id === _id)
    
        return NextResponse.json(article)
    } catch {    
        const article = {
            ...newsData,
            articles: newsData.articles.filter((f:any) => f._id === _id)
        }

        return NextResponse.json(article)
    }


}
