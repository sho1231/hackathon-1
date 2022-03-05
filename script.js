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
    catch(err){
        console.log("catch");
    }
    try{
        let del2=document.querySelector(".alert");
        del2.remove();
    }
    catch(err){
        console.log("catch2");
    }
    try
    {
        let prom=await fetch(`https://api.nationalize.io?name=${name}`);
        let obj=await prom.json();
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
        let div=document.createElement("div");
        div.setAttribute('class','alert alert-danger alert-dismissible fade show');
        div.setAttribute('role','alert');
        div.innerHTML=`<strong>Error occured!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        document.body.append(div);
        document.querySelector(".alert").alert('close');
    }
}
