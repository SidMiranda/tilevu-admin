
    document.getElementById('search-item').focus();
    const  searchItem = document.getElementById('search-item');
    const  autoComplete = document.getElementById('auto-complete');
    const  autoCompleteList = document.getElementById('auto-complete-list');
    var  items = document.querySelectorAll('#auto-complete-list li');
    const  btnAdd = document.getElementById('btn-add');
    const  btnRemove = document.getElementById('btn-remove');
    const  inputQtd = document.getElementById('input-qtd');
    const  btnAddItem = document.getElementById('btn-add-item');

    const  pdvTopAccount = document.querySelector('.pdv-top-account');
    var  changeAccount = document.getElementById('change-account');

    let selectedItemIndex = -1;

    function saveItemLocalStorage(item) {
        let productData = JSON.parse(item);
        let itemId = productData.id;
        let itemName = productData.name;
        let qtd = inputQtd.value;
        let sellPrice = productData.sell_price;
        let aleatorydiscount = Math.floor(Math.random() * sellPrice);

        let accountActiveId = document.getElementById('account-id').value;
        let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
        let account = accounts[accountActiveId] || { items: []};

        let itemExists = false;

        account.items.forEach((storedItem, index) => {
            if (storedItem.itemId === itemId) {
                account.items[index].qtd = parseInt(account.items[index].qtd) + parseInt(qtd);
                itemExists = true;
            }
        });

        if (!itemExists) {
            account.items.push({ itemId, itemName, qtd, sellPrice, aleatorydiscount });
        }

        accounts[accountActiveId] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));

        searchItem.value = '';
        inputQtd.value = 1;

        selectedItemIndex = -1;
        updateTable();

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
            // saveItemLocalStorageAccount(items[selectedItemIndex].dataset.value);
            searchItem.focus();

        }
    }

    function loadProducts() {
        fetch('http://127.0.0.1:8000/api/product/list')
            .then(response => response.json())
            .then(data => {
                autoCompleteList.innerHTML = '';
                data.forEach(product => {
                    let li = document.createElement('li');
                    li.innerText = product.name;
                    li.dataset.value = JSON.stringify(product);
                    autoCompleteList.appendChild(li);
                });
                items = document.querySelectorAll('#auto-complete-list li');
            });
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
        }else if (e.key === '+') {
            e.preventDefault();
            btnAdd.click();
        }else if (e.key === '-') {
            e.preventDefault();
            btnRemove.click();
        }

        updateSelectedItem();
    })

    searchItem.addEventListener('input', event => {
        if (event.target.value.length > 3) {
            loadProducts();
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

    pdvTopAccount.addEventListener('click', function () {
        if (changeAccount.style.display === 'block') {
            changeAccount.style.display = 'none';
        }else {
            changeAccount.style.display = 'block';
            document.getElementById('input-new-account').focus();
        }
    })

    document.getElementById('input-new-account').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('btn-new-account').click();
        }
    })




