"use client"
import useCategories from '@/hooks/categories'
import React, { useEffect } from 'react'


type Props = {
    children: React.ReactNode
}

const CatsProvider = ({children}: Props) => {
    const {update} = useCategories()
    useEffect(() => {
        update(p => p + 1)
    },[])
  return (
    <div>{children}</div>
  )
}
export default CatsProvider