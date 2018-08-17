export function addItem(val:any){
  // let node = document.querySelector("ul");
  let node = document.createElement("li");
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementsByTagName("ul").item(0).appendChild(node);
  scrollToBottom();
}


function scrollToBottom(){
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}