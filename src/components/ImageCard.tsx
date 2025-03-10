import React from "react";
import Image from "next/image";

const ImageCard = () => {
  return (
    <div className="p-2 mt-12 w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Image
        alt="ss"
        width={200}
        height={200}
        src="/images/desktop.png"
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageCard;
