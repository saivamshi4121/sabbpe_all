import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function UPIPage() {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-sabbpe-cyan hover:text-sabbpe-blue transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="glass-card p-12">
                    <h1 className="font-display text-4xl font-bold mb-4">UPI Payments</h1>
                    <p className="text-muted-foreground text-lg">
                        Accept UPI payments with the highest success rates in the industry.
                        Seamless integration, instant settlements, and comprehensive analytics.
                    </p>
                </div>
            </div>
        </div>
    );
}
