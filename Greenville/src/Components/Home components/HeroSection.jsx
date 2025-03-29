import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="heroContainer">
        <div className="backdrop">
      <div className="heroItems">
        <h1 className="heroText ">CONNECTING LAGOS TO A CLEANER FUTURE</h1>
        <p className="heroPara">
          A cleaner Lagos, a cleaner you. let’s manage waste together. For a
          cleaner Lagos and brighter future.
        </p>
        <Link to="/Sign Up">
          <button className="heroBtn ">Get started</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
