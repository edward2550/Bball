new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [
        { name: 'John', email: 'john@example.com' },
        { name: 'Mark', email: 'mark@gmail.com' },
        { name: 'Eoin', email: 'eo3n@yahoo.com' },
        { name: 'Nisen', email: 'nis900@gmail.com' }
      ]
  }).render(document.getElementById("wrapper"));