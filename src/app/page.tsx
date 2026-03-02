"use client";

import { useState } from "react";

export default function Home() {
    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const testApi = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/hello");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-background to-neutral-900">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl">
                <div className="space-y-4">
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Next.js Boilerplate
                    </h1>
                    <p className="text-neutral-400 text-lg sm:text-xl max-w-lg leading-relaxed">
                        A premium starting point for your next big idea.
                        Pre-configured with TypeScript, Tailwind CSS, and a functional API layer.
                    </p>
                </div>

                <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
                    <button
                        onClick={testApi}
                        disabled={loading}
                        className="rounded-full border border-solid border-transparent transition-all flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] text-sm sm:text-base h-12 py-0 px-8 font-medium shadow-lg hover:shadow-blue-500/20 disabled:opacity-50"
                    >
                        {loading ? "Fetching..." : "Test Hello API"}
                    </button>

                    <a
                        className="rounded-full border border-solid border-white/[.08] dark:border-white/[.145] transition-all flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 py-0 px-8 font-medium"
                        href="https://nextjs.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read documentation
                    </a>
                </div>

                {data && (
                    <div className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">API Response</h2>
                        <pre className="text-2xl font-mono text-emerald-400">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                )}
            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-neutral-500 text-sm">
                <p>© 2026 Next.js Premium Boilerplate</p>
            </footer>
        </div>
    );
}
