$(document).on('ready', function() {
  console.log('Client JS Loaded');
  listDogs();
});

function listDogs(){
  $.get('/api/dogs', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#dog-list').prepend(
        '<tr>'+
          '<td>'+data[i].name+'</td>'+
          '<td>'+data[i].age+'</td>'+
          '<td>'+data[i].breed+'</td>' +
        '</tr>'
      );
    }
  });
}
