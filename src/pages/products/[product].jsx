import ProductsPageDesign from "@/components/ProductsPageDesign";
import Head from "next/head";
import React from "react";

const Educationalconsultantcrm = ({
  metatitle,
  metadescription,
  title,
  content,
  productfeatures,
  perfects,
  othersoftware,
  benifits,
  doubtstext,
  doubtsimg,
  othersoftweretext,
  othersoftwareheading,
  productreviews,
}) => {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
      </Head>
      <div>
        <ProductsPageDesign
          title={title}
          content={content}
          productfeatures={productfeatures}
          perfects={perfects}
          othersoftware={othersoftware}
          benifits={benifits}
          doubtsimg={doubtsimg}
          doubtstext={doubtstext}
          othersoftwareheading={othersoftwareheading}
          othersoftweretext={othersoftweretext}
          productreviews={productreviews}
        />
      </div>
    </>
  );
};

export default Educationalconsultantcrm;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { product: "educational-CRM-advanced" } },
      { params: { product: "clinic-management-software" } },
      { params: { product: "service-center-management-crm" } },
    ],

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    "educational-CRM-advanced": {
      metatitle: "Educational Consultancy Sales Calling  Marketing Automation",
      metadescription:
        "A CRM for Education is a comprehensive student management solution tailored to meet the specific needs of educational institutions such as universities, schools, coaching centers, consultancies, and other organizations within the education sector.",
      title: "Educational CRM Advanced",
      content: {
        serviceimg: "/images/Educational Consultant CRM 2 (1).webp",
        servicename: "Educational CRM Advanced",
        servicedesc1:
          "A CRM for Education is a comprehensive student management solution tailored to meet the specific needs of educational institutions such as universities, schools, coaching centers, consultancies, and other organizations within the education sector. Our CRM enhances the productivity of the admission process and improves conversion rates for these organizations. With our platform, you can manage multiple leads in one place and prioritize them effectively.",
        servicedesc2:
          " Our education agent CRM facilitates seamless communication and engagement with leads through both online and offline channels. Designed to streamline the enrollment process, this CRM empowers institutions with efficient lead management, nurturing, and smooth conversion.</br>Empower your candidates to monitor their entire journey with a customizable centralized dashboard. Enhance the student experience and boost retention at every stage through a unified dashboard that allows them to apply, track progress, communicate, and enroll in additional courses. Create sophisticated, feature-rich application forms in just minutes, offering prospective students an engaging experience they'll remember. This CRM software is ideal for small businesses looking to manage leads effectively. Our advanced Educational CRM software delivers cutting-edge tech solutions across various industries. .",
      },
      benifits: [
        "Telecallers Management",
        "IVR Management",
        "WA Automation Marketing",
        "Live Support",
      ],
      productfeatures: [
        "Users Management",
        "Telecallers Management",
        "Real-time Call Analysis",
        "Reporting and Analytics",
        "Manage Employee",
        "Integrate APIs",
        "WA Automation",
      ],
      perfects: [
        "Tracks Telecaller Calls",
        "Record Caller’s Voice",
        "Automate Marketing",
        "Boost Team Performance",
      ],
      othersoftwareheading: "Using some other software?",
      othersoftweretext:
        "With Reboot AI, seamlessly transfer all your data from other software / CRM.",
      othersoftware: [
        { imgsrc: "/images/accesslogo.webp" },
        { imgsrc: "/images/csvlogo.webp" },
        { imgsrc: "/images/excellogo.webp" },
      ],
      doubtsimg: "/images/educationalimg.webp",
      doubtstext:
        "If you’re looking for a Online Telecaller Management software which enables track Realtime Telecaller daily call duration, call count & voice record along with Whatsapp Automation which helps to reach students very easily, then you’re in the right place.",
      productreviews: [
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
      ],
    },
    "clinic-management-software": {
      metatitle:
        "Doctor Clinic Management Software - Easy to Use with 100% Customizations",
      metadescription:
        "Doctor Clinic Management is trusted by 100+ Doctors &  designed to efficiently maintain records of prescriptions, bills, and other essential information. This software offers a range of features, including an appointment scheduler, electronic health records, SMS notifications, medical billing, and more.",
      title: "Doctor Clinic Management",
      content: {
        serviceimg: "/images/Clinic Management Software 1.webp",
        servicename: "Doctor Clinic Management",
        servicedesc1:
          "Doctor Clinic Management is designed to efficiently maintain records of prescriptions, bills, and other essential information. This software offers a range of features, including an appointment scheduler, electronic health records, SMS notifications, medical billing, and more. If you're in search of reliable practice management software, look no further. Our Doctor Clinic Management solution facilitates the creation of doctor profiles and the management of patient records and consultations.",
        servicedesc2:
          "We developed a medical management software that provides a comprehensive overview of all clinics and sessions, along with their current statuses. This doctor clinic management software guides you through each step, from gathering patient information to processing billing. It is specifically designed to assist clinics of all sizes in efficiently managing their daily operations. With our solution, you have all the tools necessary to run your clinic effectively.</br> Our software streamlines the management process, saving you both time and money through automation. With our online appointment booking system, your clients can easily schedule appointments at times that work for them. This user-friendly, cost-effective, and robust software empowers doctors to manage their clinics effortlessly. ",
      },
      benifits: [
        "Complete Patient  CRM",
        "Online Prescription",
        "Marketing Automation",
        "Increase Clinic Productivity",
      ],
      productfeatures: [
        "Dynamic Dashboard",
        "Appointment Scheduling",
        "Billing and Invoicing",
        "Patient Management",
        "Reporting and Analytics",
        "Manage Multiple Clinics",
        "Prescription Management",
        "WA Automation",
      ],
      perfects: [
        "Easy Prescription Generate",
        "Encrypted Private Server",
        "Individual Server for All",
        "Patient Data Management",
        "Auto Followup Using Whatsapp",
        "Real-time Data Analytics",
      ],

      othersoftwareheading: "Using some other EMR software?",
      othersoftweretext:
        "With Reboot AI, seamlessly transfer all your patient data from other CRM.",
      othersoftware: [
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
      ],
      doubtsimg: "/images/clinicmanagementdoubt.webp",
      doubtstext:
        "If you’re facing issue with your existing doctor clinic management crm or whether you don’t know which CRM will be suite for your clinic, let’s connect with us for a free Business consultation - where we will guide you in the right direction.",
      productreviews: [
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
      ],
    },
    "service-center-management-crm": {
      metatitle: "Service Center CRM - Daily Call Process Automations",
      metadescription:
        "Leverage the capabilities of Service Centre Solutions to cultivate a loyal customer base through automated services. We can assist you in optimizing your backend operations to provide exceptional, customer-centric experiences.",
      title: "Service Centre Solutions",
      content: {
        serviceimg: "/images/Service Center Management CRM 1.webp",
        servicename: "Service Centre Solutions",
        servicedesc1:
          "Leverage the capabilities of Service Centre Solutions to cultivate a loyal customer base through automated services. We can assist you in optimizing your backend operations to provide exceptional, customer-centric experiences. Today, our service solutions can be a major business asset with a robust service center platform. Our software is integrated, multi-user, online, and modular in design. ",
        servicedesc2:
          "We provide comprehensive Service Centre Solutions that streamline your service center operations. Our solutions facilitate effortless job management, real-time job updates, and comprehensive business analysis. Optimize your services for greater efficiency, performance, and speed. </br> We provide you with essential insights and tools to enhance your operational effectiveness. Optimize Your Services for Greater Efficiency, Performance, and Speed. We offer essential insights and tools to enhance your operational effectiveness. Our solutions are designed to assist in managing product services at any stage of development. No matter what your products and services are, our extensive experience equips us to provide the right solutions for you. With robust options at your disposal, we empower our clients to generate new revenue streams, integrate technical solutions, enhance efficiency, increase customer loyalty, and achieve a variety of other goals.",
      },
      benifits: [
        "Fast Data Manage",
        "Complete Call Manage",
        "WA Marketing Automation",
        "Live Support",
      ],
      productfeatures: [
        "Dynamic Dashboard",
        "Customer Data Manage",
        "Engineer Assign",
        "Customer Billing & Commission",
        "Reporting and Analytics",
        "Multi User Login",
        "100% Customizable",
        "WA Automation",
      ],
      perfects: [
        "Manage Customers",
        "Calculate Incentive",
        "Calculate Profits easily",
        "Manage Engineers Calls",
        "Automate Marketing",
        "Real-time Data Analysis",
      ],
      othersoftwareheading: "Using some other Service Software?",
      othersoftweretext:
        "With Reboot AI, seamlessly transfer all your Customer’s data from excel or other CRM.",
      othersoftware: [
        { imgsrc: "/images/accesslogo.webp" },
        { imgsrc: "/images/csvlogo.webp" },
        { imgsrc: "/images/excellogo.webp" },
      ],
      doubtsimg: "/images/servicecenter.webp",
      doubtstext:
        "If youre still confused which software to purchase or any further customization required please contact with us. Our expert team is always available to guide you in the right track.",
      productreviews: [
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
        {
          imgsrc: "/images/productpreview.png",
          name: "Dr Saikat Paul",
          heading: "Love Digital Prescription System",
          text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
        },
      ],
    },
  };

  const { product } = params;

  const data = serviceData[product];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      metatitle: data.metatitle,
      metadescription: data.metadescription,
      title: data.title,
      content: data.content,
      productfeatures: data.productfeatures,
      perfects: data.perfects,
      othersoftware: data.othersoftware,
      benifits: data.benifits,
      doubtsimg: data.doubtsimg,
      doubtstext: data.doubtstext,
      othersoftwareheading: data.othersoftwareheading,
      othersoftweretext: data.othersoftweretext,
      productreviews: data.productreviews,
    },
  };
};
