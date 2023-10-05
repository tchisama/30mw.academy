"use client"
import useCategories from '@/hooks/categories'
import useFetchUser from '@/hooks/fetch-user'
import React, { useEffect } from 'react'


type Props = {
    children: React.ReactNode
}

const CatsProvider = ({children}: Props) => {
    const {update} = useCategories()
    useFetchUser()
    useEffect(() => {
        update(p => p + 1)
    },[])
  return (
    <div>{children}</div>
  )
}
export default CatsProvider