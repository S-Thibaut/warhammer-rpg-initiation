import { useEffect } from "react";
import "./UniversePage.css";

import StickyToc from "../components/Navigation/StickyToc";
import ScrollToTopButton from "../components/Navigation/ScrollToTopButton";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/src/styles.css";

// ✅ Background
import backgroundUnivers from "../img/Background/backgroundunivers.png";

// ✅ Images Others
import grayMountain from "../img/Others/grayMountain.jpg";
import paysageBretonnie from "../img/Others/PaysageBretonnie.jpg";
import background7 from "../img/Others/Background7.png";
import background2 from "../img/Others/Background2.png";
import banniere1 from "../img/Others/Banniere1.png";
import taxe from "../img/Others/taxe.jpg";

// ✅ Maps
import oldWorldMap from "../img/Maps/OldWorldMap.jpg";
import empireMap from "../img/Maps/EmpireMap.png";
import reiklandMap from "../img/Maps/ReiklandMap.png";
import ducheUbersreikMap from "../img/Maps/DuchéUbersreikMap.png";
import ubersreikMap from "../img/Maps/UbersreikMap.jpg";

export const Universe = () => {

  // ✅ Applique le background au body (header + footer inclus)
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundUnivers})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // ✅ Nettoyage quand on quitte la page
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <>
      <StickyToc
        items={[
          { id: "vieuxmonde", label: "Vieux-monde" },
          { id: "empire", label: "Empire" },
          { id: "reikland", label: "Reikland" },
          { id: "duché", label: "Duché d'Ubersreik" },
          { id: "ubersreik", label: "Ubersreik" },
        ]}
      />

      <div className="univers-page">
			<section className="vieux-monde" >
				<h2 id="vieuxmonde"> Le vieux monde de warhammer </h2>

				<p className="vieux-monde-1">
					Ce que nous appelons « Le Vieux Monde » constitue le cœur de
					l’univers, célèbre pour ses royaumes, ses drames et ses aventures
					héroïques. Il ne représente pourtant qu’un seul des continents du
					monde, un fragment seulement de l’univers de Warhammer Fantasy. C’est
					dans cette région que vous êtes invités à vous immerger. Petit détail
					intéressant : ce monde possède deux lunes. Mannslieb, blanche et
					ronde, suit un cycle régulier d’environ 25 jours et influence les
					marées. Morrslieb, plus petite, verdâtre et à l’orbite erratique, est
					toujours perçue comme de mauvais augure. La croyance populaire veut
					que chacun reste chez soi lorsque Morrslieb domine le ciel nocturne,
					priant et gardant quelques centimètres d’acier à portée de main… « au
					cas où ». Pour vous offrir davantage de contexte, vous trouverez
					ci-dessous une carte de ce vaste et complexe territoire.
				</p>

				<div className="no-hover-zoom">
  <InnerImageZoom
    src={oldWorldMap}
    zoomSrc={oldWorldMap}
    zoomType="click"
    zoomScale={1.5}
    zoomPreload={true}
    hideHint={true}
    className="vieux-monde-2"
  />
