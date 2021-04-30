import React from "react";
import VideoModal from "./VideoModal";

const FetchData = [
  {
    url: "/video/backs1.mp4",
    url2: "/images/backs1.png",
    txt: (
      <p>
        The Backs <br></br> Here Right Next To You
      </p>
    ),
  },
  {
    url: "/video/backs2.mp4",
    url2: "/images/backs2.png",
    txt: (
      <p>
        The Backs <br></br> It Hurts
      </p>
    ),
  },
  {
    url: "/video/ball.mp4",
    url2: "/images/ball1.png",
    txt: (
      <p>
        The Ball And Chain <br></br> Don't Tell Me Everything"
      </p>
    ),
  },
  {
    url: "/video/ball1.mp4",
    url2: "/images/ball2.png",
    txt: (
      <p>
        The Ball And Chain <br></br> Baby Baby Burning
      </p>
    ),
  },
  {
    url: "/video/ball2.mp4",
    url2: "/images/ball3.png",
    txt: (
      <p>
        The Ball And Chain <br></br> It's Too Late
      </p>
    ),
  },
  {
    url: "/video/dovile.mp4",
    url2: "/images/dovile.png",
    txt: (
      <p>
        Dovilė Cibulskaitė <br></br>Spontaniška / Spontaneous
      </p>
    ),
  },
  {
    url: "/video/freek.mp4",
    url2: "/images/freek.png",
    txt: (
      <p>
        Berta Timinskaitė <br></br> We can be Free(k)
      </p>
    ),
  },
  {
    url: "/video/vandeny.mp4",
    url2: "/images/vandeny.png",
    txt: (
      <p>
        WhaleSounds <br></br> Vandeny
      </p>
    ),
  },
];

function Gal() {
  return (
    <div className='try'>
      {FetchData.map(({ url, url2, txt }) => (
        <VideoModal url={url} key={url} url2={url2} txt={txt} />
      ))}
      <style jsx>{`
        .try {
          transform: scale(1);
          column-count: 3;
          gap: 0px;
        }
        @media screen and (max-width: 1000px) {
          .try {
            column-count: 2;
          }
        }

        @media screen and (max-width: 680px) {
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
