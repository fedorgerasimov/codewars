//Simple, remove the spaces from the string, 
//then return the resultant string.
function noSpace(x){
    let re = /\s/g;
    return x.replace(re, '');
}

function noSpace(x){
    return x.split(' ').join('');
}

