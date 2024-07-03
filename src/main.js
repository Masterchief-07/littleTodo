import '../style/modern_normalize.css';
import '../style/style.css';
import '../style/components/content.css';
import '../style/utils.css';

const text_area = document.getElementById("task_text");
const add_btn = document.getElementById("task_add");
const all_task = document.getElementById("tasks")

add_btn.addEventListener("click", () => {
    let value = text_area.value;
    text_area.value = "";
    if (value === ""){
        return
    }
    let a_task = document.createElement("li");
    a_task.innerHTML = value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    a_task.appendChild(span)
    all_task.appendChild(a_task)
});

all_task.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }
}, false);