module.exports.getCustomerSync = function(id){
    console.log("Loading info from mongodb");
    return {id: id, points: 10};
}