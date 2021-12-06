import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import style from "../styles/Detail.module.scss";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import api from "../api/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export default function Detail() {
  const router = useRouter();
  const [detail, setDetail] = useState();
  useEffect(() => {
    let search = router.query.film;
    api
      .get("/title/get-overview-details", {
        params: {
          tconst: `${search}`,
          currentCountry: "PT",
        },
      })
      .then(function (response) {
        setDetail(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Header />
      <div>
        {detail != undefined ? (
          <>
            <Container fluid>
              <Image
                src={detail?.title.image.url}
                width="1500"
                height="464"
                alt=""
              ></Image>
            </Container>
            <Container>
              <div className={style["descricao"]}>
                <div className={style["descricao__foto-perfil"]}>
                  <Image
                    src={detail?.title.image.url}
                    width="205"
                    height="308"
                    alt=""
                  ></Image>
                </div>
                <div className={style["descricao__text-titulo"]}>
                  <h3>{detail?.title.title}</h3>
                  <div className={style["descricao__classficacao"]}>
                    <div>
                      <Image src="/star.svg" width="40" height="40" />
                    </div>
                    <div>
                      <h1>{detail?.ratings.rating}/10</h1>
                    </div>
                    <div className={style["descricao__imdb"]}>
                      <h1>IMDb</h1>
                    </div>
                  </div>
                </div>
                <div className={style["descricao__text"]}>
                  <h2>Visão Geral</h2>
                  <p>{detail?.plotSummary.text}</p>
                </div>
              </div>
            </Container>
          </>
        ) : null}
      </div>
      <Footer />
    </>
  );
}
