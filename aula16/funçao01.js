function parImp(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parImp(-11)
console.log(res)