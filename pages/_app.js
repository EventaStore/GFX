import '../assets/css/tailwindcss.css';
import '../assets/css/index.css';
import '../assets/css/main.css';
import '../globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';

import 'swiper/swiper.min.css';

import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {

    return (
        <>
        
            <Provider store={store}>
                <StorageWrapper>
                   
                        <Component {...pageProps} />
                        <ToastContainer />
                </StorageWrapper>
            </Provider>
        
    </>

    );
}

export default MyApp;
