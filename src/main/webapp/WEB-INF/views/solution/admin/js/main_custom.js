

$(function(){
	// 헤더 토글 메뉴
	$("#accordian ul li a  h3").click(function(){
		$("#accordian ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});

	
    var activeName = "on";
    var $accordian = $("#accordian ul li");
    var $sub = $("#accordian ul li ul li");
    var $pageNum = $(".pageNum");
    var $searchBox = $("#searchTerm");
    var $searchBtn = $('.searchButton');

    $accordian.on("click",function(e){
       
        var $this = $(this);
            activeBtn($this);

    });
    $sub.on("click",function(e){
        
        var $this = $(this);
        subBtn($this);

    });

    $pageNum.on("click",function(e){
        e.preventDefault();
        var $this = $(this);
        addOn($this);
    });

    $searchBox.on("click",function(e){
        var $this = $(this);
        searchOn($this);
    });
    
    $searchBox.on("focusout",function(e){
        var $this = $(this);
        searchOut($this);
    });

    //actvieBtn함수 정의
    function activeBtn($this){
        $accordian.removeClass(activeName);
        $this.addClass(activeName);
    }
    function subBtn($this){
        $sub.removeClass("active");
        $this.addClass("active");
    }


    function addOn($this){
        $pageNum.removeClass(activeName);
        $this.addClass(activeName);
    }

    function searchOn($this){
        $searchBtn.addClass(activeName);
        $searchBox.addClass(activeName);
    }

    function searchOut($this){
        $searchBtn.removeClass(activeName);
        $searchBox.removeClass(activeName);
    }

});

function tooltip() {
    var x = document.querySelector('#tooltip ul');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };



  var $ipt = $('.searchTerm'),
    $clearIpt = $('.searchclear');

$ipt.keyup(function(){
  $(".searchclear").toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));
$clearIpt.click(function(){
  $(".searchTerm").val('').focus();
  $(this).hide();
});


$( document ).ready( function() {
    $( '.check-all' ).click( function() {
      $( '.cb' ).prop( 'checked', this.checked );
    } );
  } );