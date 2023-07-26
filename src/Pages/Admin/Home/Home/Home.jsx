import React from "react";
import TopNav from "../TopNav/TopNav";
import SummaryCard from "../SummaryCard/SummaryCard";
import Inbox from "../Inbox/Inbox";
import RecentActivity from "../RecentActivity/RecentActivity";
import ToDaysSales from "../ToDaysSales/ToDaysSales";
import TopFixedNav from "../../TopFixedNav/TopFixedNav";

const Home = () => {
  return (
    <div className="p-5">
      <h2 className="text-[#A7B7DD] text-base lg:text-left text-center">Total Revenue</h2>
      <TopNav></TopNav>
      <SummaryCard></SummaryCard>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <Inbox></Inbox>
          <RecentActivity></RecentActivity>
        </div>
        <div className="bg-[#16193A]  mt-5 rounded-2xl py-3 customFonts max-h-full">
          <ToDaysSales></ToDaysSales>
        </div>
      </div>
    </div>
  );
};

export default Home;
