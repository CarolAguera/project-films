import React, { useEffect, useState } from "react";
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
import { Container, Row } from "react-bootstrap";
import { FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { BsSearch } from "react-icons/bs";
import axios from 'axios'
import api from '../api/api'
export default function Index() {
  const [listActors, setListActors] = useState([]);
  const [actors, setActors] = useState([]);
  const MAX_REQUEST = 4;

  useEffect(() => {
    let list = [];
    api.get('/actors/list-most-popular-celebs', {
      params: { homeCountry: 'US', currentCountry: 'PT', purchaseCountry: 'US' },
    })
      .then(function (response) {
        list = response.data.map(element => {
          return element.replace('/name/', '').replace('/', '');
        });
        setListActors(list);

        for (let index = 0; index < MAX_REQUEST; index++) {
          api.get('/actors/get-bio', {
            params: { nconst: `${list[index]}` },
          }).then(function (response) {
            setActors(prevState => [...prevState, response.data]);
          })
            .catch(function (error) {
              console.error(error);
            });
        }

      })
      .catch(function (error) {
        console.error(error);
      });



  }, [])


  function next() {
    const initInterval = actors.length;
    const finalInterval = initInterval + MAX_REQUEST;
    for (let index = initInterval; index < finalInterval; index++) {
      api.get('/actors/get-bio', {
        params: { nconst: `${listActors[index]}` },
      }).then(function (response) {
        setActors(prevState => [...prevState, response.data]);
      })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

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
      </div >
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


          <h1>Atores populares</h1>


          <div className="navigation prev-card prev-workshop-ref" >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="chevron-swiper"
              style={{ transform: "rotate(180deg)" }}
            >
              <circle cx="20" cy="20" r="19" stroke="#33cc00" strokeWidth="2" />
              <path
                d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                stroke="#33cc00"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="navigation next-card next-workshop-ref" onClick={next}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="chevron-swiper"
            >
              <circle cx="20" cy="20" r="19" stroke="#33cc00" strokeWidth="2" />
              <path
                d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                stroke="#33cc00"
                strokeWidth="2"
              />
            </svg>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: '.next-workshop-ref',
              prevEl: '.prev-workshop-ref',
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
                "slidesPerView": 2,
                "spaceBetween": 20,
                "grid": {
                  "rows": 2,
                  "fill": 'row'
                }
              },
              "768": {
                "slidesPerView": 2,
                "spaceBetween": 40,
                "grid": {
                  "rows": 2,
                  "fill": 'row'
                }
              },
              "1024": {
                "slidesPerView": 4,
                "spaceBetween": 50,
                "grid": {
                  "rows": 1,
                  "fill": 'row'
                }
              }
            }}
            className="mySwiper3">

            {actors.map((actor, index) => {
              return (<SwiperSlide key={index}>
                <Actors
                  foto={actor?.image.url}
                  name={actor?.name}
                  year={actor?.birthDate}
                >
                </Actors>
              </SwiperSlide>
              )
            })}
            <SwiperSlide />
          </Swiper>
        </Row>
      </Container>
    </>
  )
}