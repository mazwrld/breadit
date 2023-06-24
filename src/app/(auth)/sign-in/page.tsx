import Link from 'next/link'

import SignIn from '@/components/SignIn'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function SignInPage() {
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        {/* TODO: Remove this link */}
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            '-mt-20 self-start'
          )}
        >
          Home
        </Link>
        <SignIn />
      </div>
    </div>
  )
}
