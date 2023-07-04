import React from "react";
import Trips from "./components/Trips";

// cria o titulo da pagina
export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <div>
      <Trips />
    </div>
  );
};

export default Page;
