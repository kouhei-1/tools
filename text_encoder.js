/*
  const encoder = new TextEncoder('utf-16');
  const encoded = encoder.encode('こんにちは');

  // デコード
  const decoder = new TextDecoder('utf-16');
  const decoded = decoder.decode(encoded);
*/
function encodeText() {
  var textToEncode = document.getElementById('text_input').value;
  var selectedEncoding = document.getElementById('encoding_select').value;
  var result = '';

  switch (selectedEncoding) {
    case 'base64':
    result = btoa(textToEncode);
    break;
    
    case 'utf-8':
      result = encodeURIComponent(textToEncode);
      break;
    /*
    case 'utf-16':
    break;
    
    case 'shift_jis':
    break;
    */
    default:
      result = 'Invalid encoding selected.';
      break;
  }

  document.getElementById('result_output').value = result;
}

function decodeText() {
  var encodedText = document.getElementById('result_output').value;
  var selectedEncoding = document.getElementById('encoding_select').value;
  var result = '';

  switch (selectedEncoding) {
    case 'base64':
      result = atob(encodedText);
      break;
    
    case 'utf-8':
      result = decodeURIComponent(encodedText);
      break;
    /*
    case 'utf-16':
      break;
    case 'shift_jis':
      break;
    */
    default:
      result = 'Invalid encoding selected.';
      break;
  }

  document.getElementById('text_input').value = result;
}
