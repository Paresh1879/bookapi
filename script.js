

var num = Math.floor((Math.random() * 1000) + 1);
var url=`https://api-thirukkural.vercel.app/api?num=${num}`
async function getThirukuralApi(){
    let data= await fetch(url);
  let response=await data.json()
   return response;
}

async function getApi(){
  const data= await getThirukuralApi();
   demo.innerHTML=JSON.stringify(`Number:`+data.number+`<br>`+
    `Tamil_expression:`+data.tam_exp+
    +`<br>`+

     `English_expression:`+data.eng_exp);
}

 getApi();


