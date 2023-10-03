import { Loader } from 'lucide-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex h-screen justify-center items-center'>
        <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
    </div>
  )
}

export default Loading