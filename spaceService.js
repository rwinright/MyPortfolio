'use strict'
{
    function spaceService($http) {
        const APIkey = 'yV8EUxJ9H4eF46Bt7uJfoQq7aistP9Byh049KoqR';

        function getSpacePicture() {
            let url = "https://api.nasa.gov/planetary/apod?api_key=yV8EUxJ9H4eF46Bt7uJfoQq7aistP9Byh049KoqR"
            return $http.get(url).then(function (response) {
                console.log(response);

            });
            return {
                getSpacePicture
            }
        }
        angular
            .module("app")
            .factory("spaceService", spaceService);
    }
}
