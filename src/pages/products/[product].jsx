import ProductsPageDesign from "@/components/ProductsPageDesign";
import Head from "next/head";
import React from "react";

const Educationalconsultantcrm = () => {
  return (
    <>
      <Head>
        <title>Reboot AI | Products</title>
      </Head>
      <div>
        <ProductsPageDesign />
      </div>
    </>
  );
};

export default Educationalconsultantcrm;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        paramas: {
          product: "educational_consultant_crm",
        },
      },
      {
        paramas: {
          product: "educational_consultant_crm",
        },
      },
    ],
    fallback: false,
  };
};
