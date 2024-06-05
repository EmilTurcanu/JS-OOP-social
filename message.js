class Message {
    static all = []
    constructor(content, fromUser, toUser, status) {
        this.content = content
        this.status = status
        this.fromUser = fromUser
        this.toUser = toUser
        Message.all.push(this)
    }
    render() {
        console.log(`
            ${this.content}
        `)
    }
}
