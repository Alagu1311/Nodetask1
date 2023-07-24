const fs = require("fs")
const as = require ("as")
console.log("working Good")
console.log(process.argv)



fs.readFile("./samplefile", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


const content = "Hey There ur looking smart"
fs.writeFile("./Newfile.txt", content, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("sucessfully Imported")
    }
})
const content2="second content is updated"

fs.appendFile("./Newfile.txt", content2, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("file upload sucessfully")
    }
})

fs.unlink("Newfile.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("file delte sucessfully")
    }
})

let time = Date.now(); console.log("Time", time)
const date = new Date(); console.log("Date----", date)
console.log("Today----", date.getDate())
console.log("Month----", date.getMonth())
console.log("Year----", date.getFullYear())
console.log("UTCString----", date.toUTCString().slice(0, 17))