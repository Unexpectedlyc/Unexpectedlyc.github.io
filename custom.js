const hb = document.querySelector("#heart");
if (hb) {
  hb.addEventListener("click", function () {
    window.location.href = "heart.html";
  });
}

$(function () {
  let dom = document.createElement("span");
  config.texts.forEach(function (item) {
    let p = document.createElement("p");
    p.innerHTML = item;
    if (config.imgs && config.imgs[item]) {
      let img = document.createElement("img");
      img.src = config.imgs[item];
      img.setAttribute("class", "text-img");
      p.appendChild(img);
    }
    dom.appendChild(p);
  });
  $("#texts-container").append(dom.innerHTML);
  //$("#heart").hide();
});

$(function () {
  for (let k in config.desc) {
    let dom = $("#" + k);
    if (dom.length > 0 && config.desc[k]) {
      dom.html(config.desc[k]);
    }
  }
});

$(function () {
  $("#love_text").append(config.loveText);
  //$("#heart").show();
});
