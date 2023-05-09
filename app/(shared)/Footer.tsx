import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLOUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Get ready to explore the frontiers of innovation and technology with
            the Blog of the Future - where tomorrow's ideas are today's reality.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLOUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Unlock the door to the future, one post at a time.
          </p>
          <p className="my-5">Some random link</p>
          <p>Experience the future, now.</p>
        </div>
        {/* THIRD COLOUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
          Connect with us and be a part of the conversation about shaping the future.
          </p>
          <p className="my-5">(709)685-5991</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
