import { Link } from "react-router-dom";

function Home({ size }) {
  return (
    <div>
      <Link to="/">
        <img
          src="/house.svg"
          alt="HouseIcon"
          width={size}
          height={size}
          quality={100}
        />
      </Link>
    </div>
  );
}
export default Home;
