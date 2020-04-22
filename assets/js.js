let buttonVoting = document.getElementById("button");
let formVoting = document.getElementById("form");
let resultMessage = document.getElementById("submit-result");
let radio = document.getElementsByName("radio");
let installer = document.getElementById("installer");
let zv6 = document.getElementById("zv_6");
let zv5 = document.getElementById("zv_5");
let zv4 = document.getElementById("zv_4");
let alien = document.getElementById("alien1");
let countAll = document.getElementById("count");


function setLocalStoroge(name) {
  let item = getLocalStoroge(name);
  if (item == undefined) {
    localStorage.setItem(name, JSON.stringify((item = 1)));
    //  console.log(name +' '+item);
  } else {
    localStorage.setItem(name, JSON.stringify((item += 1)));
    console.log(name + " " + item);
  }
}
function getLocalStoroge(name) {
  return JSON.parse(localStorage.getItem(name));
}

formVoting.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let i in radio) {
    if (radio[i].checked) {
      setLocalStoroge("countAll");
      switch (radio[i].value) {
        case "inst":
          setLocalStoroge("inst");
          display();
          break;
        case "zv6":
          setLocalStoroge("zv6");
          display();
          break;
        case "zv5":
          setLocalStoroge("zv5");
          display();
          break;
        case "zv4":
          setLocalStoroge("zv4");
          display();
          break;
        case "alien":
          setLocalStoroge("alien");
          display();
          break;

        default:
          break;
      }
    }
  }
});

function display() {
    installer.innerText = getLocalStoroge('inst') == null ? 0 :getLocalStoroge('inst')+" раз "+ " в процентах " + (getLocalStoroge('inst')/getLocalStoroge('countAll')).toPrecision(2) * 100 +"%";
    zv6.innerText = getLocalStoroge('zv6') == null ? "0" : getLocalStoroge('zv6')+" раз "+ " в процентах " + (getLocalStoroge('zv6')/getLocalStoroge('countAll')).toPrecision(2) * 100+"%";
    zv5.innerText = getLocalStoroge('zv5') == null ? "0" :getLocalStoroge('zv5')+" раз "+ " в процентах " + (getLocalStoroge('zv5')/getLocalStoroge('countAll')).toPrecision(2) * 100+"%";
    zv4.innerText = getLocalStoroge('zv4') == null ? "0" :getLocalStoroge('zv4')+" раз "+ " в процентах " + (getLocalStoroge('zv4')/getLocalStoroge('countAll')).toPrecision(2) * 100+"%";
    alien.innerText = getLocalStoroge('alien') == null ? "0" :getLocalStoroge('alien')+" раз "+ " в процентах " + (getLocalStoroge('alien')/getLocalStoroge('countAll')).toPrecision(2) * 100+"%";
    countAll.innerText = "Всего:  " + getLocalStoroge('countAll');
}
