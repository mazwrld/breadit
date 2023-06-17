import { type FC } from 'react'

import { Icons } from './Icons'

export const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6 sm:h-6 sm:w-6" />
      </div>
      SignIn
    </div>
  )
}
