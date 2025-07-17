import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    tags: string[]
    content: string
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
        return {
            slug: fileName.replace(/\.mdx$/, '')
        }
    })
}

export function getPostBySlug(slug: string): BlogPost {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        content
    }
}

export function getAllPosts(): BlogPost[] {
    const slugs = getAllPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug.slug))
        .sort((a, b) => (a.date > b.date ? -1 : 1))

    return posts
}
