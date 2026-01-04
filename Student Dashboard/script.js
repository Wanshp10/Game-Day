const add = document.querySelector(".add")
const sort = document.querySelector(".sort")
const marks = document.querySelector("#marks")
const name = document.querySelector("#name")
const tbody = document.querySelector("#stdEntries")

let students = []

async function checkLocalStorage() {
    let fetchStudent = JSON.parse(localStorage.getItem("students"))
    console.log(fetchStudent);
    for(let std of fetchStudent){
        students.push(std)
    }
    console.log(students);

    students.forEach((std) => {
        let tr = document.createElement("tr")
        let nametd = document.createElement("td")
        let markstd = document.createElement("td")

        nametd.textContent = std.name
        markstd.textContent = std.marks

        tr.appendChild(nametd)
        tr.appendChild(markstd)

        tbody.appendChild(tr)
    })
}

async function main() {
    checkLocalStorage()

    add.addEventListener('click', async() => {
        let nameValue = name.value
        let marksValue = marks.value
        students.push({
            name: nameValue,
            marks: marksValue
        })
        console.log(students);
        
        localStorage.setItem('students', JSON.stringify(students))

        let tr = document.createElement("tr")
        let nametd = document.createElement("td")
        let markstd = document.createElement("td")

        nametd.textContent = nameValue
        markstd.textContent = marksValue

        tr.appendChild(nametd)
        tr.appendChild(markstd)

        tbody.appendChild(tr)

        name.value = ""
        marks.value = ""
    })

    sort.addEventListener('click', async () => {
        tbody.innerHTML = ""

        const sortedArray = students.toSorted((b, a) => a.marks - b.marks)
        console.log(sortedArray);

        let tr = document.createElement("tr")
        let nametd = document.createElement("td")
        let markstd = document.createElement("td")

        nametd.textContent = "STUDENTS"
        markstd.textContent = "MARKS"

        tr.appendChild(nametd)
        tr.appendChild(markstd)

        tbody.appendChild(tr)

        sortedArray.forEach((std) => {
            let tr = document.createElement("tr")
            let nametd = document.createElement("td")
            let markstd = document.createElement("td")

            nametd.textContent = std.name
            markstd.textContent = std.marks

            tr.appendChild(nametd)
            tr.appendChild(markstd)

            tbody.appendChild(tr)
        })
        
    })
}

main()

