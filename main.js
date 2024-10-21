document.querySelector('button').addEventListener('click', getCatBreed)

function getCatBreed(){

    
    const userInput= document.querySelector('.catBreed').value
    
    let url = `https://api.api-ninjas.com/v1/cats?name=${userInput}`
   

    fetch(url,{
        headers: {'X-Api-Key': 'ucVcTbal/xblIx1vNSUiog==ld81DXmEhEp7qy5i'}, contentType: 'application/json'
    })
    //add conditonal
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data[0].image_link) 
       

        document.querySelector('img').src = data[0].image_link
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
