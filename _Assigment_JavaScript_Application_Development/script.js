var allItems;
var headerButtons;
window.addEventListener("load", function () {
    headerButtons = document.getElementsByClassName("header-cell");
    allItems = document.getElementById("all-items");

    for (let i = 0; i < headerButtons.length; i++) {
        headerButtons[i].onclick = function () {
            openTab(parseInt(this.id.substr(this.id.length - 1)));
        }
    }
    examineHash();

    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var addButton = document.getElementById("add-btn");

    var allItemsContainer = document.getElementById("all-items-container");
    var activeItemsContainer = document.getElementById("active-items-container");
    var completedItemsContainer = document.getElementById("completed-items-container");

    var toDoApp = new ToDo(allItemsContainer, activeItemsContainer, completedItemsContainer);

    addButton.onclick = function () {
        if (nameInput.value !== '' || phoneInput.value !== '') {
            toDoApp.add(nameInput.value, phoneInput.value);
            nameInput.value = '';
            phoneInput.value = '';
        }
    };
});
window.addEventListener("hashchange", function (e) {
    examineHash();
});
function examineHash() {
    switch (window.location.hash) {
        case '#all-items':
        case "":
            openTab(1);
            break;
        case '#pending-items':
            openTab(2);
            break;
        case '#active-items':
            openTab(3);
            break;
    }
}
function openTab(no) {
    document.querySelectorAll('.header-cell').forEach(item => {
        item.classList.add("inactive-header-cell");
    });
    document.getElementById("tab-" + no).classList.remove("inactive-header-cell");
    switch (no) {
        case 1:
            allItems.style.marginLeft = "0%";
            window.location.hash = '#all-items';
            break;
        case 2:
            allItems.style.marginLeft = "-100%";
            window.location.hash = '#pending-items';
            break;
        case 3:
            allItems.style.marginLeft = "-200%";
            window.location.hash = '#active-items';
            break;
    }
}
// ToDo JS 
var ToDo = function (rootElementAll, rootElementActive, rootElementCompleted) {
    this.rootElementAll = rootElementAll;
    this.rootElementActive = rootElementActive;
    this.rootElementCompleted = rootElementCompleted;
    let ToDoItem = function (content, date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.completed = false;
    }
    let ToDoItemViewModel = function (toDoItem, views) {
        this.data = toDoItem;
        this.views = views;

        this.toJSON = function () {
            return this.data;
        }
    }
    let toDoItems = [];
    const TODO_ITEM_TEMPLATE = `
        <div class="todo-item-date">
            <span class="day"></span>
            <span class="month"></span>
        </div>
        <div class="todo-item-content">
            <span class="data"></span>
        </div>
        <span class="delete-btn" title="delete"></span>
`;
    function generateToDoItemView(toDoItem) {
        //first, create root element
        let toDoItemRoot = document.createElement('div');
        toDoItemRoot.classList.add("todo-item");
        toDoItemRoot.setAttribute('data-id', toDoItem.id);
        toDoItemRoot.innerHTML = TODO_ITEM_TEMPLATE;
        toDoItemRoot.getElementsByClassName("day")[0].innerHTML = toDoItem.date.toLocaleString('default', { day: 'numeric' });
        toDoItemRoot.getElementsByClassName("month")[0].innerHTML = toDoItem.date.toLocaleString('default', { month: 'short' });
        var dataElem = toDoItemRoot.getElementsByClassName("data")[0].innerHTML = toDoItem.content;
        toDoItemRoot.getElementsByClassName("delete-btn")[0].setAttribute('data-id', toDoItem.id);
        toDoItemRoot.classList.add(toDoItem.completed ? "completed" : null);
        let toDoItemRootCopy = toDoItemRoot.cloneNode(true);
        rootElementAll.append(toDoItemRoot);
        if (toDoItem.completed) {
            rootElementCompleted.append(toDoItemRootCopy);
        } else {
            rootElementActive.append(toDoItemRootCopy);
        }
        let toDoItemViewModel = new ToDoItemViewModel(toDoItem, [toDoItemRoot, toDoItemRootCopy]);
        toDoItems.push(toDoItemViewModel);
        //register handlers for delete button
        registerDeleteHandlers(toDoItemViewModel);
        //register handlers for click on item
        registerClickHandlers(toDoItemViewModel);
    }
    function registerDeleteHandlers(toDoViewModel) {
        for (let i = 0; i < toDoViewModel.views.length; i++) {
            toDoViewModel.views[i].getElementsByClassName("delete-btn")[0].onclick = function (e) {
                e.stopPropagation();
                var id = this.dataset.id;
                var index = toDoItems.findIndex(item => item.data.id === id);
                if (index > -1) {
                    //remove from array and from DOM
                    toDoItems.splice(index, 1);
                    toDoViewModel.views[0].parentNode.removeChild(toDoViewModel.views[0]);
                    toDoViewModel.views[1].parentNode.removeChild(toDoViewModel.views[1]);
                }
                saveToLocalStorage();
            }
        }
    }
    function registerClickHandlers(toDoItemViewModel) {
        for (let i = 0; i < toDoItemViewModel.views.length; i++) {
            toDoItemViewModel.views[i].onclick = function (e) {
                var id = this.dataset.id;
                var index = toDoItems.findIndex(item => item.data.id === id);
                toDoItemViewModel.data.completed = !toDoItemViewModel.data.completed;
                if (toDoItemViewModel.data.completed) {
                    toDoItemViewModel.views[0].classList.add("completed");
                    toDoItemViewModel.views[1].classList.add("completed");
                    rootElementCompleted.appendChild(toDoItemViewModel.views[1]);
                } else {
                    toDoItemViewModel.views[0].classList.remove("completed");
                    toDoItemViewModel.views[1].classList.remove("completed");
                    rootElementActive.appendChild(toDoItemViewModel.views[1]);
                }
                saveToLocalStorage();
            }
        }
    }
    function saveToLocalStorage() {
        localStorage.setItem('todo-data', JSON.stringify(toDoItems));
    }
    function loadFromLocalStorage() {
        var json = localStorage.getItem('todo-data');
        if (json === null)
            return;
        let toDoItems = JSON.parse(json, (key, value) => {
            if (key === "date") {
                value = new Date(value);
            }
            return value;
        });
        if (toDoItems.length === 0)
            return;
        for (let i = 0; i < toDoItems.length; i++) {
            generateToDoItemView(toDoItems[i]);
        }
    }
    loadFromLocalStorage();
    return {
        add: function (content) {
            let toDoItem = new ToDoItem(content, new Date());
            generateToDoItemView(toDoItem);
            saveToLocalStorage();
        }
    }
}