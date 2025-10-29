import { useState } from "react";
import { 
    Humain,
    Elfe,
    Nain,
    Fizzarain,
    Drakéide,
    Tieffelin,
    Orque,
    Goliath
} from "./Races/Races";

// ... autres imports

export default function Races() {
    const races = [
        "Humains",
        "Elfes",
        "Nains",
        "Fizzarains",
        "Drakéides",
        "Tieffelins",
        "Orques",
        "Goliaths"
    ];

    const [selectedRace, setSelectedRace] = useState(null);

    const renderRaceComponent = () => {
        switch (selectedRace) {
            case "Humains": return <Humain />;
            case "Elfes": return <Elfe />;
            case "Nains": return <Nain />;
            case "Fizzarains": return <Fizzarain />;
            case "Drakéides": return <Drakéide />;
            case "Tieffelins": return <Tieffelin />;
            case "Orques": return <Orque />;
            case "Goliaths": return <Goliath />;
            default: return <Humain />;
        }
    };

    return (
        <>
            <div id="title">
                <h1>
                    Découvrez les peuples d’Erdalorn : chacun porte ses secrets, sa magie et son histoire… 
                    Quelle race choisirez-vous pour forger votre destinée ?
                </h1>
            </div>

            <div className="Subnav">
                {races.map((race, i) => (
                    <button key={i} onClick={() => setSelectedRace(race)}>
                        {race}
                    </button>
                ))}
            </div>

            <div className="Content">
                {renderRaceComponent()}
            </div>
        </>
    );
}
