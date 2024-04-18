
import { HeroParallaxDemo } from "@/components/hero";
import { NavbarDemo } from "@/components/nav";
import { StickyScrollRevealDemo } from "@/components/ourProgramms";
import { InfiniteMovingCardsDemo } from "@/components/reviews";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TextParallaxContentExample } from "@/components/ui/Features";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavbarDemo/>
    <HeroParallaxDemo/>
    <TextParallaxContentExample/>
    </>
  );
}
