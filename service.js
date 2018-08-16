'use strict';
{
    function service() { 
        let post = [{
            title: "World's Best Workbench",
            img: "http://via.placeholder.com/350x150",
            description: "small business website that I worked on",
            link:""
        },{
            title: "Songsmash",
            img: "http://via.placeholder.com/350x150",
            description: "Comprehensive lyric guessing game. Made using AngularJS, Musixmatch API, and a little jQuery",
            link:"www.songsmash.ga"
        },{
            title: "Permanent Beauty",
            img: "http://via.placeholder.com/350x150",
            description: "Beauty Website",
            link:""
        }];

        return{
            post
        }
    }

    angular
        .module("app")
        .factory("service", service);
}