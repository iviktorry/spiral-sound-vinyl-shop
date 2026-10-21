import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Login</li>
          <li>Cart</li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </nav>
      <div>
        <img src={logo} alt="Logo" />
        <div>
          <h1>Spiral Sound</h1>
          <p>The best vinyl</p>
        </div>
      </div>
    </header>
  );
}
