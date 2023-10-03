import create from "zustand";
import useCategories from "./categories";

  
export interface Category {
    _id?:string;
    __v?:number;
    name:string;
}
  


const categories: Category[] =[];

interface CategoriesStore {
    categories: Category[];
    updateCats: (updatedCats: Category[]) => void;
}

const useCategoriesStore = create<CategoriesStore>((set) => ({
    categories:[],
    updateCats: (updatedCats) => set({ categories: updatedCats }),
}));
  
export default useCategoriesStore;