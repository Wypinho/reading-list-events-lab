document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmission)

})

const handleFormSubmission = function (event) {
  event.preventDefault();
  const book = document.createElement('li')
  book.textContent = `Title: ${event.target.title.value},
                      Author: ${event.target.author.value},
                      Category; ${event.target.category.value}`

  const list = document.querySelector('ul#reading-list');
  list.appendChild(book)

  // const form = document.querySelector('#new-item-form')
  event.target.reset()

}


console.log("end of code");
