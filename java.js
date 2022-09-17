const tarefa = []




$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nome_tarefas').val();
    const novoParagrafo = $('<li></li>')

 

    $(novaTarefa).appendTo(novoParagrafo);
    $(novoParagrafo).appendTo('ul');


    
    $('#nome_tarefas').val('');


    
})



