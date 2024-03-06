window.onload = ()=> {
    document.getElementsByClassName('first')[0].style.display = 'block';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
};

document.getElementById('task1').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'block';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task2').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'block';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task3').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'block';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task4').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'block';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task5').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'block';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task6').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'block';
    document.getElementsByClassName('seventh')[0].style.display = 'none';
});

document.getElementById('task7').addEventListener('click', () => {
    document.getElementsByClassName('first')[0].style.display = 'none';
    document.getElementsByClassName('second')[0].style.display = 'none';
    document.getElementsByClassName('third')[0].style.display = 'none';
    document.getElementsByClassName('fourth')[0].style.display = 'none';
    document.getElementsByClassName('fifth')[0].style.display = 'none';
    document.getElementsByClassName('sixth')[0].style.display = 'none';
    document.getElementsByClassName('seventh')[0].style.display = 'block';
});



document.getElementById('firstButton').addEventListener('click', firstTask);
function firstTask() {
    let x1 = +document.getElementById('firstx1').value;
    let y1 = +document.getElementById('firsty1').value;
    let x2 = +document.getElementById('firstx2').value;
    let y2 = +document.getElementById('firsty2').value;
    let distance = ((x1 - x2)**2 + (y1 - y2)**2)**0.5;
    document.getElementById('firstOutput').innerHTML = distance;
}

document.getElementById('secondButton').addEventListener('click', secondTask);
function secondTask() {
    let x1 = +document.getElementById('secondx1').value;
    let y1 = +document.getElementById('secondy1').value;
    let x2 = +document.getElementById('secondx2').value;
    let y2 = +document.getElementById('secondy2').value;
    let x3 = +document.getElementById('secondx3').value;
    let y3 = +document.getElementById('secondy3').value;
    console.log(x1);
    let l1 = ((x1 - x2)**2 + (y1 - y2)**2)**0.5;
    let l2 = ((x1 - x3)**2 + (y1 - y3)**2)**0.5;
    let l3 = ((x2 - x3)**2 + (y2 - y3)**2)**0.5;
    if ((l1 + l2 > l3 + 0.00001) && (l1 + l3 > l2 + 0.00001) && (l2 + l3 > l1 + 0.00001)) {
        document.getElementById('secondOutput').innerHTML = 'NO';
    } else {
        document.getElementById('secondOutput').innerHTML = 'YES';
    }
}

document.getElementById('thirdButton').addEventListener('click', thirdTask);
function thirdTask () {
    let x1 = +document.getElementById('thirdx1').value;
    let y1 = +document.getElementById('thirdy1').value;
    let rad = +document.getElementById('rad').value;
    let x2 = +document.getElementById('thirdx2').value;
    let y2 = +document.getElementById('thirdy2').value;
    if (((x1 - x2)**2 + (y1 - y2)**2) <= rad**2) {
        document.getElementById('thirdOutput').innerHTML = 'YES';
    } else {
        document.getElementById('thirdOutput').innerHTML = 'NO';
    }
}
