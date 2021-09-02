// This Funcion is for Load Result or Fetch (Code Start)

const loadTheSearchResult = () =>{
    const inputFieldText = document.getElementById("input-feild");
    const inputFieldValu = inputFieldText.value;
    inputFieldText.value = "";

    const url = ` https://openlibrary.org/search.json?q=${inputFieldValu}`;
    const displayResult = () =>{
    fetch(url)
    .then(res => res.json() )
    .then(data => displayYourData(data.docs));
    }
    const showRoundNumberResult = () =>{
    fetch(url)
    .then(res => res.json() )
    .then(data => showFoundREsult(data));
    }
    showRoundNumberResult();
    displayResult();
}
// This Funcion is for Load Result or Fetch (Code End)


// This Function To show the Result Found or No Result Found (code Start)
const showFoundREsult = data =>{
    const showFoundNumber = document.getElementById('show-found-result');
    showFoundNumber.style.display = 'block';
    showFoundNumber.textContent = '';
    const div = document.createElement('div');
   
    div.classList.add('number-cound-show');

    // Result Found Authentication Section Start 
    if(data.numFound === 0){
        div.innerHTML = `<h2 style="color:#F70000"> No result Found</h2>`;
        showFoundNumber.appendChild(div);
    }
    else{
        div.innerHTML = `<h2>Found Result : ${data.numFound}</h2>`;
        showFoundNumber.appendChild(div);
    }

    // Result Found Authentication Section End
}
// This Function To show the Result Found or No Result Found (code End)



//  This Function is For Display the Result   ( Func Code Start)
const displayYourData = docs =>{
    const showSearchResut = document.getElementById('show-search-results');
    showSearchResut.textContent = "";
    docs.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('over-flow-hidden');
        div.innerHTML = `
        <div class="card shadow">
                <img   src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fs-3 fw-bold">${element.title}</h5>
                    <p class="card-text"> <span class="fw-bold"> Author Name :</span> ${element.author_name}</p>
                    <p class="card-text"> <span class=""> First Publish Year :</span> ${element.first_publish_year}</p>
                    <p class="card-text"> <span class=""> Publisher :</span> ${element.publisher}</p>
                    <p class="card-text"> <span class=""> Publish Date :</span> ${element.publish_date}</p>
                </div
        </div
        `;
         showSearchResut.appendChild(div);
    });    
}
//  This Function is For Display the Result   (Func Code End)