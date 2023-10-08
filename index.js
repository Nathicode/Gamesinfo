document.querySelector('span').onclick = async function(){
  document.querySelector('.car').innerHTML = '<center><img src="Ellipsis-1s-200px (1).svg"></img></center>';
   try {
    let ran = Math.floor(Math.random() * 100);
    let ranone = Math.floor(Math.random() * 100);
    let rantwo = Math.floor(Math.random() * 100);
    let ranthree = Math.floor(Math.random() * 100);
    let ranfour = Math.floor(Math.random() * 100);
    let ranfive = Math.floor(Math.random() * 100);
    let val = document.querySelector('input').value;
    let link = `https://www.cheapshark.com/api/1.0/games?title=${val}`
    let data = await fetch(link);
    let res = await data.json();
  console.log(res.length)
  console.log(ran);
  console.log(link);
  let card = document.createElement('div');
            card.id =  "card";
            console.log(card)
            let div;
           
  
        for(i = 0; i < res.length; i++){
          let div = `<div class="cards"><img src="${res[i].thumb}" alt="" srcset="" id="gameimg"><p>Title</p><p id="title">${res[i].external}</p><p>Price</p><p id="price">${res[i].cheapest}$</p></div>`;
          card.innerHTML += div;  
        }
       
        document.querySelector('.car').innerHTML =  card.innerHTML;
   } catch (error) {
    document.querySelector('.car').innerHTML = '<div class="cards"><p>Error Occured</p></div>'
   }
 
   // console.log(res[i].gameID)
  
}

