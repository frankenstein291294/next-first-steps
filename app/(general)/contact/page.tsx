import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'Contact page description',
    keywords: 'Frank, preparandose, para, crear, su, pagina'
}

export default function ContactPage() {
    return (
        <span className="text-7xl text-center">Contact Page</span>
    );
}
