//....... preloader animation 1
  window.addEventListener('load', function() {
     const loader = document.querySelector('.outing');
    loader.className = 'hidden';
    loader.style.display = "none";
    loader.style.visibility ="hidden";
   });		
 window.addEventListener('scroll',scrolling=()=>{
      let scrolling = window.scrollY;
      if (
          scrolling == 590 || scrolling == 591 || scrolling == 592 || scrolling ==593 || scrolling == 595
       || scrolling == 665 || scrolling == 676 || scrolling == 687 || scrolling == 689 || scrolling == 690
       || scrolling == 692 || scrolling == 695 || scrolling == 700 || scrolling == 703 || scrolling == 706
       || scrolling == 710 || scrolling == 716 || scrolling == 718 || scrolling == 719 || scrolling == 720
       || scrolling == 725 || scrolling == 735 || scrolling == 745 || scrolling == 765 || scrolling == 780
         )
      {
            // first counter
            let firstcount = 10;
            let bar =  document.querySelector('#mybar');
            let interval = setInterval(firstscroll,100);
            function firstscroll() {
              bar.innerHTML = firstcount + '%';
            if (firstcount == 100) {
              clearInterval(interval);
            }
            else{
              firstcount++;
              bar.style.width = firstcount + '%';
            }
          }
          // second counter
          let secondcount = 10;
          let bars = document.querySelector('#mybars');
          let secondinterval = setInterval(secondscroll,100);
          function secondscroll() {
             bars.innerHTML = secondcount + '%';
             if (secondcount == 100) {
              clearInterval(secondinterval);
             }
             else{
              secondcount++;
              bars.style.width = secondcount + '%';
             }
           }
           // third counter
           let thirdcount = 10;
           let barss = document.querySelector('#mybarss');
           let thirdinterval = setInterval(thirdscroll,100);
           function thirdscroll(){
            barss.innerHTML = thirdcount + '%';
            if (thirdcount == 100) {
              clearInterval(thirdinterval);
            }
            else{
              thirdcount++;
              barss.style.width = thirdcount + '%';
            }
           } 
        }
      });
      window.addEventListener('scroll',function scrolls(){
      const scrollables = document.documentElement.scrollHeight - window.innerHeight;
      let projscroll = window.scrollY;
      if(// checking desktop height 
          projscroll == 2500 || projscroll == 2511 || projscroll == 2522 || projscroll == 2533 || projscroll == 2550
       || projscroll == 2565 || projscroll == 2576 || projscroll == 2587 || projscroll == 2589 || projscroll == 2590
       || projscroll == 2592 || projscroll == 2595 || projscroll == 2600 || projscroll == 2603 || projscroll == 2606
       // checking for mobile height for effect
       || projscroll == 5690 || projscroll == 5691 || projscroll == 5692 || projscroll == 5693 || projscroll == 5694
       || projscroll == 5695 || projscroll == 5696 || projscroll == 5697 || projscroll == 5699 || projscroll == 5700
       || projscroll == 5711 || projscroll == 5712 || projscroll == 5713 || projscroll == 5715 || projscroll == 5717
       || projscroll == 5716 || projscroll == 5718 || projscroll == 5719 || projscroll == 5721 || projscroll == 5720){
        // first counter
      let count = 10;
  let clientdev = document.getElementById('clientdev');
   let clientint = setInterval(clicking,100);
    function clicking() {
      clientdev.innerHTML = count;
      if (count == 1900) {
        clearInterval(clientint);
      }
      else{
        count = count + 10;
      }
    };
    // second counter
    let award = document.getElementById('award');
    let awards = 10; 
    let awardint = setInterval(clickings,100);
    function clickings() {
      award.innerHTML = awards;
      if (awards == 400) {
        clearInterval(awardint);
      }
      else{
       awards = awards + 5;
      }
    };
    // third counter
    let projectdev = document.getElementById('projectdev');
    let projectdevcap = 10; 
    let projectint =  setInterval(clickingss,100);
    function clickingss() {
      projectdev.innerHTML = projectdevcap;
      if (projectdevcap == 2000) {
        clearInterval(projectint);
      }
      else{
       projectdevcap +=10;
      }

    }

   }; 

 });

		function change(){
	document.querySelector('.navigation').classList.toggle("navigate");
	document.querySelector('#charset').classList.toggle("charset");
	document.querySelector('.header-top').classList.toggle('header-toggle');
}
		
	function imaging(){
			var tog = document.getElementById('togglenow');
			if (tog.style.display == 'none') {
				tog.style.display = 'block';
			}
			else{
				tog.style.display = 'none';
			}
		};
  
			
		const array = [
		{
    
			name:"<b>"+'~'+'Midas Accessories'+"</b>",
			quote:'I had the best collaboration ever. I am very excited about the way that my new website looks. And all because of the awesome guy from Sultan designs studio.'
		},
		{
			name:"<b>"+'~'+'Artluxe Nigeria'+"</b>",
			quote:'We have been very much impressed by Sultan Designs Studio. They grasped our needs and always produce stunning designs.Needless to say, we are extremely satisfied with the result.Thank you!'
		},
		{
			name:"<b>"+'~'+'Faam Fabrics'+"</b>",
			quote:'The work they did made me impressed on multiple levels.i have been very happy about the whole process and they have done great a great job.They are fast to deliver new ideas and alwyas helpful with our creative needs'
		},
		];
    
		const qoutes = document.querySelector('#quotes');
		const authors = document.querySelector('#authors');
		designs = ()=>{
			let random = Math.floor(Math.random()*array.length);
			quotes.innerHTML = '" ' + array[random].quote + ' "';
			authors.innerHTML =  array[random].name;
		}
		setInterval(designs,6000);
		
   //to check if there is overlay of element in the console
  var docwidth = document.documentElement.offsetWidth;
  [].forEach.call(
    document.querySelectorAll('*'),
    function(el){
      if (el.offsetWidth > docwidth) {
        console.log(el);
      }
    }
    );
