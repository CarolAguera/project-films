import React, { useEffect, useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import CardLancamentos from "../components/CardLancamentos/CardLancamentos";
import Card1 from "../../public/card1.jpg";
import SwiperCore, { Autoplay, Pagination, Navigation, Grid } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation, Grid]);
import style from "../../styles/ActorDetail.module.scss";
import { useRouter } from "next/router";
import api from "../api/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export default function ActorDetail() {
  const router = useRouter();
  const [detailActor, setDetailActor] = useState();
  let search = router.query.actor;

  useEffect(() => {
    api
      .get("/actors/get-bio", {
        params: { nconst: `${search}` },
      })
      .then(function (response) {
        setDetailActor(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Header />
      {detailActor != undefined ? (
        <Container>
          <div className={style["description-actor"]}>
            <Image
              src={detailActor.image.url}
              alt="Image Actor"
              width="193"
              height="193"
            ></Image>
            <div>
              <h2>{detailActor.realName}</h2>
              <p>{detailActor.birthDate}anos</p>
              <p>{detailActor.birthPlace}</p>
            </div>
          </div>
          <div>
            <h1>Biografia</h1>
            <p>{detailActor.miniBios[0].text}</p>
          </div>
          <div>
            <h1>Filmografia</h1>
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
                  slidesPerView: 5,
                  spaceBetween: 50,
                  grid: {
                    rows: 1,
                    fill: "row",
                  },
                },
              }}
              className="mySwiper2"
            >
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
              <SwiperSlide>
                <CardLancamentos
                  foto={Card1}
                  name="Mulher Maravilha"
                  year="2020"
                ></CardLancamentos>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      ) : null}
      <Footer />
    </>
  );
}
