const myLibrary = [];

document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('.add'),
          modal = document.querySelector('.modal'),
          close = document.querySelector('.close'),
          info = document.querySelector('.info'),
          submit = document.querySelector('.submit'),
          title = document.querySelector('.title'),
          author = document.querySelector('.author'),
          count = document.querySelector('#sheet');

    add.addEventListener('click', () => {
        modalStatus(modal, 'visible')
        modalStatus(close, 'visible')
        modalStatus(info, 'visible')

    })

    close.addEventListener('click', () => {
        modalStatus(modal, 'hidden');
        modalStatus(close, 'hidden');
        modalStatus(info, 'hidden');
    })

    document.body.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            modalStatus(modal, 'hidden');
            modalStatus(close, 'hidden');
            modalStatus(info, 'hidden');
        }
    })

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const titleItem = title.value;
        const authorItem = author.value;
        const countItem = count.value;

        if(titleItem && authorItem && countItem) {
            const newBook = Book(titleItem, authorItem, countItem);
            myLibrary.push(newBook);

            title.value = '';
            author.value = '';
            count.value = '';
            modalStatus(modal, 'hidden');
            modalStatus(close, 'hidden');
            modalStatus(info, 'hidden');

            addBookToLibrary(myLibrary);
        }

    })
})


function modalStatus(element, status) {
    element.style.visibility = status;
}

function Book(title = 'Undefined', author = 'Undefined', count = 0) {
    this.title = title;
    this.author = author;
    this.count = count;

    return {
        "title": this.title,
        "author": this.author,
        "count": this.count
    }
}

function addBookToLibrary(dict) {
    document.querySelector('.books').innerHTML = '';
    
    for(value of dict) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="book-item">
                <div class="book-title item">Название книги:</div>
                <div class="book-title-2 item">${value.title}</div>
                <div class="book-author item">Автор:</div>
                <div class="book-author-2 item">${value.author}</div>
                <div class="book-count item">Страниц прочитано:</div>
                <div class="book-count-2 item">${value.count}</div>
            </div>
        `
        const el = wrapper.firstElementChild;
        document.querySelector('.books').append(el);
    }
}

