document.getElementById('uploadB').addEventListener('click', function() {
  console.log('uploadB clicked');
  window.location.href = '/upload';
});

function handleFileSelect(evt) {
evt.stopPropagation();
evt.preventDefault();

var file = evt.dataTransfer.files[0];

var xhr = new XMLHttpRequest();
xhr.open("POST", "/upload", true);
xhr.setRequestHeader("Content-Type", file.type);
xhr.send(file);

// Display the file that was just uploaded
document.getElementById('list').innerText = file.name;
}

function handleDragOver(evt) {
evt.stopPropagation();
evt.preventDefault();
evt.dataTransfer.dropEffect = 'copy';
}

// Setup the drag & drop listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', function(evt) {
handleFileSelect(evt);
evt.preventDefault(); // Prevent default behavior after file is handled.
}, false);
dropZone.addEventListener('dragenter', function() {
dropZone.classList.add('hover');
}, false);
dropZone.addEventListener('dragleave', function() {
dropZone.classList.remove('hover');
}, false);
