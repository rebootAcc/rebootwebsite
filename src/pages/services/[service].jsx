import ServicePageDesign from "@/components/ServicePageDesign";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const CustomWebsiteDevelopment = ({
  title,
  content,
  packages,
  pagedesigns,
  workimg,
  packageimg,
  benifits,
  pagedesignheading,
}) => {
  return (
    <>
      <Head>
        <title>Reboot AI | Services</title>
      </Head>
      <div>
        <ServicePageDesign
          title={title}
          content={content}
          packages={packages}
          pagedesigns={pagedesigns}
          workimg={workimg}
          packageimg={packageimg}
          benifits={benifits}
          pagedesignheading={pagedesignheading}
        />
      </div>
    </>
  );
};

export default CustomWebsiteDevelopment;

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = [
    { params: { service: "custom_website_development" } },
    { params: { service: "e-commerce_store_development" } },
    { params: { service: "web_application_development" } },
    { params: { service: "dynamic_website_development" } },
    { params: { service: "saas_application_development" } },
    { params: { service: "android_app_development" } },
    { params: { service: "ios_app_development" } },
    { params: { service: "flutter_app_development" } },
    { params: { service: "ai_ml_integration" } },
    { params: { service: "business_consultation" } },
    { params: { service: "performance_marketing" } },
    { params: { service: "pr_brand_building" } },
    { params: { service: "google_marketing" } },
    { params: { service: "social_media_solutions" } },
    { params: { service: "it_consultation" } },
    { params: { service: "web_and_apps_security" } },
    { params: { service: "creative_ui_design" } },
    { params: { service: "brand_starter_solution" } },
    { params: { service: "cloud_server_setup" } },
  ];

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    custom_website_development: {
      title: "Custom Website Development",
      content: {
        serviceimg:
          "/servicesfast/Custom Website Development Custom Website Development 1.webp",
        servicename: "Custom Website Development",
        servicedesc1:
          "To create a website that offers top-notch brand value, you can always count on Reboot AI Private Limited. We assist our clients by transforming a conventional website into a user-friendly website with our custom website development services. Improving your website requires scalability and responsive design. Here you can depend on us as we give the best proficient site improvement that grandstands your basic beliefs with an imaginative touch.",
        servicedesc2:
          "Today, a website needs more than just a traditional design and this incorporates, interlinking to social media profiles, fast loading times, and a site optimized for search engines. There are tons of companies for website development in India. However, what outsmarts us is that we figure out the special website necessities. </br> We consider the targeted audience and thus try to leave an impression. This is the sole justification for why clients approach us when they need website development in Kolkata. We have in-depth knowledge of various CRM software and our custom website services offer something different that can meet your business requirements. We comprehend that the fundamental objective of site advancement is to accomplish the targeted business goals therefore, our focus is on creating customer websites that deliver next-level dynamics. One more advantage is that these custom websites offer higher Returns on investments.",
      },
      workimg: "/services23/Custom Website Development 2.webp",
      packageimg: "/services23/Custom Website Development 3.webp",
      benifits: [
        "100% Futuristic Design",
        "Converts Visitors into Leads",
        "Website Analytics Data",
        "24*7 Live Support",
      ],

      packages: [
        {
          heading: "Custom Web Designing Package",
          details: [
            "Website Development",
            "Secure Server, Free SSL",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Dynamic Web Development Package",
          details: [
            "100% Custom Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "Free Backup & SSL",
            "Unlimited Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 25,000 INR",
          ],
        },
        {
          heading: "eCommerce Web Designing Package",
          details: [
            "Custom e Commerce Development",
            "Fast & Secure Server",
            "Mobile and Desktop Responsive",
            "Custom Admin Panel",
            "Free SSL, 10 Business Mail",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",
      pagedesigns: [
        "/customwebdev/website view 1.webp",
        "/customwebdev/website view 2.webp",
        "/customwebdev/website view 3.webp",
        "/customwebdev/website view 4.webp",
        "/customwebdev/website view 5.webp",
        "/customwebdev/website view 6.webp",
        "/customwebdev/website view 7.webp",
        "/customwebdev/website view 8.webp",
        "/customwebdev/website view 9.webp",
        "/customwebdev/website view 10.webp",
        "/customwebdev/website view 11.webp",
      ],
    },

    "e-commerce_store_development": {
      title: "E-Commerce Store Development",
      content: {
        serviceimg: "/servicesfast/E-commerce Store Development 1.webp",
        servicename: "E-commerce Store Development",
        servicedesc1:
          "With the expansion in the online shopping trend, our E-commerce store development services can assist you expand beyond geographical boundaries. E-commerce stores allow you to reach out to customers more conveniently and provide them with a delightful shopping experience. </br> <strong>Excel the E-commerce Market with the best E-commerce store Development in Kolkata.</strong>",
        servicedesc2:
          "As compared to conventional E-commerce stores, a modern one requires a secure SMS gateway, OTP login security, and a secured payment gateway. Likewise, everyone wants a store that is SEO and mobile-friendly. This component diminishes the page stacking time and upgrades the shopping experience.Our team provides cutting-edge UI and extraordinary UX for small and large-scale businesses. With a unique e-commerce store, you can explore countless possibilities and generate new sales funnels. </br> We provide a seamless store launch to our clients so that our customers can encounter a bug-free store for selling their products and services. With 5 years of experience in this market, our team comprises experienced website designers and developers. When it comes to quality, security, and professionalism, we are just a call away.",
      },
      workimg: "/services23/E-commerce Store Development 2.webp",
      packageimg: "/services23/E-commerce Store Development 3.webp",
      benifits: [
        "100% Futuristic Design",
        "Converts Visitors into Leads",
        "Website Analytics Data",
        "24*7 Live Support",
      ],

      packages: [
        {
          heading: "Custom Web Designing Package",
          details: [
            "Website Development",
            "Secure Server, Free SSL",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Dynamic Web Development Package",
          details: [
            "100% Custom Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "Free Backup & SSL",
            "Unlimited Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 25,000 INR",
          ],
        },
        {
          heading: "eCommerce Web Designing Package",
          details: [
            "Custom e Commerce Development",
            "Fast & Secure Server",
            "Mobile and Desktop Responsive",
            "Custom Admin Panel",
            "Free SSL, 10 Business Mail",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/ecomweb/E-commerce website.webp",
        "/ecomweb/E-commerce website 4.webp",
      ],
    },
    web_application_development: {
      title: "Web Application Development",
      content: {
        serviceimg: "/servicesfast/Web Application Development 1.webp",
        servicename: "Web Apps Development",
        servicedesc1:
          "Today, creating apps is not limited to mobile phones; making them web-responsive is a truly necessary step. At Reboot AI Private Limited, we have a group of the best web apps developer in India who can transform your vision into dynamic web apps. Our aphorism is “Let’s Turn Your Ideas into Reality” and hence we work to legitimize it.",
        servicedesc2:
          "To meet various business needs, we integrate the latest technology, such as SQL, Node.js, React, Python, etc., into our web apps. Today, cross-platform web apps are a necessity, and this requires the best UX and web API. With this, we work to reduce the bounce rate and further develop the client experience.We are focused on creating responsive web apps, database-friendly, and include the best UI. Dynamic web apps help you reach countless customers. We intend to incorporate features like mobile push notifications, chatbots, and a mobile-friendly interface. From the initial discussion to the end product, our team of web apps developer in India combines cutting-edge technologies to fulfill the client’s wish. </br> As a web apps service provider, we secure your data and follow the security protocols.  For this reason, we keep up with data security throughout the app lifecycle. With the help of our technology, we help organizations grow and expand their businesses beyond limits. Brand visibility, customer engagement, and return on investments are all incorporated in the designs while creating the web apps.If you are looking to mark an exceptional user experience then hire us for web app development!",
      },
      workimg: "/services23/Web Application Development 2.webp",
      packageimg: "/services23/Web Application Development 3.webp",
      benifits: [
        "Future-Ready, Scalable ",
        "Eye-Catching Design",
        "Seamless User Experiences",
        "24*7 Live Support",
      ],

      packages: [
        {
          heading: "Web Apps Development",
          details: [
            "Responsive Design Excellence",
            "Secure Server, Free SSL",
            "High-Speed Performance",
            "Secure Data Handling",
            "Customizable User Interfaces",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 25,000 INR",
          ],
        },
        {
          heading: "SAAS Application Development",
          details: [
            "Cloud-Native Scalability",
            "User-Centric Interfaces",
            "Seamless API Integrations",
            "Subscription-Based Efficiency",
            "Secure Data Handling",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/Web Application 1.webp",
        "/images/Web Application 2.webp",
        "/images/Web Application 3.webp",
      ],
    },
    dynamic_website_development: {
      title: "Dynamic Website Development",
      content: {
        serviceimg: "/servicesfast/Dynamic Website Development 1.webp",
        servicename: "Dynamic Website Development",
        servicedesc1:
          "Nowadays every organization leans towards a dynamic website for user interaction as it generates real-time pages. Such a website uses a combination of different languages such as Java, CSS, Python, etc. If you want to keep your audience interaction active then at Reboot AI Private Limited, we offer the best Dynamic Website Development in Siliguri.",
        servicedesc2:
          "With the assistance of dynamic websites, it is more straightforward to update the content including images, text, and product details. Such unique information can’t be added on static websites. For businesses, whose product catalogues keep on updating, dynamic websites are the most ideal choice. Additionally, you can integrate such websites with social media platforms to share the content. Today, a dynamic website is easily crawled by search engines, and due to this, the pages are indexed much easier. Thus, such website design is easier to maintain and modify. For displaying multiple products and services, choose us for Dynamic Website Development in Siliguri.</br> We create a dynamic website that offers captivating results. Alongside this, we keep the data secure and deliver a user-friendly design. Our dynamic website incorporates SEO elements and a content management feature that enhances user interaction.",
      },
      workimg: "/services23/Dynamic Website Development 2.webp",
      packageimg: "/services23/Dynamic Website Development 3.webp",
      benifits: [
        "100% Futuristic Design",
        "Converts Visitors into Leads",
        "Website Analytics Data",
        "24*7 Live Support",
      ],

      packages: [
        {
          heading: "Custom Web Designing Package",
          details: [
            "Website Development",
            "Secure Server, Free SSL",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Dynamic Web Development Package",
          details: [
            "100% Custom Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "Free Backup & SSL",
            "Unlimited Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 25,000 INR",
          ],
        },
        {
          heading: "eCommerce Web Designing Package",
          details: [
            "Custom e Commerce Development",
            "Fast & Secure Server",
            "Mobile and Desktop Responsive",
            "Custom Admin Panel",
            "Free SSL, 10 Business Mail",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/customwebdev/website view 1.webp",
        "/customwebdev/website view 2.webp",
        "/customwebdev/website view 3.webp",
        "/customwebdev/website view 4.webp",
        "/customwebdev/website view 5.webp",
        "/customwebdev/website view 6.webp",
        "/customwebdev/website view 7.webp",
        "/customwebdev/website view 8.webp",
        "/customwebdev/website view 9.webp",
        "/customwebdev/website view 10.webp",
        "/customwebdev/website view 11.webp",
      ],
    },
    saas_application_development: {
      title: "Sass Application Development",
      content: {
        serviceimg: "/servicesfast/SAAS Application Development 1.webp",
        servicename: "SAAS Application Development",
        servicedesc1:
          "SAAS Applications are accessed over the internet through a browser or a dedicated client. Such applications require security, integration, proper deployment, and of course maintenance. At Reboot AI Private Limited, we offer the best SAAS developer in Kolkata who can develop SAAS apps with protection against increasing cyber threats. It is one of the fastest-growing business models in the industry that can meet customer demands.",
        servicedesc2:
          "To drive high revenue, SAAS products are hosted in the cloud and monetized via a model. Our cloud solutions will help your business revenue grow and also reduce long-term costs. Our primary process involves understanding the core functionality, targeted audience for the application, and existing issues. If you want to scale your organization in the future to add new products/services then our SAAS Developer in Kolkata can make it happen.Whether it is a startup or a well-performing business, SAAS application success solely relies upon user experience. This is why we create a lightweight application so that users can deal with it consistently. Alongside this, our team will also provide constant support and updates to meet the evolving demands. As these web-based applications don’t run on in-house infrastructure, they have a high demand in the industry.</br> Our UI/UX design team focuses on usability so that the SAAS application can be successfully developed. Our experts will also guide you to launch a successful SAAS application so that you can lead a profitable cloud business. If you want your SAAS Application Development to the next level then you can recruit our team.",
      },
      workimg: "/services23/SAAS Development 2.webp",
      packageimg: "/services23/SAAS Development 3.webp",
      benifits: [
        "Future-Ready, Scalable ",
        "Eye-Catching Design",
        "Seamless User Experiences",
        "24*7 Live Support",
      ],

      packages: [
        {
          heading: "Web Apps Development",
          details: [
            "Responsive Design Excellence",
            "Secure Server, Free SSL",
            "High-Speed Performance",
            "Secure Data Handling",
            "Customizable User Interfaces",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 25,000 INR",
          ],
        },
        {
          heading: "SAAS Application Development",
          details: [
            "Cloud-Native Scalability",
            "User-Centric Interfaces",
            "Seamless API Integrations",
            "Subscription-Based Efficiency",
            "Secure Data Handling",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/Web Application 1.webp",
        "/images/Web Application 2.webp",
        "/images/Web Application 3.webp",
      ],
    },

    android_app_development: {
      title: "Android App Development",
      content: {
        serviceimg: "/servicesfast/Android App Development 1.webp",
        servicename: "Android App Development",
        servicedesc1:
          "As a leading Android app development company in India, Reboot AI Private Limited offers Android app development services with expertise. Our Android app developer in Kolkata creates easy-to-use apps to excel in the number of downloads on the Google app store. We are a trusted company that designs and develops apps for all business sectors. Alongside this, we offer steady help and an app built with a trusted framework. Our apps are intended for all screen sizes and processors and thus we can work on cross-platforms. ",
        servicedesc2:
          "If you are looking for an Android app developed in Kolkata then at reboot our designers have a strong command of different programming languages like Kotlin, Flutter, React Native, Python, etc. Likewise, we have a group of full-stack Android developers that can develop apps for different interfaces.</br> For organizations who are searching for expansion, android apps are the most ideal choice as they hold the greater part of the market. Android itself is an open-source platform and thus requires less maintenance cost. The vital advantage of picking us as your Android developers is that we understand the client’s preference and thus design apps according to their business needs and targeted audience. We keep up with the business standard by utilizing the Android UI so that the interface of the app can be easily navigable. We develop apps with a simple interface and compatible UX. Also, today the use of Android Developer Tool during the testing process makes it easy to make a bug-free Android application. Connect with us to develop an Android app.",
      },
      workimg: "/services23/Android App Development 2.webp",
      packageimg: "/services23/Android App Development 3.webp",
      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Custom Design",
        "Live Support",
      ],
      packages: [
        {
          heading: "Android App Development",
          details: [
            "Fast User Experience",
            "100% Customized",
            "Wide Device Compatibility",
            "Future Ready, Scalable",
            "APIs Integration",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
        {
          heading: "iOS App Development",
          details: [
            "Sleek & Secure",
            "High End User Experience",
            "Flawless App Store Deployment",
            "Future Ready, Scalable",
            "100% Customized",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
        {
          heading: "Flutter App Development",
          details: [
            "Cross-platform Excellence",
            "Single Codebase Advantage",
            "Attractive Customized Designs",
            "Data-Driven Insights",
            "Tailored AI Solutions",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 1,50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/app development 1.webp",
        "/images/app development 2.webp",
        "/images/app development 3.webp",
      ],
    },
    ios_app_development: {
      title: "iOS App Development",
      content: {
        serviceimg: "/servicesfast/iOS App Development 1.webp",
        servicename: "iOS App Developer",
        servicedesc1:
          "Top-notch app development is a necessity to reach customers around the globe. When it comes to iOS, the app must be developed and compatible with all Apple devices on the App Store. For businesses looking for an iOS app developer in Siliguri, Reboot AI Private Limited is just a call away.",
        servicedesc2:
          "Due to Apple’s widespread popularity, getting an iOS app is one step closer to improving your sales. Our iOS app developers are specialists in different programming languages like Swift or Objective-C, and thus we build, test, and provide the final app according to the business needs. We offer custom iOS solutions to organizations of all sizes.</br> We assist businesses in developing scalable and functional iOS applications with secure features. We use the latest technologies such as IoT and advanced AI and ML solutions to transform your business idea into reality. To enhance data security, we further utilize blockchain technology to protect sensitive information that can only be decrypted by authorized owners. Thus, we provide cloud services for a smooth customer experience. Our iOS app development services in India are integrated with robust technologies so that businesses can develop. To reach a larger audience, we develop apps that can increase the business's digital presence. Our R&D is focused on delivering an app that can improve the revenue of the business. Connect with us to create a futuristic app.",
      },
      workimg: "/services23/iOS App Development 2.webp",
      packageimg: "/services23/iOS App Development 3.webp",
      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Custom Design",
        "Live Support",
      ],
      packages: [
        {
          heading: "Android App Development",
          details: [
            "Fast User Experience",
            "100% Customized",
            "Wide Device Compatibility",
            "Future Ready, Scalable",
            "APIs Integration",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
        {
          heading: "iOS App Development",
          details: [
            "Sleek & Secure",
            "High End User Experience",
            "Flawless App Store Deployment",
            "Future Ready, Scalable",
            "100% Customized",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
        {
          heading: "Flutter App Development",
          details: [
            "Cross-platform Excellence",
            "Single Codebase Advantage",
            "Attractive Customized Designs",
            "Data-Driven Insights",
            "Tailored AI Solutions",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 1,50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/app development 1.webp",
        "/images/app development 2.webp",
        "/images/app development 3.webp",
      ],
    },
    flutter_app_development: {
      title: "Flutter App Development",
      content: {
        serviceimg: "/servicesfast/Flutter App Development 1.webp",
        servicename: "Flutter App Development",
        servicedesc1:
          "Flutter applications are developed using a single codebase that works across multiple platforms. Initially created by Google, Flutter is an open-source framework. We provide top-notch Flutter app development services for mobile, desktop, and web applications. Our team of experts is ready to create customized apps tailored to your business needs.",
        servicedesc2:
          "Utilize cutting-edge services to create a dynamic, feature-rich, and cross-platform Flutter application. Our team specializes in developing apps that can handle high traffic seamlessly. We provide expert guidance and craft strategies tailored to your business objectives. Additionally, with our Flutter app development services in Kolkata, we can assist in migrating or upgrading your existing app to the latest version. We create both Android and iOS applications, pushing the limits of traditional app development. Our goal is to deliver a multi-platform user experience, enabling you to launch a fully functional app. </br> As a premier Flutter app development company in India, we are here to help you reach your business objectives. Our Flutter applications deliver a native-like experience and perform seamlessly across a wide range of Android and iOS devices. Supported by Google, Flutter offers an extensive UI library that accelerates the app development process. In the years ahead, the Dart programming language is expected to gain popularity, leading to a significant increase in demand for Flutter applications.",
      },
      workimg: "/services23/Flutter App Development 2.webp",
      packageimg: "/services23/Flutter App Development 3.webp",
      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Custom Design",
        "Live Support",
      ],

      packages: [
        {
          heading: "Android App Development",
          details: [
            "Fast User Experience",
            "100% Customized",
            "Wide Device Compatibility",
            "Future Ready, Scalable",
            "APIs Integration",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
        {
          heading: "iOS App Development",
          details: [
            "Sleek & Secure",
            "High End User Experience",
            "Flawless App Store Deployment",
            "Future Ready, Scalable",
            "100% Customized",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
        {
          heading: "Flutter App Development",
          details: [
            "Cross-platform Excellence",
            "Single Codebase Advantage",
            "Attractive Customized Designs",
            "Data-Driven Insights",
            "Tailored AI Solutions",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 1,50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/app development 1.webp",
        "/images/app development 2.webp",
        "/images/app development 3.webp",
      ],
    },
    ai_ml_integration: {
      title: "AI & ML Integration",
      content: {
        serviceimg: "/servicesfast/ai and ml 1.webp",
        servicename: "AI & ML Integration support",
        servicedesc1:
          "Efficient, precise, and contemporary technology solutions can be achieved through the integration of AI and ML. Recognized as one of the most forward-looking technologies, this market has provided significant advantages to numerous businesses. Currently, companies are gradually incorporating AI and ML into their operations to fulfill their business objectives. Our business strategies can help you develop applications and ensure a secure integration of both AI and ML. Our AI and ML services are designed to do extensive data analysis and use ML models to increase the efficiency of the system.",
        servicedesc2:
          "We assist businesses in developing successful applications that seamlessly integrate with these powerful technologies. Our AI & ML Developer in Kolkata, comprised of highly skilled professionals, is dedicated to enhancing user experience. Also, we use Natural Language Processing to improve data understanding. Integrating AI and ML into your system can help you reduce human error and achieve quicker outcomes. This approach also enables you to forecast future objectives and boost overall efficiency.</br> Grow your audience with our AI & ML integration support in Kolkata. We can help you identify profitable customers and streamline maintenance processes. Leverage cutting-edge AI and machine learning technologies to enhance data precision and elevate your decision-making abilities. Partner with us to integrate advanced generative AI algorithms into your operations and effectively address growing customer demands.",
      },

      workimg: "/services23/ai and ml 2.webp",
      packageimg: "/services23/ai and ml 3.webp",
      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Custom Design",
        "Live Support",
      ],

      packages: [
        {
          heading: "Android App Development",
          details: [
            "Fast User Experience",
            "100% Customized",
            "Wide Device Compatibility",
            "Future Ready, Scalable",
            "APIs Integration",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 50,000 INR",
          ],
        },
        {
          heading: "iOS App Development",
          details: [
            "Sleek & Secure",
            "High End User Experience",
            "Flawless App Store Deployment",
            "Future Ready, Scalable",
            "100% Customized",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 1,00,000 INR",
          ],
        },
        {
          heading: "Flutter App Development",
          details: [
            "Cross-platform Excellence",
            "Single Codebase Advantage",
            "Attractive Customized Designs",
            "Data-Driven Insights",
            "Tailored AI Solutions",
            "3-Month Free Support/Maintenance.",
            "Starts ₹ 1,50,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/ai and ml slide 1.webp",
        "/images/ai and ml slide 2.webp",
      ],
    },
    business_consultation: {
      title: "Business Consultation",
      content: {
        serviceimg: "/servicesfast/Business Consultation 1.webp",
        servicename: "Business Consultation",
        servicedesc1:
          "Today, consulting encompasses much more than mere advice. It provides solutions, assesses risks, and performs thorough market growth analyses. For addressing business challenges and developing new strategies, business consulting services are the ideal choice. These services can help identify and resolve conflicts, ultimately fostering business growth.",
        servicedesc2:
          "Our business consultants are skilled in predicting market trends and adjusting to the ever-changing market landscape. We can identify the necessary steps to reduce daily disruptions. If your company is seeking a proactive business consultant in Kolkata, look no further. We specialize in customer-centric operations and are committed to providing you with the guidance and insights needed to thrive in a competitive landscape.</br>Enhance your objectives with our guidance platform and expand your industry knowledge to boost your success. We adopt a digital transformation approach to develop adaptable strategies tailored for businesses across various sectors. In any organization, stakeholders play a crucial role as financial decision-makers, and their input is vital for driving growth. Our business consulting services can support you in achieving your goals through comprehensive market analysis. Partner with us to stay ahead of your competitors in meeting all compliance requirements. </br>",
      },

      workimg: "/services23/business consulting 2.webp",
      packageimg: "/services23/business consulting 3.webp",
      benifits: [
        "Expert Business Consultant",
        "Right Direction for Marketing",
        "Maximize Revenue",
        "Live Support",
      ],
      packages: [
        {
          heading: "Business Consultation",
          details: [
            "Strategic Growth Planning",
            "Right Direction for Marketing",
            "Minimize Errors & Save Resources",
            "Maximize Revenue",
            "Business Operational Support",
            "1-Month Free Support.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "PR & Branding",
          details: [
            "Build Your Own Brand",
            "Memorable Visual Design",
            "PR Solutions",
            "Brand Messaging",
            "Build Credible Reputation",
            "1-Month Free Support/Maintenance",
            "Starts ₹ 25,000 INR",
          ],
        },
      ],
      pagedesignheading: "Rank 24*7 on Top of Google",

      pagedesigns: [
        "/images/consulting 1.webp",
        "/images/consulting 2.webp",
        "/images/consulting 3.webp",
      ],
    },
    performance_marketing: {
      title: "Performance Marketing",
      content: {
        serviceimg: "/servicesfast/Performance Marketing 1.webp",
        servicename: "Performance Marketing",
        servicedesc1:
          "Brands have started utilizing performance marketing to boost their brand visibility. By launching targeted campaigns, they focus on reaching potential customers who are likely to convert into buyers. Our company is dedicated to delivering high returns by employing conversion rate optimization strategies to enhance user experience. These services not only boost brand value and expand market reach but also ensure that brands only incur costs when their objectives are achieved.",
        servicedesc2:
          "Partnering with us means you'll benefit from a revenue-focused strategy designed to boost your business's income. Our advertising methods effectively target both outbound and inbound ads to the appropriate audience. Our team of strategists is dedicated to aligning your return on investment with your company objectives. By integrating financial metrics, our performance marketing approach yields tangible results. With our advertising strategies, you can maximize your budget by ensuring your spending reaches the right audience.</br> If you're searching for a performance marketing agency in Kolkata, you've come to the right spot. We can help you connect with your online audience, drive growth, and generate leads. Our performance marketing campaigns allow you to easily track your returns and gain real-time insights. Moreover, collaborating with a leading performance marketing agency like ours can optimize your budget allocation.",
      },

      workimg: "/services23/Performance Marketing 2.webp",
      packageimg: "/services23/Performance Marketing 3.webp",
      benifits: [
        "100%  Assured Satisfaction",
        "Results Oriented Campaigns",
        "Get More Customer",
        "Live Support",
      ],

      packages: [
        {
          heading: "Performance Marketing",
          details: [
            "Maximize ROI Quickly",
            "Results Driven campaigns",
            "Targeted Audience Reach",
            "Multiple Platforms",
            "Monthly Reports",
            "100+ Satisfied Clients",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Google Marketing",
          details: [
            "Google Ads , YouTube Ads & SEO",
            "Rank Top on Google ",
            "High Visibility & Web Traffic",
            "Get High Quality Leads",
            "Cost Effective Solutions",
            "Weekly Reports",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Social  Media Marketing",
          details: [
            "Social Media Ads",
            "Engaging Content Solution",
            "Hit Right Audience",
            "Grow Online Presence & Sales",
            "Build Your Own Brand",
            "Monthly Reports",
            "Starts ₹ 15,000 INR",
          ],
        },
      ],
      pagedesignheading: "Rank 24*7 on Top of Google",
      pagedesigns: ["/images/marketing 1.webp", "/images/marketing 2.webp"],
    },
    pr_brand_building: {
      title: "PR & Brand Building",
      content: {
        serviceimg: "/servicesfast/pr and brand identity 1.webp",
        servicename: "PR & Branding Solutions",
        servicedesc1:
          "The PR & Branding Solution is dedicated to developing and managing a brand's market image. Our branding services enhance a brand's visual identity, including its logo and color scheme, to project a positive image within the industry. Effective branding not only defines a company's value but also helps to establish a distinctive brand presence. By employing strategic branding techniques, businesses can expand and effectively position their brands in the marketplace.",
        servicedesc2:
          "We specialize in press release distribution and a range of media coverage services. At our Branding Solution Agency, we prioritize preserving a positive image for your brand across both traditional and digital platforms. In times of crisis, our team takes decisive action to mitigate damage and safeguard your brand's values.</br> Today, you have the opportunity to enhance your brand's image through comprehensive media coverage and targeted outreach to your ideal audience. With our cutting-edge marketing strategies, your brand can establish a significant presence in the industry. Our PR experts specialize in linking your brand with valued customers, helping to boost brand awareness with our public relations objectives. Recognizing the importance of public perception, we prioritize the creation of positive publicity.Whether you're introducing a new product or enhancing an existing one, our branding solution agency is here to handle all your needs. We aim to provide affordable PR solutions that help businesses boost their revenue. ",
      },

      workimg: "/services23/PR & Branding 2.webp",
      packageimg: "/services23/PR & Branding 3.webp",
      benifits: [
        "Expert Business Consultant",
        "Right Direction for Marketing",
        "Maximize Revenue",
        "Live Support",
      ],

      packages: [
        {
          heading: "Business Consultation",
          details: [
            "Strategic Growth Planning",
            "Right Direction for Marketing",
            "Minimize Errors & Save Resources",
            "Maximize Revenue",
            "Business Operational Support",
            "1-Month Free Support.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "PR & Branding",
          details: [
            "Build Your Own Brand",
            "Memorable Visual Design",
            "PR Solutions",
            "Brand Messaging",
            "Build Credible Reputation",
            "1-Month Free Support/Maintenance",
            "Starts ₹ 25,000 INR",
          ],
        },
      ],
      pagedesignheading: "Rank 24*7 on Top of Google",

      pagedesigns: [
        "/images/award 1.webp",
        "/images/award 2.webp",
        "/images/award 3.webp",
        "/images/award 4.webp",
      ],
    },
    google_marketing: {
      title: "Google Marketing",
      content: {
        serviceimg: "/servicesfast/Google Martketing 1.webp",
        servicename: "Google Marketing",
        servicedesc1:
          "To achieve the best results from your campaigns and drive revenue growth for your business, utilizing Google marketing services is essential. Google Ads currently dominates the market, providing superior returns on investment. To enhance your online presence and ensure the success of your campaigns, it's vital to seek guidance that can simplify the vast landscape of online advertising. With millions of users accessing the Google search engine every day, there is no larger targeted audience available than that offered by Google.",
        servicedesc2:
          "Collaborating with a professional Google Marketing Agency in Kolkata, such as ours, brings valuable industry expertise and in-depth market trend analysis. Our research and development team is dedicated to delivering real-time insights and crafting optimal strategies for your business. We focus on ensuring that your products and services connect with the right audience, maximizing your return on every pay-per-click investment.</br> With Google Marketing, you can display your ads to a specific audience of your choice. Many individuals utilize Google services before making a purchase, making it an ideal platform to promote your offerings. Unlike traditional targeting methods, Google Marketing provides more precise targeting options, including geotargeting. Additionally, the reports generated can assist in refining your marketing strategies.",
      },

      workimg: "/services23/google marketing 2 (1).webp",
      packageimg: "/services23/google marketing 3 (1).webp",
      benifits: [
        "100%  Assured Satisfaction",
        "Results Oriented Campaigns",
        "Get More Customer",
        "Live Support",
      ],

      packages: [
        {
          heading: "Performance Marketing",
          details: [
            "Maximize ROI Quickly",
            "Results Driven campaigns",
            "Targeted Audience Reach",
            "Multiple Platforms",
            "Monthly Reports",
            "100+ Satisfied Clients",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Google Marketing",
          details: [
            "Google Ads , YouTube Ads & SEO",
            "Rank Top on Google ",
            "High Visibility & Web Traffic",
            "Get High Quality Leads",
            "Cost Effective Solutions",
            "Weekly Reports",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Social  Media Marketing",
          details: [
            "Social Media Ads",
            "Engaging Content Solution",
            "Hit Right Audience",
            "Grow Online Presence & Sales",
            "Build Your Own Brand",
            "Monthly Reports",
            "Starts ₹ 15,000 INR",
          ],
        },
      ],
      pagedesignheading: "Rank 24*7 on Top of Google",

      pagedesigns: ["/images/marketing 1.webp", "/images/marketing 2.webp"],
    },
    social_media_solutions: {
      title: "Social Media Solutions",
      content: {
        serviceimg: "/servicesfast/social media solution 1.webp",
        servicename: "Social Media Solutions",
        servicedesc1:
          "To foster brand growth, establishing a strong social media presence is essential. Over the past few years, social media has expanded significantly and holds great potential for future success. Consequently, brands are dedicating more resources to enhance their brand value. Social media marketing effectively engages customers and boosts brand visibility. Additionally, utilizing paid advertisements on social media platforms can improve business ROI and enhance credibility.",
        servicedesc2:
          "As the leading social media agency in Siliguri, we assist businesses in selecting the ideal platforms to promote their products and services. Our team creates tailored strategies for various social media channels, including Facebook, Twitter, Instagram, and LinkedIn, guiding you in making informed decisions. Furthermore, we conduct deep data evaluation to evaluate ad campaign performance and reveal valuable insights to upgrade your strategies.</br> Statistics indicate that social media audiences have expanded since 2020, with individuals spending at least two hours daily across various platforms. This growth presents a valuable opportunity to connect with your target demographics. A forward-thinking digital marketing agency in Siliguri, like ours, can help your business craft a creative social media strategy that generates more leads. This approach is an effective way to capture attention and ensures long-term, sustainable success.",
      },

      workimg: "/services23/social media solution 2.webp",
      packageimg: "/services23/social media solution 3.webp",
      benifits: [
        "100%  Assured Satisfaction",
        "Results Oriented Campaigns",
        "Get More Customer",
        "Live Support",
      ],

      packages: [
        {
          heading: "Performance Marketing",
          details: [
            "Maximize ROI Quickly",
            "Results Driven campaigns",
            "Targeted Audience Reach",
            "Multiple Platforms",
            "Monthly Reports",
            "100+ Satisfied Clients",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Google Marketing",
          details: [
            "Google Ads , YouTube Ads & SEO",
            "Rank Top on Google ",
            "High Visibility & Web Traffic",
            "Get High Quality Leads",
            "Cost Effective Solutions",
            "Weekly Reports",
            "Starts ₹ 15,000 INR / Month",
          ],
        },
        {
          heading: "Social  Media Marketing",
          details: [
            "Social Media Ads",
            "Engaging Content Solution",
            "Hit Right Audience",
            "Grow Online Presence & Sales",
            "Build Your Own Brand",
            "Monthly Reports",
            "Starts ₹ 15,000 INR",
          ],
        },
      ],
      pagedesignheading: "Rank 24*7 on Top of Google",

      pagedesigns: [
        "/images/social media 1.webp",
        "/images/social media 2.webp",
        "/images/social media 3.webp",
      ],
    },
    it_consultation: {
      title: "IT Consultation",
      content: {
        serviceimg: "/servicesfast/IT Consulting 1.webp",
        servicename: "IT Consultation",
        servicedesc1:
          "IT consultation plays a crucial role in meeting project goals within the specified time and budget constraints. This service facilitates the seamless operation of a company and aids in adapting to evolving infrastructures. In today's landscape, IT consultation encompasses all aspects of the IT industry and offers strategic services to prospective clients.",
        servicedesc2:
          "If you're seeking an IT consultation company in Kolkata, look no further. We specialize in evaluating your products and services to enhance overall efficiency while keeping costs in check. Our approach includes a comprehensive digital transformation strategy aimed at fostering a profitable business. We will identify potential risks and create a tailored roadmap for success. To optimize your resources and minimize waste, our team will pinpoint any obstacles, ensuring you derive maximum value from your current offerings.</br> When developing any product, we prioritize comprehensive documentation, streamlined workflows, and robust support. Our agency is equipped to implement a sophisticated security system, ensuring that no vulnerabilities exist. We are committed to being your long-term partner, addressing any challenges that could threaten your IT operations. Our emphasis is on providing cutting-edge technologies, enabling you to stay at the leading edge of innovation.</br> We are committed to analyzing your business operations and offering valuable insights, enabling you to make necessary adjustments and enhance the efficiency of your offerings.",
      },

      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Tailored  IT Solutions",
        "Live Support",
      ],

      packages: [
        {
          heading: "IT Consultation",
          details: [
            "Tailored IT Solutions",
            "Expert Tech Solutions",
            "RIght Path to Digital Success",
            "Cost Effective Strategy",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Cloud Server",
          details: [
            "Secure Server Setup",
            "24*7 Reliability",
            "Free Consultation",
            "Optimize Performance",
            "Optimized Budget",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 5,000 INR",
          ],
        },
      ],

      workimg: "/services23/IT Consulting 2.webp",
      packageimg: "/services23/IT Consulting 3.webp",

      pagedesigns: [
        "/images/consulting 1.webp",
        "/images/consulting 2.webp",
        "/images/consulting 3.webp",
      ],
    },
    web_and_apps_security: {
      title: "Web & Apps Security",
      content: {
        serviceimg: "/servicesfast/Web & Apps Security 1 (1).webp",
        servicename: "Web Apps & Security",
        servicedesc1:
          "Today, cyber threats pose significant challenges to online businesses, making the security of web applications crucial. Web security safeguards computers and servers while protecting sensitive company information. By implementing effective scanning and malware protection, potential threats can be effectively mitigated.",
        servicedesc2:
          "We monitor and analyze any indications of virus attacks or security breaches in your web applications. Our team is committed to conducting regular assessments for vulnerabilities to safeguard you against hackers, cyber theft, and malware threats. Ensuring web security is crucial for the safe and efficient operation of any business. With the support of our top-tier experts, you will receive comprehensive assistance regarding CISSP and CREST CEH certifications.</br> To safeguard your company’s data, it is essential to maintain up-to-date SSL certificates and encryption methods. Our security team diligently ensures that all necessary patches are applied to mitigate any potential security vulnerabilities. To protect vital information, our team implements protocols that secure the code.  Our Web Security Agency in Kolkata offers top-notch web security solutions, safeguarding the organization against the latest cyber threats. Furthermore, we defend against hackers and bots attempting to infiltrate or steal the company's data.",
      },

      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Tailored  IT Solutions",
        "Live Support",
      ],

      packages: [
        {
          heading: "IT Consultation",
          details: [
            "Tailored IT Solutions",
            "Expert Tech Solutions",
            "RIght Path to Digital Success",
            "Cost Effective Strategy",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Cloud Server",
          details: [
            "Secure Server Setup",
            "24*7 Reliability",
            "Free Consultation",
            "Optimize Performance",
            "Optimized Budget",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 5,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      workimg: "/services23/Web & Apps Security 2.webp",
      packageimg: "/services23/Web & Apps Security 3.webp",

      pagedesigns: ["/images/Websecurity 1.webp", "/images/Websecurity 2.webp"],
    },
    creative_ui_design: {
      title: "Creative UI/UX Design",
      content: {
        serviceimg: "/servicesfast/Creative UI design 1.webp",
        servicename: "Creative UI/UX",
        servicedesc1:
          "Our Creative UI/UX services specialize in designing user interfaces and experiences for websites, applications, and various digital products. These services enhance user-friendliness, boost customer engagement, and drive revenue growth. Partner with us to turn your vision into a seamless user experience that stands out in the industry. We craft intuitive and user-centric UI/UX designs that adapt to your evolving business needs. Our streamlined design process guarantees top-quality results. We offer a comprehensive range of UI/UX services, encompassing branding, responsive web design, mobile app design, consulting, and promotional design, all leveraging the latest trends and technologies. Through our UI/UX check-up, we identify opportunities to make your platform smoother, faster, and more intuitive.",
        servicedesc2:
          "Turn your vision into a smooth user experience centered around user-focused design principles, ensuring every product effectively serves your target audience. Our team of specialists upholds the highest standards, enabling users to benefit from our services. Embark on your digital journey with our expert support. By integrating user research methods with our offerings, we deliver a holistic UI/UX design strategy that caters to the needs of our clients. Our designers provide exceptional concepts for mobile app designs that prioritize quick loading times, appealing aesthetics, ease of use, and improved customer satisfaction.",
      },

      benifits: [
        "Expert Designs",
        "Eye-Catching Design",
        "100% Custom UI Design",
        "Live Support",
      ],

      packages: [
        {
          heading: "Creative UI Package",
          details: [
            "100% Custom UI Solution",
            "Available for Web & Apps",
            "Android, iOS Design",
            "100% assured Satisfaction",
            "Project Basis Pricing",
            "Up to 2 Free Revision",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Brand Starter Package",
          details: [
            "New Business Brand Kit",
            "Logo, Business Card, Website",
            "ID Card & More",
            "Branded & Futuristic Design",
            "Unlimited Revisions",
            "Reasonable Budget",
            "Starts ₹ 25,000 INR",
          ],
        },
      ],

      workimg: "/services23/creative ui design 2.webp",
      packageimg: "/services23/creative ui design 3.webp",
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/creativeui 1.webp",
        "/images/creativeui 2.webp",
        "/images/creativeui 3.webp",
      ],
    },
    brand_starter_solution: {
      title: "Brand Starter Solution",
      content: {
        serviceimg: "/servicesfast/Brand Starter Solution 1.webp",
        servicename: "Brand Starter Solution",
        servicedesc1:
          "Brand starter solutions provide companies with a boost during their early stages. These services encompass everything from brand identity to design, resulting in effective branding strategies. Such services support both startups and established businesses in broadening their portfolios and moving closer to their objectives. The key question is: in a landscape filled with trending brands and emerging technologies, does your business possess the unique identity needed to stand out?",
        servicedesc2:
          "Our all-encompassing branding solutions provide the essential tools and analysis to elevate your business vision. We offer unmatched support and guidance in sourcing and cost optimization. Our strategic approaches are designed to ensure that your brand receives the necessary backing to achieve profitability. We help entrepreneurs, corporations, and non-profits develop robust brands. Additionally, we provide the expertise to navigate market trends effectively.</br> Every business is distinct, and to elevate your brand, it needs unique assets to differentiate itself in the marketplace. Our brand agency in Kolkata safeguards your brand assets and enhances your brand's value. Additionally, we assist in developing, managing, and promoting brands at every stage of their journey. Customers are essential to any business, making it vital to cultivate and nurture those relationships.",
      },
      benifits: [
        "Expert Designs",
        "Eye-Catching Design",
        "100% Custom UI Design",
        "Live Support",
      ],

      packages: [
        {
          heading: "Creative UI Package",
          details: [
            "100% Custom UI Solution",
            "Available for Web & Apps",
            "Android, iOS Design",
            "100% assured Satisfaction",
            "Project Basis Pricing",
            "Up to 2 Free Revision",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Brand Starter Package",
          details: [
            "New Business Brand Kit",
            "Logo, Business Card, Website",
            "ID Card & More",
            "Branded & Futuristic Design",
            "Unlimited Revisions",
            "Reasonable Budget",
            "Starts ₹ 25,000 INR",
          ],
        },
      ],

      workimg: "/services23/Brand Starter Solution 2.webp",
      packageimg: "/services23/Brand Starter Solution 3.webp",
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: [
        "/images/Brand Starter 1.webp",
        "/images/Brand Starter 2.webp",
        "/images/Brand Starter 3.webp",
        "/images/Brand Starter 4.webp",
        "/images/Brand Starter 5.webp",
      ],
    },
    cloud_server_setup: {
      title: "Cloud Server Setup",
      content: {
        serviceimg: "/servicesfast/Cloud Server Setup 1.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      workimg: "/services23/cloud server setup 2.webp",
      packageimg: "/services23/cloud server setup 3.webp",

      benifits: [
        "Expert Team Member",
        "Eye-Catching Design",
        "Tailored  IT Solutions",
        "Live Support",
      ],

      packages: [
        {
          heading: "IT Consultation",
          details: [
            "Tailored IT Solutions",
            "Expert Tech Solutions",
            "RIght Path to Digital Success",
            "Cost Effective Strategy",
            "Up to 10 Pages Content",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 10,000 INR",
          ],
        },
        {
          heading: "Cloud Server",
          details: [
            "Secure Server Setup",
            "24*7 Reliability",
            "Free Consultation",
            "Optimize Performance",
            "Optimized Budget",
            "1-Month Free Support/Maintenance.",
            "Starts ₹ 5,000 INR",
          ],
        },
      ],
      pagedesignheading: "Crafting Cutting-Edge Websites",

      pagedesigns: ["/images/cloudserver 1.webp", "/images/cloudserver 2.webp"],
    },
  };

  const { service } = params;

  // Fetch data based on the service
  const data = serviceData[service];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.title,
      content: data.content,
      packages: data.packages,
      pagedesigns: data.pagedesigns,
      workimg: data.workimg,
      packageimg: data.packageimg,
      benifits: data.benifits,
      pagedesignheading: data.pagedesignheading,
    },
  };
};
