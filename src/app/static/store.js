import { atomWithReducer } from 'jotai/utils';

const initialPageState = { title: "Home", section: "home" };

const pageReducer = (prev, action) => {
  switch (action.type) {
    case 'section':
      return { ...prev, ...action.value };
    default:
      return prev;
  }
};

export const pageDataStore = atomWithReducer(initialPageState, pageReducer);
