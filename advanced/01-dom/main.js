// ============================================================================
// DOM Learning Playground (Super Explained Version)
// ============================================================================
// This file explains DOM step by step in a very simple way.
// I added detailed comments to explain "what each line does" and "what output you should see".
// Tip: Open browser DevTools Console to see console.log outputs.

// ============================================================================
// 1) Selecting elements (How to get elements from HTML)
// ============================================================================

// We select the element that has id="myId".
// Expected value: a DOM element object (the div with id myId in index.html).
const myIdElement = document.getElementById("myId");

// We print what we got from getElementById.
// Expected console output: Element selected by id: <div id="myId" ...>...</div>
console.log("Element selected by id:", myIdElement);


// We get ALL <p> tags in the page.
// Important: getElementsByTagName returns a LIVE HTMLCollection.
// LIVE means if <p> tags change later, this collection updates automatically.
const paragraphElements = document.getElementsByTagName("p");

// Print all paragraphs.
// Expected output: HTMLCollection(...) [p, p, p, ...]
console.log("All paragraph elements:", paragraphElements);


// We get all elements with class="myClass".
// Also returns LIVE HTMLCollection.
const classElements = document.getElementsByClassName("myClass");


// Print elements with class myClass.
// Expected output: HTMLCollection(2) [p.myClass, p.myClass] (or similar)
console.log("Elements with class myClass:", classElements);



// querySelector returns ONLY the first matching element.
// Here we ask for first element with class .myClass.
const firstClassElement = document.querySelector(".myClass");


let ramzi = function(a, b ){
    return a + b;
}




 


// Print first matched element.
// Expected output: First element found with querySelector: <p class="myClass">...</p>
console.log("First element found with querySelector:", firstClassElement);

// querySelectorAll returns ALL matches as a static NodeList.
// STATIC means it does not auto-update when DOM changes later.
const allParagraphs = document.querySelectorAll("p");

// Print all paragraphs selected by querySelectorAll.
// Expected output: NodeList(...) [p, p, p, ...]
console.log("All paragraph elements with querySelectorAll:", allParagraphs);

// ============================================================================
// 2) Reading and changing content (textContent / innerText / innerHTML)
// ============================================================================

// Select paragraph with id="contentTarget".
const contentTarget = document.getElementById("contentTarget");

// Replace all text inside element as plain text.
// If there was HTML, it becomes plain text here.
contentTarget.textContent = "This text was changed with textContent.";

// Replace content using HTML string.
// <strong> will be rendered as bold in the page.
contentTarget.innerHTML = 'This text was changed with <strong>innerHTML</strong>.';

// Change visible text of first .myClass paragraph.
// innerText is related to visible rendered text.
firstClassElement.innerText = "This paragraph was updated with innerText.";

// Visual output on page:
// - contentTarget now shows: This text was changed with innerHTML (word innerHTML is bold)
// - first .myClass paragraph text changes to the sentence above.

// ============================================================================
// 3) Working with attributes
// ============================================================================

// Select image element that has id="domImage".
const domImage = document.getElementById("domImage");

// Read image src attribute and print it.
// Expected console output: Image source: https://via.placeholder.com/...
console.log("Image source:", domImage.getAttribute("src"));

// Change alt attribute value for accessibility.
domImage.setAttribute("alt", "A DOM learning example image");

// Read alt property and print it.
// Expected console output: Image alt text: A DOM learning example image
console.log("Image alt text:", domImage.alt);

// ============================================================================
// 4) Styling and classes
// ============================================================================

// Add blue border to #myId element.
myIdElement.style.border = "2px solid #2563eb";

// Round the corners.
myIdElement.style.borderRadius = "16px";

// Add inner spacing.
myIdElement.style.padding = "16px";

// Add CSS class "status" to contentTarget.
// Expected visual result: style changes based on .status CSS in index.html.
contentTarget.classList.add("status");

// ============================================================================
// 5) Traversing the DOM tree (parent/children)
// ============================================================================

