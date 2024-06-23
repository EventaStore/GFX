
import { storage } from '../../util/localStorage';

export const MEN = "MEN";
export const WOMEN = "WOMEN";
export const KIDS = "KIDS";

export function Categories(header) {
  const typeId = storage.gettypeid();
  let type;

  switch (typeId) {
    case 1:
      type = MEN;
      break;
    case 2:
      type = WOMEN;
      break;
    case 3:
      type = KIDS;
      break;
    default:
      type = MEN;
  }

  const selectedCategories = {
    [MEN]: {},
    [WOMEN]: {},
    [KIDS]: {},
  };

  const mergedItems = [];

  if (selectedCategories[type]) {
    selectedCategories[type].forEach(category => {
      if(category.category == header)
      category.subcategories.forEach(subcategory => {
        mergedItems.push(...subcategory.items);
      });
    });
  }

  return mergedItems;
}

export function CategoriesHeader(header) {
  const typeId = storage.gettypeid();
  let type;

  switch (typeId) {
    case 1:
      type = MEN;
      break;
    case 2:
      type = WOMEN;
      break;
    case 3:
      type = KIDS;
      break;
    default:
      type = MEN;
  }

  const selectedCategories = {
    [MEN]: [],
    [WOMEN]: [],
    [KIDS]: [],
  };

  const mergedItems = [];

  if (selectedCategories[type]) {
    selectedCategories[type].forEach(category => {
      mergedItems.push(category.category);
      
    });
  }

  return mergedItems;
}
