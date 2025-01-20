import React, { useEffect, useState } from "react";
import Head from "next/head";
import SingleStudentPreview from "./component/single-student-preview";
import OpenerOverlay from "./component/opener-overlay";
import Loading from "./component/loding";
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
          <img src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=" alt="" />
          <div className="homepage-main__image-details">
            <p>
              The <span style={{ color: "#000" }}>Departure </span>SSC Batch 2021
            </p>
            <p> of</p>
            <p style={{ color: "#1111cf" }}>Bhangoora Biggan School and College</p>
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
              return <SingleStudentPreview key={index} name={sig.name!} gmail={sig.gmail!} uid={sig.uid!} profileImg={sig.profileImg!} />;
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
