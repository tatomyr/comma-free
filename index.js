const rePair = /\s*(\w+|".*?"|'.*?')\s*:\s*(\w+|".*?"|'.*?')/g 

const parsePairs = text => text.replace(rePair, pair => `${pair},`)

const reTrailing = /,\s*}/g

const parseTrailing = text => text.replace(reTrailing, ([comma, ...rest]) => rest.join(''))

module.exports = {
    parsePairs,
    parseTrailing,
}