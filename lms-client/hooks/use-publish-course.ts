import { useState } from 'react';
import axios from 'axios';
import useCourseStore, { Course } from './course-store';

const usePublishCourse = () => {
  const [publishing, setPublishing] = useState(false);
  const {course}=useCourseStore()

  const publish = async () => {
    setPublishing(true);
    try {
      const response = await axios.post(`http://localhost:8080/update-course/${course._id}`, course);
      console.log(response.data);
      setTimeout(() => {
        setPublishing(false);
      }, 800);
    } catch (error) {
      console.error(error);
      setPublishing(false);
    }
  };

  return { publish, publishing };
};

export default usePublishCourse;
