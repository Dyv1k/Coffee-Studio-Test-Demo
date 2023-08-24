import MainLayout from "@/layouts/MainLayout";

import 'normalize.css'
import '@/styles/global/fonts.scss'
import '../styles/global/title.scss'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/global/global.scss'

function MyApp({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	)
}

export default MyApp
