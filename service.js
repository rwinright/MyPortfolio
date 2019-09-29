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
            title: "Leimenstoll Services",
            img: "../img/leimenstoll-screenshot.png",
            description: "Workforce management application created in React Native and Meteor",
            myRole: "Full-Stack Development/Maintenance",
            link: "https://play.google.com/store/apps/details?id=com.rnleimenstoll"
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