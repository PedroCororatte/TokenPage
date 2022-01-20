import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="Header">
        <div className="Title">
          <h1>CryptoToken</h1>
        </div>
        <div className="Nav">
          <h4>Home</h4>
          <h4>KeyFeatures</h4>
          <h4>Found Rising</h4>
          <h4>FAQ</h4>
          <button className="btnTypeA">Try for free</button>
        </div>
      </div>
      <div className="Main">
        <h1>Welcome next level cryptocurrency token with faster transfer</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h4>
      </div>
    </>
  );
}
