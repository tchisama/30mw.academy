import create from "zustand";

  
export interface User {
    fname: string;
    lname: string;
    email: string;
    photo: string;
    id_user: string;
    _id?:string;
    __v?:number;
}
  


const user: User = {
  fname:"",
  lname:"",
  __v:0,
  _id:"",
  email:"",
  photo:"",
  id_user:"",
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