import Image from "next/image";
import React from "react";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

const PhotoGallery = () => {
  const ImageViewer = dynamic(() => import("react-simple-image-viewer"), {
    loading: () => <p>Loading...</p>,
  });

  const d = new Date();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
        {imgsArray.map((sig, index) => {
          return (
            <div style={{ gridRow: `span ${Math.floor(Math.random() * 50) > 17 ? Math.floor(Math.random() * 50) : 15 + index}` }} className="item ">
              <div style={{ width: "100%", height: "100%", position: "relative", border: "1px solid #4e77f6" }}>
                <Image
                  blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
                  placeholder="blur"
                  loading="lazy"
                  alt="Mountains"
                  src={sig.src}
                  layout="fill"
                  objectFit="cover"
                  onClick={() => openImageViewer(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {isViewerOpen && <ImageViewer closeComponent={<p style={{ fontSize: "2rem", opacity: "1!important", color: "white", fontWeight: "bold" }}>Close</p>} backgroundStyle={{ backgroundColor: "#41464b", zIndex: 50 }} src={imgsArray.map((sig) => sig.src)} currentIndex={currentImage} disableScroll={false} closeOnClickOutside={true} onClose={closeImageViewer} />}
    </div>
  );
};

export default PhotoGallery;
