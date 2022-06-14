function Ratio(width, height) {
    this.width = width;
    this.height = height;
    this.length;
    this.hcf;
    var lengthW, lengthH
    this.getHCF = function () {
        if (this.width % 1 != 0 || this.height % 1 != 0) {
            if (this.width % 1 != 0 && this.height % 1 != 0) {
                var ww = this.width.toString().split(".");
                var hh = this.height.toString().split(".");
                lengthH = hh[1].length;
                lengthW = ww[1].length;
                this.length = this.findBig(lengthH, lengthW);
                this.width = (Math.pow(10, this.length) * parseInt(ww[0])) + parseInt(ww[1]);
                this.height = (Math.pow(10, this.length) * parseInt(hh[0])) + parseInt(hh[1]);
            }
            else if (this.width % 1 == 0 && this.height % 1 != 0) {

                var hh = this.height.toString().split(".");
                lengthH = hh[1].length;
                this.height = (Math.pow(10, lengthH) * parseInt(hh[0])) + parseInt(hh[1]);

                this.width = this.width * Math.pow(10, lengthH);

            }
            else if (this.width % 1 != 0 && this.height % 1 == 0) {

                var ww = this.width.toString().split(".");
                lengthW = ww[1].length - 1;
                this.width = (Math.pow(10, lengthW) * parseInt(ww[0])) + parseInt(ww[1]);

                this.height = this.height * Math.pow(10, lengthW);

            }



        }
        for (let i = 1; i <= this.width && i <= this.height; i++) {

            // check if is factor of both integers
            if (this.width % i == 0 && this.height % i == 0) {
                this.hcf = i;
            }
        }
        return this.hcf;
    }
    this.getAspect = function () {
        this.hcf = this.getHCF(this.width, this.height);
        this.ratio = { "widthR": this.width / this.hcf, "heightR": this.height / this.hcf, "hcf": this.hcf }

        return this.ratio
    }
    this.findBig = function (a, b) {
        this.a = a;
        this.b = b;
        this.c
        if (this.a > this.b) {
            this.b = this.a;
        } else {
            this.a = this.b
        }
        return this.a;
    }
}

/*------------------------------------------------------------------------------------------------
Component constructor having two variables
1 - simAreaId : this is the id of thw whole simarea which includes the background of simulation
2 - componentsClass : this is a common class for all components inside the simulation Area
---------------------------------------------------------------------------------------------------*/
var simContainer;
function Component(componentsClass) {
    
 

   
    this.getComponents = function(){
        componentsProps = [];
        $(componentsClass).each(function (index) {


            this.wP = ($(this).width()) *100/ $(simContainer).width();
            this.hP = ($(this).height()) *100/ $(simContainer).height();
    
            this.lP = ($(this).position().left) *100 / $(simContainer).width();
            this.tP = ($(this).position().top)*100 / $(simContainer).height();
    
            var qq = $(this).width();
            var ww = $(this).height();
            this.wHRatio = new Ratio($(this).width(), $(this).height()).getAspect();
            this.objData = {
                name: $(this).attr("id"),
                id: "#" + $(this).attr("id"),
                left: $(this).position().left,
                top: $(this).position().top,
                width: $(this).width(),
                height: $(this).height(),
                widthP: this.wP,
                heightP: this.hP,
                leftP: this.lP,
                topP: this.tP,
                wHRatio: this.wHRatio
            }
            componentsProps.push(this.objData);
        });
        console.log(componentsProps);

        return {simWidth:this.simWidth,simHeight:this.simHeight,components:componentsProps};
    }
    

    return this;
}