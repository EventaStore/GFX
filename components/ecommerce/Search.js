import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Search = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);

    useEffect(() => {
        const storedHistory = localStorage.getItem("searchHistory");
        if (storedHistory) {
            setSearchHistory(JSON.parse(storedHistory));
        }
    }, []);

    useEffect(() => {
        if (router.query.search) {
            setSearchTerm(router.query.search);
        }
    }, [router.query.search]);

    const handleSearch = () => {
        if (searchTerm) {
            const updatedHistory = [searchTerm, ...searchHistory.filter(term => term !== searchTerm)].slice(0, 10); // Keep last 10 unique terms
            setSearchHistory(updatedHistory);
            localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
        }

        router.push({
            pathname: "/products",
            query: searchTerm ? { search: searchTerm } : {},
        });
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleFocus = (visible) => {
        setSearchDropdownVisible(visible);
    };
    const toggleClick = () => {
        setToggled(!isToggled);
        isToggled
            ? document
                .querySelector("body")
                .classList.remove("mobile-menu-active")
            : document
                .querySelector("body")
                .classList.add("mobile-menu-active");
    };
    return (
        <>
            <div className="flex">
                <input
                    className="searchInput border border-[#00000040] dark:border-[#3E3E3E] hover:border-transparent hover:bg-[#EAEEF0] focus:border-2 focus:border-primary focus:bg-transparent text-sm h-9 w-1/2 bg-[#F5F5F5] rounded-full px-5"
                    value={searchTerm || ""}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => handleFocus(true)}
                    onBlur={() => setTimeout(() => handleFocus(false), 200)}
                    onKeyDown={handleInput}
                    type="text"
                    placeholder={`${t("Search")}...`}
                />
                {searchDropdownVisible && searchHistory.length > 0 && (
                    <div className="dialog-history absolute w-[400px] min-h-32 active z-40 bg-gray-100 border rounded-[10px]">
                        <ul className="gap-1 flex flex-wrap p-5 rounded-full ">
                            {searchHistory.map((item, index) => (
                                <li className="py-1 px-2 border border-[#0000004D] dark:border-[#FFFFFF4D] rounded-full" key={index}>
                                    <Link href={item ? `/products?search=${item}` : '/project'}>
                                        <div className="text-lg mx-4">{item}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
