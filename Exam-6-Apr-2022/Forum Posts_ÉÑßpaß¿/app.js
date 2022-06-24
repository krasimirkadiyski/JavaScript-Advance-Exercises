window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let textInput = document.getElementById('post-content');


  let pubblishButton = document.getElementById('publish-btn');
  pubblishButton.addEventListener('click', () => {
    let title = titleInput.value;
    let category = categoryInput.value;
    let text = textInput.value;
    if (title && category && text) {
      let ul = document.getElementById('review-list');

      let li = document.createElement('li')
      li.className = 'rpost';
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      h4.textContent = title;
      let categoryP = document.createElement('p');
      categoryP.textContent = (`Category: ${category}`);
      let contentP = document.createElement('p');
      contentP.textContent = `Content: ${text}`;
      article.appendChild(h4);
      article.appendChild(categoryP);
      article.appendChild(contentP);

      li.appendChild(article);
      let editButton = document.createElement('button')
      editButton.addEventListener('click', edit);
      editButton.textContent = 'Edit';
      editButton.className = 'action-btn edit';

      let approveButton = document.createElement('button')
      approveButton.addEventListener('click', approve);
      approveButton.textContent = 'Approve'
      approveButton.className = 'action-btn approve'
      li.appendChild(editButton);
      li.appendChild(approveButton);
      ul.appendChild(li);
      titleInput.value = '';
      categoryInput.value = '';
      textInput.value = '';

      let clearButton = document.getElementById('clear-btn');
      clearButton.addEventListener('click', clear);

      function edit(e) {
        titleInput.value = title;
        categoryInput.value = category;
        textInput.value = text;
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      }
      function approve(e) {
      let publishedUl = document.getElementById('published-list');
      let li = e.target.parentElement;
        editButton.remove();
        approveButton.remove();
        publishedUl.appendChild(li);
      }
      
      function clear (e){
          let ul = e.target.parentElement.children[1];
          let allLi = Array.from(ul.children);
          allLi.forEach((e) => e.parentElement.removeChild(e));
      }
      
    }
  });
}
