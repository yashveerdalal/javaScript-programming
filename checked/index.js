// .checked = property that determines the checked state of an html 
// checkbox or a radio button element 

const flexCheckChecked = document.getElementById("flexCheckChecked");
const flexRadioDefault1 = document.getElementById("flexRadioDefault1");
const flexRadioDefault2 =document.getElementById("flexRadioDefault2");
const flexRadioDefault3 =document.getElementById("flexRadioDefault3");
const submit =document.getElementById("submit");
const myp =document.getElementById("myp");
const myp2 =document.getElementById("myp2");

submit.onclick = function(){
    if (flexCheckChecked.checked) {
        myp.textContent =` Payment in process....`;

        if (flexRadioDefault1.checked) {
            myp2.textContent = `You are Paying with visa `;
        }
        else if(flexRadioDefault2.checked){
            myp2.textContent = `You are Paying with Master Card `;
        }
        else if(flexRadioDefault3.checked){
            myp2.textContent = `You are Paying with paypal  `;
        }
        
    }
    else{
        myp.textContent = `Payment Can't be done `;
    }
    
    


}