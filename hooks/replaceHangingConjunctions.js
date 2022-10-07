export function replaceHangingConjunctions(data) {
    const regEx = /(\b)(a|i|o|u|w|z|A|I|O|U|W|Z)(\b\s)/g;

    return data.replaceAll(regEx, "$2\u00a0")
}