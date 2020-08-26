let text = document.querySelector('p')
counter = 0
//text.innertext = 0

$('#reset').on('click', function() {
  counter = 0
  text.innertext = counter
  document.querySelector('p').textContent = text.innertext
  //alert(`You pressed button ${counter}`)
})


$('#dec').on('click', function() {
  counter--
  text.innertext = counter
  document.querySelector('p').textContent = text.innertext

})

$('#inc').on('click', function() {
    counter++
    text.innertext = counter
    document.querySelector('p').textContent = text.innertext
    //alert(`You pressed button ${counter}`)
  }


)
