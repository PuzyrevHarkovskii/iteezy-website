"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Листайте вниз
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Листайте наверх
        </span>
      </div>
    </div>
  );
};


type CardType = {
    url: string;
    id: number;
  };

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018b619ed1e5ee0a2105578a815f6d/XXXL",
    id: 1,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/6550540/2a0000018ab8b1b633c1191a60f740fae78a/XXXL",
    id: 2,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/10637974/2a0000018b619ed23abfb0b855365f986a71/XXXL",
    id: 3,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/10845257/2a0000018b619d1944b37904a47fb4a2cef0/XXXL",
    id: 4,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/11381866/2a0000018b619d5af63571b9c3230b638307/XXXL",
    id: 5,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/11860411/2a0000018b619f030f3de8148ff2f100376f/XXXL",
    id: 6,
  },
  {
    url: "https://avatars.mds.yandex.net/get-altay/11072941/2a0000018b619d19287ff4579c1446131438/XXXL",
    id: 7,
  },
];