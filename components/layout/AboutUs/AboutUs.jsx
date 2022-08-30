import { Logo } from "../Navbar/Logo"
// import { Link } from "next/link";
// import { Image } from "next/image"

const AboutUs = () => {

    return (
        <section className="aboutUs" id="aboutUs">
            <Logo />

            <article className="aboutUs-team">
                {/* <Link>
                    <a>
                        tutaj będzie okrągłe zdjęcie
                    </a>
                </Link> */}

                {/* <Link>
                    <a>
                        tutaj będzie okrągłe zdjęcie
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        tutaj będzie okrągłe zdjęcie
                    </a>
                </Link> */}

            </article>

            <article className="aboutUs-text">

                <p>Potrzeba matką wynalazku i taki jest też początek projektu JuniorCoders. 
                Poszukując pomysłów na rozwój, każdy z naszej trójki spotykał się z podobnymi problemami. 
                Jak pogodzić aktualną pracę z marzeniem o zmianie branży? 
                Jak zbalansować czas poświęcony na odpoczynek, czas poświęcony na życie rodzinne, czas poświęcony na samorozwój? 
                Jak poradzić sobie z - ostatnio popularnym określeniem - prokrastynacją?

                Szukając odpowiedzi na te pytania znaleźliśmy drogę do...
                wspólnego spotkania w barze i w takiej luźnej atmosferze, od słowa do słowa narodził się pomysł, 
                który ma nas nawzajem motywować do regularnej pracy, do utrwalania już zdobytej wiedzy i dobrych praktyk 
                oraz do rozwijania się w nowych technologiach.

                Skąd nazwa - to esencja momentu, w którym się znaleźliśmy. 
                Młodzi, aspirujący juniorzy, szukający swojego miejsca w IT - to nasz wspólny mianownik. 
                To czym się różnimy i nasze indywidualne projekty znajdziecie w naszych indywidualnych sekcjach klikając w nasze miniaturki.

                Pozdrawiamy</p>
                <span>JuniorCoders</span>

            </article>
        </section>
    )
}

export default AboutUs