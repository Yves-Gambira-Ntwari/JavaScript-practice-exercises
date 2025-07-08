function areYouPlayingBanjo(name) {
 return name.charAt(0).toLowerCase() == "r" ? `${name} play Banjo`: `${name} does not play banjo`
  }
console.log(areYouPlayingBanjo("Rora"));
