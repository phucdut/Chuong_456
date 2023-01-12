// pt ax + b = 0
var checkNumber = true;
function checkInputNumber(input) {
    var number = prompt(input);
    if (number === '' || number === null) {
        alert('Vui lòng nhập:');
        console("Vui lòng nhập:");
        checkNumber = false;
    } else if (isNaN(number)) {
        alert("Vui lòng nhập số:");
        checkNumber = false;
    } else {
        return number = Number(number);
    }
}
function giaiPT1(a, b) {
    if (!checkNumber) {
        alert("Lỗi khi nhập!");
    } else if (a != 0) {
        var x = (-b / a);
        alert("Nghiệm của phương trình: " + x);
        console.log("Nghiệm của phương trình: ", x)
    } else {
        if (b != 0) {
            alert("Phương trình vô nghiệm.")
        } else {
            alert("Phương trình có vô số nghiệm.")
        }
    }
}
var a = checkInputNumber("Nhập hệ số a: ");
var b = checkInputNumber("Nhập hệ số b: ");

giaiPT1(a, b);
