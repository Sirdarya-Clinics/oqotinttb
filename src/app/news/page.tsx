import { GetNews } from "@/components/getNews";
import Footer from "@/sections/Footer";
import { Header2 } from "@/sections/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oqoltin tuman tibbiyot birlashmasi yangiliklari",
  description:
    "Sirdaryo viloyat Oqoltin tuman tibbiyot birlashmasi yangiliklari",
};

export default async function NewsPage() {
  return (
    <>
      <Header2 />
      <div className="flex flex-col  items-center ">
        <GetNews />
      </div>

      <Footer />
    </>
  );
}
