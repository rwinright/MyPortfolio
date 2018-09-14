"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/", {
          template: "<home></home>"
        })
        .when("/about", {
          template: "<about></about>"
        })
        .when("/contact", {
          template: "<contact></contact>"
        })
        .when("/work", {
          template: "<work></work>",
        })
        .when("/work/webwork", {
          template: "<webwork></webwork>",
        })
        .when("/work/musicwork", {
          template: "<musicWork></musicWork>",
        })
        .otherwise({ redirectTo: "/" });
    });
}