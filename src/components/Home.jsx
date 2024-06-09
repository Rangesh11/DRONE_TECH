
"use client";

import { Carousel } from "flowbite-react";

export function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-screen">
      <Carousel slideInterval={5000}>
        <img src="https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=2048x2048&w=is&k=20&c=4FkoHruSlP9bcggRixWv0AzH1k5ybLu1b3PXy6HoupM=" alt="..." />
        <img src="https://media.istockphoto.com/id/1261285467/photo/drone-copter-flying-with-digital-camera-drone-with-high-resolution-digital-camera-flying.jpg?s=2048x2048&w=is&k=20&c=30Ek4mdXOddB4AyBppFnyupOIpmPwvaquxtKweQECQ0=" alt="..." />
        <img src="https://media.istockphoto.com/id/1411047487/photo/dji-air-2s-flying-in-the-garden-with-sensors.jpg?s=2048x2048&w=is&k=20&c=Y_3is__LfPppAitObRbya9mGGr2Hgj9kwAxF8AMRPuU=" alt="..." />
        <img src="https://media.istockphoto.com/id/1343074333/photo/drone-technology-engineering-device-industry-flying-in-industrial-logistic-export-import.jpg?s=2048x2048&w=is&k=20&c=syLFSZoUW_rnN5I7Fqv_S03aYrZIoDcoiJT6JVkSZeM=" alt="..." />
        <img src="https://media.istockphoto.com/id/1354798776/photo/drone-technology-engineering-device-industry-flying-in-industrial-logistic-export-import.jpg?s=2048x2048&w=is&k=20&c=aKHsyQTRy15vzEMffgpitADiuoOVUvzXI4Q9f2plMdM=" alt="..." />
      </Carousel>
    </div>
  );
}
