import type { Character } from "../data/charactereCard";
import "./CharacterCard.css";

type Props = {
  front: Character;
  back: Character;
  isFlipped: boolean;
  onFlip: () => void;
};

const CharacterCard = ({ front, back, isFlipped, onFlip }: Props) => {
  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={onFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <figure className="StyleCharacter">
            <img src={front.Image} alt={`${front.Prénom} ${front.Nom}`} />
            <figcaption>
              <p>Nom : {front.Nom}</p>
              <p>Prénom : {front.Prénom}</p>
              <p>Race : {front.Race}</p>
              <p>Classe : {front.Classe}</p>
              <p>Carrière : {front.Carriere}</p>
              <p>Arme : {front.Arme}</p>
              <p>Style : {front.Style}</p>
            </figcaption>
          </figure>
        </div>

        <div className="flip-card-back">
          <figure className="StyleCharacter">
            <img src={back.Image} alt={`${back.Prénom} ${back.Nom}`} />
            <figcaption>
              <p>Nom : {back.Nom}</p>
              <p>Prénom : {back.Prénom}</p>
              <p>Race : {back.Race}</p>
              <p>Classe : {back.Classe}</p>
              <p>Carrière : {back.Carriere}</p>
              <p>Arme : {back.Arme}</p>
              <p>Style : {back.Style}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
