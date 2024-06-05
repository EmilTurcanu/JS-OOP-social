class User {
    constructor(name, age, online) {
        this.name = name
        this.age = age
        this.online = online
    }
    render() {
        console.log(`
            [${this.name}] ${this.online ? `◉` : "◯"}
        `)
    }
}
class Message {
    constructor(content, status, from_user, to_user) {
        this.content = content
        this.status = status
        this.from_user = from_user
        this.to_user = to_user
    }
    render() {
        console.log(`
            ${this.content} ${this.status ? `✓✓` : `✓`}
        `)
    }
}
let user_1 = new User("Johny", 20, true)
let user_2 = new User("Marry", 21, false)
let user_3 = new User("Pete", 22, true)
let message_1 = new Message("Hi, how are you?", "sent", user_1, user_2)
