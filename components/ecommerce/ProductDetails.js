import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";
import EditProfile from "../drawer/EditProfile";
import { openDrawer } from "../../util/util";
import Drawer from "../elements/drawer";

const ProductDetails = ({
    product,
    cartItems,
    addToCompare,
    addToCart,
    addToWishlist,
    increaseQuantity,
    decreaseQuantity,
    quickView,
}) => {
    const handleCart = (product) => {
        addToCart(product);
        toast("تمت اضافة المنتج إلي السلة");
    };

    const handleCompare = (product) => {
        openDrawer("Test-Drawer")
        addToCompare(product);
        toast("Added to Compare list !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("Added to Wishlist !");
    };

    const [quantity, setQuantity] = useState(1);

    const inCart = cartItems.find((cartItem) => cartItem.id === product._id);

    return (
        <>
            <Drawer id="Test-Drawer" name={'محلات تانيه'} addWhiteShadow={true}>

                {
                    product.vendorOffers.length > 0 &&
                    <div className="flex flex-col gap-4 mt-5 mx-2">
                        {product.vendorOffers.map((offer) => (
                            <div className="bg-white shadow-lg rounded-3xl p-5 text-start border">
                                <div key={offer._id} className="flex flex-row-reverse">
                                    <div>
                                        <span>ممكن تشتري بـ </span>
                                        <span className="current-price text-brand">{offer.price} ج.م </span>
                                        <span>من </span>
                                    </div>
                                    <a className="mx-1 text-green-500">
                                        {offer.vendorName}
                                    </a>
                                </div>
                                <button
                                    onClick={(e) =>
                                        handleCart({
                                            ...product,
                                            quantity: quantity || 1
                                        })
                                    }
                                    className="button button-add-to-cart mt-4 rounded-3xl"
                                >
                                    اضافة الي العربة
                                </button>
                            </div>
                        ))}
                    </div>
                }
            </Drawer>
            <section className="mt-50 mb-50" dir="rtl">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50 mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>
                                            <div className="product-image-slider">
                                                <ThumbSlider product={product} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info pr-30 pl-30">
                                            {
                                                product.group > 1 &&
                                                <span className="stock-status out-stock"> البيع ب {product.group} قطعه </span>
                                            }
                                            <h2 className="title-detail">{product.name_ar || product.name_en}</h2>
                                            <div className="product-detail-rating">
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "40%" }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (32 تقييم)</span>
                                                </div>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price text-brand">{product.price} ج.م </span>
                                                    {product.discount?.percentage &&
                                                        <span>
                                                            <span className="save-price font-md color3 mr-15">{product.discount.percentage}% تخفيض</span>
                                                            <span className="old-price font-md ml-15">{product.oldPrice ? `ج.م ${product.oldPrice}` : null}</span>
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="short-desc mb-30">
                                                <p className="font-lg">{product.desc?.ar}</p>
                                            </div>
                                            <div className="attr-detail attr-color mb-15">
                                                <strong className="ml-10">الالوان</strong>
                                                <ul className="list-filter color-filter">
                                                    {product.variations?.map((clr, i) => (
                                                        <li key={i}>
                                                            <a href="#">
                                                                <span className={`product-color-${clr}`}></span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-size">
                                                <strong className="ml-10">اندازه</strong>
                                                <ul className="list-filter size-filter font-small">
                                                    {product.sizes?.split('-').map((size, index) => (
                                                        <li key={index} className={index === 0 ? 'active' : ''}>
                                                            <a>{size}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="flex gap-2">
                                                <div className="detail-qty border radius" dir="ltr">
                                                    <a onClick={(e) => (!inCart ? setQuantity(quantity > 1 ? quantity - 1 : 1) : decreaseQuantity(product?._id))} className="qty-down">
                                                        <i className="fi-rs-angle-small-down"></i>
                                                    </a>
                                                    <span className="qty-val">{inCart?.quantity || quantity}</span>
                                                    <a onClick={() => (!inCart ? setQuantity(quantity + 1) : increaseQuantity(product._id))} className="qty-up">
                                                        <i className="fi-rs-angle-small-up"></i>
                                                    </a>
                                                </div>
                                                <div className="product-extra-link2 flex gap-1">
                                                    <button
                                                        onClick={(e) =>
                                                            handleCart({
                                                                ...product,
                                                                quantity: quantity || 1
                                                            })
                                                        }
                                                        className="button button-add-to-cart"
                                                    >
                                                        اضافة الي العربة
                                                    </button>
                                                    <a aria-label="add-to-fav" className="action-btn hover-up" onClick={(e) => handleWishlist(product)}>
                                                        <i className="fi-rs-heart"></i>
                                                    </a>

                                                    {
                                                    product.vendorOffers.length > 0 &&
                                                    <a aria-label="compare" className="action-btn hover-up" onClick={(e) => handleCompare(product)}>
                                                        <i className="fi-rs-shuffle"></i>
                                                    </a>
                                                    }

                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-50">
                                                <li className="mb-5">
                                                    SKU :
                                                    <a href="#">FWM15VKT</a>
                                                </li>
                                                <li className="mb-5">
                                                    برچسب‌ها :
                                                    <a href="#" rel="tag" className="me-1">
                                                        لباس
                                                    </a>
                                                </li>
                                                <li>
                                                    موجودی :
                                                    <span className="in-stock text-success mr-5">{product.stock} عدد موجود در انبار</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <>
                                    <ProductTab />
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

// // Fill object in JSX
// const product = {
//     "_id": "566734",
//     "ean": "2144190000001",
//     "name_ar": "سالمون قطع",
//     "name_en": "Salmon Slices",
//     "price": 100,
//     "productUrl": "/mafegy/ar/fish/abo-salmon-slices/p/566734",
//     "stockLevelStatus": "inStock",
//     "supplier": "Carrefour",
//     "category": [
//         {
//             "_id": "FEGY1600000",
//             "name": "Fresh Food",
//             "nameAr": "أطعمة طازجة",
//             "level": 1
//         },
//         {
//             "_id": "FEGY1640000",
//             "name": "Fish & Seafood",
//             "nameAr": "السمك والأطعمة البحرية ",
//             "level": 2
//         },
//         {
//             "_id": "FEGY1640100",
//             "name": "Fish",
//             "nameAr": "سمك",
//             "level": 3
//         }
//     ],
//     "productPhotos": {
//         "thumbnail": "https://cdnprod.mafretailproxy.com/sys-master-root/ha0/h69/16407658299422/566734_main.jpg_200Wx200H",
//         "defaultImages": [
//             "https://cdnprod.mafretailproxy.com/sys-master-root/h80/h76/16407658627102/566734_main.jpg_1700Wx1700H"
//         ]
//     },
//     "vendor": {
//         "_id": "667d1f8d87ed7bdcbf9abcca",
//         "price": 100,
//         "availability": true,
//         "vendorName": "Ahmed M3"
//     },
//     "vendorOffers": [
//         {
//             "_id": "667d1f8d87ed7bdcbf9abcca",
//             "price": 100,
//             "availability": true,
//             "vendorName": "Ahmed M3"
//         },
//         {
//             "_id": "667d1fa987ed7bdcbf9abccb",
//             "price": 150,
//             "availability": true,
//             "vendorName": "Ahmed M2"
//         }
//     ]
// };