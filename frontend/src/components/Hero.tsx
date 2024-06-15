import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import images1 from "../assets/img2.png";

const Hero = () => {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
// hii
  return (
    <div
      style={{
        position: "relative",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100%"
      }}
    >
      <img
        src={images1}
        alt="landing-page-image"
        style={{
          boxShadow: "3px 5px 8px rgba(0, 0, 0, .5)",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "70%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Select location"
          value={search1}
          onChange={(e) => setSearch1(e.target.value)}
          style={{ marginRight: "10px", backgroundColor: "transparent", border: "none", fontSize: "20px" }}
        />
        <div style={{ backgroundColor: "rgb(255 50 83)", padding: "5px", borderRadius: "50%" }}>
          <FontAwesomeIcon icon={faSearch} style={{ color: "black", fontSize: "20px" }} />
        </div>
        <div style={{ margin: "0 10px" }} />
        <input
          type="text"
          placeholder="Select events"
          value={search2}
          onChange={(e) => setSearch2(e.target.value)}
          style={{ marginLeft: "10px", backgroundColor: "transparent", border: "none", fontSize: "20px" }}
        />
        <div style={{ backgroundColor: "rgb(255 50 83)", padding: "5px", borderRadius: "50%" }}>
          <FontAwesomeIcon icon={faSearch} style={{ color: "black", fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
