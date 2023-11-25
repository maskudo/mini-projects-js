import { logoImg, menuImg } from "../constants";

function Header() {
  return (
    <header className="md:mx-[20%]">
      <nav className="flex justify-between items-center py-8 px-2">
        <img src={logoImg} alt="logo" width="186px" height="58px" />
        <ul className="md:flex md:gap-8 hidden ">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="border border-white h-[50px] w-[140px] max-w-[25%]">
          Login
        </button>
        <img src={menuImg} alt="menu" className="md:hidden" />
      </nav>
    </header>
  );
}

export default Header;
