import React from "react";

const About = () => {
  return (
    <div className='about'>
      <picture>
        <source srcSet='/images/person.webp' type='image/webp' />
        <img src='/images/person.jpg' alt='logo' />
      </picture>
      <div>
        <h1>Algina Director, screenwriter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Lorem ipsum</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h2>Lorem ipsum</h2>
        <p>
          {" "}
          Primarily as a cinematographer, I operate on a RED digital cinema
          camera, but have experience with other camera systems from a wide
          array of brands Sony, Panasonic, Canon and Arri. I also have
          additional support kit, such as 360 motion control rigs for dynamic
          time-lapses and experience with steadycam or MoVI, DJI Ronin gimbal
          rigs.
        </p>
        <h2>Lorem ipsum</h2>
        <p>
          Primarily as a cinematographer, I operate on a RED digital cinema
          camera, but have experience with other camera systems from a wide
          array of brands Sony, Panasonic, Canon and Arri.
        </p>
        <p>
          {" "}
          I have an excellent understanding of editing and basic colour
          correction ranging across short-form tv and web commercials to
          documentary or music videos. Whilst using the Final Cut Pro or Adobe
          CC suite, my system is both on and offsite and able to edit and view
          4k content natively. Essential for high-end delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
