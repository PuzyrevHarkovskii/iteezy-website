"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        В САНКТ-ПЕТЕРБУРГЕ
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold" style={{ whiteSpace: 'break-word' }}>
        Программирование для детей
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Выбирая увлечение сегодня - закладываем фундамент для будущей профессии!
        </p>
        <button className="bg-indigo-500 text-white font-medium py-5 px-5 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Записаться
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://avatars.mds.yandex.net/get-altay/6550540/2a0000018ab8b1b633c1191a60f740fae78a/XXXL",
  },
  {
    id: 2,
    src: "https://avatars.mds.yandex.net/get-altay/10637974/2a0000018b619ed23abfb0b855365f986a71/XXXL",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    src: "https://avatars.mds.yandex.net/get-altay/10963046/2a0000018b619f02c79d418646bf9d486813/XXXL",
  },
  {
    id: 5,
    src: "https://avatars.mds.yandex.net/get-altay/11393517/2a0000018b619d196cbae1ce785db5ae3acc/XXXL",
  },
  {
    id: 6,
    src: "https://avatars.mds.yandex.net/get-altay/11381866/2a0000018b619d5af63571b9c3230b638307/XXXL",
  },
  {
    id: 7,
    src: "https://avatars.mds.yandex.net/get-altay/11860411/2a0000018b619f030f3de8148ff2f100376f/XXXL",
  },
  {
    id: 8,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    id: 9,
    src: "https://avatars.mds.yandex.net/get-altay/7368569/2a000001830e8bb88841ee8bcbf389a73544/L_height",
  },
  {
    id: 10,
    src: "https://avatars.mds.yandex.net/get-altay/10636707/2a0000018ab8b1a048365d4f933e77c60eaa/XXXL",
  },
  {
    id: 11,
    src: "https://evf.su/upload/resize_cache/iblock/e91/2000_2000_140cd750bba9870f18aada2478b24840a/uai85z2dwnjeivvfrkcbr21685sa3esi.jpg",
  },
  {
    id: 12,
    src: "https://avatars.mds.yandex.net/get-altay/9849468/2a0000018b619f00ff18c08e6888d423079d/XXXL",
  },
  {
    id: 13,
    src: "https://cdn.worldvectorlogo.com/logos/unity-69.svg",
  },
  {
    id: 14,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1200px-Godot_icon.svg.png",
  },
  {
    id: 15,
    src: "https://p1.zoon.ru/preview/1uI2I3iSAMMOpQUSTmi4bA/587x440x85/1/6/1/original_5c01b0c9a24fd94470020011_617303c33b3e0.jpg",
  },
  {
    id: 16,
    src: "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018b619ed1e5ee0a2105578a815f6d/XXXL",
  },
];

const generateSquares = () => {
  const squareSrcArray = squareData.map((sq) => sq.src);
  const shuffledSquareSrcArray = shuffle(squareSrcArray);

  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);
  
  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;