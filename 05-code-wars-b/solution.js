function capitalize(s){
    let evenCaps = '';
    let oddCaps = '';
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenCaps += s.charAt(i).toUpperCase();
      } else {
        evenCaps += s.charAt(i);
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (i % 2 != 0) {
        oddCaps += s.charAt(i).toUpperCase();
      } else {
        oddCaps += s.charAt(i);
      }
    }
  
    
    return [evenCaps, oddCaps];
  };