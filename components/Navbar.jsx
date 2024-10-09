"use client";

import { useEffect, useState } from "react";
import { Star, Github, GitPullRequestArrow } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [repoData, setRepoData] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    // Replace 'owner' and 'repo' with the actual GitHub owner and repo name
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/AayushPaigwar/Innovate-with-Open-Soucre"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setRepoData({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching GitHub repo data:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold">
          <div className="p-2 bg-green-300 rounded-md">
            <GitPullRequestArrow className="text-green-800" />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="#howToContribute"
          className=" text-gray-600 hover:text-gray-900"
        >
          How To Contribute
        </Link>
        <Link
          href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre"
          className=" text-gray-600 hover:text-gray-900"
        >
          Github
        </Link>
        <Link
          href="#contributors"
          className=" text-gray-600 hover:text-gray-900"
        >
          Contributors
        </Link>
        <Link
          href="#blogs"
          className=" text-gray-600 hover:text-gray-900"
        >
          Add Blog
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre/stargazers">
            <span className="flex">
              <Star className="w-4 h-4 mr-1" />
              {repoData.stars.toLocaleString()}
            </span>
          </Link>
          <Link href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre/fork">
            <span className="ml-4">
              Forks: {repoData.forks.toLocaleString()}
            </span>
          </Link>
        </div>
        <Link href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre">
          <Button className=" bg-black text-white hover:bg-gray-800">
            <Github className="mr-2" /> Contribute
          </Button>
        </Link>
      </div>
    </nav>
  );
}
