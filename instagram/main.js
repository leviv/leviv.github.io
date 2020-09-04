const inputElement = document.getElementById("inputfile");
let fileReader = new FileReader();

fileReader.onload = function (event) {
  var rawText = fileReader.result;

  const fileTxt = rawText.split("\n");
  const following = [];

  i = 0;
  // Loop through all of the 'following' users
  while (i < fileTxt.length) {
    let line = fileTxt[i].split(",");
    if (line.length === 2) {
      const username = line[0];
      const name = line[1];

      i++;
      line = fileTxt[i].split(",");
      let deg = 0;
      const follow = [];

      // Loop through the following's users followings
      while (line.length == 1 && i < fileTxt.length - 1) {
        follow.push(line[0]);
        deg++;
        i++;
        line = fileTxt[i].split(",");
      }

      following.push({
        username: username,
        common: deg,
        follow: follow,
      });
    } else {
      i++;
    }
  }

  // Sort the array by common property
  following.sort(function (x, y) {
    return y.common - x.common;
  });

  following.forEach((item) => console.log(item));
};

// When the input file changes
inputElement.onchange = function (event) {
  fileReader.readAsText(event.target.files[0]);
};
