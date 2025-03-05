import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todo = []

const showMenu = () => {
    console.log("\n1: Add a task");
    console.log("2: View task");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput)

}

const handleInput = (option) => {
    if(option === "1"){
        rl.question("Enter a task: ", (task) => {
            todo.push(task)
            console.log("task added: ", task);
            showMenu()
        })
    }

    else if(option === "2"){
        console.log("\n Your todo Lists");
        todo.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        })
        showMenu()
    }

    else if(option === "3" ){
        console.log("Good Bye !!");
        rl.close()
    }

    else{
        console.log("Invalid options! Please try again ");
        showMenu()
    }
}

showMenu()