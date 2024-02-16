import { constants } from "fs/promises";
import React from "react";

function Header2() {
  const list = [
    {
      name: "Delhi",
    },
    {
      name: "Jaipur",
    },
    {
      name: "Hydrabad",
    },
    {
      name: "Pune",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-between px-4 items-center h-14 w-full bg-gray-500">
        {list.map((n) => {
          return <span>{n.name}</span>;
        })}
      </div>
    </>
  );
}

export default Header2;
