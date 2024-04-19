
import Contact from "@/components/chakra-ui/ContactUs";
import Questions from "@/components/chakra-ui/FAQ";
import GridBlurredBackdrop from "@/components/chakra-ui/Testimonials";
import Footer from "@/components/chakra-ui/footer";
import ShuffleHero from "@/components/herosection";
import { StickyScrollRevealDemo } from "@/components/ourProgramms";
import { TextParallaxContentExample } from "@/components/ui/Features";
import { ChakraProvider } from "@chakra-ui/react";



export default function Home() {

  
  return (
    
    
    <>
    
    <ShuffleHero/>
    <TextParallaxContentExample/>
    
    <StickyScrollRevealDemo/>
    <ChakraProvider>
    <GridBlurredBackdrop/>
    <Questions/>
    <div> 
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1310ee24fa0e4717f56a401a049c366818ae5442e279ee96ee2a602ef6a80227&amp;source=constructor" width="100%" height="400" ></iframe>
    </div>
    
      
      <Footer/>
    </ChakraProvider>
    </>
  );
}
