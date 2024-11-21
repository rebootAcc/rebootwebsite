import dynamic from "next/dynamic";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";

const QueryForm = dynamic(() => import("@/components/QueryForm"), {
  ssr: false,
});

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Reboot AI | Contact Us</title>
      </Head>
      <main>
        <SubPageBanner heading={"Contact Us"} />
        <section className="mx-8 xlg:mx-16 my-20 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary">Get In Touch!</h1>
            <p className="text-secondary font-medium text-xl">
              Today visual content is gaining importance as it creates your
              brand&apos;s image in the audience&apos;s mind and so, the need
              for graphic design has increased among all types of businesses.
              The reason is graphic design helps to make your business stand out
              different from its competition. In other words, it helps in
              engaging the audience with your brand.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-7">
              Our Registered Office{" "}
              <span className="flex flex-1 h-0.5 bg-[#aaa]"></span>
            </h1>
            <div className="flex">
              <div className="flex flex-col flex-wrap flex-1 justify-between gap-14">
                <div className="flex gap-4 items-center">
                  <span className="text-primary p-6 text-3xl rounded-full border-2 border-primary bg-[rgba(67,133,245,0.1)]">
                    <FaPhoneVolume />
                  </span>
                  <div className="flex flex-col text-xl xlg:text-2xl">
                    <h2 className="text-[#777] font-medium">Call With Us</h2>
                    <Link
                      href="tel:911234567890"
                      className="font-semibold text-[#333]"
                    >
                      +91 12345 56789
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-primary p-6 text-3xl rounded-full border-2 border-primary bg-[rgba(67,133,245,0.1)]">
                    <IoLogoWhatsapp />
                  </span>
                  <div className="flex flex-col text-xl xlg:text-2xl">
                    <h2 className="text-[#777] font-medium">
                      WhatsApp With Us
                    </h2>
                    <Link
                      href="tel:911234567890"
                      className="font-semibold text-[#333]"
                    >
                      +91 12345 56789
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-primary p-6 text-3xl rounded-full border-2 border-primary bg-[rgba(67,133,245,0.1)]">
                    <IoMailSharp />
                  </span>
                  <div className="flex flex-col text-xl xlg:text-2xl">
                    <h2 className="text-[#777] font-medium">Email With Us</h2>
                    <Link
                      href="mailTo:sales@rebootmarketing.in"
                      className="font-semibold text-[#333]"
                    >
                      sales@rebootmarketing.in,
                    </Link>
                    <Link
                      href="mailTo:rebootmarketing7@gmail.com"
                      className="font-semibold text-[#333]"
                    >
                      rebootmarketing7@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-primary p-6 text-3xl rounded-full border-2 border-primary bg-[rgba(67,133,245,0.1)]">
                    <FaLocationDot />
                  </span>
                  <div className="flex flex-col text-xl xlg:text-2xl">
                    <h2 className="text-[#777] font-medium">
                      Visit Our Location
                    </h2>
                    <Link
                      href="https://maps.app.goo.gl/cmN2WA9LUXXVFDMUA"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="font-semibold text-[#333]"
                    >
                      4th Floor, Opp. Gosto Paul Statue, Bidhan Rd, Siliguri, WB
                      734001 IN
                    </Link>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.51311991116!2d88.47557277590404!3d22.634649630692202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89ff5bd853be5%3A0xe2781e7a63014977!2sReboot%20Marketing%20Pvt%20Ltd%20-%20App%20Developer%20in%20Kolkata%20%7C%7C%20App%20Development%20Company%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1728149434035!5m2!1sen!2sin"
                width="746"
                height="532"
                className="w-full border-none rounded-xl max-w-[52vw]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <QueryForm />
        </section>
      </main>
    </>
  );
};

export default ContactUs;
