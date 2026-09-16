const fs = require("fs");

let lines = [];
lines.push("SamyGO API Probe 0.5.0");
lines.push("Zeit: " + new Date().toISOString());
lines.push("Nur lesende Prüfung");
lines.push("");

function typeOf(name, fn) {
  try {
    lines.push(name + ": " + fn());
  } catch (e) {
    lines.push(name + ": ERROR " + String(e));
  }
}

typeOf("global.tizen", () => typeof tizen);
typeOf("global.webapis", () => typeof webapis);
typeOf("global.require", () => typeof require);
typeOf("global.fs", () => typeof fs);
typeOf("global.process", () => typeof process);
typeOf("global.module", () => typeof module);

typeOf("fs.existsSync(/home/owner/share)", () =>
  fs.existsSync("/home/owner/share"));

try {
  fs.writeFileSync(
    "/home/owner/share/samygo-api-probe-0.5.0.txt",
    lines.join("\n") + "\n"
  );
} catch (e) {
  try {
    fs.writeFileSync(
      "/home/owner/share/samygo-api-probe-0.5.0-error.txt",
      "writeFileSync ERROR: " + String(e)
    );
  } catch (_) {}
}

module.exports = {};
