import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function DisplayImage({ imageSrc, fallbackImage }: any) {
  const [imgSrc, setImgSrc] = useState(imageSrc);

  useEffect(() => {
    setImgSrc(imageSrc);
  }, [imageSrc]);

  return (
    <div>
      <Image
        src={imgSrc}
        alt=""
        width={250}
        height={200}
        className="max-w-4 flex"
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            setImgSrc(fallbackImage);
          }
        }}
        onError={() => {
          setImgSrc(fallbackImage);
        }}
      />
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// export default function DisplayImage({ imageSrc, fallbackImage }: any) {
//   const [imgSrc, setImgSrc] = useState(imageSrc);

//   useEffect(() => {
//     setImgSrc(imageSrc);
//   }, [imageSrc]);

//   return (
//     <div className=" flex justify-center items-center">
//       <Image
//         src={imgSrc}
//         alt=""
//         width={100}
//         height={100}
//         className="max-w-4"
//         onLoadingComplete={(result) => {
//           if (result.naturalWidth === 0) {
//             setImgSrc(fallbackImage);
//           }
//         }}
//         onError={() => {
//           setImgSrc(fallbackImage);
//         }}
//       />
//     </div>
//   );
// }
