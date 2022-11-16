import React from "react";
import { List } from 'semantic-ui-react';
import { useLocation } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import maestro from './images/Maestro1.jpeg';
import missme from './images/missme2.jpg';
import missmePed from './images/MissMe-ped.png';
import novaPed from './images/Nova-ped.png';
import breePed from './images/Bree-ped.png';
import effiePed from './images/Effie-ped.png';
import maestroPed from './images/Maestro-ped.png';
import maxPed from './images/Max-ped.png';
import valkyriePed from './images/Valkyrie-ped.png';
import tumblenaPed from './images/Tumblena-ped.png';
import nova from './images/nova.jpeg';
import bree from './images/bree2.jpeg';
import effie from './images/effie.jpeg';
import kima from './images/kima.jpeg';
import BlackwoodPhotos from "./blackwoodphotos";
import { missMePhotos } from "./missme";
import { novaPhotos } from "./nova";
import { breePhotos } from "./bree";
import { effiePhotos } from "./effie";
import { kimaPhotos } from "./kima";
import { maestroPhotos } from "./maestro";
import { valkyriePhotos } from "./valkyrie";
import { maxPhotos } from "./max";
import { tumblenaPhotos } from "./tumblena";
export function Home() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={3000}
        >
          <div data-src={maestro} />
          <div data-src={missme} />
          <div data-src={nova} />
          <div data-src={bree} />
          <div data-src={effie} />
          <div data-src={kima} />
        </AutoplaySlider>
      );

    return (
        <>
        <div className="homeContent">
            <h1>Blackwood Gypsy Horses</h1>
            <h2>"Breeding for champions, with hearts of gold."</h2>
            <p>Our goal is to breed the finest traditional Gypsy Horses, always putting confirmation, athleticism, and temperament above all else.</p>
            <div className="sliderContainer">
                {slider}
            </div>
            <br /><br /><br /><br />
        </div>
        </>
    );
}

export function About() {
    return (
        <div><h2>Our Story</h2>
        <section className="breedContent">
        <p>Some people are just born with a love of horses.  Tori is one of those people.  As a child, she never played with dolls.  Sure she had Barbies and she had a doll house, but she always played with the horses that came with them and never the dolls themselves.  The only books she wanted to read were horse related books.  Rhonda, who always loved horses as a kid but whose family couldn’t afford to give her a horse or riding lessons wanted to make sure that Tori was able to fulfill her dreams of having horses in her life.  Tori started riding at the age of 8.  For the first few years the family half leased a couple different horses for her to learn on.  She got her first at age 11.  A Thoroughbred mare named Beauty. </p> 

        <p>As Tori got older and got her first computer, her favorite past time was looking at horse photos and learning all she could about the different breeds on the internet.  One evening, Rhonda came home from work to find a very excited Tori waiting for her by the door.  She kept talking about seeing the most beautiful horse she had ever seen, a Gypsy Vanner, and she needed to show it to Rhonda right away.  That horse was a young Taskin.  Tori instantly became obsessed with Gypsies and set out to learn everything she could with the hope that someday she would own one of her own.</p>

        <p>Fast forward to 2014, Tori became very ill with a major heart problem that required a long hospital stay to cure an infection in the hear and eventually open heart surgery.  That was the year that Tori had decided that now was the time to make the dream a reality.  Her Christmas gift that year was the money to put a downpayment on her first Gypsy.  A yearling colt name Maximus Roman.  By July 2015, Max was finally on his way home to Tori.  </p>

        <p>In May of 2015, Tori took Max to the Mt. Hood Gypsy and Drum Horse show at the Oregon State Fairgrounds.  There she met Samantha and CJ Vansickle of Starfire Gypsy Horses.  Two weeks later, she traveled to CA to attend a show with Starfire.  When she arrived at the ranch, who should be there but the one and only Taskin.  The horse that stated it all.  Over the next few years, Tori moved to CA to be a full-time apprentice at Starfire and during that time, she not only got to work with Taskin and show him but she worked with many other amazing gypsy horses all under the tutelage of Sam and CJ, two of the best in the business.</p>

        </section>
        </div>
    );
}

export function OurHorses() {
    return (
        <div>
    
        </div>
    );
}

export function Mares() {
    return (
        <div><h2>Mares & Fillies</h2>
        </div>
    );
}

