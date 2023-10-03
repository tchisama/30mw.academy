import { useEffect, useState } from 'react';
import axios from 'axios';
import useCourseStore, { Course } from './course-store';
import useCategoriesStore from './categories-store';

const useCategories = () => {
    const {categories,updateCats} = useCategoriesStore()
    const [u,update]=useState(0)
    useEffect(() => {
        fetch('http://localhost:8080/category/categories')
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