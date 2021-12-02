import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/grid"
import SwiperCore, {
  Autoplay, Pagination, Navigation, Grid
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation, Grid]);
import Image from 'next/image'
import CardLancamentos from "../components/CardLancamentos/CardLancamentos";
import CardPopulares from "../components/CardPopulares/CardPopulares";
import Card2 from '../public/card2.jpg'
import Card1 from '../public/card1.jpg'
export default function Index() {
  return (
    <div>
      <Swiper
        style={{ '--swiper-navigation-color': '#FFB800', '--swiper-pagination-color': '#FFB800' }}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        grid={{
          "rows": 1,
          'fill': 'colunm'
        }}
        breakpoints={{
          "320": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "640": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50,
            "grid": {
              "rows": 1,
              "fill": 'row'
            }
          }
        }}
        className="mySwiper">
        <SwiperSlide>
          <Image src="/card-mv-1.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-2.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-3.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-4.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-5.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-6.jpg" width="193" height="355"></Image>

        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-1.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-2.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-3.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-4.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-5.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-6.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-1.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-2.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-3.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-4.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-5.jpg" width="193" height="355"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/card-mv-6.jpg" width="193" height="355"></Image>
        </SwiperSlide>
      </Swiper>


      <Swiper
        style={{ '--swiper-navigation-color': '#FFB800', '--swiper-pagination-color': '#FFB800' }}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        grid={{
          "rows": 1,
          'fill': 'colunm'
        }}
        breakpoints={{
          "320": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "640": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50,
            "grid": {
              "rows": 1,
              "fill": 'row'
            }
          }
        }}
        className="mySwiper2">
        <SwiperSlide>
          <CardPopulares
            foto={Card2}
            name="Mulher Maravilha"
            year="2020"
          >
          </CardPopulares>
        </SwiperSlide>
      </Swiper>


      <Swiper
        style={{ '--swiper-navigation-color': '#FFB800', '--swiper-pagination-color': '#FFB800' }}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        grid={{
          "rows": 1,
          'fill': 'colunm'
        }}
        breakpoints={{
          "320": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "640": {
            "slidesPerView": 3,
            "spaceBetween": 20,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40,
            "grid": {
              "rows": 2,
              "fill": 'row'
            }
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50,
            "grid": {
              "rows": 1,
              "fill": 'row'
            }
          }
        }}
        className="mySwiper2">
        <SwiperSlide>
          <CardLancamentos
            foto={Card1}
            name="Mulher Maravilha"
            year="2020"
          >
          </CardLancamentos>
        </SwiperSlide>
      </Swiper>

    </div >
  )
}