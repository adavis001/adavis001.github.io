d3.select("body")
  .selectAll("h1")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("h1")
          .style("background-color", "white");
      });

d3.select("body")
  .selectAll("h2")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("h2")
          .style("background-color", "white");
      });

d3.select("body")
  .selectAll("h3")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("h3")
          .style("background-color", "white");
      });

d3.select("body")
  .selectAll("h4")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("h4")
          .style("background-color", "white");
      });

d3.select("body")
  .selectAll("h5")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("h5")
          .style("background-color", "white");
      });


d3.select("body")
  .selectAll("li")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("li")
          .style("background-color", "white");
      });

d3.select("body")
  .selectAll("p")
    .on("mouseover", function(d) {
      d3.select(this)
        .style("background-color", "gold");
      })
      .on("mouseout", function(d){
        d3.selectAll("text.note").remove();
        d3.selectAll("p")
          .style("background-color", "white");
      });


