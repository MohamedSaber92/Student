function changeSource(value) {
  localStorage.setItem('dataSource', value);
  location.reload();
}

function getDataSource() {
  return localStorage.getItem('dataSource') || DATA_SOURCE;
}

async function searchResult() {
  const id = document.getElementById("studentId").value;
  const source = getDataSource();
  let data;

  try {
    if (source === 'firebase') {
      data = await getStudentData(id);
    } else if (source === 'googleSheets') {
      data = await getStudentData(id);
    } else if (source === 'mysql') {
      data = await getStudentData(id);
    }
  } catch (error) {
    alert(error.message);
    return;
  }

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("name").textContent = data.name;
  const gradesTable = document.getElementById("gradesTable");
  gradesTable.innerHTML = "";
  let total = 0;

  for (let subject in data.grades) {
    let grade = data.grades[subject];
    total += grade;
    gradesTable.innerHTML += `<tr><td>${subject}</td><td>${grade}</td></tr>`;
  }

  document.getElementById("total").textContent = total;
}
