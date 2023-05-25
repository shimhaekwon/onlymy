const funcGetJsonData = function(fileName){
    const retArr = [];
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            retArr = data.map(item => item.property);
        })
        .catch(error => {
            console.error('Error parsing JSON:', error);
        });
    return retArr;
};
funcGetJsnoData('hana.json');