//Kod motywacyjny, Konrad Bartlewicz

import React, {Component} from 'react';
import {styles} from './styles';


class AppLyForAPosition extends Component{
    constructor(props){
        super(props);
        this.state = {

            employmentHistory : [
                "Ernst & Young Audyt Polska"
            ],

            skills : [
                "vanillaJS, ES6",
                "React",
                "Redux - podstawy",
                "CSS / SCSS",
                "HTML",
                "Podstawy GITa",
                "JQuery",
                "(Skuteczne) przeszukiwanie stackoverflow :)",
                "Obecnie zaczynam naukę Ruby on Rails"
            ],

            hobbies : {

                computerGames : [
                    "Black Desert Online",
                    "Diablo3: RoS",
                    "World of Warcraft"
                ], 
                moviesAndBooks : [
                    "Fantasy",
                    "Thrillery",
                    "JavaScript :P"
                ],
                sports : [
                    "wycieczki rowerowe poza Krakowem",
                    "jazda na rolkach",
                    "siłownia"
                ],
                general : [
                    "przejadanie tego, co spaliłem na siłowni",
                    "przekładanie pomysłów na kod i oglądanie efektów"
                ] 
            },
        
            contactInfo : {
                email : "konradbartlewicz@gmail.com",
                website : "http://www.bartlewicz.pl",
                github : "http://www.github.com/konradbartlewicz", 
                cellphone : 600059993 
            }
            
        }
    }

    
    render(){
        
        let { greeting, employmentHistory, skills, hobbies, contactInfo } = this.state;
        
        return (
            <div style={ styles.generalStyles }>
                <Header />
                <div style = { styles.wrapper }>
                    <h1 style = { styles.violet }> Hello! </h1>
                    <h2> Kilka słów o mnie... </h2>
                    <p> 
                        <Strong text = "Nazywam się Konrad Bartlewicz i chcę dołączyć do Waszego zespołu :)" />   
                        <N /><N />Jestem 24-letnim studentem piątego roku prawa (dostępnym w pełnym wymiarze godzin) i od kilku miesięcy 
                        swój wolny czas poświęcam na poszerzanie wiedzy w zakresie <Strong text = "front endu." />
                        <N />Miałem okazję odbyć praktyki w EY Polska w Dziale Audytu, pracując przy różnych projektach w zespołach o zmiennych 
                        składach, gdzie nauczyłem się efektywnej komunikacji i pracy zespołowej.
                        <N />/* Żeby nie rozwlekać, listę moich hobby zostawiam w kodzie :) */
                        <N />Widoczny tu kod motywacyjny napisany został w React i zdeployowany na github pages.
                    </p>
                    
                    <p> Wśród moich obecnych <Strong text = "umiejętności" /> wyróżniłbym : </p>
                    <UnorderedList array = { skills } />
                    
                    <h3>Poza tym... </h3>
                    <p>  
                        Programuję, bo <Strong text = "naprawdę"/> to lubię.
                        <N />Lubię pracować w ReactJS i zaznajomiłem się z Reduxem.
                        <N />Wiem czemu reducery mają dostęp do konkretnej cześci state,
                        <N />I że .setState() działa asynchronicznie więc odniesienia do state mogą zwrócić poprzednią wartość.
                        <N />Wiem czemu arrow functions ułatwiają pracę w Reakcie, jak ważny jest spread operator w Reduxie i do czego służy Thunk. 
                        <N />I że zanim skończę pisać ten paragraf pewnie powstanie nowa konkurencyjna biblioteka :)
                        
                        <N /><N />Ale wiem, że jest mnóstwo rzeczy, na które ucząc się samemu można nie zwrócić uwagi, 
                            a najlepszą metodą na nadrobienie tych braków i wejście na wyższy level jest 
                            praca nad ciekawymi projektami w otoczeniu rówieśników i mentorów :) 
                    </p>
                    <p> 
                        Moje konto na githubie pod <Link href = { contactInfo.github } text = "tym" /> adresem zostało utworzone
                        na potrzeby rekrutacji, obecnie jedyne widoczne tam repozytorium to
                        <Link href = "https://github.com/konradbartlewicz/motivational-letter/blob/master/src/AppLyForAPosition.js" text = "ten kod motywacyjny!" /> 
                        <N />Jeśli zaistnieje taka konieczność, mogę przesłać adres mojego głównego konta na githubie, jestem też otwarty na wszelkiego rodzaju zadania rekrutacyjne :)
                        <N />Mój email to <Strong text = { contactInfo.email } />, a w piątek lub po weekendzie będę też dostępny pod numerem <Strong text = { contactInfo.cellphone }/>
                    </p>
                    <p>
                        <N />
                        <Strong text = "Chętnie pokażę swoje JS-jutsu w zadaniu testowym :) ,"/>
                        <N />Pozdrawiam!
                    </p>
                </div>
                
            </div>        
        )
    }
}

//Subkomponenty zostawiam w jednym pliku dla zwiększenia czytelności przy szybkim przejrzeniu kodu :)

const Link = ({ href, text }) => {
    return(
        <a href = { href } style = { styles.orangeLink } target = "_blank" > { text } </a>
    )
}

const Strong = ({ text }) => (
    <strong style = { styles.violet } > { text } </strong>
)

const UnorderedList = ({ array }) => {
    return (
        <ul style = { styles.unorderedList } >
            {
                array.map((skill, i) => (
                    <li key = { i }> { skill } </li>
                ))
            }
        </ul>
    )
}

const Header = () => {
    return (
        <div className = "header" style = { styles.header }>
            <img src = "http://bartlewicz.pl/zdjecieprofilowe.jpg" alt = "moje zdjęcie" style = { styles.selfImg }/>
        </div>
    )
}

const N = () => (
    <br />
)

export default AppLyForAPosition;


