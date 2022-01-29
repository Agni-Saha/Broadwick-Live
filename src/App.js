import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

import "./App.css"
import "locomotive-scroll/dist/locomotive-scroll.css"

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            scrollbarClass: "scrollbar"
        });

        scroll.on('scroll', (args) => {
            if (typeof args.currentElements['black'] === 'object') {
                let progress = args.currentElements['black'].progress;
                if (progress > 0.92) {
                    document.querySelector('body').style.backgroundColor = "#0C0C0C";
                    document.querySelector('body').style.color = "white";
                }
                else {
                    document.querySelector('body').style.backgroundColor = "#F6F6F4";
                    document.querySelector('body').style.color = "black";
                }
            }
            else if (typeof args.currentElements['paragraph1'] === 'object') {
                let progress = args.currentElements['paragraph1'].progress;
                if (progress < 0.95) {
                    document.querySelector(".big_heading").innerHTML = "MUSIC"
                    document.querySelector(".big_heading").style.marginLeft = "16rem"
                }
                else if (progress > 0.95) {
                    document.querySelector(".big_heading").innerHTML = "CULTURE"
                    document.querySelector(".big_heading").style.marginLeft = "2rem"
                    document.querySelector(".big_heading").style.letterSpacing = "-4px"
                }
            }
            else if (typeof args.currentElements['paragraph2'] === 'object') {
                let progress = args.currentElements['paragraph2'].progress;
                if (progress < 0.95) {
                    document.querySelector(".big_heading").innerHTML = "CULTURE"
                    document.querySelector(".big_heading").style.marginLeft = "2rem"
                    document.querySelector(".big_heading").style.letterSpacing = "-4px"
                }
                else if (progress > 0.95) {
                    document.querySelector(".big_heading").innerHTML = "SPACE"
                    document.querySelector(".big_heading").style.marginLeft = "16rem"
                }
            }
        });
    }, [])

    return (
        <>
            <RemoveScrollBar />
            <div className='App' data-scroll-container >
                <div className="appContainer"
                    data-scroll
                    data-scroll-id="appContainer"
                >
                    <Header
                        data-scroll
                        data-scroll-section
                        data-scroll-repeat
                        data-scroll-speed="1"
                    />
                    <Body
                        data-scroll
                        data-scroll-section
                        data-scroll-repeat
                        data-scroll-speed="1"
                    />
                    <Footer
                        data-scroll
                        data-scroll-section
                        data-scroll-repeat
                        data-scroll-speed="1"
                    />
                </div>
            </div>
        </>
    );
}