import { Logo } from "../../Logo"
import  Link  from "next/link";
import  Image  from "next/image";


const AboutUs = ({author}) => {
    const authors = author.filter(el => el.fields.author != "Junior Coders");

    return (
        
        <section className="aboutUs" id="aboutUs">

            <div className="container aboutUs-container">
                <Logo />
            <article className="aboutUs-team">

                {authors.map((item) => {
                    return (
                        <>
                        {/* co wrzucić żeby się link wyświetlał poprawnie */}
                        <Link 
                            key={item.sys.id}
                            href={`/about/${item.fields.slug}`}
                            passHref
                            >
                    <a>
                        {/* stylowanie w Image? */}
                        <Image 
                            loader={() => item.fields.photo?.fields.file.url }
                            src={item.fields.photo?.fields.file.url}
                            alt={item.fields.photo?.fields.description}
                            width={100}
                            height={100}  
                            className="photo"
                        />

                    </a>
                        </Link>
                        </>
                        
                    )
                })}

            </article>

            <article className="aboutUs-text">

                <p>Potrzeba matką wynalazku i taki jest też początek projektu JuniorCoders. 
                Poszukując pomysłów na rozwój, każdy z naszej trójki spotykał się z podobnymi problemami. 
                Jak pogodzić aktualną pracę z marzeniem o zmianie branży? 
                Jak zbalansować czas poświęcony na odpoczynek, czas poświęcony na życie rodzinne, czas poświęcony na samorozwój? 
                Jak poradzić sobie z - ostatnio popularnym określeniem - prokrastynacją?
                </p>
                <p>
                Szukając odpowiedzi na te pytania znaleźliśmy drogę do...
                wspólnego spotkania w barze i w takiej luźnej atmosferze, od słowa do słowa narodził się pomysł, 
                który ma nas nawzajem motywować do regularnej pracy, do utrwalania już zdobytej wiedzy i dobrych praktyk 
                oraz do rozwijania się w nowych technologiach.
                </p>
                <p>
                Skąd nazwa - to esencja momentu, w którym się znaleźliśmy. 
                Młodzi, aspirujący juniorzy, szukający swojego miejsca w IT - to nasz wspólny mianownik. 
                To czym się różnimy i nasze indywidualne projekty znajdziecie w naszych indywidualnych sekcjach klikając w nasze miniaturki.
                </p>

                <p>Pozdrawiamy</p>
                <p className="aboutUs-signature">
                    <span>JuniorCoders</span>
                </p>

            </article>
            </div>
        </section>
        
    )
}

export default AboutUs