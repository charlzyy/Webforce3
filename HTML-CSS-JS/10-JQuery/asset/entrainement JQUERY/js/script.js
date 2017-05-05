$(function(){
    $('#contact').on('submit', function(e){
      e.preventDefault();
        console.log(e.currentTarget
                    [1])
    })
});