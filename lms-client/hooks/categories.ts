import { useEffect, useState } from 'react';
import axios from 'axios';
import useCourseStore, { Course } from './course-store';

const useCategories = () => {
    const [categories, setCategories] = useState<{name:string,_id:string,__v:number}[]>([])
    const [u,update]=useState(0)
    useEffect(() => {
        fetch('http://localhost:8080/category/categories')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setCategories(data)
            })
    },[u])

  return { categories,update };
};

export default useCategories;