import { UserButton } from "@clerk/clerk-react";
import Addtask from "./Addtask";

function Header() {
  return (
    <>
      <div className="py-[8px] px-[16px]  border-b border-[#C7CAD0]  flex justify-between items-center  ">
        <img src="./Burger.svg" alt="Burger" className="cursor-pointer" />
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "40px",
                height: "40px",
              },
            },
          }}
        />
        <div className="flex flx-col justify-center items-start gap-[12px] ">
          <img
            src="./Search.svg"
            alt="Search"
            className="cursor-pointer w-[20px] h-[20px]"
          />
          <div className="w-[1px] h-[20px] bg-[#82868F]"></div>
          <img
            src="./Profile.svg"
            alt="Profile"
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
      </div>
      <Addtask />
    </>
  );
}

export default Header;
