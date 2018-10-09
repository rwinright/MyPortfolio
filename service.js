'use strict';
{
    function service() {
        let post = [{
            title: "Movie DB Project",
            img: "http://via.placeholder.com/350x150",
            description: "Movie database website created with AngularJS, used a movie API database for the results",
            link: "https://venpresath.github.io/Angular-Project/"
        },{
            title: "World's Best Workbench",
            img: "http://via.placeholder.com/350x150",
            description: "Small business website that I am currently working on. Utilizing AngularJS",
            link: ""
        },{
            title: "Roggit",
            img: "http://via.placeholder.com/350x150",
            description: "Simple Reddit clone website with jQuery",
            link: "https://venpresath.github.io/reddit-clone/"
        }];

        let musicPost = [{
            title: "Blackgate",
            img: "/img/blackgate.jpg",
            description: "Guitarist of Power/Thrash Metal band from Grand Rapids, MI",
            link: "https://blackgate.bandcamp.com/"
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