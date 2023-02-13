let dataset1 = [
  [1, 2],
  [2, 4],
  [6, 2],
  [9, 9],
];

let svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin;

let xScale = d3.scaleLinear().domain([0, 10]).range([0, width]),
  yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

let g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

// Step 5

g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

g.append("g").call(d3.axisLeft(yScale));

let showBorderArr = new Array(dataset1.length).fill(true);

function findIndexInArray(givenArray, object) {
  for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i][0] == object[0] && givenArray[i][1] == object[1]) {
      return i;
    }
  }
  return -1;
}

svg
  .append("g")
  .selectAll("dot")
  .data(dataset1)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return xScale(d[0]);
  })
  .attr("cy", function (d) {
    return yScale(d[1]);
  })
  .attr("r", 10)
  .attr("transform", "translate(" + 100 + "," + 100 + ")")
  .style("fill", "green")
  .on("mouseover", function (d) {
    d3.select(this).attr("r", 10).style("fill", "blue");
  })
  .on("mouseout", function (d) {
    d3.select(this).attr("r", 10).style("fill", "green");
  })
  .on("click", function (d) {
    d3.select(".col2")
      .append("text")
      .text(d + " ");

    showBorderIndex = findIndexInArray(dataset1, d);

    showBorder = showBorderArr[showBorderIndex];

    showBorderArr[showBorderIndex] = showBorder == true ? false : true;

    if (!showBorderArr[showBorderIndex]) {
      d3.select(this).attr("stroke", "#FF69B4").attr("stroke-width", 2);
    } else {
      d3.select(this).attr("stroke", "#green").attr("stroke-width", 2);
    }
  });

function addPoint() {
  x = Number(document.getElementById("xVal").value);
  y = Number(document.getElementById("yVal").value);
  if (x < 1 || x > 9 || y < 1 || y > 9) {
    document.getElementById("addPointMsg").innerHTML =
      "X and Y value must be within 1 and 9";
  } else if (findIndexInArray(dataset1, [x, y]) != -1) {
    document.getElementById("addPointMsg").innerHTML = "Point Already Added";
  } else {
    dataset1.push([x, y]);
    showBorderArr.push(true);

    console.log(dataset1);

    svg
      .append("g")
      .selectAll("dot")
      .data(dataset1)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", 10)
      .attr("transform", "translate(" + 100 + "," + 100 + ")")
      .style("fill", "green")
      .on("mouseover", function (d) {
        d3.select(this).attr("r", 10).style("fill", "blue");
      })
      .on("mouseout", function (d) {
        d3.select(this).attr("r", 10).style("fill", "green");
      })
      .on("click", function (d) {
        d3.select(".col2")
          .append("text")
          .text(d + " ");

        showBorderIndex = findIndexInArray(dataset1, d);

        showBorder = showBorderArr[showBorderIndex];

        showBorderArr[showBorderIndex] = showBorder == true ? false : true;

        if (!showBorderArr[showBorderIndex]) {
          d3.select(this).attr("stroke", "#FF69B4").attr("stroke-width", 2);
        } else {
          d3.select(this).attr("stroke", "#green").attr("stroke-width", 2);
        }
      });

    document.getElementById("addPointMsg").innerHTML = "Point Added";
  }
}
