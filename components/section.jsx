"use client";

import { useEffect, useState } from "react";

export default function SecretStats() {
    const [contributorCount, setContributorCount] = useState(0);

    useEffect(() => {
        const fetchContributors = async () => {
            let contributors = [];
            let page = 1;
            let perPage = 100; // Set a high per_page value to minimize the number of requests

            while (true) {
                try {
                    const response = await fetch(
                        `https://api.github.com/repos/AayushPaigwar/Innovate-with-Open-Soucre/contributors?page=${page}&per_page=${perPage}`
                    );
                    if (!response.ok) throw new Error("Failed to fetch contributor data");
                    const data = await response.json();
                    if (data.length === 0) break; // Exit the loop if no more contributors are found
                    contributors = contributors.concat(data);
                    page++;
                } catch (error) {
                    console.error("Error fetching GitHub contributors:", error);
                    break;
                }
            }

            setContributorCount(contributors.length);
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