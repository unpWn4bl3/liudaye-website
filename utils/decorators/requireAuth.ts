import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export function RequireAuth() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value

        descriptor.value = async function (...args: any[]) {
            const supabase = await createClient()
            const { data: { user }, error } = await supabase.auth.getUser()

            if (error || !user) {
                redirect('/login')
            }

            return originalMethod.apply(this, args)
        }

        return descriptor
    }
}
