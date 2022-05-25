/* write simulation events here */


$(document).ready(function(){
  var component = new Component("#simContainer",".sim-obj");
  console.log(component);
  $(window).resize(function(){
    component.setResponsive;

  })
  console.log(component)
  // component.setResponsive();

})