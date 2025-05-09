import { poppins } from "@/lib/fonts";
import Image from "next/image";
import LoginInSteam from "./LoginInSteam";

const Header = () => {
  return (
    <header className="py-3 border-b-2 shadow-xl">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <Image
            src={"/webp-AlienMonster.webp"}
            alt="logo"
            width={40}
            height={40}
          />
          <h1
            className={`${poppins.className} font-bold text-lg leading-none flex flex-col`}
          >
            <span>Steam</span>
            <span>Inventory</span>
            <span>Checker</span>
          </h1>
        </div>
        <LoginInSteam />
      </div>
    </header>
  );
};
export default Header;
