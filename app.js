// Quagga.init({
//     inputStream: {
//         name: "Live",
//         type: "LiveStream",
//         target: document.querySelector('#interactive'), // Pass the ID of the video element
//         constraints: {
//             facingMode: "environment",
//             facingMode: ""
//         },
//     },
//     decoder: {
//         readers: ["code_128_readers"]
        
//     },
// }, function (err) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log("Initialization finished. Ready to start");
//     Quagga.start();
// });

// Quagga.onDetected(function (data) {
//     document.getElementById('barcode').textContent = data.codeResult.code;
// });
