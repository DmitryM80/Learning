document.querySelector('#ts-1').addEventListener('click', function () {
    const numsArr = [];
    const userNum = parseInt(prompt('Enter your number (1 to 1000):'));
    let inArray = 'not ';

    for (let i=0; i<30; i++) {
        let newNum = Math.floor(Math.random(1000) * 1000);
        numsArr.push(newNum);        
        if (userNum == newNum) inArray = '';
    }

    document.querySelector('#userNum').innerText = 'Your number is: '+ userNum;
    document.querySelector('#arr-1').innerText = 'The Array: '+numsArr;
    document.querySelector('#result-1').innerText = 'Your number is '+ inArray +'in the Array';
});


document.querySelector('#ts-2').addEventListener('click', function () {
    const numsArr = [];
    let minNum = 1000;
    let maxNum = 0;

    for (let i=0; i<30; i++) {
        let newNum = Math.floor(Math.random(1000) * 1000);
        numsArr.push(newNum);        
        if (newNum < minNum) minNum = newNum; 
        if (newNum > maxNum) maxNum = newNum;
    }

    document.querySelector('#arr-2').innerText = 'The Array: '+numsArr;
    document.querySelector('#result-2-min').innerText = 'Minimal: '+ minNum;
    document.querySelector('#result-2-max').innerText = 'Maximal: '+ maxNum;
    document.querySelector('#result-2-diff').innerText = 'Difference: '+ (maxNum - minNum);
});