
function asList(arr) {
    console.log("<ul>");
    for (let item of arr) {
        console.log(" <li>" + escapeHtml(item) + "</li>");
    }
    console.log("</ul>");

    function escapeHtml(str) {

        let result = '';
        for (let ch of str) {
            if (ch == '<')
              result += '&lt;';
            else if (ch == '>')
              result += '&gt;';
              else if (ch == '"')
                result += '&quot;';
                else if (ch == '\'')
                  result += '&#39;';
                  else if (ch == '&')
                    result += '&amp;';
                  else
                    result += ch;
        }

        return result;
    }
}



asList(['<b>unescaped text</b>', 'normal text']);
