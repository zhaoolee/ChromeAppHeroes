const $$$ = document.querySelector.bind(document);
const open = (file) => {
  document.body.removeChild($$$("#drop-target"));
  if (file) {
    // check is txt file
    // check file name is ended with .txt

    if (file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        document.open();

        let txtWithPTag = "<p>";
        txtWithPTag += reader.result.replace(/\n/g, "</p><p>");
        txtWithPTag += "</p>";

        let html = `<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title></title></head><body><article>${txtWithPTag}</article></body></html>`;
        document.write(html);
        document.close();
      };
      reader.onerror = function (evt) {
        alert("error reading file");
        window.location.reload();
      };
    } else {
      // html

      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        document.open();
        document.write(reader.result);
        document.close();
      };
      reader.onerror = function (evt) {
        alert("error reading file");
        window.location.reload();
      };
    }
  }
};

const dragOverHandler = (e) => e.preventDefault();
const dropHandler = (e) => {
  e.preventDefault();
  const item = Array.from(e.dataTransfer.items).find(
    (item) => item.kind === "file"
  );
  if (item) {
    const entry = item.webkitGetAsEntry();
    open(entry.isFile ? item.getAsFile() : entry).catch((e) =>
      console.error(e)
    );
  }
};
const dropTarget = $$$("#drop-target");
dropTarget.addEventListener("drop", dropHandler);
dropTarget.addEventListener("dragover", dragOverHandler);

$$$("#file-input").addEventListener("change", (e) => open(e.target.files[0]));
$$$("#file-button").addEventListener("click", () => {
  const inputElement = document.querySelector("#file-input");
  inputElement.click();
});
