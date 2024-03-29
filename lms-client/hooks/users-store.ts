import {create} from "zustand";

  
export interface User {
    fname: string;
    lname: string;
    email: string;
    photo: string;
    id_user: string;
    _id?:string;
    __v?:number;
    courses_count:number;
    rule:"admin"|"teacher"|"user"|"contributor";
    createdAt:Date;
    updatedAt:Date;
}
  


const user: User = {
  fname:"",
  lname:"",
  rule:"user",
  __v:0,
  _id:"",
  email:"",
  photo:"",
  id_user:"",
  courses_count:0,
    createdAt: new Date(),
    updatedAt: new Date(),
};


interface userStore {
    user: User;
    updateUser: (updatedUser: User) => void;
}

const useUserStore = create<userStore>((set) => ({
    user,
    updateUser: (updatedUser) => set({ user: updatedUser }),
}));
  
export default useUserStore;
