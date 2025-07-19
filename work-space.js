import promptSync from "prompt-sync";
import clear from "clear-screen";

 const prompt = promptSync({ sigint: true });

class Field {
    constructor(field = [[]]){
        console.log(field)
    }
}

const fieldArray  = new Field([
["*","░","░"],
["O","░","░"],
["░","O","^"],
]);


while(true){ 
    
const moveCommand = prompt('Enter your command');
console.log(`Your command is ${moveCommand}`);
if (moveCommand === "quit"){
break;
}
}










//1.กำหนด constructor สนาม สร้างสนาม