var jsonObj = {};
var jsonViewer = new JSONViewer();

document.querySelector("#json").appendChild(jsonViewer.getContainer());

listOperations = ["GET", "POST", "PATCH", "DELETE"]
,paramEntity=""
,paramSubentity=""
,paramId=""
,paramMethod=""
,paramUser=""
,paramOptions=""
,paramVersion="";


const relations = "@relations@";

// load file json
let importFile = false;

// DON'T REMOVE !!!!
// @start@

// message dialog
var notify =  function (titleMess, bodyMess) {
  titre.innerHTML = titleMess;
  corps.innerHTML = bodyMess;
  message.click();
};

// btn Go or Submit 
var goOrSubmit =  function () {
  columnsInfos.style.display = "none";
  if (importFile == true) {
    go.style.display = "none";
    columnsInfos.style.display = "inline-block";
    
    const textValue=datas.value;

if (Number(nb.value) > 0 || textValue.match("columns") != null) { 
      submit.style.display = "inline-block";
      
    } else {
      submit.style.display = "none";
    }
  } else {
    go.style.display = "inline-block";
    submit.style.display = "none";
  }
};

// show spinner
var wait = function (on) {
  spinner.style.display = on == true ? "inline-block" : "none";
};

// populate Select
var populateSelect =  function (obj, list, defValue, addNone) {
  obj.options.length = 0;
  if (list) {
    if (addNone) list.unshift("none");
    list.forEach((element) => {
      obj.add(new Option(element));
    });
    
    obj.selectedIndex = list.indexOf(defValue);
  }
};


submit.onclick = () => {
  wait(true);
};

/**
 * 
 * @param {*} input csv Array Input
 * @param {*} separator seprator
 */      

buildTableWithCsv = (input, separator) => {
  json.style.display = "none";
  var tableArea = document.getElementById("two");
  var allRows = input.split(/\r?\n|\r/).filter((row) => row !== "");

  var _table = document.createElement("table");
  _table.setAttribute("id", "csv");

  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    _tr = document.createElement(singleRow === 0 ? "thead" : "tr"); 
    const rowCells = allRows[singleRow].split(separator);
    for(var rowCell = 0; rowCell < rowCells.length; rowCell++){
      const _td = document.createElement(singleRow === 0 ? "th" : "td");
      const text = document.createTextNode(rowCells[rowCell].replace(/\"/g, ""));
      _td.appendChild(text);
      _tr.appendChild(_td);
    }
    _table.appendChild(_tr);
  }
  
  wait(false);
  const old = document.getElementById("csv");
  if (old) 
  {  
    tableArea.replaceChild(_table, old);
  }
  else 
  {
    tableArea.appendChild(_table);
  }
};

go.onclick = async (e) => {
  e.preventDefault();
  wait(true);
  
  const index = Number(nb.value);
  
  let url =  document.URL.split("/Query")[0];
  url =  `${url}${url[url.length -1 ] == "/" ? "" : "/"}${paramVersion}`;
  
  let query = options.value;
  
  
  if (query != "" && query[0] != "?") {
    query = "?" + query;
  }
  
  if (index > 0) {
    url = url + "/" + entity.value + "(" + index + ")";
  } else {
    url = url + "/" + entity.value;
  }
  
  if (subentity.value != "none") {
    url = url + "/" + subentity.value + query;
  } else {
    url = url + query;
  }
  
  if (method.value === "GET") {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      var value = await response.text();
      if (query.includes("resultFormat=CSV")) {
        buildTableWithCsv(value,";");
      } else {
        jsonObj = JSON.parse(value);
        jsonViewer.showJSON(jsonObj);
        json.style.display = "block";
      }
      
    }
    catch (err) {
      notify("Error", err.message);
    }
  } else if (method.value == "POST" || method.value == "PATCH") {
    if (entity.value === "createDB") {
      let response = await fetch(document.URL.split("/Query")[0]+`${paramVersion}/createDB`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: datas.value,
      });
      try {
        const value = await response.text();
        if (response.status == 401) {
          window.location.href = "/login";
        }
        jsonObj = JSON.parse(value);
        jsonViewer.showJSON(jsonObj);
      }
      catch (err) {
        fetch(document.URL.split("/Query")[0]+"/error", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: datas.value,
        });
      }
    } else {
      let response = await fetch(url, {
        method: method.value,
        headers: {
          "Content-Type": "application/json",
        },
        body: datas.value,
      });
      try {
        const value = await response.text();
        if (response.status == 401) {
          // window.location.replace(value);
          window.location.href = "/login";
        }
        jsonObj = JSON.parse(value);
        jsonViewer.showJSON(jsonObj);
      }
      catch (err) {
        // window.location.href = "/error";
        fetch(document.URL.split("/Query")[0]+"/error", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: datas.value,
        });
      }
      // alert(err);
    }
  } else if (method.value === "DELETE" && index && index > 0) {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    try {
      if (response.status == 204) 
      {
        jsonObj = {"Delete" : "Ok"};
      } else {
        jsonObj = {"Delete" : "Error"};
      }
      jsonViewer.showJSON(jsonObj);
    }
    
    catch (err) {
      window.location.href = "/error";
    }
  }
};

