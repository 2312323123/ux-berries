function translate(text, x, y) {
  let result = ''
  let next_x = true
  while(text.length > 0) {
    while(!'0123456789.-'.includes(text[0]) && text.length > 0) {
      result += text[0]
      text = text.substring(1)
    }
    if(text.length <= 0) break
    if(next_x) {
      result += Math.round((parseFloat(text) + x) * 100) / 100
      next_x = false
    }
    else {
      result += Math.round((parseFloat(text) + y) * 100) / 100
      next_x = true
    }
    while('0123456789.-'.includes(text[0])) {
      text = text.substring(1)
    }
  }
  console.log(result)
  return
}

function scaleX(text, x) {
  let result = ''
  let next_x = true
  while(text.length > 0) {
    while(!'0123456789.-'.includes(text[0]) && text.length > 0) {
      result += text[0]
      text = text.substring(1)
    }
    if(text.length <= 0) break
    if(next_x) {
      result += Math.round((parseFloat(text) * x) * 100) / 100
      next_x = false
    }
    else {
      result += parseFloat(text)
      next_x = true
    }
    while('0123456789.-'.includes(text[0])) {
      text = text.substring(1)
    }
  }
  console.log(result)
  return
}

function scaleY(text, y) {
  let result = ''
  let next_x = true
  while(text.length > 0) {
    while(!'0123456789.-'.includes(text[0]) && text.length > 0) {
      result += text[0]
      text = text.substring(1)
    }
    if(text.length <= 0) break
    if(next_x) {
      result += parseFloat(text)
      next_x = false
    }
    else {
      result += Math.round((parseFloat(text) * y) * 100) / 100
      next_x = true
    }
    while('0123456789.-'.includes(text[0])) {
      text = text.substring(1)
    }
  }
  console.log(result)
  return
}

function scale(text, a) {
  let result = ''
  while(text.length > 0) {
    while(!'0123456789.-'.includes(text[0]) && text.length > 0) {
      result += text[0]
      text = text.substring(1)
    }
    if(text.length <= 0) break

    result += Math.round((parseFloat(text) * a) * 100) / 100
      
    while('0123456789.-'.includes(text[0])) {
      text = text.substring(1)
    }
  }
  console.log(result)
  return
}


console.clear()
translate(`d="M96.6 -107.5C124.7 -91.6 146.6 -60.7 163.9 -20.3C181.3 20 194.1 69.8 178.5 109C163 148.3 118.9 177 72.8 189.1C26.7 201.1 -21.5 196.4 -70.2 183C-118.9 169.6 -168 147.4 -191.1 109.4C-214.3 71.3 -211.5 17.2 -194.8 -26.8C-178 -70.8 -147.2 -104.7 -112.4 -119.5C-77.6 -134.2 -38.8 -129.8 -2.2 -127.1C34.3 -124.4 68.6 -123.5 96.6 -107.5">`, 
-290.5, -200.5)