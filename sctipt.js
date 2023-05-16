let smallLetter = 'abcdefghijklmnopkrstuvwxyz'
let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = '1234567890'
let symbols = ',.!@#$%^&*'
let passWordArr = [smallLetter,capitalLetter,numbers,symbols]
let range = document.querySelector('#length')
let value = document.querySelector('label[for="length"]')
let copy = document.querySelector('.copy')
let next = document.querySelector('.next')
let textField = document.querySelector('.text-field')
let passWord = ''
let paste = document.querySelector('.paste')
let pasteIcon = document.querySelector('.paste-icon')

// let lenght = range.value
length = range.value
let generatePassWord = (length)=>{
    for (let index = 0; index < length; index++) {
        randomType = passWordArr[Math.floor(Math.random()*passWordArr.length)]
        randomSymbol = randomType[Math.floor(Math.random()*randomType.length)] 
        passWord += randomSymbol
        
    }
    return passWord
}

range.addEventListener('input',()=>{
    length = range.value
    console.log(length)
    value.innerHTML = `${range.value}`
   
})
next.addEventListener('click',()=>{
    passWord = ''
    textField.innerHTML = `${generatePassWord(length)}`

    
})
copy.addEventListener('click',()=>{
    readValue = textField.innerText
    navigator.clipboard.writeText(readValue)
   pasteIcon.addEventListener('click', ()=>{    
    navigator.clipboard.readText().then((readValue) => {
        if (paste.value = '') {
            paste.value = readValue
        }else {
            paste.value = ''
            paste.value = readValue
        }
    })
   }) 
   
})
// paste.value= 'wooooooooooo'