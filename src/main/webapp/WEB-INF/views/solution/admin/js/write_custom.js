// 파일첨부 텍스트 
$(function(){
    $('.upload_text').val('파일 선택 후 업로드해주세요.');
    $('.input_file').change(function(){
        var i = $(this).val();
        $('.attachedFile').show();
        $('.file-name').text(i);
    });

    $('.file-del').on("click",function(){
        $('.attachedFile').hide();
    });
});


// 모달 팝업 
var modal = document.getElementById('myModal');
var body = document.querySelector('body');
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];      
var cancle = document.getElementsByClassName("cancle")[0];                   
btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow="hidden";
}

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow="auto";
}
cancle.onclick = function() {
   modal.style.display = "none";
   body.style.overflow="auto";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow="auto";
    }
}
