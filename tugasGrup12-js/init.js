
// declaring element
const username = document.getElementById("username")
const viewUsername = document.getElementById("viewUsername")
const akunPlayer = document.getElementById("akunPlayer")
const home = document.getElementById("home")
const sectionStart = document.getElementById("start")
const sectionReward = document.getElementById("reward")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const boxReward = document.getElementById("box-reward")

// buat object baru bernama player
const player = new Player()

// buat karakter slot
let default_option = ['🥶', '👻', '😍']
box1.textContent = default_option[0]
box2.textContent = default_option[1]
box3.textContent = default_option[2]

// Tuntuk meng-acak karakter
function dice() {
  let gacha = []
  for (let i = 0; i < default_option.length; i++){
    const roll = default_option[~~(Math.random() * default_option.length)]
    gacha.push(roll)
  }
  return gacha
}

// Jika menang jalankan mwthod ini.
function winner() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent) {
    location.href = "#reward"
    sectionReward.style.display = 'block'
    boxReward.textContent = box1.textContent
  } else {
    // kamu belum beruntung.
    // console.log('lose')

  }
}

function start() {
  // selama 100 = 0.1 detik
  const rolling = setInterval(function () {
    const result = dice()
    // console.log('acak lur...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
  }, 100)

  // ketika 3000 = 3 detik
  setTimeout(function () {
    clearInterval(rolling)
    winner(box1.textContent, box2.textContent, box3.textContent)
  }, 3000)
}

onload = function () {
  sectionStart.style.display = 'none'
  sectionReward.style.display = 'none'
  const token = sessionStorage.getItem('token')
  viewUsername.textContent = token
  if (token && token != null) {
    akunPlayer.style.display = 'block'
    home.style.display = 'none'
    sectionStart.style.display = 'block'
  } else {
    akunPlayer.style.display = 'none'
    
  }
}

function register() {
  console.log(username.value)
  // sessionStorage.setItem('token', username.value)
  // registerForm.style.display = 'none'
  // logoutForm.style.display = 'block'

  // const windah = new Player('Windahh')
  // console.log(windah.register())

  // call setter
  player.username = username.value

  // call getter
  // console.log(player.username)

  player.register
  location.reload()
}

function logout() {
  player.logout
}