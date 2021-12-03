import style from './CardPopulares.module.scss'
import Image from 'next/image'
export default function CardPopulares(props) {
  return (
    <div className={style['cardPopulares']}>
      <Image src={props.foto} width="193" height="290" alt="Card Film"></Image>
      <div className={style['cardPopulares__text']}>
        <h5>{props.name}</h5>
        <p>{props.year}</p>
      </div>
    </div>
  )
}
