// pt ax*x + bx + c = 0 
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
    if (a != 0) {
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
function giaiPT2(a, b, c) {
    if (!checkNumber) {
        alert("Lỗi khi nhập!");
    } else if (a != 0) {
        var delTa = (b * b - 4 * a * c);
        if (delTa > 0) {
            x1 = ((-b + Math.sqrt(delTa)) / (2 * a));
            alert("Nghiệm của phương trình x1: " + x1);
            console.log("Nghiệm của phương trình x1: ", x1)
            x2 = ((-b - Math.sqrt(delTa)) / (2 * a));
            alert("Nghiệm của phương trình x2: " + x2);
            console.log("Nghiệm của phương trình x2: ", x2)

        } else if (delTa = 0) {
            var x = (-b / (2 * a));
            alert("Nghiệm của phương trình x1 = x2: " + x);
            console.log("Nghiệm của phương trình x1 = x2: ", x)
        } else {
            alert("Phương trình vô nghiệm:")
        }
    } else {
        giaiPT1(b, c);
    }

}
var a = checkInputNumber("Nhập hệ số a: ");
var b = checkInputNumber("Nhập hệ số b: ");
var c = checkInputNumber("Nhập hệ số c: ");
giaiPT2(a, b, c);

