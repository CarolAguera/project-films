import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/grid"
import SwiperCore, {
  Autoplay, Pagination, Navigation, Grid
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation, Grid]);
import CardLancamentos from "../components/CardLancamentos/CardLancamentos";
import Card1 from '../../public/card1.jpg'
import { Col, Container, Row } from "react-bootstrap";

export default function Search() {
  return (
    <>
      <div style={{ backgroundColor: '#1F1F1F' }}>
        <Container>
          <div style={{ display: "flex", justifyContent: 'space-between', height: '90px', alignItems: 'center', backgroundColor: '#1F1F1F' }}>
            <h1>GazinFilms</h1>
            <input type="text" name="" id="" style={{ background: 'rgba(196, 196, 196, 0.3)', borderRadius: '8px', height: '45px' }} />
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <h1>Resultados</h1>
        </Row>
        <Row>
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
              "rows": 2,
              'fill': 'colunm'
            }}
            breakpoints={{
              "320": {
                "slidesPerView": 3,
                "spaceBetween": 20,
                "grid": {
                  "rows": 3,
                  "fill": 'row'
                }
              },
              "640": {
                "slidesPerView": 3,
                "spaceBetween": 20,
                "grid": {
                  "rows": 3,
                  "fill": 'row'
                }
              },
              "768": {
                "slidesPerView": 4,
                "spaceBetween": 40,
                "grid": {
                  "rows": 3,
                  "fill": 'row'
                }
              },
              "1024": {
                "slidesPerView": 5,
                "spaceBetween": 50,
                "grid": {
                  "rows": 3,
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
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
            <SwiperSlide>
              <CardLancamentos
                foto={Card1}
                name="Mulher Maravilha"
                year="2020"
              >
              </CardLancamentos>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  )
}


