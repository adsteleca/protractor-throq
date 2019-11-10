function jsonDataToArray(dataObject): string[] {
    let dataArray: string[] = [];
    let keys = Object.keys(dataObject);
    keys.forEach((key: string) => {
        dataArray.push(dataObject[key]);
    });
    return dataArray;
}

export { jsonDataToArray };
