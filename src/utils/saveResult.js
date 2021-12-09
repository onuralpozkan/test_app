export const saveResult = (result) => {
  const localStorageData = JSON.parse(localStorage.getItem('result'));
  let filteredArray = [];

  if (localStorageData !== null) {
    filteredArray = localStorageData.filter(
      (i) => i.testInfo.uuid !== result.testInfo.uuid
    );
    filteredArray.push(result);
    localStorage.setItem('result', JSON.stringify(filteredArray));
  } else {
    localStorage.setItem('result', JSON.stringify([result]));
  }
};
