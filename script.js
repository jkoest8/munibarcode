function generateBarcode() {
    var libraryNumber = document.getElementById('libraryNumber').value;
    JsBarcode("#barcode", libraryNumber, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 40,
        displayValue: false
    });
    document.getElementById('barcodeNumber').textContent = libraryNumber; // Sets the text below the barcode
}
