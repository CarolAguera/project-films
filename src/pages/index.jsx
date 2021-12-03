import React from "react";
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
import CardLancamentos from "../components/CardLancamentos/CardLancamentos";
import CardPopulares from "../components/CardPopulares/CardPopulares";
import Actors from "../components/Actors/Actors";
import Card1 from '../../public/card1.jpg'
import Card2 from '../../public/card2.jpg'
import Card3 from '../../public/card3.jpg'
import Banner1 from '../../public/banner1.jpg'
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
export default function Index() {
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
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Banner1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Banner1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <h1>Filmes populares</h1>
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

          <h1>Próximos lançamentos</h1>
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


          <h1>Atores populares</h1>
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
            className="mySwiper3">
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
            <SwiperSlide>
              <Actors
                foto={Card3}
                name="Angelina Jolie"
                year="50"
              >
              </Actors>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  )
}