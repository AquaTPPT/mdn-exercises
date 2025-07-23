// const output = document.querySelector(".output"); 
// output.textContent = "";

let i = 10;

console.log('COUNTDOWN:')

function startCountdown() {

    function countdown() {
        while (i > 0) {

            console.log(i + '...')

            --i

        }
        if (i == 0) {

            console.log('Lift off!!')

        }
    }
    countdown()
}

startCountdown()

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
