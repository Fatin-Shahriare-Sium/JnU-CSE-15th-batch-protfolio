import React, { useEffect, useState } from "react";
import Head from "next/head";
import SingleStudentPreview from "./component/single-student-preview";
import OpenerOverlay from "./component/opener-overlay";
import Loading from "./component/loding";
import BG from "../assets/bg.jpg";
import dataBase from "./data/allStudents.json";
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
          <img src={BG} alt="" />
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
              return <SingleStudentPreview key={index} address={sig.address} collegeName={sig.collegeName} waNumber={sig.WANumber} fbLink={sig.FBLink} name={sig.name!} gmail={sig.gmail!} uid={sig.uid!} profileImg={sig.profileImg!} />;
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
