function fillDogBreed(){
  const BREED_URL='https://dog.ceo/api/breeds/list/all'
  const Breed=document.querySelector(".breed")

  if(Breed.innerText==''){
    const promise = fetch(BREED_URL);
    promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const breedarr=Object.keys(processedResponse.message) // getting keys from response object message
      let option=''
      breedarr.forEach((item)=>{
        option+=`<option value="${item}">${item}</option>`
      })
      Breed.innerHTML=option
      console.log(processedResponse);
    });
  }  
}

function addNewImg(){
  const breed=document.querySelector(".breed")
  const breedName=breed.options[ breed.selectedIndex ].value // selecting curent option from select tag
  const DOG_URL = `https://dog.ceo/api/breed/${breedName}/images/random`;

  const doggos = document.querySelector(".doggos");
  const img = document.createElement('img')
  doggos.appendChild(img)
  img.src="./download.gif" // default setting loading gif as src

  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      img.src=processedResponse.message // loading gif overridden by current dog picture
      img.alt="just a doggo"
    });
}


fillDogBreed() // filling the select tag with options

const addImg=document.querySelector(".addImg")
addImg.addEventListener('click', ()=>{
  addNewImg()
})