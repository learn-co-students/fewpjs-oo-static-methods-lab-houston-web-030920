class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice( 1 )
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringToCapitalize = string.charAt(0).toUpperCase() + string.slice(1)
    let array = stringToCapitalize.split(" ")
    return array.map(string => {
      if (exceptions.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")




  }
  }
