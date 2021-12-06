import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import SwiperCore, { Autoplay, Pagination, Navigation, Grid } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation, Grid]);
import ListFilms from "../components/ListFilms/ListFilms";
import Card1 from "../../public/card1.jpg";
import { Row } from "react-bootstrap";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import api from "../api/api";
import ListResults from "../components/ListResults/ListResults";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Search() {
  const router = useRouter();
  const [busca, setBusca] = useState([]);
  let search = router.query.search;
  useEffect(() => {
    api
      .get("/auto-complete", {
        params: {
          q: `${search}`,
        },
      })
      .then(function (response) {
        for (let index = 0; index <= 5; index++) {
          setBusca((prevState) => [...prevState, response.data.d[index]]);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h1>Resultados</h1>
        </Row>
        <Row>
          <Swiper
            style={{
              "--swiper-navigation-color": "#FFB800",
              "--swiper-pagination-color": "#FFB800",
            }}
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 2,
              fill: "colunm",
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                  rows: 3,
                  fill: "row",
                },
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                  rows: 3,
                  fill: "row",
                },
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
                grid: {
                  rows: 3,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
                grid: {
                  rows: 3,
                  fill: "row",
                },
              },
            }}
            className="mySwiper2"
          >
            {busca.map((buscar, index) => {
              return (
                <SwiperSlide key={index}>
                  <ListResults
                    id={buscar?.id}
                    foto={buscar?.i.imageUrl}
                    name={buscar?.l}
                    year={buscar?.s}
                  ></ListResults>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
