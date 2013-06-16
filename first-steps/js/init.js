require(["dojo/dom", 
         "dojo/domReady!"], 
function(dom){
    var node = dom.byId("dynamicContent");
    node.innerHTML = "This is a dynamic text set by dojo";
});