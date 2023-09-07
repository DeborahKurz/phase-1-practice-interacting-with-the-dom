//Timer increments every second once the page has loaded.
let count = 0;
let times = 0;
let intervalID;

function resetTimes(){
    times = 0;
}

function timer() {
    count++;
    let h1 = document.getElementById("counter");
    h1.textContent = count;
    resetTimes();
}

intervalID = setInterval(timer, 1000);

////Manually increment and decrement the counter using the plus and minus buttons.
//(Increment)
const plusBtn = document.getElementById("plus").addEventListener('click', increment);

function increment(){
    count++;
    let h1 = document.getElementById("counter");
    h1.textContent = count;
    resetTimes();
};

//(Decrement)
const minusBtn = document.getElementById("minus").addEventListener('click', decrement);

function decrement(){
    count--;
    let h1 = document.getElementById("counter");
    h1.textContent = count;
    resetTimes();
}

//"Like" an individual number of the counter. I should see the count of 
function like(){
    const number = parseInt(document.getElementById("counter").textContent);
    const list = document.getElementsByClassName("likes")[0];
    const idH4 = document.getElementById(`${number}`);
    if(idH4 === null){
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        list.appendChild(h4);
        times++;
        h4.textContent =  `Number ${number} was liked 1 time!`;
        h4.id = `${number}`
        list.appendChild(li);
        li.appendChild(h4);
    }else{
        times++;
        idH4.textContent = `Number ${number} was liked ${times} times!`;
    }
  }
  
  const heart = document.getElementById("heart").addEventListener("click", like);


//Pause the counter
const pause = document.getElementById("pause").addEventListener('click', pauseCount);

function pauseCount() {
    let pauseId = document.getElementById("pause");
    let buttons = document.querySelectorAll("button:not(#pause)");
    if(pauseId.textContent === "resume") {
        setTimeout(() => {
        pauseId.textContent = "pause"
        }, 0);
        buttons.forEach((button) => {
            button.disabled = false
        });
        intervalID = setInterval(timer, 1000);
    } else {
        setTimeout(() => {
            pauseId.textContent = "resume";
        }, 0);
        buttons.forEach((button) => {
            button.disabled = true
        });
        clearInterval(intervalID);
    }
}

//Leave comments
let submitEL = document.getElementById("submit").addEventListener("click", commentForm);

function commentForm(event) {
    event.preventDefault();
    let commentInput = document.getElementById("comment-input");
    let comment = commentInput.value;

    const hElement = document.createElement("li");
    hElement.textContent = comment;

    let commentList = document.getElementById ("list");
    commentList.appendChild(hElement);

    commentInput.value = "";
}