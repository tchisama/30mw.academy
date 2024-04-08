import { FacebookPixelEvents } from '@/components/global/FacebookPixel'
import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      {children}
      <FacebookPixelEvents/>
    </div>
  )
}








export default layout
