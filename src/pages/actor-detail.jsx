import React from 'react'
import { Container, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { BsSearch } from "react-icons/bs";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/grid"
import CardLancamentos from '../components/CardLancamentos/CardLancamentos';
import Card1 from '../../public/card1.jpg'
import SwiperCore, {
  Autoplay, Pagination, Navigation, Grid
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation, Grid]);
import style from '../../styles/ActorDetail.module.scss'

export default function ActorDetail() {
  return (
    <>
      <div style={{ backgroundColor: '#1F1F1F' }}>
        <Container>
          <div style={{ display: "flex", justifyContent: 'space-between', height: '90px', alignItems: 'center', backgroundColor: '#1F1F1F' }}>
            <h1>GazinFilms</h1>
            <div style={{
              display: "flex",
              justifyContent: "flex-end"
            }}>
              <InputGroup>
                <FormControl
                  style={{ background: "rgba(196, 196, 196, 0.3)", color: "#fff", borderColor: "rgba(196, 196, 196, 0.3)" }}
                  aria-describedby="basic-addon2"
                />
                <Button id="button-addon2" style={{ background: "rgba(196, 196, 196, 0.3)", borderColor: "rgba(196, 196, 196, 0.3)" }}>
                  <BsSearch />
                </Button>
              </InputGroup>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={style['description-actor']}>
          <Image src="/card3.jpg" alt="Image Actor" width="193" height="193"></Image>
          <div>
            <h2>Angelina Jolie</h2>
            <p>50 anos</p>
            <p>Dublin, Irlanda</p>
          </div>
        </div>
        <div>
          <h1>Biografia</h1>
          <p>Adam Douglas Driver nasceu em San Diego, Califórnia.
            Sua mãe, Nancy (Needham) Wright, é paralegal de Mishawaka, Indiana,
            e seu pai, Joe Douglas Driver, que tem raízes profundas no sul dos Estados Unidos, é de Little Rock, Arkansas.
            Seu padrasto é um ministro batista. Sua ascendência inclui holandês, inglês, alemão, irlandês e escocês.
          </p>
        </div>
        <div>
          <h1>Filmografia</h1>
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
                "slidesPerView": 2,
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
        </div>
      </Container>
    </>
  )
}
