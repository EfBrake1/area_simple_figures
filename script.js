document.querySelector(".check").onclick = function () {
    let num1 = parseInt(document.querySelector(".num1").value)
    let num2 = parseInt(document.querySelector(".num2").value)
    alert('Площадь равна ' + num1 * num2 / 2)
};
document.querySelector(".check1").onclick = function () {
    let num3 = parseInt(document.querySelector(".num3").value)
    alert('Площадь равна ' + (num3 * num3) * 3.14)
};
document.querySelector(".check2").onclick = function () {
    let num4 = parseInt(document.querySelector(".num4").value)
    alert('Площадь равна ' + num4 * num4)
};
