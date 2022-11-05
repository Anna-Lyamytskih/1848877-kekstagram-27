export const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photo) => {
      onSuccess(photo);
    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    }
  }).catch((error) => {
    onFail('Не удалось отправить форму. Попробуйте ещё раз');
  });
};
