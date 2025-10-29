import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export function Header(){
    const pages = [
        { name: "Accueil", path: "/" },
        { name: "Univers", path: "/univers" },
        { name: "Classes", path: "/classes" },
        { name: "Races", path:"/races"},
        { name: "Objets", path:"/objets"},
        { name: "Règles", path:"/regles"},
    ];



    return(
        <header>
            <h1>Shadows of Erdalorn</h1>
             <nav>
                {pages.map((page, i) => (
                <Link key={i} to={page.path}>
                    <button>
                    {page.name}
                    </button>
                </Link>
                ))}
            </nav>
        </header>
    )
}