import Image from "next/image";
import React from "react";
import SliderComponent from "./SliderComponent";

const OurResponsibility = ({ showsection }) => {
  const benifits = [
    { name: "Creating Your Own Brand", imgsrc: "/icons/webtrifficicon.svg" },
    { name: "Get More Qualified Leads", imgsrc: "/icons/salesicon.svg" },
    { name: "Futuristic & Scalable Design", imgsrc: "/icons/rupeeicon.svg" },
    { name: "Highly Secure Online Solutions", imgsrc: "/icons/leadicon.svg" },
  ];
  const clients = [
    { imgsrc: "/clients/arthacredit.webp", imgalt: "Artha Credit" },
    { imgsrc: "/clients/astracure.webp", imgalt: "Astracure" },
    { imgsrc: "/clients/azurebali.webp", imgalt: "Azure Bali" },
    { imgsrc: "/clients/bapps.webp", imgalt: "BApps" },
    { imgsrc: "/clients/behold.webp", imgalt: "Behold" },
    { imgsrc: "/clients/carvalue.webp", imgalt: "Car Value" },
    { imgsrc: "/clients/cdcprinters.webp", imgalt: "CDC Printers" },
    {
      imgsrc: "/clients/chiangdentalclinic.webp",
      imgalt: "Chiang Dental Clinic",
    },
    { imgsrc: "/clients/curentisbiotech.webp", imgalt: "Curentis Biotech" },
    { imgsrc: "/clients/dentitydental.webp", imgalt: "Dentity Dental" },
    { imgsrc: "/clients/drsridevshastri.webp", imgalt: "Dr. Sridev Shastri" },
    {
      imgsrc: "/clients/drtwishampatinaskar.webp",
      imgalt: "Dr. Twisham Patinaskar",
    },
    { imgsrc: "/clients/edunethub.webp", imgalt: "Edunet Hub" },
    { imgsrc: "/clients/healthica.webp", imgalt: "Healthica" },
    {
      imgsrc: "/clients/himalihomestaymirik.webp",
      imgalt: "Himali Homestay Mirik",
    },
    { imgsrc: "/clients/hotrlgulmaview.webp", imgalt: "Hotel Gulmaview" },
    { imgsrc: "/clients/ignytepharma.webp", imgalt: "Ignyte Pharma" },
    { imgsrc: "/clients/jalanbuilders.webp", imgalt: "Jalan Builders" },
    { imgsrc: "/clients/justandaman.webp", imgalt: "Just Andaman" },
    { imgsrc: "/clients/kutchinahoogly.webp", imgalt: "Kutchina Hooghly" },
    { imgsrc: "/clients/lalbaba.webp", imgalt: "Lal Baba" },
    { imgsrc: "/clients/mahabirdoctorhub.webp", imgalt: "Mahabir Doctor Hub" },
    { imgsrc: "/clients/medipaspharma.webp", imgalt: "Medipas Pharma" },
    { imgsrc: "/clients/mietcollege.webp", imgalt: "MIET College" },
    { imgsrc: "/clients/mistrislg.webp", imgalt: "Mistri SLG" },
    {
      imgsrc: "/clients/muktadharanursing.webp",
      imgalt: "Muktadhara Nursing",
    },
    { imgsrc: "/clients/muktifresh.webp", imgalt: "Mukti Fresh" },
    { imgsrc: "/clients/muktingo.webp", imgalt: "Muktingo" },
    {
      imgsrc: "/clients/NakshaatraNursingInstitute.webp",
      imgalt: "Nakshaatra Nursing Institute",
    },
    { imgsrc: "/clients/navahomestay.webp", imgalt: "Nava Homestay" },
    { imgsrc: "/clients/nifdslg.webp", imgalt: "NIFD SLG" },
    { imgsrc: "/clients/orosyspharma.webp", imgalt: "Orosys Pharma" },
    { imgsrc: "/clients/planettech.webp", imgalt: "Planet Tech" },
    { imgsrc: "/clients/psinterio.webp", imgalt: "PS Interio" },
    { imgsrc: "/clients/rasulpurprotik.webp", imgalt: "Rasulpur Protik" },
    { imgsrc: "/clients/reddyhealthcare.webp", imgalt: "Reddy Healthcare" },
    { imgsrc: "/clients/retinainstitute.webp", imgalt: "Retina Institute" },
    { imgsrc: "/clients/rgskincare.webp", imgalt: "RGS Skincare" },
    {
      imgsrc: "/clients/rudrakshsuperspecialitycar.webp",
      imgalt: "Rudraksh Super Speciality Car",
    },
    { imgsrc: "/clients/sankhyasutralab.webp", imgalt: "Sankhya Sutra Lab" },
    {
      imgsrc: "/clients/sarojiniinstitution.webp",
      imgalt: "Sarojini Institution",
    },
    { imgsrc: "/clients/shahiltraders.webp", imgalt: "Shahil Traders" },
    {
      imgsrc: "/clients/shaktimanevehicle.webp",
      imgalt: "Shakti Mane Vehicle",
    },
    { imgsrc: "/clients/shantimindcare.webp", imgalt: "Shanti Mind Care" },
    { imgsrc: "/clients/sparshtea.webp", imgalt: "Sparsh Tea" },
    {
      imgsrc: "/clients/spectrumhealthcare.webp",
      imgalt: "Spectrum Healthcare",
    },
    { imgsrc: "/clients/theinsidestory.webp", imgalt: "The Inside Story" },
    { imgsrc: "/clients/toplinerealty.webp", imgalt: "Topline Realty" },
    { imgsrc: "/clients/visaexpress.webp", imgalt: "Visa Express" },
  ];

  return (
    <section className="bg-[#4385F50D] xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-6">
      <section className="flex flex-col lg:flex-row gap-6 justify-between ">
        <section className="lg:w-[50%] flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <h3 className="text-[#333333] text-xl md:text-xl xlg:text-2xl font-medium">
              Your <span className="text-primary">Business,</span>
            </h3>
            <h1 className="text-[#333333] text-2xl md:text-2xl xlg:text-3xl font-semibold">
              It&apos;s Our Responsibility To Grow
              <span className="text-primary"> Your Business</span>
            </h1>
          </section>
          <p className="xlg:text-sm/[20px] xl:text-base  lg:text-xs/[18px] md:text-[10px]/[15px] text-sm/[25px] text-[#333333]">
            At Reboot AI, we consider ourselves a reliable partner committed to
            your success and your company&apos;s increased revenue as well. Our
            team of technology advisors helps plan, develop strategies, and
            implement new products into the market. Whether you are in the
            process of developing new products or improving your services for
            that matter, we make your business progress with direction and
            accuracy.
            <br />
            Our core focus is on building applications using modern web
            frameworks that enhance your online brand, and at the same time
            deliver a steady stream of high-quality leads also. We offer easy
            solutions that will help you increase traffic, sales, and revenue
            while also considering your specific budget.
            <br />
            Our goal is to provide affordable and measurable services that
            enable you to freely communicate your business goals. When working
            with Reboot AI, you receive a powerful tool helping you achieve
            progress and success. In order to help you achieve your objectives
            without interruption, our exceptional staff is ever prepared to
            offer you specifications that suit your needs and requirements.
          </p>
        </section>
        <section className="lg:w-[40%] flex flex-col gap-8">
          <h1 className="xlg:text-4xl md:text-2xl text-xl font-semibold text-primary">
            Let&apos; See <br />
            <span className="text-[#333333]">How Will</span> You Benefit?
          </h1>
          <section className="flex flex-col gap-8 ">
            {benifits.map((item, index) => (
              <section key={index} className="flex items-center gap-2 ">
                <i>
                  <Image
                    src={item.imgsrc}
                    alt={item.name}
                    width={244}
                    height={200}
                    className="w-full h-[2.2rem] md:h-[2.5rem] xlg:h-[3rem]"
                  />
                </i>
                <h1 className="xlg:text-3xl text-xl md:text-2xl font-medium text-[#333333]">
                  {item.name}
                </h1>
              </section>
            ))}
          </section>
        </section>
      </section>
      {showsection && (
        <section>
          <SliderComponent slides={clients} />
        </section>
      )}
    </section>
  );
};

export default OurResponsibility;