export function MissMe() {
    
    
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Starfire's Imperial Mistress "Miss Me" (2015-2022)</h2>
                <p className='horseTextBold'>2015 seal bay tobiano Ee Ata Tt filly. Out of Starfire's Masque, by SD Murphy of Cedar Creek.</p>
                <p>"Miss Me" is out of Starfire's superstar broodmare, Masque, and by none other than SD Murphy, bringing SD and Lenny lines together in one outstandingly correct, heavy, extremely hairy, and remarkably well-tempered package!</p>
                <p>This filly was rated 4 Stars by the GVHS as a YEARLING!!</p>
                
            </div>
            <BlackwoodPhotos src={missMePhotos} />
            <br />
            <p>Photos by: Mark J. Barrett and Jamie Mammano</p>
            <br />
            <img src={missmePed} alt="Miss Me Pedigree" width="700"></img>
        </section>
    );
}

export function Nova() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>HGR Champagne Supernova of Blackwood "Nova"</h2>
                <p className='horseTextBold'>2017 Silver smoky black mare. By Taskin, out of The Diamond Mare HGR.</p>
            </div>
            <BlackwoodPhotos src={novaPhotos} />
            <br />
            <p>Photos by: Mark J. Barrett, Samantha Dawn Ebeling and Jamie Mammano</p>
            <br />
            <img src={novaPed} alt="Nova Pedigree" width="700"></img>
        </section>
    );
}

export function Bree() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Blackwood's The Strawberry Lass "Bree"</h2>
                <p className='horseTextBold'>2018 Filly out of Tumblena, by Desert Jewell Viggo.</p>
                <p>Bree is for sale to a perfect home.  Contact us at the email below for more information. </p>
            </div>
            <BlackwoodPhotos src={breePhotos} />
            <br />
            <p>Photos by: Samantha Dawn Ebeling and Ashlei Boucher </p>
            <br />
            <img src={breePed} alt="Bree Pedigree" width="700"></img>
        </section>
    );
}

export function Effie() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Blackwood's The Ineffable Game "Effie"</h2>
                <p className='horseTextBold'>2019 Filly out of Tumblena, by Starfire's The Five Card Stud.</p>
            </div>
            <BlackwoodPhotos src={effiePhotos} />
            <br />
            <p>Photos by: Ashlei Boucher </p>
            <br />
            <img src={effiePed} alt="Effie Pedigree" width="700"></img>
        </section>
    );
}
export function Kima() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
            <h2>Blackwood's Lady Kima "Kima"</h2>
                <p className='horseTextBold'>2021 Filly out of Starefire's Imperial Misstress, by Starefire's The Monarch.</p>
            </div>
            <BlackwoodPhotos src={kimaPhotos} />
            <br />
            <p>Photos by: Ashlei Boucher </p>
        </section>
    );
}

export function Geldings() {
    return (
        <div><h2>Geldings</h2>
        </div>
    );
}

export function Maestro() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Northstar Maestro</h2>
                <p className='horseTextBold'>2006 Imported gelding.  Bred by Michael Vines</p>
            </div>
            <BlackwoodPhotos src={maestroPhotos} />
            <br />
            <p>Photos by: Ashlei Boucher and Rhonda Bailey</p>
            <br />
            <img src={maestroPed} alt="Maestro Pedigree" width="700"></img>
        </section>
    );
}

export function Sale() {
    return (
        <div><h2>Sale Horses</h2>
        <section>
            <div className="shortContent">
                <p>We currently have no horses for sale at this time.</p>
            </div>
        </section>
        </div>
    );
}

export function Sold() {
    return (
        <div><h2>Sold</h2>
        </div>
    );
}

export function Valkyrie() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Blackwood's Warrior Goddess "Valkyrie"</h2>
                <p className='horseTextBold'>2019 Filly out of Starefire's Imperial Misstress, by Desert Jewel Viggo</p>
                {/* <p>Blackwood's The Warrior Goddess, aka "Valkyrie", is now sold and has arrived at her amazing new home... in COLOMBIA! </p> */}
                <p>We couldn't be happier with how this young mare grew up, from tough beginnings to maturing into a jaw-dropping beauty! She joins the blossoming ranks of Gypsy Vanner Horses in Colombia and we think she will do a superb job of representing the breed there...</p>
            </div>
            <BlackwoodPhotos src={valkyriePhotos} />
            <br />
            <p>Photos by: Ashlei Boucher </p>
            <br />
            <img src={valkyriePed} alt="Valkyrie Pedigree" width="700"></img>
        </section>
    );
}

