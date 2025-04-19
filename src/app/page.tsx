import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Merits from "@/sections/Merits";
import ReportsButton from "@/sections/ReportsButton";

export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Introduction />
        <Merits />
        <Features />
        <Integrations />
        <Faqs/>
        <ReportsButton/>
        <CallToAction/>
        <Footer/>
        </>
    )
}
