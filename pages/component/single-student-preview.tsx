import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fbIcon from "../../assets/facebook.svg";
import ViewProfileButton from "./viewProfileBtn";
const SingleStudentPreview: React.FC<{ name: string; STUId: string; gmail: string; profileImg: string; waNumber: number; fbLink: string; collegeName: string; address: string }> = ({ name, profileImg, gmail, STUId, fbLink, waNumber, collegeName, address }) => {
  function removeBottomLayer() {
    let bottomLayer = document.getElementById("signle-image-preview__details") as HTMLDivElement;
    bottomLayer.style.display = "none";
  }
  function addBottomLayer() {
    let bottomLayer = document.getElementById("signle-image-preview__details") as HTMLDivElement;
    bottomLayer.style.display = "block";
  }
  useEffect(() => {
    let studentPreviewer = document.getElementById("signle-image-preview");
    studentPreviewer?.addEventListener("mouseover", removeBottomLayer)!;
    studentPreviewer?.addEventListener("mouseleave", addBottomLayer)!;
  }, []);

  return (
    <div className="signle-image-preview__wrapper">
      <div className="signle-image-preview">
        <Link href={`/student/${STUId}`}>
          <div id="signle-image-preview__img" className="signle-image-preview__img">
            <Image src={profileImg} layout={"fill"} className="image" alt={name}></Image>
            {/* <img src={profileImg} alt={name} /> */}
          </div>
        </Link>
      </div>
      <div id="signle-image-preview__details" className="signle-image-preview__details">
        <p>👋 {name}</p>
        <p>🏫 {collegeName}</p>
        <p>🗺️ {address}</p>
        <div className="signle-image-preview__details--bottom" style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "2%" }}>
          <div style={{ display: "flex", gap: "2rem", marginTop: "2%" }}>
            <a target="_blank" rel="noopener noreferrer" href={fbLink}>
              <img style={{ height: "32px", width: "32px" }} src={require("../../assets/facebook.svg")} alt="facebook" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${waNumber}`}>
              <img style={{ height: "32px", width: "32px" }} src={require("../../assets/whatsapp.svg")}></img>
            </a>
          </div>

          <ViewProfileButton STUId={STUId} />
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPreview;
