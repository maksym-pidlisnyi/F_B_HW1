const fs = require('fs');

fs.readFile('text.txt', 'utf-8', function(err, data) {
    let key;
    let i;
    if (err) throw err;

    let lines = data.split('\n');
    for (i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim().toLowerCase();
    }

    lines = lines.filter(function(item, index, array) {
        return index === array.indexOf(item);
    });

    const words = {};
    for (i = 0; i < lines.length; i++) {
        const word = lines[i];
        if (word !== '') {
            key = sortString(word)
            const list = words[key] || [];
            list.push(word);
            words[key] = list;
        }
    }

    console.log("Anagrams:")
    for (key in words) {
        if (words.hasOwnProperty(key)) {
            if (words[key].length > 1)
                console.log(words[key].join(" - "));
        }
    }
});

function sortString(string) {
    return string.split('').sort().join('');
}

