import { login, signup } from './action'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                        <div className="pt-4">
                            <Button className="w-full mb-2" formAction={login}>Log in</Button>
                            <Button className="w-full" variant="outline" formAction={signup}>Sign up</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}