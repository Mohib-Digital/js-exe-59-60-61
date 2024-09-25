
var container = document.getElementById("container");
var allNodes = container.childNodes;
var junkArtifacts = []
var elementNodes = []

for (var i = 0; i < allNodes.length; i++) {
  // console.log(allNodes[i])
  if (allNodes[i].nodeType !== 1) {
      junkArtifacts.push(allNodes[i])
  } else {
      elementNodes.push(allNodes[i])
      }
  }
  console.table([allNodes, junkArtifacts, elementNodes])