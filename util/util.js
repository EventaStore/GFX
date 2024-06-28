// Delete Product from List By Id
export const deleteProduct = (list, id) => {
  const filter = list.filter((item) => item._id !== id);
  return filter;
};

// Find Product Index From List
export const findProductIndex = (list, slug) => {

  const index = list.findIndex((item) => item.slug === slug);
  return index;
};
export const findProductIndexById = (list, id) => {
  const index = list.findIndex((item) => item._id === id);
  return index;
};


export const nestChildren = (data) => {
  return data.map(category => {
    const nestedChildren = category.children.reduce((acc, child) => {
      if (child.level === 0) {
        acc.push({
          ...child,
          children: category.children.filter(subChild => subChild.parent === child._id)
        });
      }
      return acc;
    }, []);
    return { ...category, children: nestedChildren };
  });
};

export const noScroll = (event) => {
  const body = document.body;
  if (event) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
}

export const openDrawer = (id) => {
  const drawerElement = document.getElementById(id);
  if (drawerElement) {
    drawerElement.classList.add('translate-x-0');
    drawerElement.classList.remove('translate-x-full');
  }
};

export const closeDrawer = (id) => {
  const drawerElement = document.getElementById(id);
  if (drawerElement) {
    drawerElement.classList.add('translate-x-full');
    drawerElement.classList.remove('translate-x-0');
  }
};

