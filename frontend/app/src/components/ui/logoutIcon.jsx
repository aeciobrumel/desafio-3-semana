import { Link } from "react-router-dom";

function LogoutIcon({ size }) {
  return (
    <div>
      <Link to="/">
        <img
          src="/sign-out.svg"
          alt="Sign Out"
          width={size}
          height={size}
          quality={100}
        />
      </Link>
    </div>
  );
}
export default LogoutIcon;
