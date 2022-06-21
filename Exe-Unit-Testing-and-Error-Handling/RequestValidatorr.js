function validate(obj) {
    //JUDGE 88/100
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let entryArr = Object.entries(obj);
    for (let i = 0; i < entryArr.length; i++) {
        switch (i) {
            case 0:
                let methodKey = entryArr[0][0];
                let value = entryArr[0][1];
                if (!validMethods.includes(value) || methodKey !== 'method') {
                    throw new Error('Invalid request header: Invalid Method');
                }
                break;
            case 1:
                let uriPattern = /^([\w.])+$|^\*$/;
                let uriKey = entryArr[1][0];
                let uri = entryArr[1][1];
                if (!uriPattern.exec(uri) || uriKey !== 'uri') {
                    throw new Error('Invalid request header: Invalid URI');
                }
                break;
            case 2:
                let versionKey = entryArr[2][0];
                let version = entryArr[2][1];
                if ((!validVersions.includes(version)) || (versionKey !== 'version')) {
                    throw new Error('Invalid request header: Invalid Version');
                }
                break;
            case 3:
                let messagePattern = /^[^<>\\&\'\"]+$/;
                let messageKey = entryArr[3][0];
                let message = entryArr[3][1];
                if ((!messagePattern.exec(message) && message !== '') || message === undefined) {
                    throw new Error(`Invalid request header: Invalid Message`);
                }
                break;
        }
    }
    if (entryArr.length < 4) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;

}
console.log(validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  
));
