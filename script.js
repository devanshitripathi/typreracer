const textelement = document.getElementById('text')
const text = textelement.innerText.toString()
const inputelement = document.getElementById('input')

textelement.innerHTML = ''
text.split('').forEach(character => {
    const letter = document.createElement('span')
    letter.innerText = character
    textelement.appendChild(letter)
})

inputelement.value = null

inputelement.addEventListener('input', () => {
  const arrtxt = textelement.querySelectorAll('span')
  const arrval = inputelement.value;
  let correct = true
  var len = 0;
  arrtxt.forEach((letter, i) => {
    const character = arrval[i]
    // if (character == ' ') {
    //     inputelement.value = null;
    // }
    // else 
    if (character == null) {
      letter.classList.remove('correct')
      letter.classList.remove('incorrect')

      correct = false
    } else if (character === letter.innerText) {
      letter.classList.add('correct')
      letter.classList.remove('incorrect')
      len++;
    } else {
      letter.classList.remove('correct')
      letter.classList.add('incorrect')
      correct = false
    }
  })
  var t = len*70/text.length;
  document.getElementById("car").style.marginLeft = t + "%";
})
