import style from "./ListResults.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
export default function ListResults(props) {
  const router = useRouter();

  function redirect() {
    const TYPE_FILM = "tt";
    const TYPE_ACTOR = "nm";
    const id = props.id;

    if (id.includes(TYPE_FILM)) {
      router.push({
        pathname: "/movie-detail",
        query: { film: id },
      });
    } else if (id.includes(TYPE_ACTOR)) {
      router.push({
        pathname: "/actor-detail",
        query: { actor: id },
      });
    }
  }

  return (
    <div className={style["cardPopulares"]} onClick={redirect}>
      <Image src={props.foto} width="193" height="290" alt="Card Film"></Image>
      <div className={style["cardPopulares__text"]}>
        <h5>{props.name}</h5>
        <p>{props.year}</p>
      </div>
    </div>
  );
}
