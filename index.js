// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id and then:
// - Display an alert with the username and all the todos titles that belong to that user 


for (let user of users) {
    alert(`Here are our user name: ${user.name}, their id: ${user.id} and the city they live ${user.address.city}`)
}

let question = Number(prompt(`Tell me your id user you want to search?`))
let todoList = []

for (let todo of todos) {
    if (todo.userId === question){
       todoList.push(todo)
    }
}
console.log(`The todos are: ${todoList}`)





