var elForm = document.querySelector('.site-form') //form

var elInput = elForm.querySelector('.site-input') //input

var elButton = elForm.querySelector('site-button') //button

var siteCheckbox = elForm.querySelector('.danger-input-checkbox') //checkbox

var elListGroup = document.querySelector('.list-group') //ul

var elAlert = document.querySelector('.alert') //option

var marketList = []

var markets = function (evt) {
  evt.preventDefault()
  var resultInput = elInput.value.trim()

  elInput.value = ''
  elInput.focus()
  elListGroup.innerHTML = ''
  
  if (!elInput.value.trim() && !isNaN(resultInput)) {
    elAlert.classList.add('d-block')
    elAlert.textContent = `Iltimos o'zizngiz uchun esda qolarli qilib yozing!!! hohlagan harflarni bosip tashlamang.`
    elInput.value = ''
    return
  }

  elAlert.classList.remove('d-block')

  var elCheckedInput = siteCheckbox.checked

  if (elCheckedInput) {
    marketList.unshift(resultInput)
  }
  else (
    marketList.push(resultInput)
  )

  for (market of marketList) {
    var elNewLi = document.createElement('li')
    elNewLi.textContent = market;
    elNewLi.classList.add('border', 'p-2', 'rounded')
    elListGroup.appendChild(elNewLi)
  }

  siteCheckbox.checked = false;
}

elForm.addEventListener('submit', markets)