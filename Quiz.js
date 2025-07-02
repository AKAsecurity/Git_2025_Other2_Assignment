document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');

  button.addEventListener('click', (event) => {
    event.preventDefault(); 

    const radios = document.getElementsByName('answer');
    let selectedValue = null;

    
    for (const radio of radios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    
    if (!selectedValue) {
      alert('いずれかの選択肢を選んでください。');
      return;
    }


    if (selectedValue === '3') {
      alert('正解');
    } else {
      alert('不正解');
    }
  });
});
