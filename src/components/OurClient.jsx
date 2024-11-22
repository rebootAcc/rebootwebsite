import React from "react";
import HeadingComponent from "./HeadingComponent";
import SliderComponent from "./SliderComponent";

const OurClient = () => {
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
    { imgsrc: "/clients/muktadharanursing.webp", imgalt: "Muktadhara Nursing" },
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
    {
      imgsrc: "/clients/smilecaredentalclinic.webp",
      imgalt: "Smilecare Dental Clinic",
    },
    {
      imgsrc: "/clients/siliguricarrental.webp",
      imgalt: "Siliguri Car Rental",
    },
  ];

  return (
    <div className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <HeadingComponent
        heading1={"Our Clients"}
        heading2={"Empowering Leaders Across Industries"}
      />
      <div className="w-full">
        <SliderComponent slides={clients} />
      </div>
    </div>
  );
};

export default OurClient;
