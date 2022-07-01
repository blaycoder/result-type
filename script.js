$(document).ready(function (){
    $(".tab").on("click", function (){
        var catergoryId = $(this).data("id");

        $(".tab, .tab-pane").removeClass("active");
        $(this).addClass("active");
        $("#" + catergoryId).addClass("active");
    });
});