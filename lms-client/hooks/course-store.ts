import create from "zustand";

export interface Video {
    title: string;
    url: string;
    duration: number;// in seconds
    _id?:string;
    free:boolean;
    id_video:string
}
  
interface CourseSection {
    title: string;
    description: string;
    videos: Video[];
    id_section:string;
    _id?:string;
}
  
export interface Course {
    title: string;
    description: string;
    sections: CourseSection[];
    price: number; // Add the price property
    image:string;
    _id?:string;
    owner:string;
    __v?:number;
    category:string;
}
  


const course: Course = {
  owner:"",
  __v:0,
  title: "",
  description: "",
  price:0,
  image:"",
  _id:"",
  category:"",
  sections: [],
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