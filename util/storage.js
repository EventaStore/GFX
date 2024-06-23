const getmode = () => {
    return localStorage.getItem('mode') == "true"
};

export default getmode;