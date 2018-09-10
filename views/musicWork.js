"use strict"
{
    let musicwork = {
        templateUrl: `/templates/musicwork.html`,
        controller: function (service) {
            let vm = this;
            vm.musicPost = service.musicPost;
            console.log(service.musicPost);
        }
    }
    musicwork.$inject = ['service'];
    angular
        .module("app")
        .component("musicwork", musicwork);
}