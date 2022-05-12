
/*------------------------------------------------------------------------------------------------
Component constructor having two variables
1 - simAreaId : this is the id of thw whole simarea which includes the background of simulation
2 - componentsClass : this is a common class for all components inside the simulation Area
---------------------------------------------------------------------------------------------------*/
function Component(simAreaId,componentsClass){
    componentsPropraties = [];
    this.simAreaId = simAreaId;
    this.simWidth = $(this.simAreaId).width();
    this.simHeight = $(this.simAreaId).height();
    this.left = $(this.simAreaId).offset().left;
    this.top = $(this.simAreaId).offset().top;
    $(componentsClass).each(function (index) {

        this.wP = ($(this).width() * 100) / simWidth;
        this.hP = ($(this).height() * 100) / simHeight;
        this.lP = ($(this).offset().left * 100) / simWidth;
        this.tP = ($(this).offset().top * 100) / simHeight;

        var qq = $(this).width();
        var ww =$(this).height();
        this.wHRatio = new Ratio($(this).width(),$(this).height()).getAspect();
        this.objData = {
            name: $(this).attr("id"),
            id: "#" + $(this).attr("id"),
            left: $(this).offset().left,
            top: $(this).offset().top,
            width: $(this).width(),
            height: $(this).height(),
            widthP: this.wP,
            heightP: this.hP,
            leftP: this.lP,
            topP: this.tP,
            wHRatio : this.wHRatio
        }
        componentsPropraties.push(this.objData);
    });

    return {simWidth:this.simWidth,simHeight:this.simHeight,componentsPropraties:componentsPropraties};
}