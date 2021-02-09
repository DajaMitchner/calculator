function stringMath(stringnum){
    for (let i = 0; i < stringnum.length; i++){
    if (stringnum[i] === '+'){
    let add = stringnum.split('+')
    return parseInt(add[0]) + parseInt(add[1])
} 
else if (stringnum[i] === '-'){
    let sub = stringnum.split('-')
    return parseInt(sub[0]) - parseInt(sub[1])
    }
else if (stringnum[i] === '/'){
    let div = stringnum.split('/')
    return parseInt(div[0]) / parseInt(div[1])
}
else if (stringnum[i] === '*'){
    let mult = stringnum.split('*')
    return parseInt(mult[0]) * parseInt(mult[1])
}
}
}
console.log(stringMath('1+1'))
console.log(stringMath('4-1'))
console.log(stringMath('2/1'))
console.log(stringMath('4*11'))