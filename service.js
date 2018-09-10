'use strict';
{
    function service() { 
        let post = [{
            title: "World's Best Workbench",
            img: "http://via.placeholder.com/350x150",
            description: "Small business website that I am currently working on. Utilizing AngularJS",
            link:""
        },{
            title: "Songsmash",
            img: "http://via.placeholder.com/350x150",
            description: "Comprehensive lyric guessing game. Made using AngularJS, Musixmatch API, and a little jQuery",
            link:"https://www.songsmash.ga"
        },{
            title: "Permanent Beauty",
            img: "http://via.placeholder.com/350x150",
            description: "Beauty Website made with Bootstrap, Express, Node, and MongoDB",
            link: ""
        }]
        
        let musicPost = [{
            title: "Blackgate",
            img: "/img/blackgate.jpg",
            description: "Power/Thrash Metal",
            link: "https://blackgate.bandcamp.com/"
        }]

        return{
            post,
            musicPost
        }
    }

    angular
        .module("app")
        .factory("service", service);
}