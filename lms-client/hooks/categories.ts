import { useEffect, useState } from 'react';
import useCategoriesStore from './categories-store';

const useCategories = () => {
    const {categories,updateCats} = useCategoriesStore()
    const [u,update]=useState(0)
    useEffect(() => {
        fetch('/api/categories')
        .then(res => res.json())
        .then(data => 
                {
                    updateCats(data)
                }
            )
    },[u])

  return { update };
};

export default useCategories;