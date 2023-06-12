import Link from "next/link"
import { INewsArticleData } from "../news/page"

export default function NewsCard({ props }: { props: INewsArticleData }) {
    return (
        <div className="grid">
            <div className="inline-grid h-auto px-2 items-center border-gray-300 border-2 bg-gray-50 rounded-md">
                <small>{props.published_date}</small>
                <h2 className="font-semibold">{props.title}</h2>

                <p className="text-ellipsis py-6 max-h-44 h-44 overflow-hidden font-extralight">
                    {props.excerpt}
                </p>
                <Link href={`/news/${props._id}`}><button className="py-2 rounded-md">Learn More {`>`}</button></Link>
            </div>
        </div>
    )
}