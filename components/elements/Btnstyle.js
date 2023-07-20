import React from "react";


export default ({ type, href, children, className }) => {
    return (
        <>
            {
                type &&
                <button type={type} className={"btn btn-style2 " + className ?? ""}>
                    {children}
                </button>
            }
            {
            href &&
                <a href={href} className={"btn btn-style2 " + className ?? ""}>
                    {children}
                </a>
            }
        </>
    );
};


