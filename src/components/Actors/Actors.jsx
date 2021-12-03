import style from './Actors.module.scss'
import Image from 'next/image'
export default function Actors(props) {
  return (
    <div className={style['cardActors']}>
      <Image src={props.foto} width="193" height="193"></Image>
      <div className={style['cardActors__text']}>
        <h5>{props.name}</h5>
        <p>{props.year}</p>
      </div>
    </div>
  )
}
