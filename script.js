const getDataBtn = document.getElementById('get-data-btn');

getDataBtn.onclick = function(event) {
  console.log('get data button was clicked!');

  // make a GET request to Swapi.co
  axios.get('https://swapi.co/api/people/2')
  .then(function(response) {
    const characterData = response.data;
    console.log('characterData: ', characterData);    

    clearCurrentTable();

    // create a new header
    const headerRow = document.createElement('tr');

    const properties = Object.keys(characterData) // [ "name", "mass", "height" ..etc ]

    properties.forEach(propertyName => {
      const headerCell = document.createElement('th');
      const headerCellText = document.createTextNode(propertyName);
      headerCell.appendChild(headerCellText);
      headerRow.appendChild(headerCell);
    });

    // create a new data row
    const dataRow = document.createElement('tr');

    properties.forEach(propertyName => { // "name"
      const dataCell = document.createElement('td');
      const dataValue = characterData[propertyName]; // characterData.name
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