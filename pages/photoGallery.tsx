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
                <Image
                  blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
                  placeholder="blur"
                  loading="lazy"
                  alt="Mountains"
                  src={sig.src}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
