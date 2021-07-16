

var accordion = accordion || {
	element: '',
	init: function(el){
		accordion.element = el;

		groupElement = document.getElementById(el).childNodes[1].nodeName.toLowerCase();
		headerElement = document.getElementById(el).childNodes[1].childNodes[1].nodeName.toLowerCase();
		contentElement = document.getElementById(el).childNodes[1].childNodes[3].nodeName.toLowerCase();
		

		$("#" + el + " " + groupElement).first().find(contentElement).css("display","block");
		accordion.addListener();
	},
	clicked: function(obj){
		if ($(obj).find("img").hasClass("open")){

		} else { 
			$("#" + accordion.element + " " + groupElement + " " + headerElement + " img").removeClass("open");
			$("#" + accordion.element + " " + groupElement + " " + headerElement + " img").addClass("closed");
				
			$("#" + accordion.element + " " + groupElement + " " + contentElement).slideUp();
			$(obj).parent().find(contentElement).slideDown();
			$(obj).parent().find(headerElement + " img").addClass('open');
			$(obj).parent().find(headerElement + " img").removeClass('closed');
		}
	},
	addListener: function(){
		$("#" + accordion.element + " " + groupElement + " " + headerElement).click(function(){
			accordion.clicked(this);
		});
	}
}

$( document ).ready(function(){

	/*  Initialise the acordion - 
         *  assumes will follow a document structure of element, section, h1 and with image
	 *  so we can pass it the top element - for reusability
	 */
	accordion.init("accordion");

});
