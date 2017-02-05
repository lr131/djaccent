$('[name=rec]').click(function(){
  var ref = $(this).children('a').attr('href');
  var timeb = $('[name=time]').html();
  $(this).attr('href', ref + '?tim='+timeb);
  return;
});

