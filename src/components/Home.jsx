import { Carousel } from "flowbite-react";

export function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-screen">
      <Carousel slideInterval={5000} >
      <img src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.pexels.com/photos/1852984/pexels-photo-1852984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <img src="https://images.unsplash.com/photo-1533063319369-0de118afe00a?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.pexels.com/photos/1545754/pexels-photo-1545754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <img src="https://c0.wallpaperflare.com/preview/611/264/947/drone-dji-sky-landscape.jpg" alt="..." />
      </Carousel>
    </div>
  );
}