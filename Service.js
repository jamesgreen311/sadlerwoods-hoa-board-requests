function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function render(f, opt) {
  let templ = HtmlService.createTemplateFromFile(f);
  if (opt) {
    let keys = Object.keys(opt);
    keys.forEach(function(k){
      templ[k] = opt[k];
    })

  }
  return templ.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getCurrentYear() {
  y = new Date().getFullYear();
  return y;
}