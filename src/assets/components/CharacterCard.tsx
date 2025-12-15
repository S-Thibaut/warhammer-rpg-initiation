import type { Character } from "../data/charactereCard";
import "./CharacterCard.css";

type Props = {
  front: Character;
  back: Character;
  isFlipped: boolean;
  onFlip: () => void;
};

const CharacterInfo = ({ character }: { character: Character }) => (
  <figure className="StyleCharacter">
    <img src={character.Image} alt={`${character.Prénom} ${character.Nom}`} />
    <figcaption>
      <p>Nom : {character.Nom}</p>
      <p>Prénom : {character.Prénom}</p>
      <p>Race : {character.Race}</p>
      <p>Classe : {character.Classe}</p>
      <p>Carrière : {character.Carriere}</p>
      <p>Arme : {character.Arme}</p>
      <p>Style : {character.Style}</p>
    </figcaption>
  </figure>
);

const CharacterCard = ({ front, back, isFlipped, onFlip }: Props) => {
  return (
    <button type="button"
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={onFlip}
      aria-label="Retourner la carte du personnage"
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <CharacterInfo character={front} />
        </div>

        <div className="flip-card-back">
          <CharacterInfo character={back} />
        </div>
      </div>
    </button>
  );
};

export default CharacterCard;
