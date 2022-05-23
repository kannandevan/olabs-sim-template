var temp = 0;
var ht = 113;
var blurred=0;
var micro=1;
var slabZoom=1;
var fineAdjustment=false;
var refValue,resultValue;
//================ adj ============
var tempadj1=1;
var tempadj2=0;
var tempadj3=0;
var flag=0;
var tempadj21=0;
var tempadj22=0;
//================ adj end ============
var s=1;
//================ second frame flag=============
  var secondturn=0;
//================ second frame flag end ==============
function ChangeScreenDistance1(y) {
  $("#fineAdjust").css({ 'top': y + '%' });
  $("#height").empty()
  $('#height').html((16 - (y - 26)) + "cm");
}
function ChangeScreenDistance3(up) {
  s=up;
  console.log(s);
}
$(document).ready(function () {
  var xx = Component("#simContainer", ".sim-obj");
  console.log(xx);

  $("#displaySlab").css({ display: 'none' })
  $("#slidecontainer").css({ display: 'none' })

  $("#Paper").click(function () {
    
    if ($("#Paper").prop('disabled', true)) {
    if( $("#paperPlace").css({ display: "block" })){
      $("#paperPlace1").css({ display: "block" })  
      $("#circle").css({ display: "block" })  
      $("#scale").css({ display: "block" })
  
                  

      // $("#line").css({ display: "block" }) 
      $("hr.new1").css({display:"block"})
 
      $("hr.new2").css({display:"block"})
//===================================  left con ======================
  $("#arrowTop").click(function () {
    if ((parseInt($(microScopeFocus).css('top')) >= ht)) {
      $('#microScopeFocus').animate({ 'top': parseInt($(microScopeFocus).css('top')) - 10 + "px" }, function () {
        $("#arrowTop").css({ 'pointer-events': "unset" });
        $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) -10 + "px" });
        tempadj1=tempadj1-1;
        blur(tempadj1,tempadj2,tempadj3);
      })
    }
  })
  $("#arrowDown").click(function () {
    if ((parseInt($(microScopeFocus).css('top')) <= 212)) {
      $('#microScopeFocus').animate({ 'top': parseInt($(microScopeFocus).css('top')) + 10 + "px" }, function () {
        $("#arrowDown").css({ 'pointer-events': "unset" });
        $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) +10 + "px" });
        tempadj1=tempadj1+1;
        blur(tempadj1,tempadj2,tempadj3);
      });
    }
  })
  //===================================  left con end ======================
    //===================================  right con ======================
    $("#arrowBottom").click(function () {
      if (parseInt($(fineAdjust).css('top')) >= 292) {
        $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) - 10 + "px" }, function () {
          $("#arrowBottom").css({ 'pointer-events': "unset" });
          $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) -10 + "px" });
          tempadj2=tempadj2-1;
          tempadj1=tempadj1-1;
          blur(tempadj1,tempadj2,tempadj3);
        });
        $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) - 10 + "px" });
      }
    })
    $("#arrowTop1").click(function () {
      var t = parseInt($(microScopeFocus).css('top'));
      if (t <= 212) {
        if (parseInt($(fineAdjust).css('top')) <= 400) {
          $("#fineAdjust").animate({ "top": parseInt($(fineAdjust).css('top')) + 10 + "px" }, function () {
            $("#arrowTop1").css({ 'pointer-events': "unset" });
            $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) +10 + "px" });
            flag=1;
            tempadj2=tempadj2+1;
            tempadj1=tempadj1+1;
            blur(tempadj1,tempadj2,tempadj3);
          });
          $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) + 10 + "px" });
        }
      }
   
      $("#arrowLeft").click(function () {
        //$("#arrowLeft").css({'pointer-events':"none"});
        if (parseInt($(fineAdjust).css('top')) >= 292) {
          $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) - 5 + "px" }, function () {
            $("#arrowLeft").css({ 'pointer-events': "unset" });
            tempadj1=tempadj1-0.5;
            //tempadj2=tempadj2-0.5;
            tempadj3=tempadj1-0.5;
            blur(tempadj1,tempadj2,tempadj3);
          });
          $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) - 5 + "px" });
        }
      })
////////////////glass slab arrow/////////

    //   $("#arrowRight1").click(function () {
    //     //=================================== un ==================================
    //     console.log('hiiiiiiiiiiiiiii');
    //     if (parseInt($(fineAdjust).css('top')) <= 400) {
    //       $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) + 5 + "px" }, function () {
    //         $("#arrowRight1").css({ 'pointer-events': "unset" });
    //         tempadj1=tempadj1+0.5;
    //         //tempadj2=tempadj2+0.5;
    //         tempadj3=tempadj1+0.5;
    //         blur(tempadj1,tempadj2,tempadj3);
    //       });
    //       $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) + 5 + "px" });
    //     }
    //   })
    // //==============================================================================
    //   $("#arrowLeft1").click(function () {
    //     //$("#arrowLeft").css({'pointer-events':"none"});
    //     if (parseInt($(fineAdjust).css('top')) >= 292) {
    //       $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) - 5 + "px" }, function () {
    //         $("#arrowLeft1").css({ 'pointer-events': "unset" });
    //         tempadj1=tempadj1-0.5;
    //         //tempadj2=tempadj2-0.5;
    //         tempadj3=tempadj1-0.5;
    //         blur(tempadj1,tempadj2,tempadj3);
    //       });
    //       $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) - 5 + "px" });
    //     }
    //   })


  })
  
}

