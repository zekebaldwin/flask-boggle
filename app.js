const form = document.getElementById("guess")
const button = document.querySelector('#button')
const textBox = document.getElementById('textBox')
const scores = document.querySelector('.scores')
let timeCount = document.querySelector('.time')
    let score = 0

    let time = 30

    let timer = setInterval(() => {
        if (time > 0) {
            time -= 1;
            timeCount.innerHTML = time;
        } else {
            stopInterval();
        }
    }, 1000);

    function stopInterval() {
        clearInterval(timer);
    }
    
    $('.guess:input').prop('readonly', true);
    
    let arr = [];

    form.addEventListener("submit", async function(e){
        e.preventDefault()
        let word = e.target[0].value
        let res = await axios.get('/valid', {params: {word: word}})
        if(arr.includes(word)) return null
        let results = res.data.results
        if(results === 'ok'){
            score += word.length
            scores.innerHTML = score
            arr.push(word)
        }
        
    })

    