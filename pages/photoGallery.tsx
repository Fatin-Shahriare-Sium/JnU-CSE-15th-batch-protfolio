import Image from "next/image";
import React from "react";

const PhotoGallery = () => {
  const d = new Date();

  let seconds = d.getSeconds();
  let imgsArray = [
    { id: 1, src: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg" },
    { id: 2, src: "https://img.youtube.com/vi/irzTCNZvMd0/maxresdefault.jpg" },
    { id: 3, src: "https://img.youtube.com/vi/ZD6C498MB4U/maxresdefault.jpg" },
    { id: 4, src: "https://img.youtube.com/vi/ghzdwjWrWcc/maxresdefault.jpg" },
    { id: 5, src: "https://img.youtube.com/vi/myQyQs3nmEg/maxresdefault.jpg" },
    { id: 1, src: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg" },
    { id: 2, src: "https://img.youtube.com/vi/irzTCNZvMd0/maxresdefault.jpg" },
    { id: 3, src: "https://img.youtube.com/vi/ZD6C498MB4U/maxresdefault.jpg" },
    { id: 4, src: "https://img.youtube.com/vi/ghzdwjWrWcc/maxresdefault.jpg" },
    { id: 5, src: "https://img.youtube.com/vi/myQyQs3nmEg/maxresdefault.jpg" },
    { id: 1, src: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg" },
    { id: 2, src: "https://img.youtube.com/vi/irzTCNZvMd0/maxresdefault.jpg" },
    { id: 3, src: "https://img.youtube.com/vi/ZD6C498MB4U/maxresdefault.jpg" },
    { id: 4, src: "https://img.youtube.com/vi/ghzdwjWrWcc/maxresdefault.jpg" },
    { id: 5, src: "https://img.youtube.com/vi/myQyQs3nmEg/maxresdefault.jpg" },
    { id: 1, src: "https://img.youtube.com/vi/42Ekv1x_Qdo/maxresdefault.jpg" },
    { id: 2, src: "https://img.youtube.com/vi/irzTCNZvMd0/maxresdefault.jpg" },
    { id: 3, src: "https://img.youtube.com/vi/ZD6C498MB4U/maxresdefault.jpg" },
    { id: 4, src: "https://img.youtube.com/vi/ghzdwjWrWcc/maxresdefault.jpg" },
    { id: 5, src: "https://img.youtube.com/vi/myQyQs3nmEg/maxresdefault.jpg" },
  ];
  return (
    <div className="photoGallery_container">
      <div className="masonary">
        {imgsArray.map((sig, i) => {
          return (
            <div style={{ gridRow: `span ${Math.floor(Math.random() * 50) > 17 ? Math.floor(Math.random() * 50) : 15 + i}` }} className="item ">
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <Image alt="Mountains" src={sig.src} layout="fill" objectFit="cover" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
