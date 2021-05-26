import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { FaRegWindowClose, FaRegPlayCircle } from "react-icons/fa";
import styles from "../styles/Art.module.css";

// add on hover image and text

const OpenModal = ({ setIsOpen, url, isOpen, portalContainer }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className='isOpen'>
          <FaRegWindowClose
            size={50}
            className={styles.closeBtn}
            onClick={() => setIsOpen(!isOpen)}
          />
          <style jsx>{`
            .gallery {
              margin: 0 auto;
              display: flex;
            }
            .isOpen {
              display: flex;
              align-items: center;
              justify-content: center;
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.7);
              max-height: 100vh;
            }
            .gallery img {
              width: auto;
              height: 90vh;
              margin: 0 auto;
            }
            .gallery-image {
              width: 100%;
              height: auto;
              margin: 0;
            }
            .img-btn {
              cursor: pointer;
              border: none;
              outline: none;
              background-color: rgba(0, 0, 0, 0);
              display: flex;
            }
            .img-btn video {
              z-index: 10;
            }
            @media screen and (max-width: 480px) {
              .gallery {
              }
              .gallery img {
                width: 95vw;
                height: auto;
              }
              .gallery-image {
                width: 100%;
                height: auto;
              }
              .img-btn {
                margin: 0 auto;
                padding: 0;
              }
            }
          `}</style>

          <div className='gallery'>
            <figure className='gallery-image'>
              <button className='img-btn'>
                <video
                  width='100%'
                  height='auto'
                  autoPlay
                  controls
                  disablePictureInPicture
                  controlsList='nodownload noremoteplayback'
                >
                  <source src={url} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </button>
            </figure>
          </div>
        </div>,
        portalContainer.current
      )
    : null;
};

const Item = ({ url, url2, txt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const portalContainer = useRef(null);

  useEffect(() => {
    portalContainer.current = document.getElementById("image-modal");
  }, []);

  const content = (
    <div>
      <style jsx>{`
        .gallery {
          margin: 0;
        }
        .gallery img {
          width: 100%;
          height: 220px;
        }
        .gallery-image {
          width: 100%;
          height: 220px;
          margin: 0 auto;
          padding: 0;
        }
        .img-btn {
          cursor: pointer;
          border: none;
          outline: none;
          background: transparent;
          padding: 0;
          width: 100%;
        }
        .fig-btn {
          display: flex;
          flex-direction: column;
        }
        .fig-btn button{
          transition-duration: 0.3s;
          color: white;
        }
        .fig-btn button:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition-duration: 0.3s;
          color: #38be51;
        }
        @media screen and (max-width: 480px) {
          .gallery {
            margin: 0 auto;
          }

          .gallery img {
            height: auto;
            padding: 1rem 0 0 0;
          }
        }
      `}</style>
      <div
        className='gallery'
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <figure className={hover ? styles.onHoverDiv : styles.onHoverDivNone}>
          <button className='img-btn' onClick={() => setIsOpen(!isOpen)}>
            <img src={url2} alt='video' />
          </button>
          <div className='fig-btn'>
            {txt}
            <button onClick={() => setIsOpen(!isOpen)} style={{background: 'transparent', border: 'none'}}>
              <FaRegPlayCircle size={60} />
            </button>
          </div>
        </figure>

        <img
          src={url2}
          alt='video'
          style={hover ? { display: "none" } : { display: "flex" }}
        />
      </div>
    </div>
  );

  return (
    <div>
      {content}
      <div>
        {isOpen ? (
          <OpenModal
            isOpen={isOpen}
            url={url}
            setIsOpen={setIsOpen}
            portalContainer={portalContainer}
            key='modal'
          />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
