const getmode = () => {
    return typeof window !== "undefined" ? localStorage.getItem('mode') == "true" : false
};

export default getmode;