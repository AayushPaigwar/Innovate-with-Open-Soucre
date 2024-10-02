"use client";

import { contributors } from "@/lib/data";



const FeatureCard = ({ name, role, image, github }) => (
    <div
        className="bg-white p-6 h-56 border border-dashed rounded-lg shadow-sm relative overflow-hidden"
        style={{ backgroundImage: "url('/cardbg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        <div className="relative flex flex-col justify-between h-full z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="h-30 w-30">
                    <img src={image} alt={name} className="h-30 w-30 rounded-full" />
                </div>
            </div>
            <div className="">
                <h3 className="text-xl font-bold mt-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="bg-yellow-200 px-1">
                        {name}
                    </a>
                </h3>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    </div>
);

export default function Cards() {
    return (
        <section id="contributors" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contributors</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {contributors.map((contributor) => (
                        <FeatureCard
                            key={contributor.name}
                            name={contributor.name}
                            role={contributor.role}
                            image={contributor.image}
                            github={contributor.github}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}