// Select traversal box from HTML.
const traversalBox = document.getElementById("traversalBox");

// Print parent element of traversalBox.
// Expected output: Parent element: <section class="card">...</section> (or similar)
console.log("Parent element:", traversalBox.parentElement);

// Print HTMLCollection of direct children.
// Expected output: Children: HTMLCollection(2) [p, ul]
console.log("Children:", traversalBox.children);

// Print first child element.
// Expected output: First child element: <p>...</p>
console.log("First child element:", traversalBox.firstElementChild);

// Print last child element.
// Expected output: Last child element: <ul class="chip-list">...</ul>
console.log("Last child element:", traversalBox.lastElementChild);

// ============================================================================
// 6) Creating and removing elements (Beginner Todo list)
// ============================================================================

// Select beginner todo list container.
const todoList = document.getElementById("todoList");

// Default items we use when reset button is clicked.
const defaultTodos = ["Learn DOM selection", "Practice DOM traversal"];

// Counter starts with current default items count.
let todoCount = defaultTodos.length;

// Helper function: create one <li> with provided text.
function createTodoItem(text) {
	// Create new list item element.
	const item = document.createElement("li");

	// Put text inside this list item.
	item.textContent = text;

	// Return ready element.
	return item;
}

// When "Add todo" button is clicked.
document.getElementById("addTodoBtn").addEventListener("click", function () {
	// Increase counter by 1.
	todoCount += 1;

	// Build text like: New todo item #3
	const newTodo = createTodoItem(`New todo item #${todoCount}`);

	// Append new <li> at end of list.
	todoList.appendChild(newTodo);

	// Visual output: one new item appears in list.
});

// When "Remove last" button is clicked.
document.getElementById("removeTodoBtn").addEventListener("click", function () {
	// Check if list has at least one item.
	if (todoList.lastElementChild) {
		// Remove last item.
		todoList.removeChild(todoList.lastElementChild);
	}

	// Visual output: last item disappears (if exists).
});

// When "Reset list" button is clicked.
document.getElementById("resetTodosBtn").addEventListener("click", function () {
	// Remove all current items.
	todoList.innerHTML = "";

	// Re-add default items one by one.
	defaultTodos.forEach(function (todoText) {
		todoList.appendChild(createTodoItem(todoText));
	});

	// Reset counter back to default length.
	todoCount = defaultTodos.length;

	// Visual output: list returns to original two items.
});

// ============================================================================
// 7) Events (click + input)
// ============================================================================

// Select message box and button.
const messageBox = document.getElementById("messageBox");
const changeThemeBtn = document.getElementById("changeThemeBtn");

// Listen to button click.
changeThemeBtn.addEventListener("click", function () {
	// Change text content.
	messageBox.textContent = "The click event fired successfully.";

	// Change colors to green style.
	messageBox.style.background = "#dcfce7";
	messageBox.style.color = "#166534";
	messageBox.style.borderLeftColor = "#16a34a";

	// Visual output: message text + colors change after clicking button.
});

// Select typing input and output box.
const typingInput = document.getElementById("typingInput");
const typingOutput = document.getElementById("typingOutput");

// Listen while user types.
typingInput.addEventListener("input", function (event) {
	// event.target.value is current text in input.
	// If empty, show default message.
	typingOutput.textContent = event.target.value || "Waiting for input...";

	// Visual output: output box mirrors what user types instantly.
});

// ============================================================================
// 8) Forms (submit + preventDefault)
// ============================================================================

// Select form and all related fields.
const learningForm = document.getElementById("learningForm");
const nameInput = document.getElementById("nameInput");
const topicSelect = document.getElementById("topicSelect");
const notesInput = document.getElementById("notesInput");
const formOutput = document.getElementById("formOutput");

