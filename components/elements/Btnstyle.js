import React from "react";


export default ({children,className}) => {
    return (
        <>
         <button className= {"btn btn-style2 "+className }>
            {children}
        </button>
        </>
    );
};


