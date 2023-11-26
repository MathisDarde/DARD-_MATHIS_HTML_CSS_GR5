let availableKeywords = [
    '76ers stories',
    'Antenne Bulls',
    'Forgotten Stars',
    'NBA History',
    '76ers',
    'Bulls',
    'Marques Johnson',
    'Histoire des 76ers',
    'The Process',
    'Playoffs 2001',
    'Trade de Wilt Chamberlain',
    'Création des Bulls',
    'Création des 76ers',
]; /*on crée un tableau avec les suggestions de la barre de recherche*/

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
    }

    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = ''
}