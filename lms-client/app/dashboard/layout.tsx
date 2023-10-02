import DashboardProvider from '@/components/DashboardProvider'
import React from 'react'

function layout({children}:{children: React.ReactNode}) {

  return (
    <DashboardProvider>
      <div>{children}</div>
    </DashboardProvider>
  )
}

export default layout