
generateOrdRef = function(){
  let init = +new Date();
  console.log(init);
  init += "";
  let transform = {"1" : "D", "2" : "F", "3" : "E", "4" : "K", "5" : "A", "6" : "J", "7" : "O", "8" : "P", "9" : "W", "0" : "Z"};
  let pref = "";
  let initArr = init.split("");
  initArr.forEach(function(init, idx){
      pref += transform[init];
  });
  pref = 'WT-' + pref;
  console.log(pref);
};
generateOrdRef();