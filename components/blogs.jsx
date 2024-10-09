import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { blogs } from "@/lib/blogs"
import Link from "next/link"

export default function Blogs() {

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <h2 className="block text-3xl mb-2 font-semibold text-center text-gray-900 sm:text-4xl">
                Feature Your Blogs
            </h2>
            <p className="text-center text-gray-600  mb-10">
                feature your blogs here and get more readings to your blogs
            </p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <Card key={index} className="overflow-hidden h-fit">
                        <Link href={`${blog.link}`}>
                            <CardContent className="p-0">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 border-t">
                                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                                    <div className="flex items-center">
                                        <Avatar className="h-6 w-6 mr-2">
                                            <AvatarImage src={blog.avatar} alt={blog.author} />
                                        </Avatar>
                                        <span className="text-sm text-gray-600">{blog.author}</span>
                                        <span className="text-sm text-gray-400 ml-2">• {blog.date}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}