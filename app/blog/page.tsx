import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
    title: 'Blog - My Personal Website',
    description: 'Read my latest thoughts, ideas, and projects',
}

const posts = getAllPosts()

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">My Blog</h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                    Sharing my thoughts on web development, technology, and personal projects.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                {posts.map((post) => (
                    <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{post.description}</p>
                        </CardContent>
                        <CardFooter className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarIcon className="mr-1 h-4 w-4" />
                                <time>{post.date}</time>
                            </div>
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
