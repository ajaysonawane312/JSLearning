const isPrimeButton = document.querySelector("#isPrimeButton");
isPrimeButton.addEventListener('click',()=>{
    const value = prompt('Plz Enter Number',0)
     function prime(value){
    for(let i = 2; i < value; i++)
    {
    if(value % i == 0){
    return `${value} : is Not Prime Number`;
    }
    }
    return `${value} : is Prime Number`;
}
let result = prime(value);
console.log(result);
})
const hobbies = document.querySelector("#hobbies");
hobbies.addEventListener('click', ()=>{
    const inputValue = prompt('Plz Enter Hobbies','Hobbies');
    function hobbiesName(inputValue){
        return inputValue;
    }
    let result = hobbiesName(inputValue);
    console.log(result);
})