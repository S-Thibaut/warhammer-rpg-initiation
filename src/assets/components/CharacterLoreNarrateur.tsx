type Props = {
  setActiveCharacterId: (id: number) => void;
};

export function CharacterLore({ setActiveCharacterId }: Props) {
  return (
    <div className="character-lore">
      <p>Que venez-vous donc chercher ici ? De l’aventure ? De l’or ? La justice ?</p>
      <p>Enfin tout est relatif… Mais dites-moi :</p>

      <p>Voici Salundra <span onClick={() => setActiveCharacterId(3)} className="link">Ferdinand vous attend</span></p>
      <p>Vous préférez les combats épiques ? <span onClick={() => setActiveCharacterId(1)} className="link">Salundra est prête</span></p>
      <p>Vous êtes furtif et malin ? <span onClick={() => setActiveCharacterId(6)} className="link">Molrella vous comprend</span></p>
    </div>
  );
}