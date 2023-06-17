import { FC } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
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

export default page
