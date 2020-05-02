class Formatter {
  //add static methods here
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
    
  }

  static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9\s]+/g, '')

  }

  static titleize(string){
    let sentence = string.split(" ")
    let newArr = []
    sentence.forEach(word => {
      if(word == sentence[0]){
        newArr.push(this.capitalize(word))
      }
      else if( word != "the"
      && word != "a"
      && word != "an" 
      && word != "but"
      && word != "of"
      && word != "and"
      && word != "for"
      && word != "at"
      && word != "by"
      && word != "from"){
       newArr.push(this.capitalize(word))
      }else{
        newArr.push(word)
      }
    })
    this.capitalize(newArr[0])
    console.log(newArr.join(" "))
    return newArr.join(" ")
  }


}