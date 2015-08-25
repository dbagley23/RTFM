angular.module('rtfmApp').service('userService', function(){

    //Todo: don't hardcode this
    var user = {};

    this.getLoggedInUser = function(){
        return user;
    }

});