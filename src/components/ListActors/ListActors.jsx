import style from "./ListActors.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import AgeCalculator from "../../utilities/AgeCalculator";
export default function ListActors(props) {
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
    <div className={style["cardActors"]} onClick={redirect}>
      <Image src={props.foto} width="193" height="193"></Image>
      <div className={style["cardActors__text"]}>
        <h5>{props.name}</h5>
        <p>{AgeCalculator(new Date(props.year), new Date())}</p>
      </div>
    </div>
  );
}
