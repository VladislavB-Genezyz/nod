'use strict'
window.onload = function(){
	let submit = document.getElementsByClassName('submit')[0];
	function nod(x, y) {
	  while (y !== 0) y = x % (x = y);
	  return x;
	}
	submit.addEventListener('click',(e)=>{
		let first = document.getElementsByClassName('first')[0].value;
		let second = document.getElementsByClassName('second')[0].value;

		let result = nod(first,second);
		let res = document.getElementsByClassName('nod__res-res')[0].textContent = result;



	})
}