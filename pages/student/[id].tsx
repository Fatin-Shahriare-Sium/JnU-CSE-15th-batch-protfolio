import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import dataBase from ".././data/allStudents.json";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const STU = dataBase.find((sig) => sig.Id == id);
  console.log("context,", STU);

  let x = {
    name: STU?.name,
    profileImg: STU?.profileImg,
    rollNumber: STU?.Id,
    gmail: STU?.gmail,
    phoneNumber: STU?.phoneNumber,
    currentlocation: STU?.currentAddress,
    hobby: STU?.hobby,
    hometown: STU?.address,
    bloodGroup: STU?.bloodGroup,
    collegeNameofSTU: STU?.collegeName,
    schoolName: STU?.schoolName,
    socialLinks: {
      facebook: STU?.FbLink,
      wa: STU?.WANumber,
      codeForce: STU?.codeForceIdLink,
      github: STU?.githubLink,
    },
  };
  return {
    props: {
      profileData: x,
    },
  };
};

const SingleStudent: React.FC<{ profileData: any }> = ({ profileData }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@900&family=Poppins:wght@500&display=swap" rel="stylesheet" />
        <title>{`${profileData.name!} - Jagannath University,CSE 15th batch`}</title>
        <meta content={profileData.name!} name="description" />
        <meta property="og:title" content={`${profileData.name!} - Jagannath University,CSE 15th batch  `} />
        <meta property="og:description" content={`${profileData.name!} -one of the students of Jagannath University,CSE 15th batch`} />
        <meta property="og:image" content={profileData.profileImg!} />
        <meta property="og:image:alt" content={profileData.name} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <meta property="twitter:title" content={`${profileData.name!} - Jagannath University,CSE 15th batch`} />
        <meta property="twitter:image" content={profileData.profileImg!} />
        <meta property="twitter:description" content={`${profileData.name!} -one of the students of Jagannath University,CSE 15th batch`} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <div className="signle-student__wrapper container-fluid">
        <div className="row">
          <div className="col-md-5 signle-student__wrapper-left">
            {/* <p className='signle-student__top-name'>Fatin Shahriare Sium</p> */}
            <div className="single-student__img-wrapper ">
              <Image src={profileData.profileImg!} alt={profileData.name!} className="student__profileData-img" layout={"fill"}></Image>
              {/* <img src={profileData.profileImg!} alt={profileData.name!} /> */}
              <div className="single-student__img-below">
                <p className="single-student__status">{profileData.workingAs}</p>
                <div className="single-student__social-link-wrapper">
                  <div className="single-student__social-link">
                    <a target="_blank" href={profileData.socialLinks?.facebook!}>
                      <img src={require("../../assets/facebook.svg")} alt="" />
                    </a>
                  </div>
                  <div className="single-student__social-link">
                    <a target="_blank" href={`https://wa.me/${profileData.socialLinks?.wa!}`}>
                      <img src={require("../../assets/whatsapp.svg")} alt="" />
                    </a>
                  </div>
                  <div className="single-student__social-link">
                    <a target="_blank" href={profileData.socialLinks?.codeForce}>
                      <img src={require("../../assets/codeForce.png")} alt="" />
                    </a>
                  </div>
                  <div className="single-student__social-link">
                    <a target="_blank" href={profileData.socialLinks?.github!}>
                      <img src={require("../../assets/github.svg")} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 signle-student__wrapper-right">
            <div className="single-student__details-wrapper">
              <div className="single-student__details-name">
                <p>{profileData.name}</p>
              </div>

              <div className="single-student__details-other">
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>ID: </span>
                  {profileData.rollNumber}
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Gmail: </span>
                  {profileData.gmail}
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Phone Number: </span>
                  {`${profileData.phoneNumber}`}
                </p>

                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Hometown: </span>
                  {profileData.hometown}
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>College: </span>
                  {profileData.collegeNameofSTU}
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>School: </span>
                  {profileData.schoolName}
                </p>

                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Living At: </span>
                  {profileData.currentlocation}
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Blood Group: </span>
                  {profileData.bloodGroup}
                </p>

                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "700" }}>Hobby: </span>
                  {profileData.hobby}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
