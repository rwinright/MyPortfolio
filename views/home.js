"use strict"
{
    let home = {
        templateUrl: `/templates/homePage.html`,
        controller: function () {
            let vm = this;
        }
    }
    home.$inject = ['service'];
    angular
        .module("app")
        .component("home", home);
}