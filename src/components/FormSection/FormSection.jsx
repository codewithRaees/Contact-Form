import React, { useState } from "react";
import Button from "../Button.jsx/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import Input from "../Input/Input";
import banner from "/images/man.svg";

function FormSection() {
  return (
    <>
      <section className="flex">
        {/* Form Left Section */}
        <div className="px-2 w-[500px]">
          <div className="form-left flex md:flex-row flex-col justify-between">
            <Button icon={<MdMessage />}>VIA SUPPORT CHAT</Button>
            <Button icon={<MdCall />}>VIA CALL</Button>
          </div>
          <div className="flex justify-center items-center my-3 border hover:border-black">
            <Button isbgcolor={true} icon={<MdMail />}>
              VIA EMAIL FORM
            </Button>
          </div>
          <div>
            <form action="#">
              <Input
                labelText={"Name"}
                name={"name"}
                htmlfor={"name"}
                type={"text"}
              />
              <Input
                labelText={"E-Mail"}
                name={"email"}
                htmlfor={"email"}
                type={"email"}
              />
              <div className="relative flex flex-col form-container my-6">
                <label
                  htmlFor="textarea"
                  className="-top-3 left-5 absolute bg-white px-3"
                >
                  Text
                </label>
                <textarea
                  className="px-2 py-1 border focus:border-black min-w-full min-h-16 text-[14px] minle outline-none resize-none"
                  name="textarea"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="flex justify-end submit-button">
            <Button>Submit</Button>
          </div>
        </div>
        {/* Form Right Section */}
        <div className="md:block form-right hidden px-2">
          <img src={banner} alt="Banner" className="h-[410px]" />
        </div>
      </section>
    </>
  );
}

export default FormSection;
