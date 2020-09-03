change=()=>{
	document.querySelector('.link-top').classList.toggle("link_toggle");
	document.getElementById("charset").classList.toggle("hand");
}
submit=()=>{
	document.getElementById("form").classList.toggle("form");

}
//.....scrolling effects section .......
			window.addEventListener('scroll', moving =()=>{
			var scrolling = window.scrollY;
			console.log(scrolling);
			if (// checking for desktop height for effect
				scrolling == 1900 || scrolling == 1911 || scrolling == 1922 || scrolling == 1933 || scrolling == 1950
			 || scrolling == 1965 || scrolling == 1976 || scrolling == 1987 || scrolling == 1989 || scrolling == 1990
			 || scrolling == 1992 || scrolling == 1995 || scrolling == 2000 || scrolling == 2003 || scrolling == 2006
			 || scrolling == 2010 || scrolling == 2016 || scrolling == 2018 || scrolling == 2019 || scrolling == 2020
			 || scrolling == 2025 || scrolling == 2035 || scrolling == 2035 || scrolling == 2065 || scrolling == 2080
			 // checking for mobile height for effect
			 || scrolling == 5000 || scrolling == 5001 || scrolling == 5002 || scrolling == 5003 || scrolling == 5004
			 || scrolling == 5005 || scrolling == 5006 || scrolling == 5007 || scrolling == 5009 || scrolling == 5010
			) {
			// first counter
		let countdel = 0;
		let projectdel = document.getElementById('project_del');
		var stopdel = setInterval(deliver,100);
		function deliver(){
			projectdel.innerHTML= countdel + '+';
			if (countdel == 100) {
				clearInterval(stopdel);
			}
			else{
				countdel++;
			}
		}
		// second counter
		let countsat = 0;
		let projectsat = document.getElementById('project_sat');
		let stopsat = setInterval(satisfied,100);
		function satisfied(){
			projectsat.innerHTML= countsat + '%';
			if (countsat == 98) {
				clearInterval(stopsat);
			}
			else{
				countsat++;
			}
		}
		// third counter
		let countrel = 0;
		let projectrel = document.getElementById('project_rel');
		let stoprel = setInterval(relationship,100);
		function relationship(){
		projectrel.innerHTML = countrel + '%';
			if (countrel == 95) {
				clearInterval(stoprel);
			}
			else{
				countrel++;
			}
		}
		// fourth counter
		let countcre = 0;
		let projectcre = document.getElementById('project_cre');
		let stopcre = setInterval(creativity,100);
		function creativity(){
		projectcre.innerHTML = countcre + '%';
		if (countcre == 98) {
			clearInterval(stopcre);
		}
		else{
			countcre++;
		}
			
	  }

    }

});
//........scrolling top effects......b
	window.addEventListener('scroll',scroll_top=()=>{
		const scroll_top = window.scrollY;
		let topone = document.querySelector('.topone');
		let span_top = document.querySelector('.animation');
		let hampone = document.querySelector('#hampone');
		let hamptwo = document.querySelector('#hamptwo');
		let hampthree = document.querySelector('#hampthree');
		if (Math.floor(scroll_top) >= 200) {
			topone.style.backgroundColor = 'white';
			topone.style.transition = '1s ease';
			topone.style.backgroundColor = 'white';
			topone.style.boxShadow =  '-30px -30px 30px rgba(255,255,255,0.5),30px 30px 30px rgba(0,0,0,0.05)';
			hampone.style.backgroundColor = 'black';
			hamptwo.style.backgroundColor = 'black';
			hampthree.style.backgroundColor = 'black';
	
		}
		else{
			topone.style.backgroundColor = '';
			topone.style.transition = '1s ease';
			hampone.style.backgroundColor = '';
			hamptwo.style.backgroundColor = '';
			hampthree.style.backgroundColor = '';
		}
		
	});


	/*....... fading show on scroll......*/
	window.addEventListener('scroll',reveal=()=>{
		const scroll = window.scrollY;
		if (scroll >= 400) {
			let service = document.querySelector('#service');
			service.style.transition = '1s ease';
			service.style.visibility = 'visible';

		}
		else{
			service.style.visibility = '';
		}


			});

/*......toggle mode switching buttons.......*/
toggle_mode = ()=>{
document.querySelector(".mode").classList.toggle('mode_toggle');
document.querySelector("body").classList.toggle('body_toggle');
//document.querySelector("#toggle_p").classList.toggle('toggle_p');
	
};
/*......preloading animation */
 window.addEventListener('DOMContentLoaded', function() {
 const loader = document.querySelector('.outing');
 loader.className = 'hidden';
 loader.style.display = "none";
 loader.style.visibility ="hidden";
  
  });		

  //to check if there is overlay of element in the console
  var docwidth = document.documentElement.offsetWidth;
  [].forEach.call(
    document.querySelectorAll('*'),
    function(bl){
      if (bl.offsetWidth > docwidth) {
        console.log(bl);
      }
    }
    );
