// const output = document.querySelector(".output"); 
// output.textContent = "";

let i = 10;

const output = document.querySelector(".output");
output.textContent = "";

const para = document.createElement('p');
    
    function countdown() {
        while (i > 0) {
            
            if (i == 10) {

                para.textContent = "COUNTDOWN: " + i + "...";
            
            }

            else if (i == 0) {
            
                para.textContent = 'Blast off!!';
            
            }

            else {

               para.textContent = i + "...";
            
            }
            
            output.appendChild(para);

            --i;

        }

    }


// let i = 10;

// 
// para.textContent = ;
// 
const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

function countdown() {
  while (i >= 0) {
    const para = document.createElement("p");
    if (i === 10) {
      para.textContent = "COUNTDOWN: " + i + "...";
    } else if (i === 0) {
      para.textContent = "Blast off!!";
    } else {
      para.textContent = i;
    }

    output.appendChild(para);

    i--;
  }
}
