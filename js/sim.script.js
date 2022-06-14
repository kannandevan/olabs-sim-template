/* write simulation events here */


$(document).ready(function(){
  var component = new Component("#simContainer",".sim-obj");
  var xx = component.getComponents();
  $(window).resize(function(){
     var yy = component.setResponsive(xx);
  })
  //  component.setResponsive(component);

})