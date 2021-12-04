import React from 'react'
import { Container } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import Image from 'next/image'
import style from '../../styles/Detail.module.scss'
import { FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
export default function Detail() {
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

      <div>
        <Container fluid>
          <Image src="/banner.jpg" width="1500" height="464"></Image>
        </Container>
        <Container>
          <div className={style['descricao']}>
            <div className={style['descricao__foto-perfil']}>
              <Image src="/card2.jpg" width="205" height="308"></Image>
            </div>
            <div className={style['descricao__text-titulo']}>
              <h3>Mulher Maravilha</h3>
              <div className={style['descricao__classficacao']}>
                <div>
                  <Image src="/star.svg" width="40" height="40" />
                </div>
                <div>
                  <h1>6.9/10</h1>
                </div>
                <div className={style['descricao__imdb']}>
                  <h1>IMDb</h1>
                </div>
              </div>
            </div>
            <div className={style['descricao__text']}>
              <h2>Visão Geral</h2>
              <p>Visão geral
                A Mulher Maravilha entra em conflito com a União Soviética durante a Guerra Fria na década de 1980 e encontra um adversário formidável chamado Cheetah.</p>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}