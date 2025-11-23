import { atomWithReducer } from 'jotai/utils';

const initialPageState = { 
  title: "Home", 
  section: "home",
  tab: "fishes", 
  type: "", 
  subType: "",
};

const pageReducer = (prev, action) => {
  switch (action.type) {
    case 'section':
      return { ...prev, ...action.value };
    case 'update':
      return { ...prev, ...action.payload };
    default:
      return prev;
  }
};

export const pageDataStore = atomWithReducer(initialPageState, pageReducer);
