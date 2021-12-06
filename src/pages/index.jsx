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
import api from "../api/api";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ListActors from "../components/ListActors/ListActors";
import { Container } from "react-bootstrap";
export default function Index() {
  const [listActors, setListActors] = useState([]);
  const [actors, setActors] = useState([]);

  const [listPopular, setListPopular] = useState([]);
  const [popular, setPopular] = useState([]);

  const [listLancamentos, setListLancamentos] = useState([]);
  const [lancamentos, setLancamentos] = useState([]);

  const MAX_REQUEST = 4;

  useEffect(() => {
    let list = [];
    let listPopulares = [];
    let listLancamentos = [];

    setTimeout(() => {
      api
        .get("/title/get-most-popular-movies", {
          params: {
            homeCountry: "US",
            purchaseCountry: "US",
            currentCountry: "PT",
          },
        })
        .then(function (response) {
          listPopulares = response.data.map((element) => {
            return element.replace("/title/", "").replace("/", "");
          });
          setListPopular(listPopulares);
          for (let index = 0; index < MAX_REQUEST; index++) {
            api
              .get("/title/get-details", {
                params: { tconst: `${listPopulares[index]}` },
              })
              .then(function (response) {
                setPopular((prevState) => [...prevState, response.data]);
              })
              .catch(function (error) {
                console.error(error.response);
              });
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }, 4000);

    setTimeout(() => {
      api
        .get("/title/get-coming-soon-movies", {
          params: {
            homeCountry: "US",
            purchaseCountry: "US",
            currentCountry: "PT",
          },
        })
        .then(function (response) {
          listLancamentos = response.data.map((element) => {
            return element.id.replace("/title/", "").replace("/", "");
          });
          setListLancamentos(listLancamentos);
          for (let index = 0; index < MAX_REQUEST; index++) {
            api
              .get("/title/get-details", {
                params: { tconst: `${listLancamentos[index]}` },
              })
              .then(function (response) {
                setLancamentos((prevState) => [...prevState, response.data]);
              })
              .catch(function (error) {
                console.error(error.response);
              });
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }, 6000);

    setTimeout(() => {
      api
        .get("/actors/list-most-popular-celebs", {
          params: {
            homeCountry: "US",
            currentCountry: "PT",
            purchaseCountry: "US",
          },
        })
        .then(function (response) {
          list = response.data.map((element) => {
            return element.replace("/name/", "").replace("/", "");
          });
          setListActors(list);
          for (let index = 0; index < MAX_REQUEST; index++) {
            api
              .get("/actors/get-bio", {
                params: { nconst: `${list[index]}` },
              })
              .then(function (response) {
                setActors((prevState) => [...prevState, response.data]);
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }, 8000);
  }, []);

  function next() {
    const initInterval = actors.length;
    const finalInterval = initInterval + MAX_REQUEST;
    for (let index = initInterval; index < finalInterval; index++) {
      api
        .get("/actors/get-bio", {
          params: { nconst: `${listActors[index]}` },
        })
        .then(function (response) {
          setActors((prevState) => [...prevState, response.data]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  function next_popular() {
    const initInterval = popular.length;
    const finalInterval = initInterval + MAX_REQUEST;
    for (let index = initInterval; index < finalInterval; index++) {
      api
        .get("/title/get-details", {
          params: { tconst: `${listPopular[index]}` },
        })
        .then(function (response) {
          setPopular((prevState) => [...prevState, response.data]);
        })
        .catch(function (error) {
          console.error(error.response);
        });
    }
  }
  function next_lancamento() {
    const initInterval = popular.length;
    const finalInterval = initInterval + MAX_REQUEST;
    for (let index = initInterval; index < finalInterval; index++) {
      api
        .get("/title/get-details", {
          params: { tconst: `${listLancamentos[index]}` },
        })
        .then(function (response) {
          setLancamentos((prevState) => [...prevState, response.data]);
        })
        .catch(function (error) {
          console.error(error.response);
        });
    }
  }
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <div className="buttons-navegation">
          <h1>Filmes populares</h1>
          <div className="buttons-navegation-buttons">
            <div className="navigation prev-card swiper-button-prev-popular">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-swiper"
                style={{ transform: "rotate(180deg)" }}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
                <path
                  d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div
              className="navigation next-card swiper-button-next-popular"
              onClick={next_popular}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-swiper"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
                <path
                  d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-popular",
            prevEl: ".swiper-button-prev-popular",
          }}
          lazy={{
            loadPrevNext: true,
          }}
          grid={{
            rows: 1,
            fill: "colunm",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
        >
          {popular.map((release, index) => {
            return (
              <SwiperSlide key={index}>
                <ListFilms
                  id={release?.id.replace("/title/", "").replace("/", "")}
                  foto={release?.image.url}
                  name={release?.title}
                  year={release?.year}
                ></ListFilms>
              </SwiperSlide>
            );
          })}
          <SwiperSlide />
        </Swiper>

        <h1>Próximos lançamentos</h1>
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
            rows: 1,
            fill: "colunm",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
          className="mySwiper2"
        >
          {lancamentos.map((lancamento, index) => {
            return (
              <SwiperSlide key={index}>
                <ListFilms
                  id={lancamento?.id.replace("/title/", "").replace("/", "")}
                  foto={lancamento?.image.url}
                  name={lancamento?.title}
                  year={lancamento?.year}
                ></ListFilms>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="buttons-navegation">
          <h1>Atores populares</h1>
          <div className="buttons-navegation-buttons">
            <div className="navigation prev-card prev-workshop-ref">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-swiper"
                style={{ transform: "rotate(180deg)" }}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
                <path
                  d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div
              className="navigation next-card next-workshop-ref"
              onClick={next}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-swiper"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
                <path
                  d="M17.895 13.6842L24.2108 20L17.895 26.3158"
                  stroke="#33cc00"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-workshop-ref",
            prevEl: ".prev-workshop-ref",
          }}
          grid={{
            rows: 1,
            fill: "colunm",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
          className="mySwiper3"
        >
          {actors.map((actor, index) => {
            return (
              <SwiperSlide key={index}>
                <ListActors
                  id={actor?.id.replace("/name/", "").replace("/", "")}
                  foto={actor?.image.url}
                  name={actor?.name}
                  year={actor?.birthDate}
                ></ListActors>
              </SwiperSlide>
            );
          })}
          <SwiperSlide />
        </Swiper>
      </Container>
      <Footer />
    </>
  );
}
