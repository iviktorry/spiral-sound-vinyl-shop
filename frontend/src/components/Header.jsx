import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col">
      <nav className="bg-neutral-700 px-3 py-2 lg:py-3">
        <ul className="flex justify-end gap-2">
          <li>Login</li>
          <li>Cart</li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-sm bg-neutral-600 py-0.5 pl-2"
            />
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-2 bg-neutral-800 p-2 lg:px-6 lg:py-4">
        <div className="sm:w-[30%]">
          <img src={logo} alt="Logo" className="w-26 md:w-32 xl:w-35" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-heading text-5xl text-red-700 uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            Spiral Sound
          </h1>
          <p className="text-2xl">The best vinyl</p>
        </div>
      </div>
    </header>
  );
}
