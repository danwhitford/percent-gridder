document.getElementById('gen').addEventListener('click', function() {
  const max = document.getElementById('max').value;
  const percentUnit = max / 100;

  // Build a table element
  const table = document.createElement('table');
  table.setAttribute('border', '1');

  // Header with empty cell then 0-9
  const header = document.createElement('tr');
  header.appendChild(document.createElement('th'));
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('th');
    cell.textContent = i;
    header.appendChild(cell);
  }
  table.appendChild(header);

  // Create a row for the table with percents
  var row = document.createElement('tr');
  // Header for the side
  const sideHeader = document.createElement('th');
  sideHeader.textContent = '0';
  row.appendChild(sideHeader);

  for (let i = 0; i <= 130; i++) {
    if (i > 0 && i % 10 === 0) {
      table.appendChild(row);
      row = document.createElement('tr');
      const header = document.createElement('th');
      header.textContent = i;
      row.appendChild(header);
    }    


    const cell = document.createElement('td');
    // Calc percent and convert to 2 decimal places
    const pct = (i * percentUnit).toFixed(2);
    cell.textContent = pct;
    row.appendChild(cell);
    // New row if 10 cells
  
  }
  
  // Replace grid with new table
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  grid.appendChild(table);
});
