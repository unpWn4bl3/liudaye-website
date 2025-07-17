import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
            <Card className="max-w-md w-full text-center">
                <CardHeader>
                    <h2 className="text-3xl font-bold">Post Not Found</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Could not find the requested blog post.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant="default" asChild>
                        <Link href="/blog">Back to Blog</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
// m 'next/link'

// export default function NotFound() {
//     return (
//         <div className="container mx-auto px-4 py-16 text-center">
//             <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
//             <p className="text-gray-600 mb-8">Could not find the requested blog post.</p>
//             <Link
//                 href="/blog"
//                 className="text-blue-600 hover:text-blue-800 underline"
//             >
//                 Back to Blog
//             </Link>
//         </div>
//     )
// }
