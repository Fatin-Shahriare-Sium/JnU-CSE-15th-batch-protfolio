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
            <Image
              blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
              placeholder="blur"
              loading="lazy"
              src={profileImg}
              layout={"fill"}
              className="image"
              alt={name}
            ></Image>
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
