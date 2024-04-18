
import Questions from "@/components/chakra-ui/FAQ";
import Footer from "@/components/chakra-ui/footer";
import { HeroParallaxDemo } from "@/components/hero";
import { SparklesPreview } from "@/components/name";
import { NavbarDemo } from "@/components/nav";
import { StickyScrollRevealDemo } from "@/components/ourProgramms";
import { InfiniteMovingCardsDemo } from "@/components/reviews";
import { TextParallaxContentExample } from "@/components/ui/Features";
import { SparklesCore } from "@/components/ui/sparkles";
import { ChakraProvider } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";


export default function Home() {

  
  return (
    
    
    <>
    

    <TextParallaxContentExample/>
    
    <StickyScrollRevealDemo/>
    <ChakraProvider>
    <Questions/>
    <div> 
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1310ee24fa0e4717f56a401a049c366818ae5442e279ee96ee2a602ef6a80227&amp;source=constructor" width="100%" height="400" ></iframe>
    </div>
    
      
      <Footer/>
    </ChakraProvider>
    </>
  );
}
