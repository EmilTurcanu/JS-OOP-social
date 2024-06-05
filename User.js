class User {
    static all = []
    static findByName (name) {
        return User.all.find(user => user.name === name)
    }
    static findByAge(minAge, maxAge) {
        if (minAge === null) {
            return User.all.find(user => maxAge >= user.age)
        }
        if (maxAge === null) {
            return User.all.find(user => user.age >= minAge)
        }
        return User.all.find(user => maxAge >= user.age && user.age >= minAge)
    }
    constructor(name, age, online) {
        this.name = name
        this.age = age
        this. avatar = avatar
        this.online = online
        this.friends = []
        this.receivedMessages = []
        this.sentMessages = []
        User.all.push(this)
    }
    findFriendByName(name) {
        return this.friends.find(user => user.name === name)
    }
    addFriend (user) {
        if (user === this) {
            alert("You can't include you in friend!")
        } else if (this.friends.includes(user)) {
            alert(`You can't do this! You have this friend`)
        } else {
            this.friends.push(user)
            user.friends.push(this)
        }
    }
    removeFriend (user) {
        if (user === this) {
            alert("You can't remove you at friend.")
        } else if(!this.friends.includes(user)) {
            alert(`You can't eliminate him because he is't your friend`)
        } else {
            this.friends.pop(user)
            user.friends.pop(this)
        }
    }
    addFriendByName(name) {
        let user = User.findByName(name)
        this.friends.push(user)
        user.friends.push(this)
    }
    removeFriendByName(name) {
        let user = User.findByName(name)
        this.friends.pop(user)
        user.friends.pop(this)
    }
    sentMessages(messageContent, user) {
        let message = new Message(messageContent, this, user, null)
        this.sentMessages.push(message)
        user.receivedMessages.push(message)
    }
    render() {
        console.log(`
            [${this.name}] ${this.online ? `◉` : "◯"}
        `)
    }
}
