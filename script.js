const getDataBtn = document.getElementById('get-data-btn');

getDataBtn.onclick = function(event) {
  console.log('get data button was clicked!');

  // make a GET request to Swapi.co
  axios.get('https://swapi.co/api/people/2')
  .then(function(response) {
    const characterData = response.data; // { name: "Luke Skywalker", mass: 77 }
    console.log('characterData: ', characterData);    

    clearCurrentTable();

    const headerRow = createTableHeader(characterData);

    // create a new data row
    const dataRow = document.createElement('tr');

    const properties = Object.keys(characterData); // [ "name", "mass" ];

    properties.forEach(function(prop) {// "name"
      const dataCell = document.createElement('td');
      const dataValue = characterData[prop]; // characterData.name
      const dataCellText = document.createTextNode(dataValue); // correct value?
      dataCell.appendChild(dataCellText);
      dataRow.appendChild(dataCell);      
    });

    const characterTable = document.getElementById('character-table');

    characterTable.appendChild(headerRow);
    characterTable.appendChild(dataRow);
  });  
};

function clearCurrentTable() {
  const characterTable = document.getElementById('character-table');
  
  while(characterTable.firstChild) {
    characterTable.removeChild(characterTable.firstChild);
  }
}

function createTableHeader(characterData) {
  const headerRow = document.createElement('tr');

  const properties = Object.keys(characterData); // [ "name", "mass", "height" ..etc ]

  properties.forEach(propertyName => {
    const headerCell = document.createElement('th');
    const headerCellText = document.createTextNode(propertyName);
    headerCell.appendChild(headerCellText);
    headerRow.appendChild(headerCell);
  });

  return headerRow;
}