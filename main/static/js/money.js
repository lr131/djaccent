function update_balance() {
  var b1 = parseFloat($("#balance1").val());
  var k1 = parseFloat($("#k1").val());
  var k2 = parseFloat($("#k2").val());
  var k3 = parseFloat($("#k3").val());
  var discount = parseFloat($("#discount").val());
  var vis = 0;
  var tb = b1 - (vis * k1*k2*k3) + discount;
  $("input[name=balancenow]").val(tb.toString());
  $("#balancenowspan").html(tb);

}

update_balance();

$('input[name=k1],input[name=k2],input[name=k3],input[name=balance1],input[name=discount]').on('change', function() {
  update_balance();
})