</div>


				<p className="vieux-monde-3">
					Ces grandes terres sont composées d’immenses et inquiétantes étendues
					boisées, dans lesquelles se nichent de nombreuses cités et villages.
					Au centre se trouve le Grand Empire des Hommes, gouverné par
					l’Empereur Karl Franz. Plus au nord : la Mer des Griffes ainsi que les
					territoires sauvages des tribus norses. Au nord-est : le royaume gelé
					de Kislev, dirigé par la Tsarine Katarina Bokha..
				</p>

				<p className="vieux-monde-4">
					Encore plus à l’est s’étend la chaîne de montagnes dite « du Bord du
					Monde », courant du nord au sud depuis l’Empire jusqu’à dépasser la
					sinistre Sylvanie. Une partie de cette chaîne bifurque vers l’ouest
					pour devenir les Montagnes Noires, formant la frontière sud de
					l’Empire et le séparant des Principautés Frontalières, des « royaumes
					libres ». En remontant vers le nord, la chaîne se poursuit pour
					devenir les Montagnes Grises, frontière ouest de l’Empire et
					séparation naturelle avec les duchés de Bretonnie, gouvernés par le
					roi Louen Cœur-de-Lion. Au sud de la Bretonnie se trouve la vaste
					forêt enchantée d’Athel Loren, domaine mystérieux des Elfes Sylvains.
				</p>

				<section className="vieux-monde-5">
					<p>
						Les montagnes abritent autant de menaces perfides que de glorieuses
						forteresses naines, vestiges d’un peuple autrefois prospère et
						aujourd’hui en déclin. Leur souverain, le Haut Roi Thorgrim le
						Rancunier, veille avec une détermination farouche sur la destinée de
						son peuple, Prenant les décisions qui s’imposent pour préserver leur
						fierté, leur héritage et les dernières lueurs de leur grandeur
						passée.
					</p>

					<img src={grayMountain} alt="Montagnes" />
				</section>
			</section>

			<section className="Empire" >
				<h2 id="empire">Empire</h2>

				<p className="Empire-1">
					L’Empire est le plus grand royaume humain du Vieux Monde. De
					nombreuses races y cohabitent : halflings itinérants, mercenaires
					ogres, artisans nains, érudits elfes ou encore voyageurs issus de
					contrées lointaines comme l’Arabie ou Cathay. Bien que l’Empire
					permette cette diversité, une autorité à la fois impériale et
					religieuse s’impose à toutes les personnes présentes sur son
					territoire. Le peuple impérial est polythéiste et choisit de vénérer
					la divinité la plus à même de l’aider selon son besoin ou sa
					profession.
				</p>

				<div className="no-hover-zoom">
  <InnerImageZoom
    src={empireMap}
    zoomSrc={empireMap}
    zoomType="click"
    zoomScale={1.5}
    zoomPreload={true}
    hideHint={true}
    className="Empire-2"
  />
</div>


				<p className="Empire-3">
					Pour remonter un peu dans l’histoire, retournons 2500 ans en arrière.
					Réunies sous la bannière d’un jeune héros unberogen nommé Sigmar, les
					anciennes tribus humaines s’allièrent aux armées naines du Haut Roi
					Kurgan Barbe-de-Fer afin de repousser les hordes de Peaux-Vertes qui
					menaçaient l’Empire Nain. À la suite de cette victoire légendaire fut
					scellé un pacte d’alliance éternelle entre les civilisations humaines
					et naines. Sigmar fut couronné premier Empereur, et les chefs des
					tribus qu’il avait unifiées devinrent les premiers Comtes Électeurs,
					responsables de leurs propres territoires — les futures Provinces
					Impériales. Ces Comtes Électeurs répondent directement à l’Empereur
					et, lorsqu’un nouveau souverain doit être désigné, ce sont eux qui
					procèdent à l’élection parmi les candidats présentés.
				</p>

				<section className="Empire-4">

				<p>
					L’actuel Empereur est Karl Franz, Comte Électeur du Reikland. Sa
					capitale, Altdorf, est également celle de tout l’Empire. Grâce au
					savoir-faire nain, les humains perfectionnèrent la métallurgie et
					l’usage de la poudre noire. Sous l’influence des Hauts-Elfes furent
					fondés les huit Collèges de Magie. Plusieurs décennies après la
					disparition de Sigmar, un culte lui fut dédié et il devint le dieu
					tutélaire de l’Empire. Partout où vivent des citoyens impériaux se
					trouve au moins une chapelle consacrée à Sigmar, et le clergé lutte
					aussi activement que les autorités contre les menaces extérieures…
					comme intérieures.
				</p>

				<img src={taxe} alt="Pièces d'or" />
				</section>

			</section>


			<section className="Reikland" >
				<h2 id="reikland">Reikland</h2>

				<p className="Reikland-1">
					Le Reikland est peut-être la Province Impériale la plus riche de
					toutes. Ses grandes routes sont pavées, son commerce fluvial est
					florissant. Sa capitale, Altdorf, est un lieu de savoir, de culture et
					d’échanges. Il s’agit là du cœur palpitant de l’Empire. De nombreuses
					races y cohabitent, que ce soit de passage ou pour y vivre, et tous se
					plient à l’autorité impériale. C’est une province globalement sûre,
					bien que les endroits les plus reculés, les souterrains les plus
					sombres et les ruelles les plus isolées cachent leur lot d’horreurs et
					de bandits.
				</p>

				<div className="no-hover-zoom">
  <InnerImageZoom
    src={reiklandMap}
    zoomSrc={reiklandMap}
    zoomType="click"
    zoomScale={1.5}
    zoomPreload={true}
    hideHint={true}
    className="Reikland-2"
  />
