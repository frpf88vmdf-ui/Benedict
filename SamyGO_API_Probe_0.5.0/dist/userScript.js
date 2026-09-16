(function () {
  function esc(s) {
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")
      .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function probe(name, fn) {
    try {
      return {name:name, status:"OK", value:fn()};
    } catch (e) {
      return {name:name, status:"ERROR", value:String(e)};
    }
  }

  var results = [
    probe("window.tizen", function(){ return typeof window.tizen; }),
    probe("window.webapis", function(){ return typeof window.webapis; }),
    probe("tizen.application", function(){ return typeof window.tizen !== "undefined" && typeof tizen.application; }),
    probe("tizen.filesystem", function(){ return typeof window.tizen !== "undefined" && typeof tizen.filesystem; }),
    probe("tizen.systeminfo", function(){ return typeof window.tizen !== "undefined" && typeof tizen.systeminfo; }),
    probe("tizen.tvinputdevice", function(){ return typeof window.tizen !== "undefined" && typeof tizen.tvinputdevice; }),
    probe("tizen.systemsetting", function(){ return typeof window.tizen !== "undefined" && typeof tizen.systemsetting; }),
    probe("tizen.application.getCurrentApplication", function(){
      return typeof window.tizen !== "undefined" && typeof tizen.application.getCurrentApplication;
    }),
    probe("location.protocol", function(){ return location.protocol; }),
    probe("userAgent", function(){ return navigator.userAgent; })
  ];

  var html = "<div style='font:18px Arial;background:#111;color:#fff;padding:24px;position:fixed;top:10px;left:10px;right:10px;z-index:2147483647;max-height:90vh;overflow:auto'>" +
    "<h2>SamyGO API Probe 0.5.0</h2>" +
    "<p>Nur lesende API-Prüfung</p><table style='width:100%;border-collapse:collapse;color:#fff'><tr><th align='left'>API</th><th align='left'>Status</th><th align='left'>Wert</th></tr>";

  results.forEach(function(r){
    html += "<tr><td style='padding:6px;border-bottom:1px solid #555'>" + esc(r.name) +
      "</td><td style='padding:6px;border-bottom:1px solid #555'>" + esc(r.status) +
      "</td><td style='padding:6px;border-bottom:1px solid #555;word-break:break-all'>" + esc(r.value) + "</td></tr>";
  });
  html += "</table><p>Service-Diagnose: /home/owner/share/samygo-api-probe-0.5.0.txt</p></div>";

  try {
    var box=document.createElement("div");
    box.innerHTML=html;
    document.documentElement.appendChild(box);
  } catch(e) {}
})();