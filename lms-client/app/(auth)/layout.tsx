import React from 'react'

type Props = {
    children: React.ReactNode
}

function layout({children}: Props) {
  return (
    <div>

    {/* <div className='flex justify-center items-center min-h-screen'> */}
        {children}
    {/* </div> */}
    </div>
  )
}

export default layout