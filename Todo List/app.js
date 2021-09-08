(async function fetchTodoList() {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let dataName = data.map((items) => items.title);
    let newData = dataName.slice(0, 10);
    let myUL = document.getElementById("myUL");
  
    //  - add item function -

    let addItem = function (itemTxt) {
      let myitem = document.createElement("li");
      myitem.innerText = itemTxt;
      myUL.appendChild(myitem);
      let clearBtn = document.createElement("button");
      clearBtn.innerText = "X";
      clearBtn.classList.add("clearBtn");
      myitem.appendChild(clearBtn);
      clearBtn.addEventListener("click", () => {
        myitem.remove();
      });
    };
    newData.forEach((item) => {
      addItem(item);
    });
  
    //  - add event listener-
  
    let addBtn = document.getElementById("addBtn");
    let inputInfo = document.getElementById("myInput");
    addBtn.addEventListener("click", (newItem) => {
      newItem = inputInfo.value;
      addItem(newItem);
      inputInfo.value = "";
    });
  })();
