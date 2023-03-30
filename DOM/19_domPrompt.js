const hobbies = document.querySelector("#hobbies");
hobbies.addEventListener('click', ()=>{
    const inputValue = prompt('Plz Enter Hobbies','Hobbies');
    function hobbiesName(inputValue){
        return inputValue;
    }
    let result = hobbiesName(inputValue);
    console.log(result);
})