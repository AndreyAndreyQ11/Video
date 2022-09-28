//import { heavyСalculation } from '../script.js'

onmessage = function (e) {
    const num = e.data;
    let result = 0;
    if (Number.isInteger(num) && num > 1) {
        for (let i = num; i > 0; i--) {
            result += i;
        };
        postMessage(result);
    } else {
        throw new Error('Ведите натуральное число');
    }
};
