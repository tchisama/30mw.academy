import create from "zustand";

  
export interface Category {
    _id?:string;
    __v?:number;
    name:string;
}
  


const categories: Category[] =[];

interface userStore {
    categories: Category[];
    updateCats: (updatedCats: Category[]) => void;
}

const useUserStore = create<userStore>((set) => ({
    categories:[],
    updateCats: (updatedCats) => set({ categories: updatedCats }),
}));
  
export default useUserStore;