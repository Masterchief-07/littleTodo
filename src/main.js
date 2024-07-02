import '../style/modern_normalize.css';
import '../style/style.css';
import '../style/components/header.css';
import '../style/components/content.css';
import '../style/utils.css';

let all_taks = []
let dom_content = []

export function remove_task(index){
    if (index > -1){
        all_taks.splice(index, 1);
        dom_content.splice(index, 1);
    }
}

function get_task_to_dom_str(){
    const text_area = document.getElementById('text_area');
    let task_title = text_area.value;
    console.log(task_title)
    all_taks.push(task_title);

    let content = `
      <div class="content">
        <div class="content__description">
          <p>
            ${task_title}
          </p>
        </div>
        <div class="content__validate_cancel">
          <button onclick="" class="content__validate">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
            </svg>
          </button>
          <button onclick="remove_task(${all_taks.length - 1})" class="content__cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      `;
    dom_content.push(content);
    const container = document.getElementById("contents")
    container.innerHTML = dom_content.join("\n");
}

let add_btn = document.getElementById("add_task");
add_btn.addEventListener("click", get_task_to_dom_str);

console.log("holla");

