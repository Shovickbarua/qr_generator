import React from 'react'
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../components/layout/Main';
import Sidenav from '../components/layout/Sidenav';
import QrGenerator from '../components/QrGenerator';
import ChooseQrCode from '../pages/ChooseQrCode';
import ContentQrCode from '../pages/ContentQrCode';
import DesignQrCode from '../pages/DesignQrCode';
import QrGenerate from '../pages/Qrgenerate';
import { Provider } from 'react-redux'
import store from '../redux/store';
import CompanyProfile from '../pages/public/CompanyProfile';

function AccountRouter() {
    return (
        <Router>
            <Main>
                <Routes>
                    {/* <Route path='/account' element={<QrGenerate />} /> */}
                    <Route path='/account/my-qrcodes/qrdesign' element={<DesignQrCode />} />
                    <Route path='/account/my-qrcodes/qrcontent' element={<ContentQrCode />} />
                    <Route path='/account/my-qrcodes/qrcontent/:id' element={<ContentQrCode />} />
                    <Route path='/account/my-qrcodes/choose-qrstyle' element={<ChooseQrCode />} />
                    <Route path='/account/my-qrcodes' element={<QrGenerate />} />
                    <Route path='/account' element={<QrGenerate />} />
                </Routes>
            </Main>
        </Router>
    )
}


export default AccountRouter;

if (document.getElementById('account-app')) {
    const root2 = ReactDom.createRoot( document.getElementById('account-app'));
    root2.render(
        <Provider store={store}>
            <AccountRouter />
        </Provider>, document.getElementById('account-app')
    )
}
