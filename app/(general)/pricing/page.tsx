import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'Pricing page description',
    keywords: 'Frank, preparandose, para, crear, su, pagina'
}

export default function PricingPage() {
    return (
        <span className="text-7xl text-center">Pricing Page</span>
    );
}
