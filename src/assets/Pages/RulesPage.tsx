import "./RulesPage.css";
import { useEffect } from "react";

import taverne from "../img/Others/EmpireTaverne.jpg";
import scribe from "../img/Others/scribe.jpg";
import jeux from "../img/Others/jeuxtaverne.jpg";
import livre from "../img/Others/book.jpg";
import paper from "../img/Others/paper.jpg";

import caracteristiques from "../img/Others/Caracteristiques.png";
import competences1 from "../img/Others/competences1.png";
import competences2 from "../img/Others/competences2.png";

import StickyToc from "../components/Navigation/StickyToc";
import ScrollToTopButton from "../components/Navigation/ScrollToTopButton";

export const Rules = () => {
	useEffect(() => {
		document.body.classList.add("rule-body");
		return () => document.body.classList.remove("rule-body");
	}, []);

	return (
		<>
			<StickyToc
				items={[
					{ id: "carac", label: "Caractéristiques" },
					{ id: "comp", label: "Compétences" },
					{ id: "dr", label: "DR et critiques" },
					{ id: "opp", label: "Tests Opposés" },
				]}
			/>

			<div className="Rule1">
				<h1>Comment jouer ?</h1>

				<p>
					<strong>AVERTISSEMENT :</strong> Tout ce qui est expliqué sur cette
					page est automatisé par la plateforme de jeu de rôle. Un simple clic
					suffira pour lancer le dé correspondant et calculer le résultat. Ces
					informations sont mises à votre disposition uniquement pour votre
					compréhension.
				</p>
				<section className="image1">
					<p>
						Dans le cadre de cette initiation, je vais vous donner les grandes
						lignes des règles afin que vous puissiez comprendre les mécaniques
						et les possibilités qui s’offrent à vous. Vous allez vous appuyer
						sur une
						<strong> FICHE DE PERSONNAGE</strong> qui détermine vos
						<strong> CARACTÉRISTIQUES</strong> ainsi que vos
						<strong> COMPÉTENCES</strong>. Ces valeurs vont généralement de
						<strong> 1 à 99</strong>. Plus elles sont élevées, plus vous avez de
						chances de réussir l’action que vous tentez. <br />
						<br />
						Pour déterminer une réussite ou un échec, vous effectuerez un jet
						sur cette échelle de valeur, c’est-à-dire l’équivalent d’un
						<strong> dé à 100 faces</strong> — oui, ça existe ! Dans la
						pratique, nous utiliserons <strong>deux dés à 10 faces</strong> :
						l’un pour représenter les dizaines et l’autre pour les unités.
					</p>

					<img src={taverne} alt="table jdr" />
				</section>

				<p>
					Le résultat d’une action se détermine en
					<strong> comparant votre jet de dés</strong> à la caractéristique ou
					compétence associée. Le but est d’obtenir un résultat
					<strong> INFÉRIEUR ou ÉGAL</strong> à cette valeur. Ainsi, plus votre
					score sur la fiche est élevé, plus vos jets seront faciles.
				</p>
				<p>
					Cela vous permet de savoir dans quels domaines votre personnage
					excelle… et dans lesquels il est moins à l’aise. Si tout cela vous
					paraît encore flou, ne vous inquiétez pas : je vais tout illustrer par
					des exemples et des démonstrations.
				</p>
				<h2 id="carac">Les CARACTÉRISTIQUES</h2>
				<p>
					Les caractéristiques représentent ce qu’est un personnage sur le plan
					physique, mental et intellectuel.
				</p>

				<img
					 className="caracteristiques"
                    src={caracteristiques}
                    alt="Tableau des caractéristiques"
				/>
				<p>
					Voici celles de votre personnage. Dans cet exemple, toutes les valeurs
					de base ont été fixées à 30, ce qui correspond à un humain moyen. Ne
					vous préoccupez pas encore des autres lignes : nous allons découvrir
					chaque élément, un par un, et voir à quoi il correspond.
				</p>
				<div>
					<ul>
						<li>
							<strong>Capacité de Combat (CC)</strong> : votre aptitude à vous
							battre au corps à corps.
						</li>
						<li>
							<strong>Capacité de Tir (CT)</strong> : votre capacité à atteindre
							vos cibles avec des armes à distance.
						</li>
						<li>
							<strong>Force (F)</strong> : mesure votre puissance physique et
							votre capacité à déplacer ou retenir des charges lourdes.
						</li>

						<li>
							<strong>Endurance (E)</strong> : indique votre résistance
							physique, votre résilience face aux poisons ou aux environnements
							difficiles.
						</li>

						<li>
							<strong>Initiative (I)</strong> : représente votre vitesse de
							pensée et de réaction.
						</li>

						<li>
							<strong>Agilité (Agi)</strong> : indique votre adresse, votre
							capacité à accomplir des tâches manuelles délicates.
						</li>

						<li>
							<strong>Intelligence (Int)</strong> : symbolise vos capacités
							d’analyse, de compréhension et de réflexion.
						</li>

						<li>
							<strong>Force Mentale (FM)</strong> : mesure votre volonté
							générale et votre capacité à ignorer la peur, la douleur ou la
							pression.
						</li>

						<li>
							<strong>Sociabilité (Soc)</strong> : votre aisance avec les
							autres, votre charme et votre capacité à paraître agréable ou
							convaincant.
						</li>
					</ul>
				</div>

				<p>
					Maintenant que tout ceci est posé, revenons à notre histoire de dés et
					voyons un exemple :
					<strong>
						Alphonse est docker sur les quais. Alphonse veut porter une caisse.
					</strong>
				</p>

				<section className="image2">
					<p>
						{" "}
						Le MJ lui demande donc de faire un test de Force. Sa Force est de
						30. Il lance les dés et obtient 22. Ce résultat est inférieur à sa
						caractéristique : <strong> Alphonse réussit</strong> à porter la
						caisse jusqu’au dépôt. <br />
						<br />
						Bien sûr, Alphonse peut être aidé, ou la difficulté peut varier
						selon la situation. Le maître du jeu peut juger qu’Alphonse, en tant
						que docker, fait cela tous les jours : il peut donc accorder un
						<strong> bonus de +40</strong> pour cette action spécifique.
						Alphonse ne teste plus sur 30, mais sur 70, ce qui rend la réussite
						beaucoup plus probable.
						<br />
						<br />À l’inverse, si Alphonse tente une tâche difficile ou
						inhabituelle, un
						<strong> malus</strong> peut être appliqué à son test. Toutes ces
						nuances permettent d’identifier les points forts et faibles d’un
						personnage… et les compétences permettront d’aller encore plus loin
						dans la précision.
					</p>

					<img src={scribe} alt="scribe" />
				</section>

				<h2 id="comp">Les COMPÉTENCES</h2>
				<p>
					{" "}
					Les compétences représentent ce que votre personnage sait faire de
					manière précise. Elles couvrent une grande variété d’actions
					possibles. Certaines compétences appartiennent à une liste commune,
					tandis que d’autres, plus spécialisées, sont dites{" "}
					<strong> avancées</strong> — mais nous n’en parlerons pas ici afin de
					rester clairs et accessibles.{" "}
				</p>

				<section className="Competences">
				 <img src={competences1} alt="Tableau des compétences 1" />
                    <img src={competences2} alt="Tableau des compétences 2" />
				</section>

				<p>
					Comme vous pouvez le constater, il existe plusieurs tableaux de
					compétences, mais
					<strong> toutes fonctionnent selon le même principe</strong>. Chaque
					compétence est associée à une <strong> caractéristique</strong> vue
					précédemment.
				</p>

				<section className="image3">
					<img src={jeux} alt="jeux" />

					<p>
						Reprenons Alphonse le docker. La compétence <em> Art</em> dépend de
						la caractéristique <strong> Dex</strong>. Créer une œuvre demande
						minutie, patience et finesse, des qualités qu’Alphonse ne possède
						pas vraiment : il est fort, rustre et peu éduqué concernant les
						arts. Il ne bénéficie d’aucune <strong> Augmentation (Aug)</strong>{" "}
						dans ce domaine. Ainsi, sa valeur totale en Art se limite à sa
						caractéristique de base — comme indiqué dans la colonne{" "}
						<strong> “Total”</strong>. <br />
						<br />
						Cependant, Alphonse a un passé un peu… mouvementé. Il a traîné avec
						de mauvaises fréquentations, appris l’usage de la poudre noire, et
						il se sent plutôt à l’aise avec un pistolet en main. S’il devait
						tirer avec son arme (<em>Projectile — Poudre noire</em>), il
						utiliserait sa <strong>CT 30</strong> ainsi que
						<strong> +10 d’Augmentations</strong> acquises grâce à son
						entraînement. De plus, Alphonse a récemment “trouvé” un pistolet
						d’excellente facture, lui apportant un{" "}
						<strong>bonus supplémentaire de +20</strong>. <br />
						<br />
						Au total, sa compétence atteint donc <strong> 60</strong>. S’il
						tire, il devra obtenir <strong> 60 ou moins</strong> sur son jet
						pour toucher sa cible.
					</p>
				</section>

				<p>
					Nous pouvons en conclure que le point fort d’Alphonse n’est clairement
					pas l’art, mais bien le maniement de son pistolet. Ce raisonnement
					vaut pour toutes les compétences :
					<strong>
						plus vous investissez dans une compétence, plus ses Augmentations
						(Aug) augmentent, et plus réaliser une action liée à celle-ci
						devient facile
					</strong>
					.
				</p>
				<h2 id="dr">Les degrés de réussite (DR), critiques et maladresses </h2>
				<p>
					Vous avez maintenant compris que chaque action repose sur une
					caractéristique ou une compétence, un jet de dés et un seuil à
					atteindre. Mais il existe un moyen d’ajouter de la nuance : les
					<strong> Degrés de Réussite (DR)</strong>.
				</p>
				<p>
					Les DR comparent la <strong> dizaine</strong> du jet de dé avec la
					<strong> dizaine</strong> de votre seuil de réussite. L’écart entre
					les deux indique à quel point votre action est réussie… ou ratée.
				</p>

				<section className="image4">
					<p>
						Reprenons Alphonse, cette fois dans une tentative de marchandage
						avec un vendeur. La compétence correspondante dépend de sa
						<strong> Sociabilité (Soc) de 30</strong>. Alphonse lance les dés et
						obtient <strong>87</strong>. L’échec est très net :
						<strong>5 dizaines d’écart</strong>.<br />
						<br />
						Une telle tentative maladroite peut mettre le marchand en colère :
						il peut l’insulter, hausser les prix, demander à son garde de «
						raccompagner » Alphonse, ou encore refuser toute transaction.
						<br />
						<br />
						Dans certaines situations, un autre joueur peut venir en soutien
						avant qu’un jet soit lancé. Par exemple : « Je décide d’aider
						Alphonse avec mon charme et mes conseils ». Dans ce cas, Alphonse
						gagne automatiquement <strong>+1 DR</strong> pour cette action. Cela
						augmente son score effectif de 30 à 40, rendant son test un peu plus
						simple.
					</p>

					<img src={livre} alt="livres" />
				</section>

				<p>
					Un seul joueur peut aider pour une action donnée, et seulement si cela
					est
					<strong>pertinent dans la scène</strong>.
				</p>

				<p>
					Il existe enfin deux notions particulières concernant les jets : la
					<strong> réussite critique</strong> et la <strong> maladresse</strong>
					. Si vous réussissez un jet et obtenez un double (11, 22, 33, etc.),
					il s’agit d’une réussite stupéfiante, quelle que soit la difficulté. À
					l’inverse, si vous échouez et obtenez un double (99, 88, 77, etc.),
					vous commettez une maladresse aux conséquences spectaculaires.
				</p>

				<h2 id="opp">Les Tests opposés</h2>

				<p>
					Les tests opposés sont utilisés lorsque deux personnages s’affrontent
					directement dans une action : résister à l’autorité d’un officier avec
					sa
					<strong> Force Mentale</strong>, lutter lors d’un bras de fer grâce à
					sa
					<strong> Force</strong>, ou encore tenter de passer inaperçu face à la
					<strong> Perception</strong> d’une sentinelle. Ils interviennent
					également en combat pour comparer les capacités martiales ou
					l’esquive.
				</p>

				<section className="image5">
					<img src={paper} alt="papier" />

					<p>
						Reprenons notre exemple : Alphonse doit maintenant se défendre face
						au garde du corps du marchand. Un combat débute. Tous les
						participants effectuent un test d’<strong> Initiative (I)</strong>{" "}
						pour déterminer l’ordre d’action. À chaque tour, chacun dispose de{" "}
						<strong> 1 mouvement</strong> et
						<strong> 1 action</strong>.<br />
						<br />
						Lors de la confrontation, le garde du corps tente de frapper
						Alphonse avec son épée (compétence de mêlée – base). Pour se
						défendre, Alphonse peut soit
						<strong> Esquiver</strong> (compétence de base), soit répondre avec
						ses poings (compétence de mêlée – bagarre). Dans les deux cas, les
						jets deviennent un
						<strong> test opposé</strong>. <br /><br /> Les deux personnages lancent leurs
						dés et comparent leurs
						<strong> Degrés de Réussite (DR)</strong>. Celui qui possède le plus
						de DR remporte l’action. Par exemple, si le garde du corps obtient
						<strong> 1 DR</strong> et qu’Alphonse réalise un meilleur jet lui
						donnant
						<strong> 2 DR</strong>, il parvient à éviter le coup. C’est ensuite
						à son tour d’agir. Le combat se poursuit ainsi, tour après tour,
						jusqu’à sa résolution.
					</p>
				</section>

				<p>
					Excepté dans certaines conditions particulières, l’utilisation de
					projectiles ou de magie ne nécessite pas de test opposé : ces actions
					reposent principalement sur un jet simple contre un seuil fixe.
				</p>

				<h2>Pour conclure</h2>
				<p>
					Vous connaissez maintenant les bases indispensables pour comprendre
					comment fonctionne ce système de jeu. Ne vous inquiétez pas si tout
					n’est pas encore parfaitement clair : avec quelques actions, quelques
					jets et un peu de pratique, tout deviendra naturel très rapidement.
				</p>
				<p>
					Le plus important est de vous amuser, d’interpréter votre personnage
					et de laisser l’histoire se dérouler. Les règles sont là pour vous
					accompagner, pas pour vous bloquer.
				</p>
				<p>Alors respirez, lancez vos dés… et bienvenue dans l’aventure !</p>
			</div>
			<ScrollToTopButton />
		</>
	);
};
