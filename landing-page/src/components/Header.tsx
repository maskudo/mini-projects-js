import { logoImg } from "../constants";

function Header() {
  return (
    <header className="mx-[20%]">
      <nav className="flex justify-between items-center py-8">
        <img src={logoImg} alt="logo" width="186px" height="58px" />
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="border border-white px-10 py-2 h-[52px] w-[140px]">
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
