"use strict"
{
    let about = {
        templateUrl: `/templates/about.html`,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("about", about);
}