</div>

				<p className="Reikland-3">
					La grande cité compte un peu plus de 105 000 habitants, rayonnant dans
					tout l’Empire. Elle est traversée par le fleuve Reik, assurant le
					transit des biens et des personnes jusqu’à la sécurité relative de ses
					murs d’enceinte. La cité est aussi vivante de jour que de nuit, entre
					les commerces, les docks, les débits de boissons, la population
					étudiante et travailleuse. Pourtant, le Reikland, ce n’est pas que
					Altdorf : ce sont aussi ses villes plus modestes, ses villages, ses
					champs, ses forêts, ses ordres de chevalerie, ses garnisons
					militaires, ses temples et cathédrales. Comme toutes les provinces,
					c’est aussi ses dangers, sa corruption, son administration implacable,
					sa lutte des classes et la mort qui caractérise cette région.
				</p>

				<p className="Reikland-4">
					Pour les besoins de notre aventure, nous allons devoir nous rapprocher
					un peu plus des Montagnes Grises, vers la Passe de la Dame Grise qui
					permet de voyager entre le duché de Paravon et le duché d’Ubersreik.
					Ces montagnes cachent bien des secrets et des dangers, qu’il s’agisse
					de monstres, de créatures hostiles, de mutants ou de cultistes. Il est
					également dit qu’une vieille forteresse naine est nichée dans ses
					sommets. Bien que les grandes routes du Reikland soient sécurisées par
					les patrouilleurs routiers, cela n’empêche pas les plus audacieux de
					commettre leurs larcins. Le moyen le plus sûr de voyager reste les
					fleuves navigables. Du sommet des montagnes s’écoule le Teufel, qui
					traverse la cité d’Ubersreik en aval avant de se jeter dans le Reik
					bien plus bas.
				</p>

				<img
					className="Reikland-5"
					src={paysageBretonnie}
					alt="Paysage de Bretonnie"
				/>
			</section>

			<section className="Duché-Ubersreik" >
				<h2 id="duché">Duché d'Ubersreik</h2>
				<p className="Duché-Ubersreik-1">
					Les différentes cités sont gérées politiquement et administrativement
					par de grandes maisons : des familles nobles à qui l’autorité
					impériale a été confiée pour assurer le bon ordre de leurs territoires
					ainsi que la levée des taxes. Tout le monde doit rendre des comptes à
					quelqu’un situé au-dessus de lui, et les maisons nobles n’échappent
					absolument pas à cette règle.
				</p>

				<div className="no-hover-zoom">
  <InnerImageZoom
    src={ducheUbersreikMap}
    zoomSrc={ducheUbersreikMap}
    zoomType="click"
    zoomScale={1.0}
    zoomPreload={true}
    hideHint={true}
    className="Reikland-2"
  />
</div>

				<p className="Duché-Ubersreik-3">
					Ce territoire, soigneusement découpé entre différentes sources
					d’autorité, est le terrain de jeu d’un pouvoir vicieux et fourbe,
					orchestré comme une gigantesque pièce de théâtre. Chaque acteur tente
					d’étendre son territoire, son influence ou sa richesse, sans jamais
					perdre ce qu’il possède déjà. Les citoyens impériaux ne sont que des
					pions dans cette danse dont ils ignorent tout ou presque. Les
					carrières se décident dans des salons privés, les marchandises
					changent de mains contre une bourse discrète, et malheur à l’imprudent
					qui voudrait s'immiscer dans ces affaires : il pourrait y perdre bien
					plus que sa vie.
				</p>

				<p className="Duché-Ubersreik-4">
					Cependant, tout ne dépend pas du haut pouvoir. Les citoyens se
					regroupent en guildes par métier, défendant leurs intérêts avec plus
					d’efficacité. On trouve des exploitations forestières, des carrières
					de pierre, une véritable activité fluviale, ainsi que des conseils de
					villes menés par des bourgmestres. Et bien sûr, dans ces échelles plus
					modestes, guerriers, soldats et mercenaires de tout poil peuvent
					trouver leur bonheur : qu’il s’agisse d’un monstre réveillé par
					accident à abattre, ou d’un concurrent trop présent à “refroidir”.
				</p>

				<img src={background7} alt="Auberge" className="Duché-Ubersreik-5" />

			</section>
			<section className="Ubersreik" >
				<h2 id="ubersreik">Ubersreik</h2>
				<p className="Ubersreik-1">
					Ubersreik est le cœur politique du duché, gérant l’ensemble des cités,
					villages et activités situées sur le territoire. Cette autorité était
					confiée à la famille Jungfreud. Habiles dans l’équilibre des forces
					officielles et officieuses, les Jungfreud savaient maintenir une forme
					d’ordre et conservaient même une certaine popularité auprès d’au moins
					un tiers de la population.
				</p>

				<div className="no-hover-zoom">
  <InnerImageZoom
    src={ubersreikMap}
    zoomSrc={ubersreikMap}
    zoomType="click"
    zoomScale={0.8}
    zoomPreload={true}
    hideHint={true}
    className="Ubersreik-2"
  />
