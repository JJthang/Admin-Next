import HomeHeader from "@/components/cm/HomeHeader";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Home: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <HomeHeader />
      {children}
    </React.Fragment>
  );
};

export default Home;
