import { useTranslation } from 'react-i18next';


const Breadcrumb = ({ parent, sub, parentURL, title, subChild, noBreadcrumb }) => {
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
    const dir = currentLanguage === "ar" ? "rtl" : "ltr"

    return (
        <>
            <div dir={dir}>
                <div className={`background-breadcrumb  ${noBreadcrumb} py-10 ${currentLanguage === "ar" ? "-r" : "-l"} bg-right rtl:bg-left`} >
                    <div className="container">
                        <div className="breadcrumb">
                            <a href={parentURL}>
                                {parent}
                            </a>
                            <span className={!subChild ? "text-CS_text_active" : ""}>{sub}</span>
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
            </div>
        </>
    );
};

export default Breadcrumb;
