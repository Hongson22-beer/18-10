
    // Thay đổi màu sắc của nội dung
    function thayDoiMau(color) {
        document.getElementById('NoiDung').style.backgroundColor = color;
    }

    // Thay đổi kích thước chữ
    function thayDoiKichThuocChu() {
        var fontSize = document.getElementById('fontSize').value;
        document.getElementById('NoiDung').style.fontSize = fontSize;
    }

    // Thay đổi chiều cao của nội dung
    function thayDoiChieuCao() {
        var heightSize = document.getElementById('heightSize').value;
        document.getElementById('NoiDung').style.height = heightSize;
    }

    // Tăng chiều cao của nội dung
    function tangChieuCao() {
        var currentHeight = document.getElementById('NoiDung').offsetHeight;
        document.getElementById('NoiDung').style.height = (currentHeight + 20) + 'px';
    }

    // Nạp CSS tiêu đề
    function napCssTieuDe() {
        document.querySelector('h2').style.color = 'green';
        document.querySelector('h2').style.textTransform = 'uppercase';
    }

    // Nạp CSS nội dung
    function napCssNoiDung() {
        document.getElementById('NoiDung').style.border = '2px dashed red';
        document.getElementById('NoiDung').style.padding = '20px';
    }



