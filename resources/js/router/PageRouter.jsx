import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CompanyProfile from "../pages/public/CompanyProfile";
// import ReactDom from 'react-dom/client';
import { hydrate, render } from "react-dom";
import Home from "../pages/public/Home/Home";
import PrivacyPolicy from "../pages/public/FooterFeature/PrivacyPolicy";
import TermCondition from "../pages/public/FooterFeature/TermCondition";
import ContactUs from "../pages/public/FooterFeature/ContactForm";
import ContactForm from "../pages/public/FooterFeature/ContactForm";
import FAQ from "../pages/public/FooterFeature/FAQ";
import About from "../pages/public/Home/About";
import { Provider } from 'react-redux'
import store from '../redux/store';

function PageRouter() {
    return (<Provider store={store}>
        <Router>
                <Routes>
                    <Route path='/fq/:code' element={<CompanyProfile />} /> 
                </Routes>
                <Routes>
                    <Route path='/' element={< Home />} /> 
                </Routes>
                <Routes>
                    <Route path='/privacy-policy' element={< PrivacyPolicy />} /> 
                </Routes>
                <Routes>
                    <Route path='/terms' element={<TermCondition />} /> 
                </Routes>
                <Routes>
                    <Route path='/contact-us' element={<ContactForm />} /> 
                </Routes>
                <Routes>
                    <Route path='/faq' element={<FAQ />} /> 
                </Routes>
                <Routes>
                    <Route path='/about' element={<About />} /> 
                </Routes>
        </Router>
        </Provider>
    )
}


export default PageRouter;

if (document.getElementById('page-app')) {
    const rootElement = document.getElementById('page-app');
    // rootElement.render(<PageRouter />);
    if (rootElement.hasChildNodes()) {
        hydrate(<PageRouter/>, rootElement);
      } else {
        render(<PageRouter/>, rootElement);
      }
}