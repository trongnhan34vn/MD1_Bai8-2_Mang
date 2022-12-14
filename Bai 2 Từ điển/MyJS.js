// Input: biến listWord

let listWord = ['go', 'where', 'new'];

// Show: sử dụng function để vẽ bảng mặc định
function showListWord() {
    // Tạo biến drawTable để lưu bảng
    let drawTable = '';
    // Sử dụng vòng lặp, lặp qua tất cả phần tử của mảng và gắn vào html
    for(i = 0; i < listWord.length; i++) {
        drawTable += `<tr>
                        <td>${listWord[i]}</td>
                      </tr>`
    }
    document.getElementById('drawTable').innerHTML = drawTable;
}

// Output: Hiện các phần tử của mảng lên bảng và vẽ bảng
showListWord();

// Search: (Tìm kiếm chuẩn)
// Sử dụng function để bắt sự kiện khi search từ khoá
// Tạo thêm 1 biến listSearch là 1 mảng rỗng để lưu từ search

let listSearch = [];

function actionSearch() {
    // Tạo biến search để nhận dữ liệu từ ô input
    let search = document.getElementById('search').value;
    // Nếu người dùng nhập khoảng trắng thì hiện List mặc định
    if(search.trim()==="") {
        showListWord()
    //
    } else {
        // Nếu không thì, sử dụng vòng lặp duyệt qua các phần tử trong mảng word
        // phương thức search của js trả về -1 nếu ko tìm được từ trùng trong mảng list word.
        // vậy nếu khác -1 thì tìm đc từ khoá trùng, đẩy từ đó vào mảng listSearch để hiển thị lên mảng
        listSearch = [];
        for(let i = 0; i < listWord.length; i++) {
            console.log(listWord[i].toLowerCase())
            console.log(listWord[i].toLowerCase().search(search.toLowerCase()));
            if(listWord[i].toLowerCase().search(search.toLowerCase())!==-1){
                // Nếu trùng vs các phần tử trong mảng thì đẩy phần tử từ mảng ban đầu vào mảng Search
                listSearch.push(listWord[i]);
            }
        }
        showListSearch();
    }
}

// Tạo function để hiện bảng search theo từ khoá

function showListSearch() {
    let drawTable = '';
    // Sử dụng vòng lặp, lặp qua tất cả phần tử của mảng và gắn vào html
    for(i = 0; i < listSearch.length; i++) {
        drawTable += `<tr>
                        <td>${listSearch[i]}</td>
                      </tr>`
    }
    document.getElementById('drawTable').innerHTML = drawTable;
}



