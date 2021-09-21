let words = '| / - \ | / - \ |'
let splitwords = words.split(/(\s+)/)
for (let i = 0; i < splitwords.length; i++) {
  setTimeout(function () { process.stdout.write(`\r${splitwords[i]}`); }, i * 250)
}
