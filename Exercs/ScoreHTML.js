
function scoreToHTML(scoreStr) {
    let scoreArr = JSON.parse(scoreStr);
    let html = '<table>\n';

    html += '<tr><th>name</th><th>score</th>\n';
    for (let score of scoreArr) {
        html += 'tr'
        html += `<tr></tr>\n`
    }
    return html += '</table>'
}

console.log(scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']));
