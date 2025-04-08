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
      metatitle: "Educational CRM Online",
      metadescription:
        "Reboot AI Private Limited has emerged as a pioneer in the technological industry, we are committed to offer Educational CRM Advanced solutions that have been designed to revolutionize student management and institutional efficiency.",
      title: "Educational CRM Online",
      content: {
        serviceimg: "/images/Educational Consultant CRM 2 (1).webp",
        servicename: "Educational CRM Online",
        servicedesc1:
          "Reboot AI Private Limited has emerged as a pioneer in the technological industry, we are committed to offer Educational CRM Advanced solutions that have been designed to revolutionize student management and institutional efficiency. Our extensive platform provides educational institutions like universities, schools, coaching centres, and consultancies with a powerful tool to streamline complex administrative processes.",
        servicedesc2:
          " The Educational CRM Advanced by Reboot AI is meticulously crafted to enhance productivity across the entire student engagement cycle. By facilitating seamless communication through online and offline channels, our solution enables institutions to manage multiple leads effectively, prioritize potential candidates, and at the same time significantly improve conversion rates. <br> The key features of our Educational CRM Advanced include a customizable centralized dashboard that helps to empower candidates to monitor their entire academic journey. <br> By leveraging cutting-edge AI technologies, Reboot AI's Educational CRM has innovated a CRM that goes beyond traditional management systems. This innovative approach helps educational organizations to optimize their operational efficiency, enhance student experiences, and ultimately drive institutional growth in an increasingly competitive market. Reboot AI's solution is particularly beneficial for small to medium-sized educational businesses seeking efficient, technology-driven management solutions that can adapt to unique organizational needs.",
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
          name: "Dr. Saikat Paul",
          heading: "Founder & Owner",
          text: "We have been using this clinic-based CRM since 2024. It was customized and developed specifically for us. We are currently using the CRM across our 10 clinics. This product has significantly helped us minimize the clinic billing process. For patients, it is highly useful as their information is managed through a centralized channel. Overall, it has greatly increased our clinic's ROI in terms of time management and patient experience",
        },
        {
          name: "Pradip Bairagi",
          heading: "Founder, Admission Solution",
          text: "My business was struggling, and I couldn’t build a team for the past four years. I was using Reboot AI for marketing. Leads were coming in, but my sales team, especially the telecalling team, wasn’t performing well. Since my office is in a remote location, I hired work-from-home telecallers. However, due to this, tracking, ROI management, and overall productivity were poor, which hindered my sales. The company proposed building an advanced CRM system where I could manage telecallers, clients, and marketing automation using various APIs, such as WhatsApp. The dashboard now works efficiently, allowing us to track real-time telecaller activity, call durations, and automation in all aspects. This system truly saved me and boosted my business.",
        },
        {
          name: "Prabir De",
          heading: "Partner & Founder, PD Enterprise",
          text: "We are a Partner Service Center for Samsung, Voltas, and Croma. Our business often faces challenges with manpower, particularly in service calls and engineer management. Initially, we were managing everything using Excel. Since implementing the customized CRM for our service center, our business performance has improved significantly. We can now track all kinds of data, from engineer assignments to customer call management, and our ROI management is now much faster. I highly recommend Reboot AI due to their excellent support service and cost-effective budget.",
        },
      ],
    },
    "clinic-management-software": {
      metatitle: " Doctor Clinic Management ERP Software ",
      metadescription:
        "Doctor Clinic Management is a powerful new-age system that helps administer healthcare services within a clinical setting. We at Reboot AI Private Limited have revolutionized new and creative solutions that specialize in comprehensive Doctor Clinic Management",
      title: " Doctor Clinic Management ERP Software",
      content: {
        serviceimg: "/images/Clinic Management Software 1.webp",
        servicename: " Doctor Clinic Management ERP Software",
        servicedesc1:
          "Doctor Clinic Management is a powerful new-age system that helps administer healthcare services within a clinical setting. We at Reboot AI Private Limited have revolutionized new and creative solutions that specialize in comprehensive Doctor Clinic Management solutions. Our advanced software platform allows healthcare professionals to use a rich and intelligent tool to manage all clinic functions and patient-related records more effectively alongside admin workflow. ",
        servicedesc2:
          "The Doctor Clinic Management solution, by Reboot AI, uniquely offers a variety of features ranging from electronic health record management, scheduling of appointments, medical billing, and automated SMS notifications. The platform, made with cutting-edge AI technologies, helps healthcare service providers streamline day-to-day tasks and reduce their administrative burdens to better focus on patients. <br> An advanced and comprehensive solution that includes a range of significant features such as easy-to-use interfaces, seamless online appointment booking capabilities, and smart automation to save time and minimize operational costs. <br> The Reboot AI software has been meticulously designed to cater to clinics of all sizes, thus providing scalable and adaptable management tools that enhance overall practice efficiency. By combining advanced software engineering with a deep understanding of medical practice requirements, we are committed to providing doctors and our clients with powerful tools to optimize their clinical workflows and improve patient engagement.",
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
          name: "Dr. Saikat Paul",
          heading: "Founder & Owner",
          text: "We have been using this clinic-based CRM since 2024. It was customized and developed specifically for us. We are currently using the CRM across our 10 clinics. This product has significantly helped us minimize the clinic billing process. For patients, it is highly useful as their information is managed through a centralized channel. Overall, it has greatly increased our clinic's ROI in terms of time management and patient experience",
        },
        {
          name: "Pradip Bairagi",
          heading: "Founder, Admission Solution",
          text: "My business was struggling, and I couldn’t build a team for the past four years. I was using Reboot AI for marketing. Leads were coming in, but my sales team, especially the telecalling team, wasn’t performing well. Since my office is in a remote location, I hired work-from-home telecallers. However, due to this, tracking, ROI management, and overall productivity were poor, which hindered my sales. The company proposed building an advanced CRM system where I could manage telecallers, clients, and marketing automation using various APIs, such as WhatsApp. The dashboard now works efficiently, allowing us to track real-time telecaller activity, call durations, and automation in all aspects. This system truly saved me and boosted my business.",
        },
        {
          name: "Prabir De",
          heading: "Partner & Founder, PD Enterprise",
          text: "We are a Partner Service Center for Samsung, Voltas, and Croma. Our business often faces challenges with manpower, particularly in service calls and engineer management. Initially, we were managing everything using Excel. Since implementing the customized CRM for our service center, our business performance has improved significantly. We can now track all kinds of data, from engineer assignments to customer call management, and our ROI management is now much faster. I highly recommend Reboot AI due to their excellent support service and cost-effective budget.",
        },
      ],
    },
    "service-center-management-crm": {
      metatitle: " Service center ERP Software",
      metadescription:
        " Reboot AI is a game changer when it comes to streamlining your service center business. We understand that the service center is full of people and needs proper CRM to control the load and cater to every single client. While frustration levels are already at their peak when at a service center, we do not want to stress you out with the tech! Instead, we use the tech and make it work for you and streamline the queue in an organized way!",
      title: "Service center ERP Software",
      content: {
        serviceimg: "/images/Service Center Management CRM 1.webp",
        servicename: "Service center ERP Software",
        servicedesc1:
          "Streamlining Your Service Center Business With Innovative IT Excellence <br> Reboot AI is a game changer when it comes to streamlining your service center business. We understand that the service center is full of people and needs proper CRM to control the load and cater to every single client. While frustration levels are already at their peak when at a service center, we do not want to stress you out with the tech! Instead, we use the tech and make it work for you and streamline the queue in an organized way! ",
        servicedesc2:
          "Our tech wizards create effective CRM and dashboards for you to track the progress of each of the clients and their queries at the service center. We reduce the workload on people so that they can focus on getting the physical work done while the IT system takes care of the people at the counter. Our AI-driven process further simplifies the work load as it reduces the need for human intervention. At the end of the day when happy clients leave your service center, they end up being your loyal customers too as well! Not only this, our tech enables business owners to scale their business and create new revenue generations streams as well from their existing business!  <br> A myriad of opportunities open up when you partner with a tech wizard like Reboot AI. Feeling intrigued yet? Your service center business can shoot up with the right partnership as we have the arsenal of tech to help boost the growth!  ",
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
          name: "Dr. Saikat Paul",
          heading: "Founder & Owner",
          text: "We have been using this clinic-based CRM since 2024. It was customized and developed specifically for us. We are currently using the CRM across our 10 clinics. This product has significantly helped us minimize the clinic billing process. For patients, it is highly useful as their information is managed through a centralized channel. Overall, it has greatly increased our clinic's ROI in terms of time management and patient experience",
        },
        {
          name: "Pradip Bairagi",
          heading: "Founder, Admission Solution",
          text: "My business was struggling, and I couldn’t build a team for the past four years. I was using Reboot AI for marketing. Leads were coming in, but my sales team, especially the telecalling team, wasn’t performing well. Since my office is in a remote location, I hired work-from-home telecallers. However, due to this, tracking, ROI management, and overall productivity were poor, which hindered my sales. The company proposed building an advanced CRM system where I could manage telecallers, clients, and marketing automation using various APIs, such as WhatsApp. The dashboard now works efficiently, allowing us to track real-time telecaller activity, call durations, and automation in all aspects. This system truly saved me and boosted my business.",
        },
        {
          name: "Prabir De",
          heading: "Partner & Founder, PD Enterprise",
          text: "We are a Partner Service Center for Samsung, Voltas, and Croma. Our business often faces challenges with manpower, particularly in service calls and engineer management. Initially, we were managing everything using Excel. Since implementing the customized CRM for our service center, our business performance has improved significantly. We can now track all kinds of data, from engineer assignments to customer call management, and our ROI management is now much faster. I highly recommend Reboot AI due to their excellent support service and cost-effective budget.",
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
