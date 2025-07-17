import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon } from "lucide-react"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/blog'

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const post = getPostBySlug(params.slug)
        return {
            title: `${post.title} - Blog`,
            description: post.description
        }
    } catch {
        return {
            title: 'Post Not Found'
        }
    }
}

export default function BlogPost({ params }: Props) {
    let post;
    try {
        post = getPostBySlug(params.slug)
    } catch {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            <Card className="mb-8">
                <CardHeader className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarIcon className="mr-1 h-4 w-4" />
                                <time>{post.date}</time>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Separator />
                </CardHeader>
                <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </CardContent>
            </Card>
        </article>
    )
}
