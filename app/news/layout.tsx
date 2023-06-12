export const metadata = {
    title: 'News | CF App',
    description: 'Generated by create next app',
    openGraph: {
        title: 'News | CF App',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container min-h-screen mx-auto px-8 py-8 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
