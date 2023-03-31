// opening and closing dropdown
var dropdown = document.getElementById('dropdown'),
    dropdown_item = document.querySelectorAll('.dropdown-item');

dropdown.onclick = function () {
    for(var i = 0; i < dropdown_item.length; i++){

        if(dropdown_item[i].style.display === '' || dropdown_item[i].style.display === 'none'){
            dropdown_item[i].style.display = 'block'
        } else {
            dropdown_item[i].style.display = 'none'
        }
    }
}
