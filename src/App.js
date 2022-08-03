import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Home from "./Pages/Home/Home";
import Learn from "./Pages/Learn/Learn";
import Login from "./Pages/Login/Login";
import Market from "./Pages/Market/Market";
import PasswordRecovery from "./Pages/PasswordRecovery/PasswordRecovery";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Pages/Profile/Profile";
import AccountBasic from "./Pages/Profile/ProfileSub/AccountBasic ";
import ApiManagement from "./Pages/Profile/ProfileSub/ApiManagement";
import CurrencyPreferance from "./Pages/Profile/ProfileSub/CurrencyPreferance";
import KYC from "./Pages/Profile/ProfileSub/KYC";
import Notification from "./Pages/Profile/ProfileSub/Notification";
import PaymentOptions from "./Pages/Profile/ProfileSub/PaymentOptions";
import Security from "./Pages/Profile/ProfileSub/Security";
import Register from "./Pages/Register/Register";
import TradeHistory from "./Pages/TradeHistory/TradeHistory";
import Watchlist from "./Pages/Watchlist/Watchlist";
const App = () => {
  const taha = useSelector((state) => state.currency.value);
  const menu = useSelector((state) => state.menu.value);
  console.log(taha);
  return (
    <main className="min-w-screen min-h-screen bg-base-100">
      <Header />
      {menu ? (
        <MobileMenu />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trade-history" element={<TradeHistory />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<PasswordRecovery />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/" element={<AccountBasic />} />
              <Route path="/profile/security" element={<Security />} />
              <Route path="/profile/notificaion-preferences" element={ <Notification />} /> 
              <Route path="/profile/currency-preferences" element={ <CurrencyPreferance />} /> 
              <Route path="/profile/kyc-varify" element={<KYC />} /> 
              <Route path="/profile/payment-options" element={<PaymentOptions />} /> 
              <Route path="/profile/api-management" element={<ApiManagement />} /> 
              
              
          </Route>
        </Routes>
      )}
      <Footer />
    </main>
  );
};

export default App;
