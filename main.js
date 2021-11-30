$("<div/>", {
  id: "Hello World",
  class: "myClass",
  text: "Hello World",
})
  .on("click", function () {
    alert(this.id);
  })
  .appendTo("body");
