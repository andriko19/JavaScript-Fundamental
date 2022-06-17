class Player {
  constructor() {
    this._username = " "
  }

  generateToken() {
    const random = ~~[Math.random() * 100000]
    const token = this.username + random.toString()
    // console.log(token)
    return token
  }

  // setter method
  set username(_username) {
    return this._username = _username
  }

  // geeter method
  get username() {
    return this._username
  }

  get register() {
    sessionStorage.setItem('token', this.generateToken())
    console.log("login berhasil")
  }

  get logout() {
    sessionStorage.removeItem('token')
    location.reload()
  }
}