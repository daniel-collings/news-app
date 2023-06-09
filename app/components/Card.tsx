import Link from "next/link"

export interface ICardProps {
    id: string
    title: string
    image: {
        src: string
        alt: string
    }
    blurb: string
    href: string
}
export default function Card({ props }: { props: ICardProps }) {
    return (
        <div className="basis-full md:basis-1/3 grow group w-full h-max">
            <div className="flex justify-around items-center md:h-36 border-gray-400 border-2 bg-gray-300 rounded-md md:group-hover:hidden h-fit">
                <img src={props.image.src} width={250} height={250} alt={props.image.alt} className="object-contain md:hidden" />
                <h2 className="hidden md:flex group-hover:hidden">{props.title}</h2>
            </div>
            <div className="md:border-gray-400 md:border-0 md:group-hover:border-2 md:group-hover:h-36 md:bg-gray-300 rounded-md overflow-hidden">
                <p className="py-4 md:hidden md:group-hover:flex px-2 text-ellipsis max-h-24 overflow-hidden">
                    {props.blurb}
                </p>
                <Link href={props.href} target="_blank" className="flex justify-around md:hidden md:group-hover:flex"><button className="p-2 rounded-md">Learn More {`>`}</button></Link>
            </div>
        </div>
    )
}