$("#displaySlab").css({ display: 'block' })

      $("#placeSlab").click(function () {
        $("#steelPieceArrow").children("#arrowLeft").hide();
        $("#steelPieceArrow").children("#arrowLeft1").show();
        $("#steelPieceArrow").children("#arrowRight").hide();
        $("#steelPieceArrow").children("#arrowRight1").show();

        $("#arrowBottom").hide();
        $("#arrowBottom1").show();
        $("#arrowTop1").hide();
        $("#arrowTop2").show();
        secondturn=1;
        $("#placeSlab").prop('disabled', true);
        $("#arrowTop").css({'pointer-events':"none"});
        $("#arrowDown").css({'pointer-events':"none"});
        $("hr.new1").css({display:"block"});
        $("hr.new2").css({display:"block"});
        if(s==1)
        {
          $("#glassSlab1").css({ display: "block" });
          $("#paperPlace1").css({'filter':'blur(0.5px)'});
          tempadj21=0.5;
        }
        else if(s==2)
        {
          $("#glassSlab2").css({ display: "block" });
          $("#paperPlace1").css({'filter':'blur(1.0px)'});
          tempadj21=1.0;
        }
        else 
        {
          if(s==3)
          {
            $("#glassSlab3").css({ display: "block" });
            $("#paperPlace1").css({'filter':'blur(1.5px)'});
            tempadj21=1.5;
          }
        }
        $("#arrowLeft1").click(function () {
          if (parseInt($(fineAdjust).css('top')) >= 0) {
            $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) - 5 + "px" }, function () {
              tempadj21=tempadj21-0.5;
              blur2(0,0,tempadj21);
              $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) -5 + "px" });
            });
            $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) - 5 + "px" });
          }
        })
        $("#arrowRight1").click(function () {
          if (parseInt($(fineAdjust).css('top')) <= 1000) {
            $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) + 5 + "px" }, function () {
              tempadj21=tempadj21+0.5;
              blur2(0,0,tempadj21);
              $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) +5 + "px" });
            });
            $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) + 5 + "px" });
          }
        })
        $("#arrowBottom1").click(function () {
          if (parseInt($(fineAdjust).css('top')) >= 0) {
            $('#fineAdjust').animate({ 'top': parseInt($(fineAdjust).css('top')) - 10 + "px" }, function () {
              tempadj21=tempadj21-1;
              blur2(0,0,tempadj21);
              $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) -10 + "px" });
            });
            $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) -10 + "px" });
          }
        })
        $("#arrowTop2").click(function () {
          if (parseInt($(fineAdjust).css('top')) <= 1000) {
            $("#fineAdjust").animate({ 'top': parseInt($(fineAdjust).css('top')) + 10 + "px" }, function () {
              tempadj21=tempadj21+1;
              blur2(0,0,tempadj21);
              $("#vernierScale").animate({ 'top': parseInt($(vernierScale).css('top')) +10 + "px" });
            });
            $("#microScopeFocus").animate({ "top": parseInt($(microScopeFocus).css('top')) +10 + "px" });
          }
        })
        
      });
        $("#Powder").click(function () {
        $("#Powder").prop('disabled', true);
        $("#placePowder").css({ display: "block" });
        $("#placePowderZoom").css({ display: "block" });
        $("hr.new1").css({display:"block"})
        $("hr.new2").css({display:"block"})
        $("#answer").show();
        $('#showAns').click(function() {
        $("#refIndex").toggle(this.checked);
    //last task
        $("#glassSlab1").css({ display: "block" });
        $("#paperPlace1").css({'filter':'blur(0.5px)'});
      });
      });
    }


  });
  $("#refIndex").hide();
  $("#answer").hide();




  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  }

  $("#reset").click(function () {//*--Function to click reload button to reset all events---
    window.location.reload();
  });
})
//======================== fun b ================
function blur(number1,number2,number3)
{
    number1=Math.abs(number1);
    number2=0;
    number3=Math.abs(number3);
    var Temp1String=number2.toString();
    var Temp2String=number3.toString();
    var po='.';
    var con=Temp1String.concat(po);
    var confinal=con.concat(Temp2String);
    var blurfinal=parseFloat(confinal);
    var blurfinaloutput=blurfinal+number1;
    var blurfinaloutput2=blurfinaloutput.toString();
    var str1="blur(";
    str1=str1.concat(blurfinaloutput2);
    var str2="px)";
    str2=str1.concat(str2);
    console.log(str2);
    //console.log(confinal);
    $("#paperPlace1").css({'filter':str2});
    //paper id =  "#paperPlace1"
}
  function blur2(number1,number2,number3)
{
    //number1=0;
    //number2=Math.abs(number2);
    number3=Math.abs(number3);
    //var t1=number2+number3;
    var t2=number3.toString();
    //var tempnum=t1.concat(t2);
    var str1="blur(";
    str1=str1.concat(t2);
    var strfinalvalue="px)";
    strfinalvalue=str1.concat(strfinalvalue);
    $("#paperPlace1").css({'filter':strfinalvalue});
    //paper id =  "#paperPlace1"
}
//======================== fun b end ================