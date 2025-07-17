import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoutButton } from '@/components/LogoutButton'
import { RequireAuth } from '@/utils/decorators/requireAuth'
import { createClient } from '@/utils/supabase/server'

class PrivatePage {
    @RequireAuth()
    static async generate() {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw new Error('User not found')

        return (
            <div className="container mx-auto py-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome to Your Private Space</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">Hello, {user.email}</p>
                        <div className="mt-4">
                            <LogoutButton />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default async function Page() {
    return PrivatePage.generate()
}