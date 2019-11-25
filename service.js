'use strict';
{
    function service() {
        let post = [{
            title: "Handgrown Jobs",
            img: "../img/hgj-screenshot.png",
            description: "Cannabis career website created with React, SCSS, and Meteor",
            myRole: "Full-Stack Development/Maintenance",
            link: "https://handgrown.jobs/home"
        },{
            title: "City2Shore Real Estate",
            img: "../img/c2S-screenshot.png",
            description: "Company software for City2Shore; a real-estate franchise company. I had a hand in building onto the administration dashboard.",
            myRole: "Full-Stack Development/Maintenance",
            link: ""
        },{
            title: "MiLife",
            img: "../img/milife-screenshot.png",
            description: "A sports league management web app. This was created using Meteor and React.js",
            myRole: "Front-end Development",
            link: ""
        },{
            title: "Leimenstoll Services",
            img: "../img/leimenstoll-screenshot.jpg",
            description: "Workforce management application created in React Native and Meteor",
            myRole: "Full-Stack Development/Maintenance",
            link: "https://play.google.com/store/apps/details?id=com.rnleimenstoll"
        },{
            title: "Hillman Advocacy Group",
            img: "../img/hillman-screenshot.png",
            description: "The primary app of an annual training program for trial lawyers. My role was to build onto the video editor used to submit video feedback on the lawyer's performance.",
            myRole: "Maintenance & Upgrading",
            link: "https://play.google.com/store/apps/details?id=com.hillmanapp"
        },{
            title: "Ninja Take Back",
            img: "../img/ninja-screenshot.png",
            description: "Local multiplayer HTML5 canvas game built for the js13k game jam. It uses a Kontra as its game engine",
            myRole: "Designer/Developer",
            link: "https://stupefied-stallman-c32e1b.netlify.com"
        },{
            title: "Kid Icarus VS.",
            img: "../img/kid-icarus-screenshot.png",
            description: "Local multiplayer built for web using Phaser 3",
            myRole: "Sole developer",
            link: "https://stoic-swirles-f56bba.netlify.com/"
        },{
            title: "JS Invaders",
            img: "../img/swatch.png",
            description: "An arcade-style space-shooter game based on training newer developers for quick acquisition of programming logic outcomes through micro-sized coding questions. Built to show functional programming in game development for the students of the Grand Circus coding bootcamp",
            myRole: "Sole developer",
            link: "https://eloquent-hypatia-cf6312.netlify.com/"
        }];

        let musicPost = [{
            title: "Blackgate",
            img: "/img/blackgate.jpg",
            description: "Guitarist of Power/Thrash Metal band from Grand Rapids, MI",
            link: "https://blackgate.bandcamp.com/",
            isVideo: false
        },{
            title: "In Secrecy",
            img: "http://via.placeholder.com/350x150",
            description: "Guitarist of Power Metal band from Grand Rapids, MI",
            link: "/",
            isVideo: false
        },{
            title: "Krigen I Nord",
            img: "http://via.placeholder.com/350x150",
            description: "Vocalist of Black Metal band from Grand Rapids, MI",
            link: "https://www.youtube.com/watch?v=O60QCNbyK44",
            isVideo: true
        }];

        return {
            post,
            musicPost
        }
    }

    angular
        .module("app")
        .factory("service", service);
}