'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ErrorPage() {
    const router = useRouter()

    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="text-center text-red-600">Error</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center mb-6">Sorry, something went wrong</p>
                    <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => router.push('/')}
                    >
                        Return Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}