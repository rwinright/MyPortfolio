"use strict"
{
    let contact = {
        templateUrl: `/templates/contact.html`,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("contact", contact);
}