// import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
		<>
			<BrowserRouter>
				<div id="back-to-top-anchor" />
				<Navbar />
				<AppRoutes />
				<Footer />
				<ScrollToTop />
			</BrowserRouter>
		</>
    );
}

export default App;