// Listen when form is submitted.
learningForm.addEventListener("submit", function (event) {
	// Stop normal browser submit (page refresh).
	event.preventDefault();

	// Build JS object from input values.
	const formData = {
		name: nameInput.value.trim(),
		topic: topicSelect.value,
		notes: notesInput.value.trim()
	};

	// Convert object to pretty JSON text and show it in UI.
	formOutput.textContent = JSON.stringify(formData, null, 2);

	// Visual output: black output box shows JSON data from form.
});

// ============================================================================
// 9) Small console examples
// ============================================================================

// Print number of paragraph tags.
// Expected output example: Number of paragraphs: 8 (number depends on HTML)
console.log("Number of paragraphs:", paragraphElements.length);

// Print number of elements with .myClass.
// Expected output: Number of .myClass elements: 2
console.log("Number of .myClass elements:", classElements.length);

// Print first anchor <a> in page.
// Expected output: First anchor tag: <a href="https://www.google.com" ...>
console.log("First anchor tag:", document.querySelector("a"));

// Print ready message.
// Expected output: DOM playground loaded successfully.
console.log("DOM playground loaded successfully.");

// ============================================================================
// 10) Intermediate: Event delegation + dataset + closest + localStorage
// ============================================================================

// Storage key name used inside browser localStorage.
const intermediateStorageKey = "domIntermediateTasksV1";

// Select intermediate controls and containers.
const intermediateTaskInput = document.getElementById("intermediateTaskInput");
const addIntermediateTaskBtn = document.getElementById("addIntermediateTaskBtn");
const clearIntermediateTasksBtn = document.getElementById("clearIntermediateTasksBtn");
const intermediateTaskList = document.getElementById("intermediateTaskList");
const taskTemplate = document.getElementById("taskTemplate");
const eventLog = document.getElementById("eventLog");

// Read tasks from localStorage.
function readIntermediateTasks() {
	// Get raw string from localStorage.
	const storedValue = localStorage.getItem(intermediateStorageKey);

	// If no data found, return empty array.
	if (!storedValue) {
		return [];
	}

	// Try parsing JSON safely.
	try {
		const parsedValue = JSON.parse(storedValue);

		// Ensure parsed value is array, otherwise fallback to empty array.
		return Array.isArray(parsedValue) ? parsedValue : [];
	} catch (error) {
		// If JSON parse fails, show warning and return empty array.
		console.warn("Could not parse tasks from localStorage:", error);
		return [];
	}
}

// Initialize tasks array from storage.
let intermediateTasks = readIntermediateTasks();

// Save current tasks array into localStorage.
function saveIntermediateTasks() {
	localStorage.setItem(intermediateStorageKey, JSON.stringify(intermediateTasks));
}

// Render tasks list in UI.
function renderIntermediateTasks() {
	// Create fragment (fast container not directly rendered).
	const fragment = document.createDocumentFragment();

	// Build one <li> per task.
	intermediateTasks.forEach(function (task) {
		// Clone <template> item from HTML.
		const clone = taskTemplate.content.firstElementChild.cloneNode(true);

		// Save task id in data-id (dataset).
		clone.dataset.id = String(task.id);

		// Insert task text in span[data-role="text"].
		clone.querySelector('[data-role="text"]').textContent = task.text;

		// If task done, add CSS class done.
		if (task.done) {
			clone.classList.add("done");
		}

		// Add prepared node to fragment.
		fragment.appendChild(clone);
	});

	// Clear old list.
	intermediateTaskList.innerHTML = "";

	// Insert all new items in one operation.
	intermediateTaskList.appendChild(fragment);

	// Visual output: list updates to match intermediateTasks array.
}

// Add one new intermediate task.
function addIntermediateTask() {
	// Read input text and remove spaces around it.
	const taskText = intermediateTaskInput.value.trim();

	// If input is empty, stop.
	if (!taskText) {
		return;
	}

	// Create new task object.
	const newTask = {
		id: Date.now(),
		text: taskText,
		done: false
	};

	// Push task to array.
	intermediateTasks.push(newTask);

	// Save and rerender.
	saveIntermediateTasks();
	renderIntermediateTasks();

	// Clear input and focus it again.
	intermediateTaskInput.value = "";
	intermediateTaskInput.focus();

	// Visual output: new task appears in intermediate list.
}

