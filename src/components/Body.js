import React from 'react';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"

export default function Body() {
    return (
        <div className='body_section'>
            <div className="centered_element">
                <div className="body_detail_text">
                    Broadwick Live was founded on a belief in the power of 'live'.
                    We connect, inspire and create massive impact through music,
                    culture and space.
                </div>
            </div>
            <div className="sticky">
                <div className="sticky_container" id="sticky_target">
                    <div className="big_heading"
                        data-scroll
                        data-scroll-sticky
                        data-scroll-target="#sticky_target"
                    >
                        MUSIC
                    </div>
                </div>
                <div className="temp_text" >
                    <img className='scroll_img' src={img1} alt="" />
                    <p className='sticky_scroll_paragraph'>
                        Our heritage is in music. We own and operate a portfolio of award-winning
                        venues and entertainment brands and partner with some of the world{"'"}s most
                        influential artists to deliver powerful programming and cultural experiences
                        across the world.
                    </p>
                    <div data-scroll data-scroll-id="paragraph1"></div>
                    <img className='scroll_img' src={img2} alt="" style={{ marginTop: "48rem" }} />
                    <p className='sticky_scroll_paragraph'>
                        We are deeply rooted in fashion, food, film, and the arts. From producing and
                        holding runway fashion shows, Michelin star pop up restaurants, immersive,
                        theatrical events, complete set builds and brand activations, we direct and
                        collaborate with the world{"'"}s best.
                    </p>
                    <div data-scroll data-scroll-id="paragraph2"></div>
                    <img className='scroll_img' src={img3} alt="" style={{ marginTop: "48rem" }} />
                    <p className='sticky_scroll_paragraph'>
                        We believe in redefining spaces and how people experience culture. By breaking
                        down traditional barriers, we curate unique narratives, reveal distinct identities
                        and create one of a kind experiences across all of our spaces and venues.
                    </p>
                </div>
            </div>
            <div className="centered_element2">
                <div className="body_detail_text2">
                    Through four core divisions, Broadwick Live Group designs, builds and operates some of
                    the world{"'"}s most exciting venue and entertainment brands.
                </div>
                <div className="find_out_link">
                    Find out more
                </div>
            </div>
        </div>
    );
}
