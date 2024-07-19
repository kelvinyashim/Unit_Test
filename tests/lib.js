const db = require('./db');


//test numbers
module.exports.absolute = function(number){
    return(number>=0) ? number : -number;

}

//test string
module.exports.greet = function(text){
    return "Welcome" + text;
}

//test array
module.exports.currencies = function(){
    return ['USD', 'NIG', 'KIK'];
}
//test objects
module.exports.object = function(id){
    return {id: id, price:10};
}


//test exceptions
module.exports.registerUser = function(username){
    if(!username) throw new Error("Username is required");
    return {id: new Date().getTime(), name: username}

}


module.exports.applyDiscount = function(order){
    const customer = db.getCustomerSync(order.customerId);
    
    if(customer.points > 10)
        order.totalPoints *= 0.9;
    
}

