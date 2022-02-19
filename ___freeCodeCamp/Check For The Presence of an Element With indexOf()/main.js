console.log('start')
function mutation(arr) {
    const element = arr[0].toLowerCase();
    const element_2 = arr[1].toLowerCase();
    for (let i = 0; i < element_2.length; i++) {        
        if (element.indexOf(element_2[i]) < 0) {
            return false
        }
    }
    return true;
}

mutation(["hello", "hey"])         //should return false.
console.log('mutation(["1", ""]', mutation(["hello", "hey"]));

mutation(["hello", "Hello"])           //should return true.
console.log('mutation(["2", ""]', mutation(["hello", "Hello"]));

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])          //should return true.
console.log('mutation(["3", ""]', mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

mutation(["Mary", "Army"])         //should return true.
console.log('mutation(["4", ""]', mutation(["Mary", "Army"]));

mutation(["Mary", "Aarmy"])            //should return true.
console.log('mutation(["5", ""]', mutation(["Mary", "Aarmy"]));

mutation(["Alien", "line"])            //should return true.
console.log('mutation(["6", ""]', mutation(["Alien", "line"]));

mutation(["floor", "for"])         //should return true.
console.log('mutation(["7", ""]', mutation(["floor", "for"]));

mutation(["hello", "neo"])         //should return false.
console.log('mutation(["8", ""]', mutation(["hello", "neo"]));

mutation(["voodoo", "no"])         //should return false.
console.log('mutation(["9", ""]', mutation(["voodoo", "no"]));

mutation(["ate", "date"])          //should return false.
console.log('mutation(["10", ""]', mutation(["ate", "date"]));

mutation(["Tiger", "Zebra"])           //should return false.
console.log('mutation(["11", ""]', mutation(["Tiger", "Zebra"]));

mutation(["Noel", "Ole"])          //should return true.console.log('mutation(["", ""]', mutation(["", ""]));
console.log('mutation(["12", ""]', mutation(["Noel", "Ole"]));

