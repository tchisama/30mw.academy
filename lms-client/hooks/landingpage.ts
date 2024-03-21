// a zustand store
import { SectionType } from "@/components/LandingPage/Section";
import create from "zustand";
type StateType = {
  sections: SectionType[];
  setSections: (sections: SectionType[]) => void;
  addSection: (section: SectionType, index?: number) => void;
  updateSection: (section: SectionType) => void;
  selectedSection: SectionType | null;
  setSelectedSection: (section: SectionType | null) => void;
};

export const useLandingPage = create<StateType>()((set) => ({
  sections: [],
  setSections: (sections: SectionType[]) => set({ sections }),
  addSection: (section: SectionType, index?: number) =>
    set((state) => {
      let newState = { ...state };
      if (index) {
        newState.sections.splice(index, 0, section);
      } else {
        newState.sections.push(section);
      }
      return newState;
    }),
  selectedSection: null,
  setSelectedSection: (section: SectionType | null) =>
    set({ selectedSection: section }),
  updateSection: (section: SectionType) =>
    set((state) => {
      let newState = { ...state };
      const index = newState.sections.findIndex((s) => s.id === section.id);
      if (index !== -1) {
        newState.sections[index] = section;
        newState.selectedSection = section;
      }
      return newState;
    }),
}));

