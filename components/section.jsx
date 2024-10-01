"use client";

import { useEffect, useState } from "react";

export default function SecretStats() {
    const [contributorCount, setContributorCount] = useState(0);

    useEffect(() => {
        // Fetch contributor data from the GitHub API
        const fetchContributors = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/AayushPaigwar/Innovate-with-Open-Soucre/contributors"
                );
                if (!response.ok) throw new Error("Failed to fetch contributor data");
                const data = await response.json();
                setContributorCount(data.length);
            } catch (error) {
                console.error("Error fetching GitHub contributors:", error);
            }
        };

        fetchContributors();
    }, []);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                    Already {contributorCount}+ Contributors <br /> Add Yours Today!
                </h2>
            </div>
        </section>
    );
}
