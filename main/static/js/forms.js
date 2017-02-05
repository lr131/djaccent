function append_errors(err_lst) {
  var ul = $('<ul />').addClass('errors-list text-danger');
  $.each(err_lst, function(i, err) {
    ul.append( $('<li />').text(err) );
  });
  return ul;
}

function save_soc() {
  $("#soc_code").val($("#soc_code_status").val());
  $("#soc_status").val($("#soc_code_status option:selected").text());
}

$('.btn').button();

$('button[name=sex]').click(function() {
  $('button[name=sex]').toggleClass("btn btn-primary active");
  $('button[name=sex]').toggleClass("btn btn-default");
  $('button[name=sex]').toggleClass("active");
  $('span[name=sex]').toggleClass("text-muted");
  if ($("btmale").hasClass("btn btn-primary")) {
    $("#sex1").prop('checked', true);
  } else {
    $("#sex0").prop('checked', true);
  };
});

if (window.location.pathname != "/pat/add") {
  if ($('#soc_sode')) {
    $("#soc_code_status").val($("#soc_code").val());
  };
}


$('#no_job').click(function() {
  $("#soc_code").val("24");
  $("#soc_status").val("Неработающие");
  $("#soc_workpos").val("Не работает");
  $("#soc_work").val("Не работает"); 
});

$('input.focus').focus();

$('#bdate,#pol_issue_date,#doc_date').mask('99.99.9999');

$('#bdate,#name,#family,#patr,#snils').change(function() {
   $("#editkd").prop('checked', true)
  });

$('#pol_num').focus(function() {
    if ($('#pol_ser').val()) {
      $('#pol_num').mask('***?***********************************************',{placeholder:" "});
  } else {
    $('#pol_num').mask('9999999999999999');
  }
});


$('input[readonly],textarea[readonly]').click(function() {
  if ($(this).attr('id') != 'address') {
    $(this).removeAttr('readonly');
  }
});

$('#resform').click(function() {

  $('input[type=text],textarea,select').prop("readonly", true); 
});

$('select[readonly]').change(function() {
  $(this).removeAttr('readonly');
});

$('#scan_doc').click(function (event) {
  event.preventDefault();
  $.getJSON($(this).attr('href'));
});

$('form.ajax').submit(function(event) {
  event.preventDefault();
  $('body div.alert').alert('close');
  $.ajax({
    type: $(this).attr('method'),
    url: $(this).attr('action'),
    data: $(this).serializeArray(),
    dataType: 'json',
    context: $(this),
    beforeSend: function(jqXHR, settings) {
      $(this).find('button[type=submit]').addClass('disabled');
      $(this).find('fieldset').prop('disabled', true);
    }
  })
  .done(function(res) {
    if (res.ok) {
      $(this).find('.has-error').removeClass('has-error');
      $(this).find('ul.errors-list').remove();
      if (res.errors) {
        var form = $(this);
        $.each(res.errors, function(key, val) {
          form.find('[name='+key+']')
            .after(append_errors(val))
            .parent()
            .addClass('has-error');
        });
      } else {
        if (res.url)
          window.location.replace(res.url);
        if (res.msg)
          show_popup(res.category || 'success', res.msg)
        if ($(this).is('[callback]'))
          window[$(this).attr('callback')]($(this), res);
      }
    }
  })
  .fail(function() {
    $(this).find('button[type=submit]').removeClass('disabled');
    $(this).find('fieldset').prop('disabled', false);
    console.log('Error in ajax request');
  })
  .always(function() {
    $(this).find('button[type=submit]').removeClass('disabled');
    $(this).find('fieldset').prop('disabled', false);
  });
});

$('#datetimepicker1').datetimepicker({
  format: 'DD.MM.YYYY',
  locale: 'ru'
});
