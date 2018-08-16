"use strict"
{
    let work = {
        templateUrl: `/templates/workPage.html`,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("work", work);
}