// Click on Add task button => add task.
addIntermediateTaskBtn.addEventListener("click", addIntermediateTask);

// Press Enter in input => add task.
intermediateTaskInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addIntermediateTask();
	}
});

// Clear all tasks button.
clearIntermediateTasksBtn.addEventListener("click", function () {
	// Reset array to empty.
	intermediateTasks = [];

	// Save empty state and rerender.
	saveIntermediateTasks();
	renderIntermediateTasks();

	// Visual output: list becomes empty.
});

// Event delegation:
// One listener on parent <ul> handles clicks for all child buttons.
intermediateTaskList.addEventListener("click", function (event) {
	// Find nearest button with data-action from clicked target.
	const clickedButton = event.target.closest("button[data-action]");

	// If click is not on action button, stop.
	if (!clickedButton) {
		return;
	}

	// Read action value ("toggle" or "delete") from dataset.
	const action = clickedButton.dataset.action;

	// Find nearest parent task item <li data-id="...">.
	const parentItem = clickedButton.closest("li[data-id]");

	// If not found, stop.
	if (!parentItem) {
		return;
	}

	// Convert item id from string to number.
	const itemId = Number(parentItem.dataset.id);

	// Toggle done state.
	if (action === "toggle") {
		intermediateTasks = intermediateTasks.map(function (task) {
			if (task.id === itemId) {
				return { ...task, done: !task.done };
			}
			return task;
		});
	}

	// Delete selected task.
	if (action === "delete") {
		intermediateTasks = intermediateTasks.filter(function (task) {
			return task.id !== itemId;
		});
	}

	// Save and rerender after any action.
	saveIntermediateTasks();
	renderIntermediateTasks();

	// Visual output:
	// - toggle => line-through style appears/disappears
	// - delete => item removed from list
});

// First render when page loads.
renderIntermediateTasks();

// ============================================================================
// 11) Intermediate: Event propagation (capturing vs bubbling)
// ============================================================================

// Select nested elements used for propagation demo.
const outerBox = document.getElementById("outerBox");
const middleBox = document.getElementById("middleBox");
const innerBoxBtn = document.getElementById("innerBoxBtn");

// Helper function to append one line to event log box.
function pushEventLog(text) {
	// If box still has default text, start from empty list.
	const existingLines = eventLog.textContent === "Event log will appear here." ? [] : eventLog.textContent.split("\n");

	// Add new line and keep only last 10 lines.
	const updatedLines = [...existingLines, text].slice(-10);

	// Show updated lines in output box.
	eventLog.textContent = updatedLines.join("\n");
}

// Create one readable line then push it.
function logPropagation(phaseLabel, elementLabel) {
	pushEventLog(`${phaseLabel} => ${elementLabel}`);
}

// CAPTURING phase listeners (third argument true).
outerBox.addEventListener(
	"click",
	function () {
		logPropagation("capturing", "outer");
	},
	true
);

middleBox.addEventListener(
	"click",
	function () {
		logPropagation("capturing", "middle");
	},
	true
);

innerBoxBtn.addEventListener(
	"click",
	function () {
		logPropagation("capturing", "button");
	},
	true
);

// BUBBLING phase listeners (default false).
innerBoxBtn.addEventListener("click", function () {
	logPropagation("bubbling", "button");
});

middleBox.addEventListener("click", function () {
	logPropagation("bubbling", "middle");
});

outerBox.addEventListener("click", function () {
	logPropagation("bubbling", "outer");
});

// Expected order when you click the inner button:
// 1) capturing => outer
// 2) capturing => middle
// 3) capturing => button
// 4) bubbling => button
// 5) bubbling => middle
// 6) bubbling => outer



