export default (verb, url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(verb, url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) return;

      if (request.status === 200) {
        const resultObject = JSON.parse(request.responseText);
        const itemObject = resultObject.data;
        resolve(itemObject);
      } else {
        reject(request.status);
      }
    };
    request.send();
  });
