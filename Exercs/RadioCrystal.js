
function shapeCrystal(input) {

    let targetSize = Number(input[0]);

    for (let i = 1; i <= input.length; i++) {
        let crystalSize = Number(input[i]);

        let op = 'Cut';
        let times = 0;
        let cutSize = cut(crystalSize);

        while (cutSize < targetSize || (Math.abs(targetSize - cutSize) === 1)) {
            crystalSize = cutSize;
            times++;
            cutSize = cut(crystalSize);
        }
    }

    function cut(size) {
        return size / 2;
    }

    function lap(size) {
        return size * 0.8;
    }

    function grind(size) {
        return size - 20;
    }

    function etch(size) {
        return size - 2;
    }

    function xRay(size) {
        return size + 1;
    }
}
