
function expSplit([input]) {
    let exp = input.split(/[\s\(\),;\.]+/g).filter(w => w != '');
    for(let line of exp)
      console.log(line);
}

//expSplit(['let sum = 4 * 4,b = "wow";']);
expSplit(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);
