import React, { Component } from 'react';

import Panda1 from "../../photos/Chengdu/panda1.jpg";
import Panda2 from "../../photos/Chengdu/panda2.jpg";
import PandaCentre from "../../photos/Chengdu/pandacentreentrance.jpg";
import FoodCollage from "../../photos/Chengdu/foodcollage.jpg";
import DuJiangYan from "../../photos/Chengdu/djy6.jpg";
import WuHouCi from "../../photos/Chengdu/wuhouci.jpg";
import ThreeBrothers from "../../photos/Chengdu/threebrothers.jpg";
import Opera from "../../photos/Chengdu/opera4.jpg";
import NarrowAlley from "../../photos/Chengdu/narrowalley.jpg";
import WideAlley from "../../photos/Chengdu/widealley.jpg";
import AnshunBridge from "../../photos/Chengdu/anshunbridge.jpg";
import YellowTourBus from "../../photos/Chengdu/yellowtourbus.jpg";


class Chengdu extends Component {
    render() {
        return (
            <div className = "Chengdu">
                <p>
                    This city quickly became my favourite even though it was only my first stop. On hindsight, I think I made the 
                    right decision to make it my first destination, because weeks later, when I was in my last stop at Qingdao,
                    I was dead tired and could not enjoy or do much. I just wanted to go home.
                </p>
                
                <p>
                    Chengdu was so enjoyable because the tourism experience was multi-dimensional - one could whet their appetite 
                    with proper, spicy Sichuan food; you could see nature with the Dujiangyan Irrigation Site as well as the Panda
                    Research Base; you could visit a piece of Three Kingdoms history at Temple of Marquis where the Three Brothers
                    were worshipped (Chengdu was the capital of ShuHan during the Three Kingdoms period); watch a Sichuan opera if
                    you need a taste of art; or you could just shop around at their shopping streets. You could always find something
                    to do here.
                </p>

                <p>
                    I had not expected myself to enjoy Chengdu food so much. Spice was an okay thing for me, at times I painstakingly
                    munch on spicy food till I was in tears. I thought I would suffer on most meals; trying all I could to finish that 
                    bowl of spicy noodles, or some random spicy food that I would find on the streets just to satisfy my hunger. 
                </p>

                <figure id = "chengdu-food">
                    <img src = {FoodCollage} alt = "Food I ate"/>
                    <figcaption>Food I ate in Chengdu.</figcaption>
                </figure>

                <p>
                    The highlight has to be the Sichuan hotpot. What a bomb that was. At moderate spiciness, it was presumably the spiciest
                    by Singaporean standards. It was madness. But I was lucky to have friends in Chengdu to introduce me to local Sichuan
                    cuisine. I wouldn't have eaten a hotpot by myself. Thankful for the previous internship experience which gained me some
                    Chinese friends.
                </p>

                <figure id = "dujiangyan">
                    <img src = {DuJiangYan} alt = "Du Jiang Yan"/>
                    <figcaption>Raining at Du Jiang Yan.</figcaption>
                </figure>
                <p>
                    Another place one simply cannot miss is the nature spots Chengdu offers. I was awestruck when I arrived at Dujiangyan - an
                    irrigation project to divert river flow into Chengdu when drought threatened the lives of the people in the olden days. The gush
                    of water currents left a huge impression on me, and it really solidified my stance that Chengdu was a great place to visit.
                    It rained heavily that day, which added a sense of mystery to the scene - you had mist on top of the waters. What a sight to
                    behold.
                </p>

                <figure id = "panda-center">
                    <img src = {PandaCentre} alt = "Panda Centre"/>
                    <figcaption>Panda Mania</figcaption>
                </figure>

                <figure id = "pandas">
                    <img id = "panda-1" src = {Panda1} alt = "A panda"/>
                    <img id = "panda-2" src = {Panda2} alt = "Another panda"/>
                    <figcaption>Slacking their time away.</figcaption>
                </figure>

                <p>
                    Going to Chengdu without going to the Panda Research Base would mean a wasted trip; who wouldn't want to see those cheeky balls
                    of fur rolling around doing their own thing (sometimes fighting)?
                </p>

                <div className = "sanguo">
                    <p>
                        Visiting the Temple of Marquis to see a piece of my favourite Chinese story - Three Kingdoms!
                    </p>
                    <figure>
                        <img src = {WuHouCi} alt = "Temple of Marquis"/>
                        <figcaption>Temple of Marquis</figcaption>
                    </figure>
                </div>

                <div className = "sanguo">
                    <p>
                        The Three Brothers who swore allegiance and built an empire on their own -  Liu Bei, Guan Yu, Zhang Fei.
                    </p>
                    <figure>
                        <img src = {ThreeBrothers} alt = "Three Brothers"/>
                        <figcaption>Liu Bei, Guan Yu, Zhang Fei</figcaption>
                    </figure>
                </div>

                <h3>
                    Other things I did...
                </h3>
                    
                <div className = "others">
                    <figure>
                        <img src = {Opera} alt = "Opera"/>
                    </figure>
                    <p>
                        Watching a Sichuan opera, filled with gimmicks, stunts and humour.
                    </p>
                </div>

                <div className = "others">
                    <figure id = "alleys">
                        <img id = "narrow-alley" src = {NarrowAlley} alt = "Narrow Alley"/>
                        <img src = {WideAlley} alt = "Wide Alley"/>
                    </figure>
                    <p>
                        Narrow/Wide Alleys. A food and shopping street in Chengdu.
                    </p>
                </div>

                <div className = "others">
                    <figure>
                        <img src = {AnshunBridge} alt = "Anshun Bridge"/>
                    </figure>
                    <p>
                        Anshun Bridge at night. The landmark of Chengdu.
                    </p>
                </div>

                <h3>Special Mention</h3>
                
                <figure id = "dujiangyan">
                    <img src = {YellowTourBus} alt = "Tourism Services"/>
                    <figcaption>This yellow shopfront (located across all attractions) was my go-to for time in Chengdu.</figcaption>
                </figure>

                <p>
                    The bus service provided by Chengdu's tourism agency! This iconic yellow
                    shopfront is a one-stop shop for all the tourist needs: guides, souvenirs
                    to buy, and even provides point-to-point bus transfers along with admission
                    tickets to the various attractions! I didn't have to worry about transport at all when I was there. Basically I just went there, 
                    saw the bus schedule and picked the tourist spot I wanted to visit. If you
                    buy in bundle, the transport is even cheaper! It was perfect for me because
                    I wanted to see as much as I could.
                </p>
            </div>
        )
    }
}

export default Chengdu;
