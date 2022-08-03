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
const Profile = () => {
  return (
    <section>
      <div className="container mx-auto my-12 grid grid-cols-4  gap-6">
        <BasicBlock width="full">
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
            <ProfileNav
              to="/profile/kyc-varify"
              icon={<HiOutlineDocumentText />}
            >
              KYC Verification{" "}
            </ProfileNav>
            <ProfileNav
              to="/profile/payment-options"
              icon={<AiOutlineWallet />}
            >
              Payment Options
            </ProfileNav>
            <ProfileNav to="/profile/api-management" icon={<AiOutlineApi />}>
              API Management
            </ProfileNav>
          </nav>
        </BasicBlock>
        <BasicBlock className="col-span-3 flex justify-center" width="full">
          <Outlet />
        </BasicBlock>
      </div>
    </section>
  );
};

export default Profile;
