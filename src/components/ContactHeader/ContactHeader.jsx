import React from "react";

function ContactHeader() {
  return (
    <>
      <h1 className="px-2 font- font-extrabold text-2xl md:text-5xl">
        CONTACT US{" "}
      </h1>
      <p className="md:block justify-center hidden px-2 py-1 text-[16px]">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <p className="block justify-center md:hidden px-2 py-1 text-[16px]">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
      </p>
    </>
  );
}

export default ContactHeader;
