import { useEffect, useState } from 'react';
import axios from 'axios';
import useCourseStore, { Course } from './course-store';
import useCategoriesStore from './categories-store';
import { server } from '@/server';

const useCategories = () => {
    const {categories,updateCats} = useCategoriesStore()
    const [u,update]=useState(0)
    useEffect(() => {
        fetch(server+'category/categories')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                updateCats(data)
            })
    },[u])

  return { update };
};

export default useCategories;