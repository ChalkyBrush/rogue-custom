
$(window).load(function(){
  $('#dvLoading').fadeOut(1200);
});

$("#color1")[0].click(function() {
Pixastic.revert($("#part"+selection)[0])
});

$("#color2")[0].click(function() {
Pixastic.revert($("#part"+selection)[0]);
Pixastic.process($("#part"+selection)[0], "coloradjust", {red:0.1,green:0.0,blue:0});
});

$("#color3")[0].click(function() {
Pixastic.revert($("#part"+selection)[0]);
Pixastic.process($("#part"+selection)[0], "coloradjust", {red:0.05,green:0.0,blue:0.05});
});