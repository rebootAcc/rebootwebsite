import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const ChatWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed bottom-3 p-2 flex z-[100] right-0 justify-between w-fit items-end transition-opacity  ${
        isVisible ? "opacity-100" : "opacity-0 slidefromright"
      }`}
    >
      <div className={` flex flex-col gap-4  ${isAnimated ? "animate" : ""}`}>
        <Link
          href="https://api.whatsapp.com/send?phone=919088576170"
          target="_blank"
          rel="noopener"
          className="bg-[#00C16A] text-3xl lg:text-2xl  border border-white gap-2  text-white rounded-full justify-center items-center flex px-5 lg:px-6 h-[3.5rem] lg:h-[3.5rem] cursor-pointer"
        >
          <span className="font-semibold">
            <div>
              <FaWhatsapp />
            </div>
          </span>
          <h1 className="lg:text-lg text-xl font-medium text-white">
            Chat With Us
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ChatWithUs;
