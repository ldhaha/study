document.getElementById("button").onclick = function () {
  import("./util").then((module) => {
    const log = module.default;
    log();
  });
};
