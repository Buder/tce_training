$.openBtn.addEventListener("click", function(){
   var win2 = Alloy.createController('win2').getView();
   $.main.openWindow(win2);
});

$.main.open();
