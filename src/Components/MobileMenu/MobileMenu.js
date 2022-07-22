import React from "react";
import { useDispatch } from "react-redux"; 
import { displayMenu } from "../../Feature/menuSlice";
import BasicBlock from "../Shared/BasicBlock";
import { AiOutlineStock,AiOutlineHistory , AiOutlineWallet, AiOutlineBulb } from "react-icons/ai";
import SingleMobileMenu from "./SingleMobileMenu";
import { FiBookmark } from 'react-icons/fi' 
import { HiOutlineBriefcase } from 'react-icons/hi'
import CurrencySelector from "../Header/CurrencySelector";
const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="m-2"
     
    >
      <BasicBlock width="full">
        <div  onClick={() => {
        dispatch(displayMenu(false));
      }}>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="flex w-full items-center justify-center text-primary">
            {" "}
           <button className="btn bg-white text-primary capitalize w-full">Sign In</button>
          </div>
          <button className="btn capitalize btn-primary">Register</button>
        </div>
        <SingleMobileMenu icon={<AiOutlineStock />} name='Market' to='/market'    />
        <SingleMobileMenu icon={<FiBookmark />} name='Watchlist' to='/watchlist'    />
        <SingleMobileMenu icon={<HiOutlineBriefcase/>} name='Portfolio' to='/portfolio'    />
        <SingleMobileMenu icon={<AiOutlineHistory/>} name='Trade History' to='/trade-history'    />
        <SingleMobileMenu icon={<AiOutlineWallet/>} name='Wallet' to='/wallet'    />
        <SingleMobileMenu icon={<AiOutlineBulb />} name='Learn' to='/learn' />
        <hr className="border border-opacity-25 border-white m-4" />
        </div>
        <div className="px-4">
          
        <CurrencySelector /> 

        </div>
      </BasicBlock>
    </div>
  );
};

export default MobileMenu;
