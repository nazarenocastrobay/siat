angular.module('app.e-siat').factory('linkFactory', linkFactory);

function linkFactory (){ 

    var link = {};

    // get/set del nodo seleccionado en region/by-sector
    link.setSelectedNode = function(selectedNode, identifier){
        link.selectedNode = selectedNode;
        localStorage.setItem('selectedNode-'+identifier,JSON.stringify(selectedNode));
    };
    link.getSelectedNode = function(identifier){
    	return link.selectedNode ? link.selectedNode : JSON.parse(localStorage.getItem('selectedNode-'+identifier));
    };

	return link;
};