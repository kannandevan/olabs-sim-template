# Olabs NextG Template Docs

### Simulation Developer can edit the following files for the development purpose
<br>

for adding simulation assets
>**simulation-template.html**<br>

<br>

for the simulation 
>**js/sim.script.js**<br>

<br>

for styling the simulation
>**css/custom-sim.css**<br>

<br>
You can add your external Assets(images) the following folder

> **images/simAssets/**

<br>

## Development area

>While developing a simulation 
write your **simulation** codes in this division on the file **simulation-template.html** <br>
`<div class=" flex-grow-1 sim-areas" id="simArea">` 
<br>
<b>Do not remove any of the classes or ID </b>

<br>

><b> Put your Experiment/ Simulation heading inside the following `<h3>` tag</b><br><br>
>`<div class="container-fluid sim-heading">`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>`<h3><!-- SIMULATION HEADING HERE --></h3>`<br></b>
`</div>`

For every img tag or div that you're using inside `simulation-template.html` should add a class `sim-obj` this class is used for detecting images and drop areas from the simulation 

>Example <br>
 `<img src="./images/img.svg"  class="sim-obj">`

