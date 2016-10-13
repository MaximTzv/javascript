
function forum(input) {
    let usersToBeBanned = input.pop().split(' ');
    let text = input.join('\n');
    let regex = /#([a-zA-Z][\w-]+[a-zA-Z0-9])\b|<code>[\w\W]*?<\/code>/g;
    let hRef = '<a href="/users/profile/show/';
    let closingA = '\</a\>';
    let matches;

    Array.prototype.contains = function (arg) {
        for (var array = 0; array < this.length; array++)
            if (this[array] === arg)
                return true;
        return false;
    };

    while ((matches = regex.exec(text)) != null) {
        if (matches[0].match(/<code>[\w\W]*?<\/code>/)) {
            continue;
        }
        if (usersToBeBanned.contains(matches[1])) {
          text = text.replace(matches[0], '*'.repeat(matches[1].length));
        } else {
          let strToReplace = hRef + matches[1] + '">' + matches[1] + closingA;
          text = text.replace(matches[0], strToReplace);
        }
    }

    console.log(text);
}

forum([
  "#RoYaL: I'm not sure what you mean, but I am confident that I've written everything correctly. Ask #iordan_93 and #pesho if you don't believe me <code>#trying to print stuffprint(\"yoo\")</code>",
"pesho gosho"
]);
