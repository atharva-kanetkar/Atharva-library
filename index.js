console.log('Welcome to my project');

// Book class

function Book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;
}


function Display() {

}

Display.prototype.add = function (book) {
    console.log('Adding to Ui');
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;


    tableBody.innerHTML += uiString;


}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;

    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                             <strong>Message</strong> ${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                             </button>
                        </div>
    
    `;
    setTimeout(function(){
        message.innerHTML = ''
    }, 2000);
    
}


// Adding an event listner of form

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted your form');
    e.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (horror.checked) {
        type = horror.value;
    }
    else if (comedy.checked) {
        type = comedy.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display()
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been successfully added');
    }
    else {
        display.show('error', 'Sorry you cannot add');
    }
}

