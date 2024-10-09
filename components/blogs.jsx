import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { blogs } from "@/lib/blogs"

export default function page() {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                                <div className="flex items-center">
                                    <Avatar className="h-6 w-6 mr-2">
                                        <AvatarImage src={blog.avatar} alt={blog.author} />
                                    </Avatar>
                                    <span className="text-sm text-gray-600">{blog.author}</span>
                                    <span className="text-sm text-gray-400 ml-2">• {blog.date}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}