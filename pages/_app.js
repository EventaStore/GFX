import '../assets/css/tailwindcss.css';
import '../assets/css/index.css';
import '../assets/css/main.css';
import '../globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import store from "../redux/store";

import 'swiper/swiper.min.css';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
