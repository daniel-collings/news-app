import Link from "next/link"
import Card, { ICardProps } from "./components/Card"
import localData from "@/public/data.json"

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col justify-evenly md:p-20 p-4 mt-12">
      <div>
        <h1>{localData.title}</h1>
        <p>{localData.overview}</p>
      </div>

      <div className="flex flex-row flex-wrap gap-8 py-8 justify-between">
        {localData.data.map((item: ICardProps) => (
          <Card key={item.id} props={item} />
        ))}
      </div>
      <Link href="https://cardanofoundation.org/" className="text-center py-8"><button className="bg-blue-500 p-4 rounded-md text-white shadow-md">Join Us</button></Link>
    </main>
  )
}
