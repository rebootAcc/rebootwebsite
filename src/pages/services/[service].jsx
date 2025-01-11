import ServicePageDesign from "@/components/ServicePageDesign";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const CustomWebsiteDevelopment = ({
  metatitle,
  metadescription,
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
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
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
    { params: { service: "website-development-company-in-kolkata" } },
    { params: { service: "e-commerce-website-developer-in-kolkata" } },
    { params: { service: "web-application-development-service-in-kolkata" } },
    { params: { service: "dynamic-website-development-service-in-siliguri" } },
    { params: { service: "saas-application-development-service-in-kolkata" } },
    { params: { service: "app-developer-in-kolkata-android-app-development" } },
    { params: { service: "ios-app-development-company-in-siliguri" } },
    { params: { service: "flutter-developer-in-kolkata" } },
    { params: { service: "ai-ml-integration-services-in-kolkata" } },
    { params: { service: "business-consultation-service-in-kolkata" } },
    { params: { service: "performance-marketing-agency-in-kolkata" } },
    { params: { service: "influencer-marketing-agency-in-kolkata" } },
    { params: { service: "seo-agency-in-kolkata" } },
    { params: { service: "social-media-agency-in-siliguri" } },
    { params: { service: "it-consultation-service-in-kolkata" } },
    { params: { service: "cyber-security-service-in-kolkata" } },
    { params: { service: "ui-ux-developer-in-kolkata" } },
    { params: { service: "brand-starter-solution-agency-in-kolkata" } },
    { params: { service: "cloud-server-setup" } },
  ];

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    "website-development-company-in-kolkata": {
      metatitle: "Website Development Company in Kolkata",
      metadescription:
        "Reboot AI, a leading custom website developer in Kolkata, 1000+ custom Website developed for Corporates, 5 years experience, futuristic design. Achieve seamless functionality, future-proof designs, and unmatched performance.",
      title: "Website Development Company in Kolkata",
      content: {
        serviceimg:
          "/servicesfast/Custom Website Development Custom Website Development 1.webp",
        servicename: "Website Development Company in Kolkata",
        servicedesc1:
          "Do you need the services of a reliable Custom Website Development Company in Kolkata? Well, if so, then you are at the right place. At Reboot AI, we provide unique, high quality web design solutions that include the latest design, seamless functionality and future proof technologies. <br/> From the perspective of business and professional activities, a customized website design brings forth several advantages. Whether you are a doctor managing a clinic or a professional working in an organization, having a website that fits your niche requirements is a must. Custom designed websites differ from off-the-shelf templates in that they help drive your web presence by addressing specific objectives, without affecting the flexibility to accommodate greater traffic as your business grows.",
        servicedesc2:
          "In addition, at our Custom Website Development Company in Kolkata, we know how to make your website perform efficiently. In cases where you want to achieve a marketing goal through your website, we create solutions that improve on the user interface while delivering the intended market value. Similarly, if you have a clear vision of the design that you want, or you expect certain tailor-made features, we handle every detail with great care regarding your ideas. <br> Choosing custom website development helps one gets a platform that will develop in tandem with their personal or professional needs and requirements. This prevents your website from becoming a stagnant liability in this current era of stiff market competition.<br> At Reboot AI, one of the best Custom Website Development companies in Kolkata, we make your visions come to fruition. Contact us today to pave the way to success for your personal and business ambitions and goals!",
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

    "e-commerce-website-developer-in-kolkata": {
      metatitle: "Ecommerce Website Developer in Kolkata",
      metadescription:
        "Reboot AI, a top ecommerce developer in Kolkata, delivers custom, scalable online store solutions. Scalable, Highly Secure, fully custom, most affordable cost.",
      title: "Ecommerce Website Developer in Kolkata",
      content: {
        serviceimg: "/servicesfast/E-commerce Store Development 1.webp",
        servicename: "Ecommerce Website Developer in Kolkata",
        servicedesc1:
          "For your online store idea to transform into a reality, it is crucial to identify the right Ecommerce Developer in Kolkata. From the application of scalable, custom coded solutions encoded into your brand-new online portal, to the refashioning of a traditional business into an Internet e-commerce business, at Reboot AI, we handle it all at one place. As a leading Custom Ecommerce website development company in Kolkata, we ensure our clients get exactly what they need for success.",
        servicedesc2:
          "Every business needs its own e-commerce platform with company-specific style and features that meet customers' expectations. Superior quality design, exceptional functionality, and flawless scalability are the basics of our solutions, establishing us as a top Development Company. New and customized e-commerce websites need to be built to cater to present day business demands. As an experienced Custom Ecommerce Developer in Kolkata, Reboot AI designs web solutions rooted in flexibility to sustain client's requirements continuously. Payment gateways, mobile optimization, easy to navigate features are some of the key aspects we integrate together to offer an absolutely smooth and hassle-free experience.<br> A good e-commerce strategy fuels growth while improving the interaction between the business and customers. With the help of our Ecommerce website development company in Kolkata, businesses get an access to advanced solutions capable of withstanding the ever-changing consumer trends. We offer affordable services for both startups and bigger companies with various goals and needs & requirements.",
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
    "web-application-development-service-in-kolkata": {
      metatitle:
        "Web Application Development Services in Kolkata - Reboot AI Pvt Ltd",
      metadescription:
        "Web Application Development for businesses looking to streamline operations. Scalable, secure, and optimized web apps tailored to your needs.",
      title: "Web Application Development Services in Kolkata",
      content: {
        serviceimg: "/servicesfast/Web Application Development 1.webp",
        servicename: "Web Application Development Services in Kolkata",
        servicedesc1:
          "Today, creating apps is not limited to mobile phones; making them web-responsive is a truly necessary step. At Reboot AI Private Limited, we have a group of the best web apps developer in Kolkata, India who can transform your vision into dynamic web apps. Our aphorism is “Let's Turn Your Ideas into Reality” and hence we work to legitimize it.",
        servicedesc2:
          "To meet various business needs, we integrate the latest technology, such as SQL, Node.js, React, Python, etc., into our web apps. Today, cross-platform web apps are a necessity, and this requires the best UX and web API. With this, we work to reduce the bounce rate and further develop the client experience.We are focused on creating responsive web apps, database-friendly, and include the best UI. Dynamic web apps help you reach countless customers. We intend to incorporate features like mobile push notifications, chatbots, and a mobile-friendly interface. From the initial discussion to the end product, our team of web apps developer in Kolkata, India combines cutting-edge technologies to fulfill the client’s wish. </br> As a web apps service provider, we secure your data and follow the security protocols.  For this reason, we keep up with data security throughout the app lifecycle. With the help of our technology, we help organizations grow and expand their businesses beyond limits. Brand visibility, customer engagement, and return on investments are all incorporated in the designs while creating the web apps.If you are looking to mark an exceptional user experience then hire us for web app development!",
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
    "dynamic-website-development-service-in-siliguri": {
      metatitle: "Website Development Services in Siliguri - Reboot AI Pvt Ltd",
      metadescription:
        "Create dynamic, engaging websites with Reboot AI's Dynamic Website Development services. Enhance user experience and SEO with flexible, responsive designs.",
      title: "Website Development Services in Siliguri",
      content: {
        serviceimg: "/servicesfast/Dynamic Website Development 1.webp",
        servicename: "Website Development Services in Siliguri",
        servicedesc1:
          "Nowadays every organization leans towards a dynamic website for user interaction as it generates real-time pages. Such a website uses a combination of different languages such as Java, CSS, Python, etc. If you want to keep your audience interaction active then at Reboot AI Private Limited, we offer the best Dynamic Website Development Service in Siliguri.",
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
    "saas-application-development-service-in-kolkata": {
      metatitle:
        "SAAS Application Development Services in Kolkata - Reboot AI Pvt Ltd",
      metadescription:
        "Reboot AI offers SAAS Application Development for businesses with scalable and secure cloud-based solutions. Build and manage custom software solutions.",
      title: "SAAS Application Development Services in Kolkata",
      content: {
        serviceimg: "/servicesfast/SAAS Application Development 1.webp",
        servicename: "SAAS Application Development Services in Kolkata",
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

    "app-developer-in-kolkata-android-app-development": {
      metatitle: "App Developer in Kolkata - Android App Development",
      metadescription:
        "Looking For High Quality Android App To Be Developed In Kolkata? Android App Development! 5 Years of Experience, 50+ App Developed.",
      title: "App Developer in Kolkata - Android App Development",
      content: {
        serviceimg: "/servicesfast/Android App Development 1.webp",
        servicename: "App Developer in Kolkata - Android App Development",
        servicedesc1:
          "Looking For High Quality Android App To Be Developed In Kolkata? We Are Here! Modern tech is led by innovations in the Android development space! We take pride in being a pioneer app developer in Kolkata with 5 years of experience in the industry. In our 5 years, we have delivered more than 50 apps for clients. We use some of the best and latest tech stacks to deliver you a stunning Android solution. Our process-oriented workflow ensures that right from exploration call to delivery, both client and team are on the same page. ",
        servicedesc2:
          "After the exploration call is done, we provide the app layout via Figma or Adobe XD as per the client's requirement. This is done so that the expectation is set right and finalized before the work on the tech begins! Such constant focus on client needs makes us the best Android app developer in Kolkata. Every expert working in our Android development team bears on his/her shoulder the feeling of pride about working with the best App development company in Kolkata.  <br> We work on projects of varying scale. Be it a huge MNC client or a local business looking for a classic Android solution at an affordable rate, we are the App developer in Kolkata that you need. Our process and tech stacks are highly secure and we offer free backups of your project so that you can live stress-free. The best way you will find out more about us is by connecting with us through our exploration call!  <br> <strong> Have an Idea? Let's discuss this on our exploration call!  <strong>",
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
    "ios-app-development-company-in-siliguri": {
      metatitle: "iOS App Development Company in Siliguri - Reboot AI Pvt Ltd",
      metadescription:
        "Get a high-performing, user-friendly iOS app with Reboot AI's iOS App Development services. Deliver exceptional experiences to your iPhone and iPad users.",
      title: "iOS App Development Company in Siliguri",
      content: {
        serviceimg: "/servicesfast/iOS App Development 1.webp",
        servicename: "iOS App Development Company in Siliguri",
        servicedesc1:
          "Top-notch app development is a necessity to reach customers around the globe. When it comes to iOS, the app must be developed and compatible with all Apple devices on the App Store. For businesses looking for an iOS app developer in Siliguri, Reboot AI Private Limited is just a call away.",
        servicedesc2:
          "Due to Apple's widespread popularity, getting an iOS app is one step closer to improving your sales. Our iOS app developers are specialists in different programming languages like Swift or Objective-C, and thus we build, test, and provide the final app according to the business needs. We offer custom iOS solutions to organizations of all sizes.</br> We assist businesses in developing scalable and functional iOS applications with secure features. We use the latest technologies such as IoT and advanced AI and ML solutions to transform your business idea into reality. To enhance data security, we further utilize blockchain technology to protect sensitive information that can only be decrypted by authorized owners. Thus, we provide cloud services for a smooth customer experience. Our iOS app development services in India are integrated with robust technologies so that businesses can develop. To reach a larger audience, we develop apps that can increase the business's digital presence. Our R&D is focused on delivering an app that can improve the revenue of the business. Connect with us to create a futuristic app.",
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
    "flutter-developer-in-kolkata": {
      metatitle: "Flutter Developer in Kolkata",
      metadescription:
        "Get your concept converted into powerful multi-platform apps with our Flutter app developers in Kolkata. Google's new open-source platform Flutter — A way for companies to develop dynamic, rich applications with one codebase that runs on Android, iOS, web and desktop.",
      title: "Flutter Developer in Kolkata",
      content: {
        serviceimg: "/servicesfast/Flutter App Development 1.webp",
        servicename: "Flutter Developer in Kolkata",
        servicedesc1:
          "Get your concept converted into powerful multi-platform apps with our Flutter app developers in Kolkata. Google’s new open-source platform Flutter — A way for companies to develop dynamic, rich applications with one codebase that runs on Android, iOS, web and desktop. <br> We at Reboot AI really indeed specialize in providing absolutely customised solutions that meet your business needs and requirements. We are one of the absolutely leading Flutter app developers in Kolkata who design apps which work as if they were native and make your users have a great and fantastic experience. Be it a new app development or an upgrade of an existing app, our turnkey solutions include app migration and API integrations to build scalable systems that keep your app on the market first. ",
        servicedesc2:
          "With Flutter's complete UI library and Dart programming language we can develop faster with the highest possible quality. Our seasoned developers use these to develop simple and visually appealing applications for all kinds of users. We’re very much focused on innovation and leading-edge technology and helping companies achieve their goals and remain competitive. We have products from startups to enterprises and they are designed for growth and sustainability. Working with the best Flutter app developers in Kolkata, make your dreams fully real with effective, cross-platform applications that leave a mark and a lasting impression to go with as well.",
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
    "ai-ml-integration-services-in-kolkata": {
      metatitle: "AI & ML Integration Services in Kolkata - Reboot AI Pvt Ltd",
      metadescription:
        "Unlock the power of Artificial Intelligence and Machine Learning with Reboot AI's integration services. Drive innovation and improve business processes with AI solutions.",
      title: "AI & ML Integration Services in Kolkata",
      content: {
        serviceimg: "/servicesfast/ai and ml 1.webp",
        servicename: "AI & ML Integration Services in Kolkata",
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
    "business-consultation-service-in-kolkata": {
      metatitle: "Business Consultation Service in Kolkata",
      metadescription:
        "Get expert business consultation services to scale your enterprise. We help you navigate challenges and implement strategies for sustainable growth.",
      title: "Business Consultation Service in Kolkata",
      content: {
        serviceimg: "/servicesfast/Business Consultation 1.webp",
        servicename: "Business Consultation Service in Kolkata",
        servicedesc1:
          "Our business consultation in Kolkata is meant to help businesses travel a long way to meet the prospect of issues that come their way, facilitate the opportunity, and work on strategies for the growth of their businesses in the coming future. Starting from acquiring the licenses required to generate the first revenue, we offer all the solutions along a clear set out road to your success. Our approach includes consulting on logo creation, lead generation strategies, and business solutions based on your business requirements.",
        servicedesc2:
          "By keeping risk assessments very deep within the markets and giving strong market insights, empowering businesses to address the dynamics of the markets is what our services entail. Say, an entrepreneur is just starting their business venture or a growing established organization looking for expansion has to approach business consultation in Kolkata to put them in the strategic direction necessary for survival in a very competitive environment.</br> At Reboot AI, we have got years of experience offering personal advice to meet the business needs of your organization. Our trained specialists dedicate themselves to sharing the actionable advice and fresh market strategies for solving your biggest issues. As the market demand grows, we will consult you with the leading strategies. Get engaged with us for business consultation in Kolkata and take the first step to realizing your business vision. ",
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
    "performance-marketing-agency-in-kolkata": {
      metatitle:
        "Digital Marketing Agency in Kolkata - Performance Marketing Agency in Kolkata",
      metadescription:
        "Achieve measurable results with Reboot AI's Performance Marketing services. Maximize ROI through targeted campaigns designed to increase conversions and sales.",
      title:
        "Digital Marketing Agency in Kolkata - Performance Marketing Agency in Kolkata",
      content: {
        serviceimg: "/servicesfast/Performance Marketing 1.webp",
        servicename:
          "Digital Marketing Agency in Kolkata - Performance Marketing Agency in Kolkata",
        servicedesc1:
          "Brands have started utilizing performance marketing to boost their brand visibility. By launching targeted campaigns, they focus on reaching potential customers who are likely to convert into buyers. Our company is dedicated to delivering high returns by employing conversion rate optimization strategies to enhance user experience. These services not only boost brand value and expand market reach but also ensure that brands only incur costs when their objectives are achieved.",
        servicedesc2:
          "Partnering with us means you'll benefit from a revenue-focused strategy designed to boost your business's income. Our advertising methods effectively target both outbound and inbound ads to the appropriate audience. Our team of strategists is dedicated to aligning your return on investment with your company objectives. By integrating financial metrics, our performance marketing approach yields tangible results. With our advertising strategies, you can maximize your budget by ensuring your spending reaches the right audience.</br> If you're searching for a performance marketing agency in Kolkata, you've come to the right spot. We can help you connect with your online audience, drive growth, and generate leads. Our performance marketing campaigns allow you to easily track your returns and gain real-time insights. Moreover, collaborating with a leading Digital Marketing agency like ours can optimize your budget allocation.",
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
    "influencer-marketing-agency-in-kolkata": {
      metatitle: " Influencer Marketing Agency in Kolkata",
      metadescription:
        "Boost your brand's visibility with Reboot AI, the top Influencer agency in Kolkata. From influencer collaborations to award recognition, we deliver tailored solutions to elevate your brand in 2025.",
      title: "Influencer Marketing Agency in Kolkata",
      content: {
        serviceimg: "/servicesfast/pr and brand identity 1.webp",
        servicename: "Influencer Marketing Agency in Kolkata",
        servicedesc1:
          "Are you a brand owner?  Does the competitive scenario in the marketplace make you worried about finding best PR & branding agency in Kolkata? Well, then your search ends here at Reboot AI Pvt Ltd. If you haven't heard our name before, we must tell you Reboot AI Pvt Ltd is a one stop solution for Branding your Business, where you can avail tailored solutions to get the desired exposure it deserves. <br> As a trusted Influencer Marketing agency in Kolkata, we offer a full suite of services designed to elevate your brand image right from the scratch. We believe in offering value to our clients, and that's why our in house experts focus on creating a distinguishing brand image that helps creating a position in the competitive marketplace. ",
        servicedesc2:
          "In 2025, businesses are adopting various strategies and establishing a prominent online presence is one of the key factors in today's business like influencer marketing. Considering today's business demands, our in-house experts offer a full range of end-to-end services for your brand. Our PR and branding services include <br> Now you can connect your brand with well-known personalities. <br> In addition, collaborate with all your favorite influencers, podcasters, and online personalities from social media, and reach out to more potential customers with their help.You can also get solution for brands to achieve desired recognition in prestigious industry awards.So get ready to collaborate with the best PR & branding agency in Kolkata and start your brand's journey towards the limelight big time. ",
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
    "seo-agency-in-kolkata": {
      metatitle: "SEO Agency in Kolkata",
      metadescription:
        "Looking for the best SEO agency in Kolkata in 2025? Reboot AI specializes in GMB Ranking, Website SEO, and PPC optimization, driving organic traffic and maximizing ROI for your business growth.",
      title: "SEO Agency in Kolkata",
      content: {
        serviceimg: "/servicesfast/Google Martketing 1.webp",
        servicename: "SEO Agency in Kolkata",
        servicedesc1:
          "If you are running a business in 2025, we hope you must have heard of SEO or Serach Engine Optimization; the OG in the Branding world! At Reboot AI Pvt Ltd, we have a team of expert professionals, who own extensive and in-depth knowledge of Google SEO, and can help you reach wider audience with various Organic strategies. As a dominant force in the market, Google SEO guarantees exceptional growth and Returns on Investment, ensuring your business attracts the right audience. By any chance if you are in search of a trustworthy SEO agency in Kolkata, we are here to help you out. ",
        servicedesc2:
          "Our Google marketing Startegy in Kolkata can help you analyze the market trends to understand the demand of the customers. In addition, our R&D Team can also help you avail real-time insights to find the right audience. It will further help you define your customer persona and come up with unique ideas to grab their attention. Google Ads: Boost your online presence with precise ad targeting to reach millions of buyers online. SEO Services: Attract more buyers with organic traffic with the help of Search Engine Optimization. Campaign Optimization: Conduct regular tests and optimizations to maximize your ROI and boost sales by up to 80% or even more. <br> Reboot AI Pvt Ltd is a one stop Google marketing agency in Kolkata that has been helping individuals for years to generate higher revenue with impressive results. Contact us today and achieve your business goals with our specialized Google marketing services.",
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
    "social-media-agency-in-siliguri": {
      metatitle: "Social Media Agency in Siliguri",
      metadescription:
        "A strong web presence is fundamental and the base to a business's growth and development. A social media agency in Siliguri can offer various services; for instance, we Reboot AI can offer many services and help businesses strengthen their online presence on different forms and platforms of social media.",
      title: "Social Media Agency in Siliguri",
      content: {
        serviceimg: "/servicesfast/social media solution 1.webp",
        servicename: "Social Media Agency in Siliguri",
        servicedesc1:
          "A strong web presence is fundamental and the base to a business's growth and development. A social media agency in Siliguri can offer various services; for instance, we Reboot AI can offer many services and help businesses strengthen their online presence on different forms and platforms of social media. We specialize in organic marketing strategies, organic video ranking, and paid social media ads, all aimed at producing clear results and boosting your online impact.",
        servicedesc2:
          "We use a data-driven approach, combining organic tactics such as content creation, audience targeting, and influencer collaboration with paid campaigns to amplify your brand's reach and sales. We work on getting your video content noticed, which in turn will help it rank better in search results as well. Being the best social media agency in Siliguri, we understand the changing social media trends and algorithms, which helps us improve strategies that work well. <br> Our team co-works to develop campaigns suiting your business goals. Creating creative content along with running relevant targeted ads ensure that your brand stays important as well as front in the view of customers for you, within a difficult marketplace with cut-throat competition. From requiring free engagement through to requiring stronger paid ad schemes, our social media agency in Siliguri can leverage the best instruments and experiences needed to succeed. <br> We focus on building sustainable organic natural growth through content and engagement that attracts your target audience. Our targeted paid ads are designed to reach the right audience, driving measurable results and conversions.",
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
    "it-consultation-service-in-kolkata": {
      metatitle: "IT Consultation Service in Kolkata",
      metadescription:
        "As the real world is gradually shrinking, the virtual world has opened up its doors for multiple avenues of opportunities in various walks of life. The World Wide Web (WWW) is an endless cosmos of numerous web entities and Ecommerce portals that represent a wide array of business and service models. If you have a requirement for a certain service or product, chances are you will meet the right match for your needs through a simple Google search. The virtual world is literally the destination for all up and coming businesses to connect with their prospective buyers and clients in the near future. Reboot AI is an IT Consultation agency in Kolkata that offers impeccable & immaculate services for brands and enterprises wishing to take their businesses online.",
      title: "IT Consultation Service in Kolkata",
      content: {
        serviceimg: "/servicesfast/IT Consulting 1.webp",
        servicename: "IT Consultation Service in Kolkata",
        servicedesc1:
          "As the real world is gradually shrinking, the virtual world has opened up its doors for multiple avenues of opportunities in various walks of life. The World Wide Web (WWW) is an endless cosmos of numerous web entities and Ecommerce portals that represent a wide array of business and service models. If you have a requirement for a certain service or product, chances are you will meet the right match for your needs through a simple Google search. The virtual world is literally the destination for all up and coming businesses to connect with their prospective buyers and clients in the near future. Reboot AI is an IT Consultation agency in Kolkata that offers impeccable & immaculate services for brands and enterprises wishing to take their businesses online.",
        servicedesc2:
          "Cutting edge technology and latest advancements combined with state-of-the-art infrastructure to propel business websites to instant prominence on the online space. Our IT Consultation Agency in Kolkata covers all of these aspects that are key to the launch and success of any business or brand online. <br> Reboot AI is an IT Consultation agency in Kolkata that provides end to end deliverables that include conceptualization, wireframe design and live deployment of web based applications along with marketing services to ensure optimum visibility for the end user. Our IT Consultation team consists of highly experienced subject matter experts who have had a prior background in delivering unmatched and unparalleled results. Our workspace is protected by a safe, secure, and highly foolproof environment allowing no scope for firewall breach or data compromise and data theft. ",
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
      pagedesignheading: "Rank 24*7 on Top of Google",

      pagedesigns: [
        "/images/consulting 1.webp",
        "/images/consulting 2.webp",
        "/images/consulting 3.webp",
      ],
    },
    "cyber-security-service-in-kolkata": {
      metatitle: "Cyber Security Service in Kolkata",
      metadescription:
        "Reboot AI, the best Cyber Security provider in Kolkata; runs a global network providing many of the security services listed above, including DDoS mitigation, API protection a Web Application Firewall, and more.",
      title: "Cyber Security Service in Kolkata",
      content: {
        serviceimg: "/servicesfast/Web & Apps Security 1 (1).webp",
        servicename: "Cyber Security Service in Kolkata",
        servicedesc1:
          "Web application security, also popularly known in industry circles by its abbreviated form Web App Sec, is the science of designing safe and secure web base applications that are not vulnerable to frequent cyber attacks or breach of privacy and data. This is achieved by building secure and foolproof framework that are protected from malicious attacks. Web based applications such as softwares are extremely dynamic ecosystems by themselves and as such need constant upgrading to eliminate any loopholes in the system. Web application security leverages secure production practices and implementation of security measures in the software development life cycle (SDLC), ensuring that the design-level flaws and implementation-level bugs are addressed.",
        servicedesc2:
          "As dynamic as the world of web based applications can get, requiring constant monitoring and surveillance to identify security risks, Reboot AI is committed to change as and when new attacks and threats emerge. Some of the common web application security risks that could affect the security and performance of any software cycle include Zero Day Vulnerability, Memory Corruption, Shadow APIs, Third Party Code abuse and attack of surface level misconfigurations.<br> Reboot AI, the best Cyber Security provider in Kolkata; runs a global network providing many of the security services listed above, including DDoS mitigation, API protection a Web Application Firewall, and more. <br> These services are all designed to run through any data centre in our network, allowing them to stop attacks close to their source. In addition, our web application security services are compatible to work in all kinds of website infrastructure.",
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
    "ui-ux-developer-in-kolkata": {
      metatitle: "UI-UX Developer in Kolkata",
      metadescription:
        "Looking for expert UI/UX developers? Reboot AI specializes in creative, user-focused designs that enhance digital experiences. Transform your vision into reality with our innovative and industry-leading solutions!",
      title: "UI-UX Developer in Kolkata",
      content: {
        serviceimg: "/servicesfast/Creative UI design 1.webp",
        servicename: "UI-UX Developer in Kolkata",
        servicedesc1:
          "Reboot AI Private Limited has emerged as a prominent technology partner and UI developer in Kolkata. As a premier UI developer in Kolkata we are committed to deliver complete UI solutions that will transform digital landscapes. With a substantial proven track record of developing cutting-edge digital products using the latest software technologies we have empowered 1000+ businesses to achieve their technological ambitions big time. Our approach combines 100% creative, unique, and industry-ahead design methodologies that have set new yardsticks and benchmarks in the world of digital innovation.",
        servicedesc2:
          "As an IT startup based in West Bengal, Reboot AI has distinguished itself as an UI developer in Kolkata by offering technology solutions at an affordable and feasible rate while maintaining exceptional quality. Our international experience in the digital domain enables us to craft sophisticated interfaces that meet global standards. Our 100% satisfaction promise and quick delivery times demonstrate our dedication to quality.<br> For entrepreneurs and companies looking to develop business solutions, build high-end apps, powerful SaaS platforms, or strong e-commerce ecosystems, we are your perfect option! We at Reboot AI provide our customers with comprehensive technological support. By leveraging contemporary web frameworks and innovative strategies, Reboot AI ensures that each project not only meets but exceeds our client expectations, thus building a lifelong trusted partnership for businesses across diverse industries.",
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
    "brand-starter-solution-agency-in-kolkata": {
      metatitle: "Brand Starter Solution Agency in Kolkata",
      metadescription:
        "Kickstart your brand with Reboot AI's Brand Starter Solutions. From logo design to marketing strategies, we provide everything to launch your brand successfully.",
      title: "Brand Starter Solution Agency in Kolkata",
      content: {
        serviceimg: "/servicesfast/Brand Starter Solution 1.webp",
        servicename: "Brand Starter Solution Agency in Kolkata",
        servicedesc1:
          "Brand starter solution is a strategic approach that is designed to help businesses establish a very strong market identity. These solutions go beyond mere visual design, and focus on creating a holistic brand foundation that connects with the target audiences. Reboot AI Private Limited is a highly dynamic technology company. It has emerged as an immensely prominent brand starter solution provider. Our goal is to turn business ideas into powerful market identities. We are a state-of-the-art web and app development company that specializes in creating smart digital solutions that help companies in a variety of sectors. ",
        servicedesc2:
          "Our brand building services are meticulously designed to enable startups and existing organizations in achieving unique market positioning. By leveraging advanced AI technologies we at Reboot AI offers end-to-end support ranging from logo design and marketing strategies to sophisticated digital infrastructure development and efficient brand starter solution. Our company's approach to digital innovation combines creative design, technological innovation, and strategic insights to help businesses differentiate themselves in competitive landscapes. <br> With a definite proven track record of supporting 1000+ businesses, Reboot AI provides absolutely tailored solutions that address specific organizational needs. Our multidisciplinary team focuses on developing a multitude of market needs from custom web applications, to e-commerce platforms, and brand identity packages that drive business growth and revenue generation. We establish ourselves as a reliable, long-term technology partner for business owners who aim to create strong, industry-leading brands by providing clear pricing, ongoing post-delivery support, and dedicated customer communication. The fundamental objective of our organization is turning business obstacles into opportunities by using AI-powered solutions that open up fresh avenues and new vistas for development and creativity.",
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
    "cloud-server-setup": {
      metatitle: "Cloud Server Support in Kolkata - Reboot AI Pvt Ltd",
      metadescription:
        "Optimize your business operations with secure and reliable Cloud Server Setup services. Reboot AI offers customized cloud solutions to enhance scalability and performance.",
      title: "Cloud Server Setup",
      content: {
        serviceimg: "/servicesfast/Cloud Server Setup 1.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand's image in the audience's mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
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
      metatitle: data.metatitle,
      metadescription: data.metadescription,
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
