import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About page',
    description: 'About page description',
    keywords: 'Frank, preparandose, para, crear, su, pagina'
}

export default function AboutPage() {
    return (
        <span className="text-7xl text-center">About Page</span>
    );
}
