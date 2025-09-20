import React from 'react'
import {portfolio , clientsReviews} from "../data"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Protfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <>
        <section className='h-fit bg-Pro5-bg-base py-16  space-y-5 text-white px-10 '>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl text-Pro5-primary font-medium'>Our Portfolio</h1>
                <p className='text-4xl font-medium text-center w-[60%]'>Showcasing Innovative IT Solutions that Drive Real Results</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-10">
                {portfolio.map((data, index) => (
                    <div key={index} className="flex flex-col h-full bg-Pro5-bg-base2 rounded-xl overflow-hidden">
                        <div className="w-full aspect-[7/6] flex items-center justify-center">
                            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                        </div>

                        
                        <div className="px-5 py-4 flex flex-col flex-grow space-y-4">
                            <h1 className="text-2xl font-semibold">{data.title}</h1>
                            <p className="text-text-muted">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    </>
  )
}

export default Protfolio