export function Tumblena() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Tumblena</h2>
                <p className='horseTextBold'>2006 Imported mare by the one and only Tumbleweed</p>
                <p>After giving us two spectacular fillies during her time at Blackwood Gypsy Horses, Tumblena has moved on to a new and wonderful home in Texas where we know she is loved.</p>
            </div>
            <BlackwoodPhotos src={tumblenaPhotos} />
            <br />
            <p>Photos by: Mark J. Barrett and Jamie Mammano</p>
            <br />
            <img src={tumblenaPed} alt="Tumblena Pedigree" width="700"></img>
        </section>
    );
}
export function Max() {
    return (
        <section className="horseContent">
            <div className='horseText'> 
                <h2>Maximus Roman of Bella Vista</h2>
                <p className='horseTextBold'>2014 Gelding out of HSF Coco Chanel, by Roman</p>
                <p>After spending several years at Blackwood Gypsy Horses and beginning training by Starfire Gypsy Horses, Max was sold to a most wonderful and loving home in Duval, WA.  We are so happy to see how Max has grown and matured over the years.  He is an amazing boy.</p>
            </div>
            <BlackwoodPhotos src={maxPhotos} />
            <br />
            <p>Photos by: Jamie Mammano</p>
            <br />
            <img src={maxPed} alt="Max Pedigree" width="700"></img>
        </section>
    );
}
export function Contact() {
    return (
        <div  className="homeContent">
            <h2>How to contact us</h2>
            <h4>Email Tori: tori@blackwoodgypsy.com</h4>
            <h4>Email Rhonda: rhonda@blackwoodgypsy.com</h4>
            <h4>Phone: 425-785-0406</h4>
            
        </div>
    );
}

export function Links() {
    return (
        <div  className="homeContent">
            <h2>Our Trainers</h2>
            <List link>
                <List.Item class="linkText"  target='_blank' as='a' href='http://starfiregypsy.com/index.html'>Stafire Gypsy Horses</List.Item>
            </List>
            <h2>Gypsy Horse Registries and Clubs</h2>
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='https://vanners.org'>The Gypsy Vanner Horse Society</List.Item>
            </List>  
            <List link> 
                <List.Item class="linkText" target='_blank' as='a' href='http://www.gypsyhorseassociation.org/'>The Gypsy Horse Association</List.Item>
            </List>  
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='https://ghra.us/'>The Gypsy Horse Registry of America</List.Item>
            </List>
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='http://www.californiagypsyhorseclub.com'>The California Gypsy Horse Club</List.Item>
            </List>
            <h2>Photographers</h2>
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='https://www.heartofacowgirlphotography.com'>Heart of a Cowgirl Photography - Samantha Dawn Ebeling</List.Item>
            </List>  
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='https://www.mammanophotography.com'>Mammano Photography and Design - Jamie Mammano</List.Item>
            </List>
            <List link>
                <List.Item class="linkText" target='_blank' as='a' href='https://www.markjbarrett.com/#/page/mjb'>Mark J. Barrett Photography - Mark J. Barrett</List.Item>
            </List>
            <List link> 
                <List.Item class="linkText" target='_blank' as='a' href='https://abbphotography.com'>abb Photography - Ashlei Boucher</List.Item>
            </List>  
            <List link> 
                <List.Item class="linkText" target='_blank' as='a' href='https://spurredbdesigns.pixieset.com/?fbclid=IwAR2DGZgS6IOi7tBECGssXH59rTTpmzZAXOBauueQ88wsPJWu53xXwO0cY5U'>Spurred B Equine Photography - Amy Lynn Alkire</List.Item>
            </List>  
            <br /><br /><br />
        </div>
    );
}

export function Breed() {
    return (
        <>
        <div><h2>About the Breed</h2>
        <section className="breedContent">
            <p>The Gypsy Vanner/Gypsy Horse is a small draft horse originally bred by the Romani people of 
            Great Britain and Ireland. They were breeding to create the perfect horse to pull their 
            living wagons known as vardos or caravans. In the 1990s the breed was first brought 
            to North America.</p>

            <p>The genetic origins of the breed include the Shire, the Clydesdale, and the native British 
            ponies such as the Dales pony. Known for its broad body type of heavy bone, the majority 
            of the breed stands between just 14-15 hands at the withers. They come in any color, solid, tobiano 
            and splash and should have an abundance of feather flowing from behind the knees and hocks, as 
            well as the long free flowing mane and tail. They also known for their calm, friendly, and 
            often playful temperament as they were bred to be family horses.</p>

            <p>Though originally bred to pull the caravans, you will see them in all disciplines such as 
            driving, dressage, jumping, English 
            pleasure, ranch work, trail, and western pleasure horses. </p>

            <p>For more information about the breed's history and breed standards, visit the <a href="http://vanners.org" target="_blank" rel="noreferrer">Gypsy Vanner Horse Society</a>.</p>
            <br /><br /><br />
        </section></div></>
    );
}

export function Whoops404() {
    let location = useLocation();

    return (
        <div><h3>Oops.  Something went wrong.  The page at {location.pathname} does not exist.</h3></div>
    );
}