</div>

				<p className="Ubersreik-3">
					Malgré cela, leurs agissements semblent avoir fortement déplu à
					l’Empereur lui-même. Karl Franz dépêcha un corps militaire chargé de
					déloger ces indésirables de leur autorité. Un siège aussi bref que
					violent eut lieu : la cité fut reprise, et les Jungfreud durent fuir
					jusqu’à leur fief familial, dans la région de la Roche Noire, avec bon
					nombre de leurs partisans. Ceux qui osèrent défier l’armée impériale
					pendent encore le long des murailles et du grand pont qui enjambe le
					Teufel.
				</p>

				<p className="Ubersreik-4">
					Un régiment impérial a été laissé sur place pour maintenir l’ordre
					sous l’autorité du général Jendrick Von Dabernick, tandis que les
					affaires courantes sont confiées à Dame Emmanuelle Nacht en attendant
					qu’un nouveau dirigeant soit désigné. Cette période de troubles a
					généré une quantité formidable d’opportunités pour toutes sortes
					d’activités. Votre rival commercial n’est pas mort ? Votre chef
					insupportable a survécu au siège ? Qu’à cela ne tienne : il vous
					suffit de les dénoncer comme partisans de l’ancien régime…
				</p>

				<img src={background2} alt="Delation en action" className="Ubersreik-5" />

			</section>

			<section className="Conclusion" >
				<h2 id="conclusion">Et maintenant ? </h2>
				<p className="Conclusion-1">
					C’est dans cette atmosphère tendue que vous revenez en ville après une
					longue absence. Chacun d’entre vous a une raison de revenir :
					officielle ou officieuse, honorable ou délicate. Une partie de la
					population porte désormais des brassards bleus, affichant leur soutien
					à l’ancien régime et cherchant la moindre excuse pour déclencher une
					bagarre. Vous retrouvez commerces, lieux familiers et ruelles que vous
					connaissiez, mais tous n’ont qu’un seul objectif en tête : joindre
					l’auberge de la Lune Rouge, située dans les quartiers du Teübrucke et
					tenue par Franz Lohner. Un établissement “respectable”, que chacun
					d’entre vous connaît de près ou de loin.
				</p>

				<p className="Conclusion-2">
					Ne vous y trompez pas : j’ai volontairement passé sous silence une
					montagne d’informations pour ne pas vous perdre. Sachez toutefois ceci
					: il existe bien d’autres peuples, races et royaumes que ceux déjà
					évoqués. Il existe des dangers capables de faire de la mort un destin
					enviable, des forces dont la simple évocation suffit à glacer le sang.
					De nombreux mortels se tournent vers des croyances interdites, vers
					des dieux dont les volontés s’opposent totalement aux doctrines des
					peuples civilisés. Ces puissances offrent pouvoir, savoir ou fortune
					au prix de l’inimaginable, de l’inavouable… et quand vous vous en
					rendrez compte, il sera déjà trop tard. Je n’en dirai pas davantage.
					Parler de ces entités avec trop de précision pourrait, dit-on, attirer
					leur attention. Et je ne tiens pas à prendre ce risque — ni pour vous,
					ni pour moi. En évoquer trop longuement représente déjà un danger pour
					vos âmes mortelles.
				</p>

				<p className="Conclusion-3">
					Mais tout cela n’aura peut-être de l’importance que plus tard… Pour
					l’instant, votre groupe vient de revenir en ville. Le siège est encore
					récent, certaines pierres sont toujours tachées de sang, et quelques
					cadavres attendent d’être emportés. Mais réjouissez-vous : c’est le
					jour du marché, et faire quelques achats vous sera sûrement utile.
				</p>

				<img
					className="Conclusion-4"
					src={banniere1}
					alt="Rue d'Ubersreik "
				/>
			</section>
		</div>

		{/* <ChapterNavigation
        previous="/page-precedente"
        next="/page-suivante"
      /> */}

      <ScrollToTopButton />
    </>
	);
};
