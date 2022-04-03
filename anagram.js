function isAnagram(str1, str2){
    if(str1.length !== str2.length)
        return false
    let countStr1 = {}
    let countStr2 = {}
    for(let char of str1){
        countStr1[char] =  (countStr1[char] ||  0) + 1
    }
    for(let char of str2){
        countStr2[char] =  (countStr2[char] ||  0) + 1
    }
    for(let key in countStr1){
        if(countStr1[key] !== countStr2[key]){
            return false
        }   
    }
    return true;
}
console.log(isAnagram('aaz', 'zza'))
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('awesome', 'awesom'))
console.log(isAnagram('qwerty', 'qeywrt'))
console.log(isAnagram('textwisttime', 'timewisttext'))