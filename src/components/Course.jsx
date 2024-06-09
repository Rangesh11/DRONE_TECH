import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export default function Course() {
  const matchesMedium = useMediaQuery('(max-width: 1024px)');
  
  return (
    <section id="course" className='flex flex-col gap-4'>
      <p className='px-4 text-2xl font-bold'>Courses</p>
      <div className='flex justify-center'>
        <div className={`grid grid-cols-1 ${matchesMedium ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-28`}>
          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl min-w-full"
              src='https://storage.googleapis.com/fm-coresites-assets/mpora_new/wp-content/uploads/2021/03/how-to-build-your-own-fpv-drone-jt.jpg'
              alt="Drones Building"
              style={{ height: '200px',  }}
            
              
            />
            <p className="text-white text-2xl">Drones Building</p>
          </div>

          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl min-w-full"
              src="https://www.unmannedsystemstechnology.com/wp-content/uploads/2022/10/cannon_Fixed-Wing-UAVs-e1665410372537.jpeg"
              alt="Glider Design"
              style={{ height: '200px',  }}
            
            />
            <p className="text-white text-2xl">Glider Design</p>
          </div>
          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl min-w-full"
              src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Drones in Agriculture"
              style={{ height: '200px',  }}
            
            />
            <p className="text-white text-2xl">Drones in Agriculture</p>
          </div>

          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl min-w-full"
              src="https://www.analyticssteps.com/backend/media/thumbnail/5736929/2447724_1641378800_drone%20title.jpg"
              alt="Drones in Agriculture"
              style={{ height: '200px',  }}
            
            />
            <p className="text-white text-2xl text-center">Drones in Media</p>
          </div>

          
          <div className="flex flex-col h-80 w-80 rounded-xl bg-[#8CB9BD] gap-10 items-center shadow-lg hover:shadow-2xl">
            <img
              className="rounded-xl min-w-full"
              src="https://pilotinstitute.com/wp-content/uploads/2020/09/drone-mapping.jpeg"
              alt="Drones in Agriculture"
              style={{ height: '200px',  }}
            
            />
            <p className="text-white text-2xl text-center ">Drones in Mapping & Suveying</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}