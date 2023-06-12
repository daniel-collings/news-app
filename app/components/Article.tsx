import Link from "next/link"
import { INewsArticleData } from "../news/page"

export default function Article({ props }: { props: INewsArticleData }) {
    return (
        <div className="grid">
            <button className="py-2 rounded-md text-blue-500 underline" onClick={() => history.back()}>{`<`} Back</button>
            <div className="inline-grid h-auto px-2 py-4 items-center border-gray-300 border-2 bg-gray-50 rounded-md">
                <small>{props.published_date} | {props.author}</small>
                <h1 className="font-semibold">{props.title}</h1>

                <p className="text-ellipsis py-6 max-h-44 h-44 overflow-hidden font-extralight">
                    {props.summary}
                </p>
            </div>
            <div>
                <small>Source: <Link href={props.link}>{props.rights}</Link></small>
            </div>
        </div>
    )
}