'use client'

import { SetStateAction, useState } from 'react';
import localData from "@/public/data.json"
import NewsCard from '../components/NewsCard';
import { useQuery } from '@tanstack/react-query';

interface INewsResponse{
    status: string
    total_hits: number,
    page: number,
    total_pages: number,
    page_size: number,
    articles:INewsArticleData[]
}

export interface INewsArticleData{
    title: string
    author: string
    published_date: string
    published_date_precision: string
    link: string
    clean_url: string
    excerpt: string
    summary: string
    rights: string
    rank: number,
    topic: string
    country: string
    language: string
    authors: string
    media: string
    is_opinion: boolean,
    twitter_account: string
    _score: number,
    _id: string
}

const fetchData = async (page: number) => {
    const res = await fetch(`http://localhost:3000/api/news?page=${page}`).then(res => res.json())
    return res
}

export default function NewsPage() {
    const [page, setPage] = useState(1)

    const { data, isLoading } = useQuery({ 
        queryKey: ['news', page], 
        queryFn: () => fetchData(page),
        // staleTime: 1200000,
        // cacheTime: 1200000,
        // keepPreviousData : true,
    })

    const [searchText, setSearchText] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    if (isLoading) return <>Loading.....</>

    const filteredArticles = data.articles.filter((article: INewsArticleData) => {
        const isMatchingSearch = article.title.toLowerCase().includes(searchText.toLowerCase());
        const isMatchingDate = selectedDate === '' || article.published_date.includes(selectedDate);
        return isMatchingSearch && isMatchingDate;
    })

    const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchText(event.target.value);
    };

    const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(event.target.value);
    };


    return (
        <div className="grid min-h-screen flex-col justify-evenly mt-12">
            <div className="grid grid-cols-4">
                <input
                    type="text"
                    className="w-full col-span-4 md:col-span-3 rounded-md mr-8 border-4 border-blue-300 px-4 py-2 mb-2 md:mb-0"
                    placeholder="Search by title..."
                    onChange={handleSearchChange}
                />
                <input
                    type="date"
                    className="w-full col-span-4 md:col-span-1 border-4 rounded-md border-blue-300 px-4 py-2"
                    onChange={handleDateChange}
                />

            </div>

            <div>
                <h1>{localData.title}</h1>
                <p>{localData.overview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 justify-between">
                {filteredArticles.map((item: INewsArticleData) => (
                    <NewsCard key={item._id} props={item} />
                ))}
            </div>
            <div className="text-center py-8"><button className="bg-blue-500 p-4 rounded-md text-white shadow-md" onClick={() => setPage(page+1)}>Load More</button></div>

        </div>
    );
}

