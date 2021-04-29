import React from "react";
import VideoModal from "./VideoModal";

const FetchData = [
  {
    url: "/video/backs1.mp4",
    url2: "/images/backs1.png",
  },
  {
    url: "/video/backs2.mp4",
    url2: "/images/backs2.png",
  },
  {
    url: "/video/ball.mp4",
    url2: "/images/ball1.png",
  },
  {
    url: "/video/ball1.mp4",
    url2: "/images/ball2.png",
  },
  {
    url: "/video/ball2.mp4",
    url2: "/images/ball3.png",
  },
  {
    url: "/video/dovile.mp4",
    url2: "/images/dovile.png",
  },
  {
    url: "/video/freek.mp4",
    url2: "/images/freek.png",
  },
  {
    url: "/video/vandeny.mp4",
    url2: "/images/vandeny.png",
  },
];

function Gal() {
  return (
    <div className='try'>
      {FetchData.map(({ url, url2 }) => (
        <VideoModal url={url} key={url} url2={url2} />
      ))}
      <style jsx>{`
        .try {
          transform: scale(1);
          column-count: 3;
          gap: 0px;
        }
        @media screen and (max-width: 480px) {
          .try {
            line-height: 2;
            column-count: 1;
            column-gap: 0px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

export default Gal;
