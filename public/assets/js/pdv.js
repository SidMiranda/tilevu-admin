
    document.getElementById('search-item').focus();
    const  searchItem = document.getElementById('search-item');
    const  autoComplete = document.getElementById('auto-complete');
    const  autoCompleteList = document.getElementById('auto-complete-list');
    const  items = document.querySelectorAll('#auto-complete-list li');
    const  btnAdd = document.getElementById('btn-add');
    const  btnRemove = document.getElementById('btn-remove');
    const  inputQtd = document.getElementById('input-qtd');
    const  btnAddItem = document.getElementById('btn-add-item');

    let selectedItemIndex = -1;

    function saveItemLocalStorage(itemId) {
        let item = searchItem.value;
        let qtd = inputQtd.value;
        let items = JSON.parse(localStorage.getItem('items')) || [];

        let itemExists = false;

        items.forEach((storedItem, index) => {
            if (storedItem.itemId === itemId) {
                items[index].qtd = parseInt(items[index].qtd) + parseInt(qtd);
                itemExists = true;
            }
        });

        if (!itemExists) {
            items.push({ itemId, item, qtd });
        }

        localStorage.setItem('items', JSON.stringify(items));
        searchItem.value = '';
        inputQtd.value = 1;

    }

    function updateSelectedItem() {
        items.forEach((item, index) => {
            if (index === selectedItemIndex) {
                item.classList.add('item-selected');
            } else {
                item.classList.remove('item-selected');
            }
        });
    }

    function handleEnter() {
        if (items.length > 0) {
            searchItem.value = items[selectedItemIndex].innerText;
            autoComplete.style.display = 'none';
            saveItemLocalStorage(items[selectedItemIndex].dataset.value);
            searchItem.focus();

        }
    }

    searchItem.addEventListener('keydown', function (e) {
        if (autoComplete.style.display === 'block') {
            if (e.key === 'ArrowDown') {
                var itemsCount = autoCompleteList.children.length;
                if (selectedItemIndex < itemsCount - 1) {
                    selectedItemIndex++;

                    if (items[selectedItemIndex].offsetTop + items[selectedItemIndex].offsetHeight > autoCompleteList.scrollTop + autoCompleteList.offsetHeight) {
                        autoCompleteList.scrollTop = items[selectedItemIndex].offsetTop + items[selectedItemIndex].offsetHeight - autoCompleteList.offsetHeight;
                    }
                }
            }else if (e.key === 'ArrowUp') {
                if (selectedItemIndex > 0) {
                    selectedItemIndex--;

                    if (items[selectedItemIndex].offsetTop < autoCompleteList.scrollTop) {
                        autoCompleteList.scrollTop = items[selectedItemIndex].offsetTop;
                    }
                }
            }else if (e.key === 'Enter') {
                handleEnter();
            }
        }else if (e.key === 'Enter') {
            if (searchItem.value > 1 && searchItem.value < 1000) {
                inputQtd.value = searchItem.value;
                searchItem.value = '';
            }else{
                saveItemLocalStorage(items[selectedItemIndex].dataset.value);
            }
            autoComplete.style.display = 'none';
        }

        updateSelectedItem();
    })

    searchItem.addEventListener('input', event => {
        if (event.target.value.length > 3) {
            autoComplete.style.display = 'block';
        } else {
            autoComplete.style.display = 'none';
        }

    })

    searchItem.addEventListener('focusout', event => {
        setTimeout(() => {
            autoComplete.style.display = 'none';
        }, 200);
    })

    searchItem.addEventListener('focusin', event => {
        if (searchItem.value.length > 3) {
            autoComplete.style.display = 'block';
        }
    })

    autoComplete.addEventListener('click', function (e) {
        items.forEach((item, index) => {
            if (item === e.target) {
                selectedItemIndex = index;
            }
        });
        searchItem.value = e.target.innerText;
        autoComplete.style.display = 'none';
        searchItem.focus();
    })

    btnAdd.addEventListener('click', function () {
        if (inputQtd.value < 999){
            inputQtd.value = parseInt(inputQtd.value) + 1;
        }
    })

    btnRemove.addEventListener('click', function () {
        if (inputQtd.value > 1) {
            inputQtd.value = parseInt(inputQtd.value) - 1;
        }
    })

    btnAddItem.addEventListener('click', function () {
        if(items[selectedItemIndex].dataset.value !== undefined){
            saveItemLocalStorage(items[selectedItemIndex].dataset.value);
        }
    })
