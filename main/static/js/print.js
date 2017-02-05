$('#print').click(function(){
  var addr = [];
  addr.push($("#address").val());
  var phones = [];
  var ph = $('input[name=phone]');
  $.each(ph, function(idx) {
    if (this.value)
      phones.push(this.value);
  });
  $(this).attr('href', '?prn=1&addr='+addr.join(' ')+'&phones='+phones.join(', '));
  return;
})

$('#consent').click(function(){
  $(this).attr('href', '?consent=1');
  return;
})