// This Funcion is for Load Result or Fetch (Code Start)

const loadTheSearchResult = () =>{
    spinnerToggle('block');
    spinnerDivToggle('none');
    const showSearchResut = document.getElementById('show-search-results');
    showSearchResut.textContent = "";
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

// Spinner Toggle Section   Start(code)
const spinnerToggle = displayStyle =>{
    document.getElementById('spinner-toggle').style.display=displayStyle;
}
const spinnerDivToggle = displayStyle =>{
    document.getElementById('show-found-result').style.display=displayStyle;
}
// Spinner Toggle Section   End(code)


// This Function To show the Result Found or No Result Found (code Start)
const showFoundREsult = data =>{
    const showFoundNumber = document.getElementById('show-found-result');
    spinnerDivToggle('block');
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
    spinnerDivToggle('block');
    showFoundNumber.style.display = 'block'
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
        // url=`https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`
       var url= element.cover_i?`https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png`;


        let pubAut = element.author_name? element.author_name?.[0] : `Not Found`;
        var pubFirst = element.first_publish_year ? element.first_publish_year?.[0] : `Not Found`;
       
        // <img src="${api.img?api.img:'https://img.jpg'}"></img>
        div.innerHTML = `
        <div class="card shadow">
                <img src="${url}"   class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title fs-3 fw-bold">${element.title}</h5>
                    <p class="card-text"> <span class="fw-bold"> Author Name :</span> ${pubAut}</p>
                    <p class="card-text"> <span class=""> First Publish Year :</span> ${pubFirst}</p>
                    <p class="card-text"> <span class=""> Publisher :</span> ${element.publisher?.[0]}</p>
                    <p class="card-text"> <span class=""> Publish Date :</span> ${element.publish_date?.[1]}</p>
                </div
        </div
        `;
         showSearchResut.appendChild(div);
    });   
    spinnerToggle('none'); 
}
//  This Function is For Display the Result   (Func Code End)