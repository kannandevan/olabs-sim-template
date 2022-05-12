let idArray = [];



/* 
place :- Where to be dropped
object :- draggable Element
flag: true means - developer option - droppable with border
flag: false -droppable area without border
container : - where to append
*/
function setDroppable(place, object, container, flag) {
    if (flag == undefined) {
        flag = false;
    }
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var _place = getComponentDetails(place);
    var _object = getComponentDetails(object);
    var height = _object.height * 1.2;
    var width;
    var left;
    var top;
    var id = generateId(_object.name, _place.name);

    if (_object.width > _place.width) {
        width = _object.width;
        left = _place.left - (width - _place.width) / 2;
        top = _place.top - _object.height * 1.2;
    }
    else {
        width = _place.width * 1.5;
        left = _place.left - (width - _place.width) / 2;
        top = _place.top - _object.height * 1.2;

    }
    if (flag) {
        $(container).append(
            $('<div/>')
                .attr("id", id)
                .addClass("absolute sim-obj sim-drop-area")
                .css({ border: "solid 1px " + randomColor, width: width, height: height, top: top, left: left,"z-index":90 })
        );
    }
    else {
        $(container).append(
            $('<div/>')
                .attr("id", id)
                .addClass("absolute sim-obj sim-drop-area")
                .css({ width: width, height: height, top: top, left: left,"z-index":90})
        );
    }


    return { place: place, object: object, container: container, flag: flag, name: id, id: "#" + id, width: width, height: height, top: top, left: left }
}

function setResponsive(dropAreaProps) {
    $(document).ready(function () {
        $(window).resize(function () {
            let { place, object, container, flag, id } = dropAreaProps;
            $(id).remove();
            idArray.length = 0;
            setDroppable(place, object, container, flag);
        })
    })

}

function generateId(idFirst, idSecond) {
    let id = idFirst + "DropArea_" + idSecond;
    var idCount = 1;
    if (idArray.length == 0) {
        idArray.push(id);
    }
    else {

        for (i = 0; i < idArray.length; i++) {

            if (idArray[i].includes(id)) {

                id = idFirst + "DropArea_" + idSecond + "_" + idCount;
                idCount += 1;

            }
            else {
                id = idFirst + "DropArea_" + idSecond;
            }

        }
        idArray.push(id);
    }

    return id;
}



/* 
This function will return the width and height of the Simulation area 
and initial position of each object
*/
function getSimParams(container) {
    var simWidth = $(container).width();
    var simHeight = $(container).height();
    var objArray = [];
    $(".sim-obj").each(function (index) {
        var objData;
        var wP = ($(this).width() * 100) / simWidth;
        var hP = ($(this).height() * 100) / simHeight;
        var lP = ($(this).offset().left * 100) / simWidth;
        var tP = ($(this).offset().top * 100) / simHeight;
        objData = {
            name: $(this).attr("id"),
            id: "#" + $(this).attr("id"),
            left: $(this).offset().left,
            top: $(this).offset().top,
            width: $(this).width(),
            height: $(this).height(),
            widthP: wP,
            heightP: hP,
            leftP: lP,
            topP: tP
        }
        objArray.push(objData);
    });

    return { "width": simWidth, "height": simHeight, "componentDetails": objArray };
}

function setResponsiveObjects(jsonData, container) {
    var flag =false;
    var lastWidth = $(window).width();
    var lastHeight = $(window).height();
   $(window).resize(function(){

    let containerData = getComponentDetails(container);
    var newData = [];
    for (let i = 0; i < jsonData.componentDetails.length; i++) {
        let { id, leftP, topP, widthP, heightP } = jsonData.componentDetails[i];
        var newWidth;
         var newHeight;
         $(id).css({left:leftP+"%",top:topP+"%"});    

         if($(window).width()!=lastWidth){
             console.log($(id).height());
            newWidth = $(id).width(containerData.width * widthP / 100);
            newData.push({newWidth,leftP,topP});


         }
         if($(window).height()!=lastHeight){
            newHeight = $(id).height(containerData.height * heightP / 100);
        newData.push({newHeight,leftP,topP});

         }
    }

   })

}

/*  Controls changing position on hover */

function switchControlPosition(draggableComponentId) {
    var cW = $('.sim-container').width();
    var cH = $('.sim-container').height();
    var cWMid = cW / 2;
    var cHMid = cH / 2;
    var cyl_offset = $("draggableComponentId").offset();
    var x = draggableComponentId_offset.left;
    var y = draggableComponentId_offset.top;
    var cc = {
        draggableComponentIdX: x,
        draggableComponentIdY: y
    }
    var canvas_width = $(".canvas").width();
    var canvas_height = $(".canvas").height();
    var canvas_offset = $(".canvas").offset();
    var c = {
        "xMin": canvas_offset.left,
        "xMax": canvas_offset.left + canvas_width,
        "yMin": canvas_offset.top,
        "yMax": canvas_offset.top + canvas_height,
    }
    if (cc.draggableComponentIdX < c.xMax && cc.draggableComponentIdX > c.xMin) {

        if ((cc.draggableComponentIdX - cWMid) < 0) {
            $('.canvas').removeClass('go-left');
            $('.canvas').addClass('go-right');
        }

        else {
            $('.canvas').removeClass('go-right');
            $('.canvas').addClass('go-left');
        }



    }
}


function getComponentDetails(selector) {
    
    var object = {
        name: $(selector).attr("id"),
        selector: selector,
        left: $(selector).offset().left,
        top: $(selector).offset().top,
        width: $(selector).width(),
        height: $(selector).height()
    }
    

    return object;
}

function Ratio(width,height){
    this.width = width;
    this.height = height;
    this.hcf;
    this.getHCF = function(a,b){
        for (let i = 1; i <= this.width && i <= this.height; i++) {

            // check if is factor of both integers
            if( this.width % i == 0 && this.height % i == 0) {
                this.hcf = i;
            }
        }
        return this.hcf;
    }
    this.getAspect = function(width,height){
        this.hcf = this.getHCF(width,height);
        this.ratio = {"widthR":this.width/this.hcf,"heightR":this.height/this.hcf, "hcf" :this.hcf}

        return this.ratio
    }
}




