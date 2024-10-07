function isPrime(num) {
  // 素数判定関数
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
  if(num % i === 0) return false; 
  return num > 1;
}

function generatePrimeNumbers() {
  const upperLimit = document.getElementById('upperLimit').value;
  let primeNumbers = [];

  for (let i = 2; i <= upperLimit; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  // CSV形式に変換
  const csvContent = primeNumbers.join(',');
  // ダウンロードリンクの作成
  const downloadLink = document.getElementById('downloadLink');
  downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
  downloadLink.click();
}
