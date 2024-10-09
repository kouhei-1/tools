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


/*
Why!? why do u found it!?
景品: ないよ
残念だったな

JUU1JTkwJTlCJUUzJTgxJUFFJUU2JTk0JUJGJUU2JUIyJUJCJUU0JUJBJUJBJUU3JTk0JTlGJUUzJTgxJUFGJUU3JUI1JTgyJUUzJTgyJThGJUUzJTgyJThBJUUzJTgxJUEwJUUzJTgwJTgyJTBBJUU2JUJEJTk0JUUzJTgxJThGJUU1JUI5JUI4JUU3JUE2JThGJUUzJTgxJTk3JUUzJTgxJUFBJUUzJTgxJTk1JUUzJTgxJTg0

*/