preview.addEventListener("click", function () {
  try {
    const value = datas.value;
    jsonObj = JSON.parse(value);
  }
  catch (err) {
    notify("Error", err.message);
  }
  jsonViewer.showJSON(jsonObj);
});

logout.onclick = () => {
  window.location.href = "/logout";
};

info.onclick = () => {
  window.location.href = "/status";
};

doc.onclick = () => {
  window.location.href = "http://sensorthings.geosas.fr/apidoc/";
};

git.onclick = () => {
  window.location.href = "https://github.com/Mario-35/api-sensorthing";
};

columnsInfos.onclick = () => { 
  const value = `{
    "header": true,
    "nan": true,
    "columns": {
      "1": "1",
      "2": "2",
      "3": "6"
    }
  }`;
  notify("multi columns", "{<br> &nbsp;&nbsp;\"header\":true<br>, &nbsp;&nbsp;\"nan\":true<br>, &nbsp;&nbsp;\"columns\": {<br> &nbsp;&nbsp;&nbsp;&nbsp;\"column Number\": \"Datastream ID\",<br> &nbsp;&nbsp;&nbsp;&nbsp;\"1\": \"1\",<br> &nbsp;&nbsp;&nbsp;&nbsp;\"2\": \"2\",<br> &nbsp;&nbsp;&nbsp;&nbsp;\"3\": \"6\"<br> &nbsp;}<br> }<br>");
  jsonObj = JSON.parse(value);
  jsonViewer.showJSON(jsonObj);
};


nb.addEventListener("change", () => {
  goOrSubmit();
});

entity.addEventListener("change", () => {
  subentity.options.length = 0;
  if (["CreateObservations", "createDB"].includes(entity.value)) 
  method.value = "POST";
  else
  populateSelect(subentity, relations[entity.value], relations[tempEntity].includes(paramSubentity) ? paramSubentity : "none", true);
  
});

fileone.addEventListener( "change", ( e ) => 	{
  var fileName = "";
  try {
    if (this.files && this.files.length > 1 )
    fileName = ( this.getAttribute( "data-multiple-caption" ) || "" ).replace( "{count}", this.files.length );
    else
    fileName = e.target.value.split( "\\" ).pop();
    
    if( fileName ) {
      fileonelabel.querySelector( "span" ).innerHTML = fileName;
      method.value = "POST";
      entity.value = "Datastreams";
      subentity.value = "Observations";
      importFile = true;
    }
    else {
      fileonelabel.innerHTML = labelVal;
    }
  } catch (err) {
    notify("Error", err.message);
  }
  goOrSubmit();
});






var init =  function () {
  new SplitterBar(container, first, two);
  
  wait(false);
  // hide params
  history.replaceState({}, null, "/Query");
  
  source.style.display = "none";
  source.value = "query";
  
  tempEntity = Object.keys(relations).includes(paramEntity) ? paramEntity : "Things";
  
  populateSelect(method, paramUser == "true" ? listOperations : ["GET"] ,paramUser == "true" ?  listOperations.includes(paramMethod.toUpperCase()) ? paramMethod.toUpperCase() : "GET" : "GET");
  populateSelect(entity, Object.keys(relations), tempEntity);
  populateSelect(subentity, relations[entity.value], relations[tempEntity].includes(paramSubentity) ? paramSubentity : "none", true);
  
  nb.value = paramId;
  options.value = paramOptions;
  options.value = options.value.replace(/\$/g, "&$");
  if (options.value[0] == "&") options.value = options.value.substring(1);
  goOrSubmit();
  const visible = paramUser == "true" ? "inline-block" : "none";
  logout.style.display = visible;
  fileone.style.display = visible;
  fileonelabel.style.display = visible;

};

init();
