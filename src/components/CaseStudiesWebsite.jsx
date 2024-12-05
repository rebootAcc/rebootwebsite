import React from "react";
import CaseComponent from "./CaseComponent";

const CaseStudiesWebsite = () => {
  const pageData = [
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Bengal-Tiger-APPS.webp",
      clientlogo: "/clients/bapps.webp",
      category: "Institute/Army School",
      link: "https://btappskanchrapara.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Chiang-s-Dental-Clinic.webp",
      clientlogo: "/clients/chiangdentalclinic.webp",
      category: "Clinic/Dental Clinic",
      link: "https://www.chiangsdentalclinic.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/dr sridev shastri.webp",
      clientlogo: "/clients/drsridevshastri.webp",
      category: "Astrologer",
      link: "https://astrologersridev.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Dr-Saikat-Paul.webp",
      clientlogo: "/clients/dentitydental.webp",
      category: "Doctor/dentist",
      link: "https://drsaikatpaul.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Fills Aqua.webp",
      clientlogo: "/clients/fillsaqualogo.webp",
      category: "Supply/Water Supplyer",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Gautam-Industries.webp",
      clientlogo: "/clients/goutamindustrieslogo.webp",
      category: "Manufacturer/Pipe Manufacturing",
      link: "https://www.gautamindustries.co.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Himali-Homestay.webp",
      clientlogo: "/clients/himalihomestaymirik.webp",
      category: "Homestay",
      link: "https://himalihomestaymirik.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Just-Andaman-Tours-Travel.webp",
      clientlogo: "/clients/justandaman.webp",
      category: "Tour & Travel",
      link: "https://justandaman.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Modern-Institute-of-Engineering-Technology.webp",
      clientlogo: "/clients/mietcollege.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Mukti-Fresh.webp",
      clientlogo: "/clients/muktifresh.webp",
      category: "E Commerse Store",
      link: "https://www.muktifresh.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/muktigreen.webp",
      clientlogo: "/clients/muktingo.webp",
      category: "E Commerse Store",
      link: "https://www.muktigreen.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/NIFD-Siliguri- School-of-design.webp",
      clientlogo: "/clients/nifdslg.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/PDESIS.webp",
      clientlogo: "/clients/pdesislogo.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/PS-Interio.webp",
      clientlogo: "/clients/psinterio.webp",
      category: "Manufacturer/UPVC Manufacturer",
      link: "https://psinteriosiliguri.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Rasulpur-Group-Of-Institutions.webp",
      clientlogo: "/clients/rasulpurprotik.webp",
      category: "Institute/College",
      link: "https://rasulpurgroupofinstitutions.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Reddy-Healthcare-Pvt-Ltd.webp",
      clientlogo: "/clients/reddyhealthcare.webp",
      category: "Healthcare/Hospital",
      link: "https://reddyhealthcare.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/RG-Skin-Care.webp",
      clientlogo: "/clients/rgskincare.webp",
      category: "Clinic/dermatology",
      link: "https://rgskincare.co.in/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Rudraksh-Superspeciality.webp",
      clientlogo: "/clients/rudrakshsuperspecialitycar.webp",
      category: "Healthcare/Superspeciality",
      link: "https://www.rudrakshsuperspecialitycare.com/",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Spectrum-Healthcare-Diagnostics.webp",
      clientlogo: "/clients/spectrumhealthcare.webp",
      category: "Healthcare/Diagnostics",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/subieguys.webp",
      clientlogo: "/clients/sglogo.webp",
      category: "Institute/College",
      link: "",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageData.map((dtat, index) => (
          <CaseComponent cases={dtat} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesWebsite;
