'use client'

import Icons from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/hooks/use-toast'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  async function handleGoogleSignIn() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast({
        title: 'Oops!',
        description: 'There was a minor problem signing in with Google.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleGoogleSignIn}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Google
      </Button>
    </div>
  )
}
