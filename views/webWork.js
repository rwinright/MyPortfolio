"use strict"
{
    let webwork = {
        templateUrl: `/templates/webwork.html`,
        controller: function (service) {
            let vm = this;
            vm.post = service.post;
        }
    }
    webwork.$inject = ['service'];
    angular
        .module("app")
        .component("webwork", webwork);
}