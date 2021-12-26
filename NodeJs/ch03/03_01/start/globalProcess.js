console.log(process.pid)
console.log(process.argv)
const [,,firstName, lastName] = process.argv;
console.log(`Hello ${firstName} ${lastName}`)


const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab(
    "--user",
)

console.log(`${greeting} ${user}`)

console.log(process.versions.node)