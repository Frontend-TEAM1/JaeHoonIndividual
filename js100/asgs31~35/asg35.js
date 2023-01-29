
function one(n){
    function two(num){

        if(n===2){
            return num*num;

        }else if(n===3){
            return num*num*num;

        }else if(n===4){
            return num*num*num*num;
        }

    }
    
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
