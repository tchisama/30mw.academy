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
    owner:{
        fname: string;
        lname: string;
        email: string;
        photo: string;
        id_user:string
    };
    __v?:number;
    category:string;
    createdAt:Date;
    updatedAt:Date;
}
  


const course: Course = {
  owner:{
    fname: "",
    lname: "",
    email: "",
    photo: "",
    id_user:""
  },
    createdAt:new Date(),
    updatedAt:new Date(),
  __v:0,
  title: "",
  description: "",
  price:0,
  image:"",
  _id:"",
  category:"651b4566871ddee58545337c",
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