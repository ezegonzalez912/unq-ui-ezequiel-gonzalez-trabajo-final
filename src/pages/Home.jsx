import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="memotest__home">
      <h1 className="memotest__home__title">¡Bienvenido a MemoTech!</h1>
      <h2 className="memotest__home__subtitle">¿Estás listo para poner a prueba tu memoria?</h2>
      <p className="memotest__home__description">Elige el modo de juego para comenzar:</p>
      <section className="memotest__home__buttons">
        <Link to="/play?mode=singleplayer" className="memotest__home__buttons__btn">
          <PersonIcon className="memotest__home__buttons__btn__icon" />
          <p>Individual</p>
        </Link>
        <Link to="/play?mode=multiplayer" className="memotest__home__buttons__btn">
          <GroupIcon className="memotest__home__buttons__btn__icon" />
          <p>Multijugador</p>
        </Link>
      </section>
    </div>
  );
};
