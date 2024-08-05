// repeats some set of code while some condition is  true 

let  username = "";
while (username ==="" || username === null) {
    username = window.prompt(`Enter your Username`);

    
}
document.getElementById("myh").textContent = `hola ${username}`;
