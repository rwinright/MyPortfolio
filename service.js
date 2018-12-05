'use strict';
{
    function service() {
        let post = [{
            title: "Handgrown Jobs",
            img: "http://via.placeholder.com/350x150",
            description: "Cannabis career website created with React, SCSS, and Meteor",
            link: "https://handgrown.jobs/home"
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