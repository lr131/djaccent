function show_popup(type, text){
  var el = $('<div />')
    .css({'width': '25%',
          'max-width': '50%',
          'z-index': 3000,
          'margin-left': 'auto',
          'margin-right': 'auto',
          'margin-top': '15px'})
    .addClass('alert alert-dismissable navbar-fixed-top alert-'+type)
    .attr('role', 'alert')
    .html($('<button />')
      .addClass('close')
      .attr('type', 'button')
      .attr('data-dismiss', 'alert')
      .attr('aria-hidden', 'true')
      .html('&times;'))
    .append($('<span />')
      .addClass('glyphicon glyphicon-exclamation-sign')
      .attr('aria-hidden', 'true'))
    .append($('<span />')
      .addClass('sr-only')
      .text(type))
    .append(' '+text)
  $('body div.alert').alert('close');
  $('body').prepend(el.fadeIn());
}

function show_ajax_error(code, err_msg) {
  var msg = {
      0: 'Сервер недоступен. Проверьте сетевое соединение.',
    401: 'Вы не авторизованы. Возможно время действия сессии истекло.',
    403: 'Вам запрещён доступ к запрашиваемому документу или действию. Для получения прав обратитесь к Администратору',
    404: 'Запрашиваемая Вами страница не найдена на сервере.',
    500: 'Внутренняя ошибка сервера приложения. Попробуйте повторить действие попозже.',
    502: 'Сервер приложения не отвечает на запрос. Попробуйте повторить действие попозже.'
  }
  var text = err_msg.length == 0 ? msg[code] : code+': '+err_msg+'<p>'+msg[code]+'</p>';
  show_popup('danger', text)
}

$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError){
  try {
     err_msg = jqXHR.responseJSON.msg;
  } catch(e) {
    err_msg = '';
  }
  show_ajax_error(jqXHR.status, err_msg);
});
