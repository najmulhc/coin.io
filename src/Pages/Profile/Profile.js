import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Outlet } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineWallet,
  AiOutlineApi,
} from "react-icons/ai";
import { BiLock, BiDollar } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import ProfileNav from "./ProfileNav";
import ProfileNavTop from "./ProfileNavTop";
import Container from "../../Components/Shared/Container";
const Profile = () => {
  return (
    <Container className="my-12 grid grid-cols-1 md:grid-cols-4  gap-6">
      <BasicBlock width="full hidden md:block">
        <ProfileNavTop />
        <nav>
          <ProfileNav to="/profile" icon={<AiOutlineUser />}>
            My Profile
          </ProfileNav>
          <ProfileNav to="/profile/security" icon={<BiLock />}>
            Security
          </ProfileNav>
          <ProfileNav
            to="/profile/notificaion-preferences"
            icon={<AiOutlineBell />}
          >
            Notification Preferences
          </ProfileNav>
          <ProfileNav to="/profile/currency-preferences" icon={<BiDollar />}>
            Currency Preferences{" "}
          </ProfileNav>
          <ProfileNav to="/profile/kyc-varify" icon={<HiOutlineDocumentText />}>
            KYC Verification{" "}
          </ProfileNav>
          <ProfileNav to="/profile/payment-options" icon={<AiOutlineWallet />}>
            Payment Options
          </ProfileNav>
          <ProfileNav to="/profile/api-management" icon={<AiOutlineApi />}>
            API Management
          </ProfileNav>
        </nav>
      </BasicBlock>
      <BasicBlock className="w-32">
        <h2>test</h2>
      </BasicBlock>
    </Container>
  );
};

export default Profile;
