document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();
        let maxNum = document.getElementById('numeroMax').value;
        maxNum = parseInt(maxNum);

        let randomNum = Math.random() * maxNum;
        randomNum = Math.floor(randomNum + 1);

        document.getElementById('resultado-valor').innerText = randomNum;
        document.querySelector('.resultado').style.display = 'block';
    })
})