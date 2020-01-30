
let users = []
function User(name, mail) {
    this.name = name
    this.mail = mail
    this.online = false
    this.save = users.push(this)
}

User.prototype.login = function () {
    this.online = true
    console.log(this.name + ' has log in')
}


User.prototype.logout = function () {
    this.online = false
    console.log(this.name + ' has log out')
}

function Admin(...args) {
    User.apply(this, args)

}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.name != u.name
    })
}


let users = []

class User {
    constructor(name, mail) {

        this.name = name
        this.mail = mail
        this.online = false
        this.save = users.push(this)
    }
    login() {
        this.online = true
        console.log(this.name + ' has log in')
        return this
    }
    logout() {
        this.online = false
        console.log(this.name + ' has log out')
        return this
    }
}

class Admin extends User {
    deleteUser(u) {
        users = users.filter(user => {
            return user.name != u.name
        })
    }
}

let fabricio = new Admin('fabri', 'fabricio@RArgentinaPrograma.com')
let julian = new User('julian', 'julian@asdf.com')
fabricio.login()
fabricio.logout()
//console.log(users)
console.log(fabricio)
console.log(julian)
fabricio.deleteUser(users[1])
console.log(users)
