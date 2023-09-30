import create from "zustand";

interface Video {
    title: string;
    url: string;
    duration: number; // in seconds
    id:string
}
  
interface CourseSection {
    title: string;
    description: string;
    videos: Video[];
    id:string
}
  
interface Course {
    title: string;
    description: string;
    sections: CourseSection[];
    price: number; // Add the price property
    image:string;
    _id:string;
    category:string;
}
  


const course: Course = {
  title: "test title",
  description: "Learn a test course name",
  price:30,
  image:"",
  _id:"1",
  category:"",
  sections: [
    {
      title: "Getting Started",
      description: "An introduction to TypeScript basics",
      id:"1",
      videos: [
        {
          title: "Setting up TypeScript",
          url: "https://example.com/ts-setup",
          duration: 10 * 60, // 10 minutes,
          id:"1",
        },
        {
          title: "Types and Variables",
          url: "https://example.com/ts-types",
          duration: 15 * 60, // 15 minutes,
          id:"2"
        },
      ],
    },
    {
      title: "Advanced Topics",
      description: "Dive deeper into TypeScript features",
      id:"2",
      videos: [
        {
          title: "Generics",
          url: "https://example.com/ts-generics",
          duration: 20 * 60, // 20 minutes,
          id:"3"
        },
        {
          title: "Decorators",
          url: "https://example.com/ts-decorators",
          duration: 18 * 60, // 18 minutes,
          id:"4"
        },
      ],
    },
  ],
};


interface CourseStore {
    course: Course;
    updateCourse: (updatedCourse: Course) => void;
}

const useCourseStore = create<CourseStore>((set) => ({
    course,
    updateCourse: (updatedCourse) => set({ course: updatedCourse }),
}));
  
export default useCourseStore;