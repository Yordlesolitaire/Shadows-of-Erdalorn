export function Humain() {
    return <h1>Humains</h1>;
}

export function Elfe() {
    return <h1>Elfes</h1>;
}

export function Nain() {
    return <h1>Nains</h1>;
}

export function Fizzarain() {
    return <h1>Fizzarains</h1>;
}

export function Drakéide() {
    return(
        <>
            <section>
                <h1>Les Drakéides</h1>
                <h2>Enfants de Dragons</h2>
                <p>Race imposante et mystique, les Drakéides incarnent la force et la sagesse des dragons, associés à une longévité exceptionnelle et une maîtrise profonde de la magie élémentaire. Leur présence dans le monde est marquée par une fierté ancestrale et un dévouement sans faille à leur rôle de protecteurs.Bien que leur apparence intimidante et leur nature guerrière puissent effrayer, ils sont avant tout des êtres de discipline et d’honneur. Leur habileté à maîtriser les flammes et à tisser des liens avec les dragons leur confère une puissance incomparable, mais c'est leur capacité à maintenir un équilibre entre puissance et sagesse qui fait d’eux une force respectée et incontournable sur Erdalorn.</p>
                <h2>L'espace de vie </h2>
                <p>Les Drakéides vivent dans un désert vaste et inhospitalier, où la chaleur et les montagnes escarpées façonnent leur caractère. Leur forteresse, au cœur de ce paysage impitoyable, reflète leur capacité à prospérer dans des conditions extrêmes.Maîtrisant le feu et les éléments, les Drakéides transforment leur environnement rude en un bastion invincible. Isolement et résistance sont au cœur de leur mode de vie, prêts à défendre l’équilibre de leur monde en toutes circonstances.</p>
            </section>
            <section>
                <h1>Traits des Drakéides</h1>
                <p id="traits"><strong>Augmentation de caractéristiques : </strong> Votre Force augmente de 2 et votre Charisme de 1.</p>
                <p id="traits"><strong>Âge :</strong> Les jeunes drakéides grandissent rapidement. Ils marchent quelques heures après l’éclosion, atteignent la taille d’un enfant humain de dix ans à 3 ans et deviennent adultes à 15 ans. Leur espérance de vie est d’environ 80 ans.</p>
                <p id="traits"><strong>Taille :</strong> Les drakéides sont plus grands et plus lourds que les humains, mesurant en moyenne 1,80 m pour près de 125 kg. Votre taille est Moyenne (M).</p>
                <p id="traits"><strong>Vitesse :</strong> Votre vitesse de base est de 9 mètres.</p>
                <p id="traits"><strong>Ascendance draconique :</strong> Vous possédez une ascendance draconique. Choisissez un type de dragon dans la table ci-dessous. Votre souffle et votre résistance aux dégâts dépendent de ce type.</p>
                <p id="traits"><strong>Souffle :</strong> Vous pouvez utiliser votre action pour libérer un souffle d’énergie destructrice. L’ascendance draconique détermine sa taille, sa forme et le type de dégâts. Les créatures affectées doivent réussir un jet de sauvegarde (DD = 8 + modificateur de Constitution + bonus de maîtrise) ou subir 2d6 dégâts, moitié en cas de réussite. Les dégâts passent à 3d6 au niveau 6, 4d6 au niveau 11, et 5d6 au niveau 16. Vous regagnez cette capacité après un repos court ou long.</p>
                <p id="traits"><strong>Résistance aux dégâts :</strong> Vous obtenez la résistance au type de dégâts associé à votre ascendance draconique.</p>
                <p id="traits"><strong>Endurance du désert :</strong> Issus d’un environnement rude et aride, vous êtes naturellement adaptés aux conditions extrêmes du désert :</p>
                <ul>
                <li>Vous êtes résistants à la chaleur intense (aucun malus lié à la chaleur naturelle).</li>
                <li>Vous subissez plus lentement les effets de la déshydratation.</li>
                <li>Vous avez avantage aux tests de Survie liés à la navigation, l’orientation ou la recherche de ressources dans le désert.</li>
                </ul>
                <p id="traits"><strong>Sang-froid :</strong> En raison de votre nature reptilienne et de votre habitat d’origine :</p>
                <ul>
                <li>Vous avez désavantage aux jets de sauvegarde contre les effets liés au froid extrême.</li>
                <li>Vous avez désavantage aux tests de Constitution pour résister au froid naturel ou magique si vous n’êtes pas équipé ou protégé.</li>
                </ul>
                <p id="traits"><strong>Langues :</strong> Vous pouvez parler, lire et écrire le commun et le draconique.</p>
                <h2>Tableau d'ascendance draconique</h2>
                <table id="ascendance-draconique">
                <thead>
                    <tr>
                    <th>Dragon</th>
                    <th>Type de dégâts</th>
                    <th>Souffle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Blanc</td><td>Froid</td><td>Cône de 4,50 m (JdS de Con.)</td></tr>
                    <tr><td>Bleu</td><td>Foudre</td><td>Ligne de 1,50 × 9 m (JdS de Dex.)</td></tr>
                    <tr><td>Noir</td><td>Acide</td><td>Ligne de 1,50 × 9 m (JdS de Dex.)</td></tr>
                    <tr><td>Rouge</td><td>Feu</td><td>Cône de 4,50 m (JdS de Dex.)</td></tr>
                    <tr><td>Vert</td><td>Poison</td><td>Cône de 4,50 m (JdS de Con.)</td></tr>
                    <tr><td>Airain</td><td>Feu</td><td>Ligne de 1,50 × 9 m (JdS de Dex.)</td></tr>
                    <tr><td>Argent</td><td>Froid</td><td>Cône de 4,50 m (JdS de Con.)</td></tr>
                    <tr><td>Bronze</td><td>Foudre</td><td>Ligne de 1,50 × 9 m (JdS de Dex.)</td></tr>
                    <tr><td>Cuivre</td><td>Acide</td><td>Ligne de 1,50 × 9 m (JdS de Dex.)</td></tr>
                    <tr><td>Or</td><td>Feu</td><td>Cône de 4,50 m (JdS de Dex.)</td></tr>
                </tbody>
                </table>

            </section>
            <section className="celebrite">
                <img src="https://primary.jwwb.nl/public/m/w/s/temp-zqenlfdrfadrjxntcabq/breathtaking_alla_prima_oil_pa-1-high.jpg?enable-io=true&crop=1.2598%3A1&width=532" alt="" />
                <h1>Drakéides légendaire</h1>
                <h2>Norixius Balasar - Le Gardien d'Or et de Feu</h2>
                <p>Guerrier légendaire des Drakéides, Fils du Grand Dragon Valarok, il se distingua dès son jeune âge par sa maîtrise du feu et des armes. Lors de la Bataille des Sables Incandescents, il mena ses troupes à la victoire en utilisant un cristal de flamme légendaire, fusionnant sa puissance avec celle du feu ancestral. Son courage et sa sagesse inspirèrent toute une génération, et à sa mort, ses cendres furent conservées comme symbole de sa légende éternelle. Son nom reste gravé dans les mémoires comme un modèle de bravoure et de sacrifice.</p>
            </section>
        </>
    )
}

export function Tieffelin() {
    return <h1>Tieffelins</h1>;
}

export function Orque() {
    return <h1>Orques</h1>;
}

export function Goliath() {
    return <h1>Goliaths</h1>;
}
