
$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $("input").val();

 
    $(`<li>${novaTarefa}</li>`).appendTo('ul');

    
    $('input').val('');

    $('li').click(function(){
        $('li').css("text-decoration", "line-through");
    })



    
})



