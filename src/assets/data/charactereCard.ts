export type Character = {
  id: number;
  Nom: string;
  Prénom: string;
  Race: string;
  Classe: string;
  Carriere: string;
  Image: string;
  Background: string;
  Arme: string;
  Style: string;
};

import SalundraPortrait from "../img/Characteres/Portrait Salundra.png"
import ElsePortrait from "../img/Characteres/Portrait Else.png"
import GruberPortrait from "../img/Characteres/Portrait Ferdinand.png"
import AmrisPortrait from "../img/Characteres/Portrait Amris.png"
import GunnarPortrait from "../img/Characteres/portrait Gunnar.png"
import MolrellaPortrait from "../img/Characteres/Portrait Molrella.png"
import PortraitNarrateur from "../img/Characteres/Portrait Narrateur.png"
import PortraitJoueur from "../img/Characteres/Portrait Joueur.png"
import PortraitMarkus from "../img/Characteres/Portrait Markus.png"
import PortraitViktor from "../img/Characteres/Portrait Viktor.png"
import PortraitSienna from "../img/Characteres/Portrait Sienna.png"
import PortraitKerillian from "../img/Characteres/Portrait Kerillian.png"
import PortraitBardin from "../img/Characteres/Portrait Bardin.png"
import PortraitHironymus from "../img/Characteres/Portrait Hironymus.png"

import BackgroundNarrateur from "../img/Background/background Narrateur.png"
import BackgroundSalundra from "../img/Background/Background Salundra.png"
import BackgroundElse from "../img/Background/Background Else.png"
import BackgroundGruber from "../img/Background/Background Gruber.png"
import BackgroundAmris from "../img/Background/Background Amris.png"
import BackgroundGunnar from "../img/Background/Background Gunnar.png"
import BackgroundMolrella from "../img/Background/Background Molrella.png"
import BackgroundMarkus from "../img/Background/Background Markus.png"
import BackgroundSienna from "../img/Background/Background Sienna.png"
import BackgroundKerillian from "../img/Background/Background Kerillian.png"
import BackgroundSaltzpyre from "../img/Background/Background Saltzpyre.png"
import BackgroundBardin from "../img/Background/Background Bardin.png"
import BackgroundHironymus from "../img/Background/Background Hironymus.png"
import BackgroundJoueurs from "../img/Background//Background Joueurs.png"




export const characters: Character[] = [
    {
        id:0,
        Nom:"???",
        Prénom:"???",
        Race:"???",
        Classe:"Narrateur",
        Carriere:"Conteur",
        Arme: "Pourquoi faire ?",
        Style: "Verbal",
        Image: PortraitNarrateur,
        Background : BackgroundNarrateur,
    },   
    {
        id:1,
        Nom:"Von Drakenberg", 
        Prénom:"Salundra",
        Race:"Humaine",
        Classe:"Guerrier",
        Carriere:"Soldat",
        Arme: "Epée",
        Style: "Combat",
        Image: SalundraPortrait,
        Background : BackgroundSalundra
    },
    {
        id:2,
        Nom:"Sigloben",
        Prénom:"Else",
        Race:"Humaine",
        Classe:"Itinérant",
        Carriere:"Répurgateur",
        Arme: "Pistolet",
        Style: "Combat",
        Image: ElsePortrait,
        Background: BackgroundElse,
    },
    {
        id:3,
        Nom:"Gruber",
        Prénom: "Ferdinand",
        Race:"Humain",
        Classe:"Lettré",
        Carriere:"Sorcier",
        Arme: "Faux",
        Style: "Magie",
        Image: GruberPortrait,
        Background: BackgroundGruber,
    },
    {
        id:4,
        Nom:"Pluedebraise",
        Prénom:"Amris",
        Race:"Haut-Elfe",
        Classe:"Citadin",
        Carriere:"Marchant",
        Arme:"Epée",
        Style: "Social", 
        Image: AmrisPortrait,
        Background: BackgroundAmris,
    },
    {
        id:5,
        Nom:"Hrolfsson",
        Prénom:"Gunnar",
        Race:"Nain",
        Classe:"Guerrier",
        Carriere:"Tueur",
        Arme:"Hache",
        Style: "Combat",
        Image: GunnarPortrait,
        Background: BackgroundGunnar,
    },
    {
        id:6,
        Nom:"Tuilecaramel",
        Prénom:"Molrella",
        Race:"Halfling",
        Classe:"Roublards",
        Carriere:"Voleuse",
        Arme:"Fronde",
        Style: "Furtif",
        Image: MolrellaPortrait,
        Background: BackgroundMolrella,
    },
    {
        id:7,
        Nom:"Joueur / Joueuse",
        Prénom:" / ",
        Race:" Humain / Humaine",
        Classe:" / ",
        Carriere:" / ",
        Arme:"Votre intérprétation",
        Style: "Agréable",
        Image: PortraitJoueur,
        Background: BackgroundJoueurs,
    },
    {
        id:8,
        Nom:"Kruber",
        Prénom:"Markus",
        Race:"Humain",
        Classe:"Guerrier",
        Carriere:"Soldat",
        Arme:"Hallebarde",
        Style: "Combat",
        Image: PortraitMarkus,
        Background: BackgroundMarkus,
    },
    {
        id:9,
        Nom:"Saltzpyre",
        Prénom:"Victor",
        Race:"Humain",
        Classe:"Itinérant",
        Carriere:"Répurgateur",
        Arme:"Rapiere",
        Style: "Combat",
        Image: PortraitViktor,
        Background: BackgroundSaltzpyre,
    },
    {
        id:10,
        Nom:"Fuegonasus",
        Prénom:"Sienna",
        Race:"Humaine",
        Classe:"Lettrée",
        Carriere:"Sorciere",
        Arme:"Bâton",
        Style: "Magie",
        Image: PortraitSienna,
        Background: BackgroundSienna,
    },
    {
        id:11,
        Nom:" / ",
        Prénom:"Kerillian",
        Race:"Elfe-Sylvain",
        Classe:"Ruraux",
        Carriere:"Chasseuse",
        Arme:"Arc",
        Style: "Furtif",
        Image: PortraitKerillian,
        Background: BackgroundKerillian,
    },
    {
        id:12,
        Nom:"Goreksson",
        Prénom:"Bardin",
        Race:"Nain",
        Classe:"Ruraux",
        Carriere:"Eclaireur",
        Arme:"Arbalète",
        Style: "Combat",
        Image: PortraitBardin,
        Background: BackgroundBardin,
    },
    {
        id:13,
        Nom:"Trognebouche",
        Prénom:"Hironymus",
        Race:"Halfling",
        Classe:"Roublards",
        Carriere:"Entremetteur",
        Arme:"Couteaux",
        Style: "Social",
        Image: PortraitHironymus,
        Background: BackgroundHironymus,
    },
] 

