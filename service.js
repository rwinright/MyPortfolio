'use strict'; {
    function service() {
        let post = [ {
            title: "City2Shore Real Estate",
            img: "../img/c2S-screenshot.png",
            description: "Company software for City2Shore; a real-estate franchise company. I had a hand in building onto the administration dashboard.",
            myRole: "Full-Stack Development/Maintenance",
            link: ""
        }, {
            title: "MiLife",
            img: "../img/milife-screenshot.png",
            description: "A sports league management web app. This was created using Meteor and React.js",
            myRole: "Front-end Development",
            link: ""
        }, {
            title: "Leimenstoll Services",
            img: "../img/leimenstoll-screenshot.jpg",
            description: "Workforce management application created in React Native and Meteor",
            myRole: "Full-Stack Development/Maintenance",
            link: "https://play.google.com/store/apps/details?id=com.rnleimenstoll"
        }, {
            title: "Hillman Advocacy Group",
            img: "../img/hillman-screenshot.png",
            description: "The primary app of an annual training program for trial lawyers. My role was to build onto the video editor used to submit video feedback on the lawyer's performance.",
            myRole: "Maintenance & Upgrading",
            link: "https://play.google.com/store/apps/details?id=com.hillmanapp"
        }, {
            title: "CTP Distributors",
            img: "../img/ctp.png",
            description: "A mobile app for the CTP Distributors website. Provides a mobile storefront for business that buy wholesale aftermarket automotive parts. This was made using a custom PHP back-end and Angular 7 on the front-end.",
            myRole: "Full-Stack Developer",
            link: "https://play.google.com/store/apps/details?id=com.ctpdistributorsfinal.app"
        }, {
            title: "Ninja Take Back",
            img: "../img/ninja-screenshot.png",
            description: "Local multiplayer HTML5 canvas game built for the js13k game jam. It uses Kontra.js game engine",
            myRole: "Designer/Developer",
            link: "https://stupefied-stallman-c32e1b.netlify.com"
        }, {
            title: "Kid Icarus VS.",
            img: "../img/kid-icarus-screenshot.png",
            description: "Local multiplayer built for web using Phaser 3",
            myRole: "Sole developer",
            link: "https://stoic-swirles-f56bba.netlify.com/"
        }];

        let musicPost = [{
            title: "Blackgate",
            img: "/img/blackgate.jpg",
            description: "Guitarist of Power/Thrash Metal band from Grand Rapids, MI",
            link: "https://blackgate.bandcamp.com/",
            isVideo: false
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
