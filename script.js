function create(){
    let div=document.createElement("div");
    div.setAttribute('class','bg-dark container-fluid');
    document.body.append(div);
    let inp=document.createElement('input');
    inp.setAttribute('type','text');
    inp.setAttribute('class','search');
    div.append(inp);
    let btn=document.createElement('button');
    btn.setAttribute('type','submit');
    btn.setAttribute('class','searchbtn');
    btn.setAttribute('onclick','search(document.querySelector(".search").value)');
    btn.innerText="search";
    div.append(btn);
}
async function search(name){
    try{
        let del=document.querySelector(".table");
        del.remove();
    }
    catch{
        console.log("catch");
    }
    try
    {let prom=await fetch(`https://api.nationalize.io?name=${name}`);
    let obj=await prom.json();
    // if(obj["country"][0]["country_id"]==undefined){
    //     return;
    // }
    let table=document.createElement('table');
    table.setAttribute('class','table table-md-3 table-sm-3 table-3');
    table.innerHTML=`<thead class="thead-dark">
    <tr>
      <th >No.</th>
      <th >Country Code</th>
      <th >Probability value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:grey">
        <td>1</td>
        <td>${obj["country"][0]["country_id"]}</td>
        <td>${obj["country"][0]["probability"]}</td>
    </tr>
    <tr style="background-color:#80808052">
        <td>2</td>
        <td>${obj["country"][1]["country_id"]}</td>
        <td>${obj["country"][1]["probability"]}</td>
    </tr>
  </tbody>
  `
  document.body.append(table);
    }
    catch(err){
        alert("Error.......");
    }
}
