let array = [3, 7, 6, 9, 11, 98, 2, 4, 68, 21, 22]
let valorBuscado = 22

function encontrarValor(array, valorBuscado){
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length - 1 - i; j++){
        if(array[j] > array[j + 1]){
          let auxiliar = array[j]
          array[j] = array[j + 1]
          array[j + 1] = auxiliar 
        }
      }
    }
    
    let inicioArray = 0
    let fimArray = array.length - 1
    let meioArray = Math.floor((inicioArray + fimArray)/2)
    
    if(valorBuscado > array[meioArray]){
      for(let i = meioArray; i < array.length; i++){
        if(array[i] === valorBuscado){
          console.log('O valor buscado foi achado na posição '+i+' do array')
        } else {
            console.log('O valor buscado não foi achado no array :(')
            break
        }
      }
    } else if (valorBuscado < array[meioArray]){
      for(let k = meioArray; k >= 0; k--){
        if(array[k] === valorBuscado){
          console.log('O valor buscado foi achado na posição '+k+' do array')
        } else {
            console.log('O valor buscado não foi achado no array :(')
            break
        }
      }
    }
    console.log(array)
  }
  
  encontrarValor(array, valorBuscado);
