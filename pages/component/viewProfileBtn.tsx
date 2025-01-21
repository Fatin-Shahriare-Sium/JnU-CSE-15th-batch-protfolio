import { useRouter } from "next/dist/client/router";
import React from "react";

const ViewProfileButton = ({ STUId }: { STUId: string }) => {
  let router = useRouter();
  const buttonStyle = {
    backgroundColor: "#0d6ee3",
    color: "white",
    width: "95%",
    padding: "7px",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
  };

  return (
    <button style={{ ...buttonStyle, borderRadius: "5px", marginBottom: ".5rem", marginTop: "5%" }} onClick={() => router.push(`/student/${STUId}`)}>
      View Profile
    </button>
  );
};

export default ViewProfileButton;
