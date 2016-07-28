$(".header").click(function() {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function() {
        $header.text(function() {
            return $content.is(":visible") ?
                "Brand Identity" : "Brand Identity";
        });
    });
});
$(".header1").click(function() {
    $header1 = $(this);
    $content = $header1.next();
    $content.slideToggle(500, function() {
        $header1.text(function() {
            return $content.is(":visible") ? "UX UI" :
                "UX UI";
        });
    });
});
$(".header2").click(function() {
    $header2 = $(this);
    $content = $header2.next();
    $content.slideToggle(500, function() {
        $header2.text(function() {
            return $content.is(":visible") ?
                "Web Design" : "Web Design";
        });
    });
});
$(".header3").click(function() {
    $header3 = $(this);
    $content = $header3.next();
    $content.slideToggle(500, function() {
        $header3.text(function() {
            return $content.is(":visible") ?
                "Photography" : "Photography";
        });
    });
});
$(".header4").click(function() {
    $header4 = $(this);
    $content = $header4.next();
    $content.slideToggle(500, function() {
        $header4.text(function() {
            return $content.is(":visible") ?
                "Paintings" : "Paintings";
        });
    });
});
$(document).ready(function() {
    $("img").on("click", function() {});
    $("a").on("click", function() {
        var imageLink = $(this).data("img-url");
        console.log(imageLink)
        $("#lightbox-img").attr('src', imageLink);
        $(".lightbox").show();
        $(".lightbox").on("click", function() {
            $(".lightbox").hide();
        });
    });
});

