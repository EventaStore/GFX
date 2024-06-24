import { connect } from "react-redux";
import {storage} from '../../../util/localStorage';
import {Categories , CategoriesHeader} from '../../../redux/stores/categories';
import React, { useEffect } from 'react';
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory , gender = [] }) => {

    return (
        <>
            <ul>
                
                
            </ul>
        </>
    );
};

export default CategoryProduct;
