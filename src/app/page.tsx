import Head from "next/head";
import { HeroSection } from "@/components/landing/HeroSection";
import VisaPage from "@/components/landing/Online-Visa";
import TrustVisa from "@/components/landing/Trust-Visa";
import VisaType from "@/components/landing/VisaType";
import VisaCard from "@/components/landing/VisaCard";


export default function Home() {
  return (
    <>
        <Head>
        <title> Home</title>
        <meta name="description" content="Explore visa services and track your application easily." />
      </Head>
     <HeroSection></HeroSection>
     <TrustVisa></TrustVisa>
     <VisaPage></VisaPage>
     <VisaType></VisaType>
     <VisaCard></VisaCard>
    </>
  );
}
