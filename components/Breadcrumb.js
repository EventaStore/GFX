

const Breadcrumb = ({ parent, sub, parentURL, title, subChild, noBreadcrumb }) => {
    return (
        <>
            <div className={`background-breadcrumb page-header breadcrumb-wrap ${noBreadcrumb}`}>
                <div className="container">
                    <div className="breadcrumb">
                        <a href={parentURL}>
                            {parent}
                        </a>
                        <span className={!subChild?"text-CS_text_active":""}>{sub}</span>
                        {
                            subChild &&
                            <span className="text-CS_text_active">{subChild}</span>
                        }
                    </div>
                    <h1 className="mt-5">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
