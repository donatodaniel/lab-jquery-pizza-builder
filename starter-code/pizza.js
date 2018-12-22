// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $('.crust').removeClass('crust-gluten-free');
    $('.sauce').removeClass('sauce-white');

    $('.btn-pepperonni').click(function(){
        // let $pep = $(this).parent();
        let total = $('strong').html().slice(1,3) * 1;
        let pepPrice = $("li:contains('$1 pepperonni')").html().slice(1,3) * 1;
        $(this).toggleClass('active');
        $('.pep').toggle(function(){total -= pepPrice},function(){total += pepPrice});
        $("li:contains('$1 pepperonni')").toggle(600);        
        $('strong').html("$"+total);
        console.log(pepPrice);
        
    });
    $('.btn-mushrooms').click(function(){
        $(this).toggleClass('active');
        $('.mushroom').toggle('btn-mushrooms');
        $("li:contains('$1 mushrooms')").toggle(600);
    });
    $('.btn-green-peppers').click(function(){
        $(this).toggleClass('active');
        $('.green-pepper').toggle('.green-pepper');
        $("li:contains('$1 green peppers')").toggle(600);
    });
    $('.btn-sauce').click(function(){
        $(this).toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
        $("li:contains('$3 white sauce')").toggle(600);
    });
    $('.btn-crust').click(function(){
        $(this).toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
        $("li:contains('$5 gluten-free crust')").toggle(600);
    });

});

