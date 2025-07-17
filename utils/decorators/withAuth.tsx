import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'
import { ComponentType } from 'react'

export function withAuth<P extends {}>(Component: ComponentType<P>) {
    return async function AuthenticatedComponent(props: P) {
        const supabase = await createClient()

        const { data: { user }, error } = await supabase.auth.getUser()

        if (error || !user) {
            redirect('/login')
        }

        return <Component {...props} />
    }
}
