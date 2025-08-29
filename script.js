
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;


const heartEl = document.getElementById("heartCount");
const coinEl = document.getElementById("coinCount");
const copyEl = document.getElementById("copyCount");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");


function updateCounts() {
  heartEl.textContent = heartCount;
  coinEl.textContent = coinCount;
  copyEl.textContent = copyCount;
}



document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    updateCounts();
  });
});  



document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".number").innerText;

    
    navigator.clipboard.writeText(number).then(() => {
      
      copyCount++;
      updateCounts();
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });
});



document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector("h2").innerText;
    const number = card.querySelector(".number").innerText;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    
    coinCount -= 20;
    updateCounts();

    
    alert(`Calling ${serviceName} at ${number}`);

    
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${serviceName} (${number}) - ${time}`;
    historyList.appendChild(li);
  });
});


clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
