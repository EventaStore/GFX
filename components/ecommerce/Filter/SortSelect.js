const SortSelect = ({ updateProductFilters }) => {

    const seleceOption = (e) => {
        console.log(e.target.value)
        updateProductFilters(e.target.value)
    };

    return (
        <>
            <div className="sort-by-product-wrap">
                <div className="sort-by">
                    <strong>
                        <i className="fi-rs-apps-sort mx-2"></i>
                        ترتيب حسب :
                    </strong>
                </div>
                <div className="sort-by-dropdown-wrap custom-select">
                    <select onChange={(e) => seleceOption(e)}>
                        {/* 
                        <option value="">الافتراضي</option>
                        <option>مميز</option>
                        <option>رائج</option> */}
                        <option value="asc">من الأدنى إلى الأعلى</option>
                        <option value="desc">من الأعلى إلى الأدنى</option>
                    </select>
                </div>
            </div>
        </>

    );
};


export default SortSelect;
