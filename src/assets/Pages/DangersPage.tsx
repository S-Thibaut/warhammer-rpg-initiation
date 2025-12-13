import "./DangersPage.css";
import GiantSpider from "../img/Others/GiantSpider.jpg";
import GiantWolfs from "../img/Others/GiantWolfs.jpg";
import GiantRats from "../img/Others/GiantRat.jpg";
import Giant from "../img/Others/giant.webp";
import Squig from "../img/Others/Squig.jpg";
import Troll from "../img/Others/Troll.webp";
import OrcGobelin from "../img/Others/OrcGobelin.jpg";
import Undead from "../img/Others/Undead.jpg";
import Chaos from "../img/Others/Chaos.jpg";
import Skaven from "../img/Others/Skaven.jpg";
import BackGround12 from "../img/others/Background12.png"

export const Dangers = () => {
	return (
		<div className="dangers">
			
			<h1> Les Dangers du monde</h1>
			<p className="Araignée">
				Je vais tenter de vous présenter ici une liste non exhaustive des
				menaces les plus courantes et les plus connues que vous pourriez
				rencontrer. D’un personnage à l’autre, les connaissances de ces dangers
				varient : il est naturel qu’un répurgateur en sache davantage sur les
				vampires qu’un comptable itinérant. Les animaux domestiqués — tels que
				les chevaux ou les chiens — seront volontairement ignorés.
			</p>

			<h2> Les bêtes du Reikland </h2>

			<h3>Araignée Géante</h3>

			<section className="spider">

			<p>
				Les araignées géantes se tapissent dans les profondeurs des forêts et
				grottes de l’Empire, mais peuvent également élire domicile dans les
				greniers poussiéreux ou les caves sombres. Si la plupart atteignent la
				taille d’un gros rat, certaines espèces deviennent terriblement
				colossales.
			</p>

			<img src={GiantSpider} alt="Araignée Geante" />

			</section>

	

			<h3>Loup</h3>

			<section className="wolfs">

			<p>
				Les loups chassent généralement en meute et sont réputés pour être des
				prédateurs infatigables, poursuivant leurs proies sur de nombreux
				kilomètres. Plusieurs espèces rôdent dans le Reikland, dont les
				redoutables loups géants.
			</p>

			<img src={GiantWolfs} alt="Grands loups" />

			</section>

			<h3>Rat Géant</h3>

			<section className="rats">

			<p>
				Les rats s’infiltrent partout et sont particulièrement présents dans les
				villes et cités densément peuplées. Véritables vecteurs de maladies,
				certains individus atteignent une taille monstrueuse, bien au-delà de
				celle de leurs congénères ordinaires.
			</p>

			<img src={GiantRats} alt="Rats" />

			</section>

			<h2>Les bêtes monstrueuses du Reikland</h2>

			<h3>Géant</h3>

			<section className="giant">

			<p>
				Les géants sont des créatures solitaires qui évitent autant que possible
				la civilisation. La plupart se terrent dans des grottes ou ruines
				oubliées, loin des peuples plus petits. Leur taille colossale, leur
				force brute et leur appétit féroce pour le bétail contribuent à leur
				réputation terrifiante.
			</p>

			<img src={Giant} alt="Geant" />

			</section>

			<h3>Squig des cavernes</h3>

			<section className="squig">

			<p>
				Les squigs sont de grandes créatures fongoïdes, globuleuses et
				agressives, vivant dans les grottes les plus profondes. Leur gueule
				béante garnie de dents acérées passe, dit-on, pour capable de broyer
				l’acier.
			</p>

			<img src={Squig} alt="Squig des cavernes" />

			</section>

			<h3>Troll</h3>

			<section className="troll">

			<p>
				Les trolls sont des créatures immondes que l’on retrouve dans tous les
				recoins du Vieux Monde. Massifs, adaptables et d’une stupidité
				proverbiale, ils sont cependant extraordinaires par leur capacité à se
				régénérer, rendant leur élimination particulièrement difficile.
			</p>

			<img src={Troll} alt="Troll" />

			</section>

			<h2>Les hordes de peaux-vertes</h2>

			<section className="greenskin">

			<p>
				Orcs et gobelins représentent un fléau permanent pour la civilisation.
				Surgissant de leurs forteresses grossières, ils se livrent à des guerres
				incessantes entre eux, abattant les plus faibles et vénérant les plus
				forts. Lorsque l’un de leurs chefs parvient à unir les tribus, même les
				plus grandes cités fortifiées tremblent.
			</p>

			<img src={OrcGobelin} alt="Orcs et Gobelins" />

			</section>

			<h2>Les morts sans repos</h2>

			<section className="undead">

			<p>
				Ni vivants, ni vraiment morts, les morts-vivants sont des cadavres
				animés par les arts sombres de la nécromancie. Des zombies titubants aux
				squelettes guerriers, des spectres éthérés aux banshees hurlantes,
				jusqu’aux sinistres Seigneurs Vampires, leurs formes sont multiples et
				toutes redoutables.
			</p>

			<img src={Undead} alt="Morts-vivants" />

			</section>

			<h2>Esclaves des ténèbres</h2>

			<section className="chaos">

			<p>
				Le mot « Chaos » suffit à faire fuir les superstitieux vers un temple de
				Sigmar. Pourtant, si les hommes-bêtes et les armées démoniaques menacent
				aux frontières, le véritable péril se cache souvent au cœur même de
				l’Empire : cultistes dissimulés dans les caves, nobles corrompus
				négociant avec des entités impies, villageois naïfs provoquant leur
				propre perte…
			</p>

			<img src={Chaos} alt="Chaos" />

			</section>

			
			<h2>Les ignobles hommes-rats</h2>

			<section className="skaven">

			<p>
				Pour la plupart des humains, les hommes-rats ne sont que légendes
				destinées à effrayer les enfants. Pourtant, les peuples anciens — en
				particulier les nains et certains elfes — connaissent la vérité : un
				vaste empire souterrain s’étend sous tout le continent, peuplé de
				créatures sournoises, inventives et dangereusement instables. Peut-être
				que les ratiers accepteront de vous en parler… à demi-mot.
			</p>

			<img src={Skaven} alt="Skaven" />

			</section>

			<h2>Conclusion</h2>

			<section className="conclusion">

			<p>
				Le Vieux Monde est vaste, sombre et rempli de menaces qui dépassent
				l’entendement des gens du commun. Mais qu’il s’agisse d’une araignée
				tapie dans les ombres ou d’un complot chaotique prêt à renverser une
				province entière, chaque danger peut devenir une aventure pour ceux qui
				osent s’y confronter. Restez prudent, tenez vos armes affûtées… et que
				Sigmar vous garde.
			</p>
			
			</section>
			<img className="ratiers" src={BackGround12} alt="Combat d'egoutier contre des skavens" />
		</div>
	);
};
