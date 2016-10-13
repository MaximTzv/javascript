
function matchWords([input]) {
    let regex = /[\w]+/g;
    let matches = input.match(regex);
    console.log(matches.join('|'));
}

matchWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
//matchWords(['_(Underscores) are also word characters']);
