function generateBarcode() {
    var libraryNumber = document.getElementById('libraryNumber').value;
    JsBarcode("#barcode", libraryNumber, {
        format: "CODE128",
        lineColor: "#000",
        width: 1, // Smaller width
        height: 40, // Adjust height as needed
        displayValue: false
    });
    document.getElementById('barcodeNumber').textContent = libraryNumber;
}
