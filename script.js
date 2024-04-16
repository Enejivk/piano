const keys = document.querySelectorAll('.piano-keys .key');
const volume = document.querySelector('.volume-slider input');
const keyCheckbox = document.querySelector('.keys-checkbox input');

let audio = new Audio("/tunes/a.wav")
let allKeys = [];

const playAudio = (key) => {
    audio.src = `/tunes/${key}.wav`
    
    audio.play()
    const clickKey = document.querySelector(`[data-key="${key}"]`)
    clickKey.classList.add('active')
    setTimeout(() =>{
        clickKey.classList.remove('active')
    }, 150)
}

const showHid = () => {
    keys.forEach((key) => {
        key.classList.toggle('hide')
    })
}

const changeVolume = (e) => {
    audio.volume = e.target.value
}
keys.forEach((key) => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => {
        playAudio(key.dataset.key)
    })
})

const keyPress = (e) => {
    if(allKeys.includes(e.key)){
        playAudio(e.key)
    }
}
keyCheckbox.addEventListener('click', showHid);
document.addEventListener('input', changeVolume);
document.addEventListener('keydown', keyPress);
