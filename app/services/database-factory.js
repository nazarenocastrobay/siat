angular.module('app.e-siat').factory('databaseFactory', databaseFactory);

function databaseFactory ($http){ 

    var database = {};


    //All GET functions
    database.getGeneralData = function(id, type){
        var data = { id: id, type: type};
        return $http.post('api/getGeneralData.php', data);
    }
   

    /////////ALL SET FUNCTIONS
    database.editEntry = function(entry){
        return $http.post('api/updateEntry.php', entry);
    }    


	return database;
};