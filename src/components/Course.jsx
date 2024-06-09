import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export default function Course() {
  const matchesMedium = useMediaQuery('(max-width: 1024px)');
  
  return (
    <section id="course" className='flex flex-col gap-4'>
      <p className='px-4 text-2xl font-bold'>Course</p>
      <div className='flex justify-center'>
        <div className={`grid grid-cols-1 ${matchesMedium ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-28`}>
          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=1024x1024&w=is&k=20&c=_WVkZzW-StmC-QhpjDYlLZjmEQH8PlwjRyUAQfdOxvg="
              alt="Drones in Agriculture"
            />
            <p className="text-white text-2xl">Drones Building</p>
          </div>

          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=1024x1024&w=is&k=20&c=_WVkZzW-StmC-QhpjDYlLZjmEQH8PlwjRyUAQfdOxvg="
              alt="Drones in Agriculture"
            />
            <p className="text-white text-2xl">Glider Design</p>
          </div>
          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=1024x1024&w=is&k=20&c=_WVkZzW-StmC-QhpjDYlLZjmEQH8PlwjRyUAQfdOxvg="
              alt="Drones in Agriculture"
            />
            <p className="text-white text-2xl">Drones in Agriculture</p>
          </div>

          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=1024x1024&w=is&k=20&c=_WVkZzW-StmC-QhpjDYlLZjmEQH8PlwjRyUAQfdOxvg="
              alt="Drones in Agriculture"
            />
            <p className="text-white text-2xl text-center">Drones in Media</p>
          </div>

          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl"
              src="https://media.istockphoto.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=1024x1024&w=is&k=20&c=_WVkZzW-StmC-QhpjDYlLZjmEQH8PlwjRyUAQfdOxvg="
              alt="Drones in Agriculture"
            />
            <p className="text-white text-2xl text-center">Drones in Mapping & Suveying</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}