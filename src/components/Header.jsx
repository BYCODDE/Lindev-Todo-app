import { UserButton } from "@clerk/clerk-react";


function Header() {
  return (
    <div className="flex justify-between items-center  ">
      <img src="./Burger.svg" alt="Burger" className="cursor-pointer" />
      <UserButton />
      <div className="flex flx-col justify-center items-start gap-[12px] ">
        <img src="./Search.svg" alt="Search" className="cursor-pointer" />
        <div className="w-[1px] h-[16px] bg-[#82868F]"></div>
        <img src="./Profile.svg" alt="Profile" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
