$('form button[type=reset]').click(function(){
  $('#patients').empty();
  $('body div.alert').alert('close');
  $('input.focus').focus();
});

function show_results(form, res) {
  if (res.data) {
    if (!res.data.length) {
    $('#patients').html('<a class="list-group-item">Ничего не найдено</a>');
    }
    else {
      $('#patients').html(tmpl('pat_tmpl', res.data));
      if (res.total > 20)
        show_popup('success', 'Всего совпадений: '+res.total);
    } 
    $('#addpat').removeAttr("hidden");
    var params = $("#fio").val().trim();
    var re =  /(\d+)\/*(\d+)/; // проверяет, карта или фио в строке поиска. Регулярка соответствует карте
    if (params.search(re) == -1) {
      var ref = $('#add_pat').attr('href');
      var numpar = ref.indexOf('?fam');
      if (numpar != -1) {
        tref = ref.substring(0,numpar);
        ref = tref;
        tref = "";
      }
      var param = params.split(' ');
      var fam = param[0]
      ref = ref + '?fam='+fam;
      if (param[1]) {
        var name = param[1];
        ref = ref + '&name='+name;
      }
      if (param[2]) {
        var patr = param[2];
        ref = ref + '&patr='+patr;
      }
      
      $('#add_pat').attr('href', ref);
    }
 
  $(this).find('button[type=submit]').removeClass('disabled');
  $(this).find('fieldset').prop('disabled', false); 
  }
}
