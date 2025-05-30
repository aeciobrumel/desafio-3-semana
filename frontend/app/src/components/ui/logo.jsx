import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <Link to="/">
      <img
        src="/eja-logo.png"
        alt="Logo"
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  );
}

export default Logo;
