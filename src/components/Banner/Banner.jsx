import { Carousel, Container } from "react-bootstrap";
import Image from "next/image";
import api from "../../api/api";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [listBanner, setListBanner] = useState([]);
  const [banner, setBanner] = useState([]);
  const MAX_REQUEST = 4;

  useEffect(() => {
    setTimeout(() => {
      let bannerArray = [];
      api.get("/title/get-best-picture-winners").then(function (response) {
        bannerArray = response.data.map((element) => {
          return element.replace("/title/", "").replace("/", "");
        });
        setListBanner(bannerArray);
        for (let index = 0; index < MAX_REQUEST; index++) {
          api
            .get("/title/get-meta-data", {
              params: { ids: `${bannerArray[index]}`, region: "PT" },
            })

            .then(function (response) {
              const id = response.config.params.ids;
              setBanner((prevState) => [...prevState, response.data[id]]);
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      });
    }, 1000);
  }, []);

  return (
    <Container>
      <Carousel fade>
        {banner.map((banner, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                className="d-block"
                src={banner.title.image.url}
                alt="First slide"
                width={1400}
                height={800}
              />
              <Carousel.Caption>
                <h3>{banner.title.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
