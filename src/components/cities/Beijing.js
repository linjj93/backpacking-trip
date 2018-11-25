import React, { Component } from 'react';

import Bags from "../../photos/Chengdu/bags.jpg";

class Beijing extends Component {
    render() {
        return (
            <div className = "Beijing">
                <div className = "header">
                    <div className = "dummy">

                    </div>
                    <div className = "Beijing-title">
                        <h2>After 6 months, it's goodbye to Beijing.</h2>
                    </div>

                </div>

                <div className = "content">
                    <div className = "photo">
                        <img src = {Bags} alt = "day 1"/>
                    </div>
                    <div className = "description">
                        <p> February 2017 - June 2017. The start of a journey signifies the end of another.
                        The best 5-6 months of my university life culminated with a solo backpacking trip.
                        I started off feeling a little lonely, since the last half a year had been meaningfully spent with friends
                        eating, playing, singing, into the middle of the night with friends, incurring severe sleep debts along the way (but
                        they were well worth it!). </p>
                        
                        <p> I had planned for this before I flew to Beijing, to cap off my exchange and also to challenge myself
                        individually. You could consider this my "grad trip" as well (and sure enough it was; because I did not really
                        travel after I graduated).</p>
                        
                        <p>Beginning my travel with <strong>1 backpack, 1 handcarry and a small sling</strong> to place any valuables,
                        I think it weighted about 15kilos in total. Had to make sure it was less than 20 so that
                        I could get on flights <em>without hassle</em>! It was also important to keep my hands free as much
                        as possible. Somehow I felt a greater sense of security because it would help when I needed to move fast.</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Beijing;




