angular.module('app.e-siat').service('common', common);

function common (){ 

        this.getNodeById = function(id, arrayTree) {
            for (var i = 0; i < arrayTree.length; i++) {
                if (arrayTree[i].nodeID == id) {
                    return arrayTree[i];
                }
            }
            return -1; //Si no lo encuentra, retorna '-1'
        }   
};