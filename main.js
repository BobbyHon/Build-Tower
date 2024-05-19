function towerBuilder(nFloors) {
    let amount = 1 + (2 * (nFloors - 1))
    let str = '*'.repeat(amount)
    let answer = []
    
    while (amount > 1){
      answer.unshift(str)
      
      const firstIndex = str.indexOf('*')
      const lastIndex = str.lastIndexOf('*')
      
      str = str.split('')
      
      str[firstIndex] = ' '
      str[lastIndex] = ' '
      
      str = str.join('')
      amount -= 2
    }
    answer.unshift(str)
    
    return answer
    
  }