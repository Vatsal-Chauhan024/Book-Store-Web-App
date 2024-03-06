import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6"
import profile from "../../assets/profile.jpg"



const ReviewsArray = [

    {
        reviwStars: 5,
        reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem possimus ipsa perspiciatis porro delectus amet commodi sunt quaerat dolor impedit?",
        reviewerName: "Mr. Vatsal",
        reviewerPosition: "CEO, ABC"
    },
    {
        reviwStars: 4,
        reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati a assumenda eos molestias recusandae architecto optio, commodi possimus alias!",
        reviewerName: "Mr. Soham",
        reviewerPosition: "CEO, CDE"
    },
    {
        reviwStars: 4,
        reviewDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor reiciendis dolorum fuga natus laboriosam molestias repellat ducimus veritatis sequi?",
        reviewerName: "Mrs. Dhara",
        reviewerPosition: "CEO, GHI"
    },
    {
        reviwStars: 5,
        reviewDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos debitis error repudiandae consectetur esse voluptate accusantium vitae nesciunt aliquid reprehenderit.",
        reviewerName: "Mrs. Vivek",
        reviewerPosition: "CEO, HKL"
    },
    {
        reviwStars: 4,
        reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint provident aperiam tempore eius ut, ad repellat fugit deserunt sit ipsam?",
        reviewerName: "Mrs. Chintan",
        reviewerPosition: "CEO, ZXY"
    }

]

const Reviews = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            <div className='reviews bg-black/80 text-white rounded-lg'>
                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper" style={{ height: "fit-content", padding: "30px 0px" }}
                >

                            {
                                ReviewsArray.map((element, key) => (
                                    
                                    <SwiperSlide key={key}>
                                    <>
                                        <div className="flex flex-col items-center">
                                        <div className='text-amber-500 gap-2 flex'>
                                            {
                                                Array.from({ length: element.reviwStars }, (_, i) => <FaStar key={i}/>)
                                            }
                                        </div>


                                        <div className='flex flex-col-reverse'>
                                            <p className='mt-7'>{element.reviewDescription}</p>
                                            <div className='flex items-center gap-3'>
                                                <div className='rounded-full w-10 h-10 '>
                                                    <img src={profile} alt="error-profile" className='rounded-full' />
                                                </div>
                                                <div>

                                                    <h5 className='text-lg font-medium'>{element.reviewerName}</h5>
                                                    <p className='text-base'>{element.reviewerPosition}</p>
                                                </div>
                                            </div>
                                        </div>

                        </div>
                                    </>
                    </SwiperSlide>
                                ))
                            }





                </Swiper>
            </div>

        </div>
    )
}

export default Reviews
