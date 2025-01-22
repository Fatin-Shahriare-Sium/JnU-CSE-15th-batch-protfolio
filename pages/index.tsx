import React, { useEffect, useState } from "react";
import Head from "next/head";
import SingleStudentPreview from "./component/single-student-preview";
import OpenerOverlay from "./component/opener-overlay";
import Loading from "./component/loding";
import BG from "../assets/bg.jpg";
import dataBase from "./data/allStudents.json";
import Image from "next/image";
const Index = () => {
  let [studentDataToShow, setStudentDataToShow] = useState<[]>(dataBase);
  console.log(dataBase);

  function searchStudent(e: any) {
    //let students = data?.allStudentsData!;
    let searchedStudents = dataBase.filter((sig) => sig.name!.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    setStudentDataToShow(searchedStudents);
  }

  //   useEffect(() => {
  //     let x = [
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //       {
  //         name: "Fatin",
  //         profileImg: "https://img.youtube.com/vi/olgpT_6k7EA/maxresdefault.jpg",
  //         gmail: "sium1206@gmail.com",
  //         uid: "3332",
  //       },
  //     ];

  //     setStudentDataToShow(x);
  //     console.log(process.env.URL);
  //   }, []);
  return (
    <div className="homepage">
      {/* <OpenerOverlay /> */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="homepage-main__image-wrapper">
        <div className="homepage-main__image">
          {/* <img src={BG} alt="" /> */}
          <Image
            alt="Back-Big-Image"
            blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
            placeholder="blur"
            loading="lazy"
            src={BG}
            layout="fill"
            objectFit="cover"
            className="image"
          />
          {/* <Image src={BG} sizes="100vw" width={0} height={0} className="backImg" alt="xd" /> */}
          <div className="homepage-main__image-details">
            <p>
              The <span style={{ color: "#000" }}>CSE </span>15th Batch
            </p>
            <p> of</p>
            <p style={{ color: "#1111cf" }}>Jagannath University,Dhaka</p>
          </div>
        </div>
      </div>
      <div className="container homapage-main__content-wrapper mt-5">
        <div className="homapage-main__content-search-box">
          <input onChange={(event) => searchStudent(event)} type="text" placeholder="search" />
        </div>
        <div className="row homapage-main__content mt-5">
          {studentDataToShow ? (
            studentDataToShow!.map((sig, index) => {
              return <SingleStudentPreview key={index} address={sig.address} STUId={sig.Id} collegeName={sig.collegeName} waNumber={sig.WANumber} fbLink={sig.FbLink} name={sig.name!} gmail={sig.gmail!} uid={sig.uid!} profileImg={sig.profileImg!} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
