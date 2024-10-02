function readFile() {
  var fileInput = document.getElementById('file_input');
  var file = fileInput.files[0];
  var fileReader = new FileReader();

  fileReader.onload = function(event) {
    var fileContent = event.target.result;
    document.getElementById('file_content').value = fileContent;
  };

  fileReader.readAsText(file, 'UTF-8'); // UTF-8 エンコーディングを指定します
}

function downloadFile() {
  var fileContent = document.getElementById('file_content').value;
  var filename = document.getElementById('filename').value || 'edited_file';
  var extension = document.getElementById('extension').value || 'txt';
            var filenameWithExtension = filename + '.' + extension;
            
            var blob = new Blob([fileContent], { type: 'text/plain' });
            var url = URL.createObjectURL(blob);

            var a = document.createElement('a');
            a.href = url;
            a.download = filenameWithExtension;
            a.click();

    URL.revokeObjectURL(url);
}
