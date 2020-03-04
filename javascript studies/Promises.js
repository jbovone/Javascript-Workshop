
function delay() {
    return new Promise(resolve => {
        setTimeout(() => { resolve() },
            2000)
    })
}

let count = 0

async function printer() {

    for (i = 0; i < 10; i++) {
        await delay()
        count = i
        console.log(count)
    }
}
