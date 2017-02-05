
$('#omsnum').click(function(event) {
  //$ здесь получаем все id текстовых полей на странице
  var param = ""; 
  $('input').each(function() {
  param = param + this.id + ","
  });
  console.log("param " + param);
  var tags = {'args': param};
  $.getJSON('http://localhost:5050',  tags, function(res){
    console.log(res);
    if (res) {
      if (res.ok == 0)
        show_popup('warning', res.msg);
      else {
        $.each(res.data, function(key) {
          if ($('[name='+key+']').val() != res.data[key] && key != 'sex' && res.data[key]) {
          	// if (key == 'bdate' || key == 'dataend' || key == 'data_make_oms' || key == 'data_start_insurance' || key == 'data_end_insurance') {
      			if (key == 'bdate' ) {
                		var temp = res.data[key].split('-');
                		$('[name='+key+']')
      	          	.val(temp[2] + temp[1] + temp[0])
      	            .removeProp('readonly');
            }
          	else { 
          		if (key == 'name' || key == 'family' || key == 'patr') {
          			var dowreg = res.data[key].toLowerCase();
          			var flit = dowreg[0].toUpperCase();
          			$('[name='+key+']')
	          		.val(flit + dowreg.substring(1))
	          		.removeProp('readonly');
          		}  
          		else {
          			$('[name='+key+']')
	          		.val(res.data[key])
	          		.removeProp('readonly');
          		}
          	}
          };
      		if (key == 'sex') {
      			if (!res.data[key]) 
      				$('[name='+key+'][value=0]').prop("checked", true)
      			else 
      				$('[name='+key+'][value=1]').prop("checked", true);
      		  } 
          $('[name='+key+']').focus();
          // var t = $('[name='+key+'][value=0]');
          // console.log(t);
          });
        };
      }
  });
})