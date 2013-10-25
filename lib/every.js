var map = require('lie-map');
var cast = require('lie-cast');
function every(array,func){
    return map(array,function(value){
        return cast(value).then(function(castValue){
            return func(castValue);
        }).then(function(bool){
            if(!bool){
                throw 'false';
            }
            return;
        });
    }).then(function(){
        return true;
    },function(){
        return false;
    });
}
module.exports = every;