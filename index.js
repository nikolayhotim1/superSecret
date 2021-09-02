'usestrict';
function getSecret(file, secretPassword) {
    file.opened += 1;

    if (secretPassword === file.password) {
        return file.contents;
    }
    else {
        return 'Invalid password! No secret for you.';
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword === file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: 'classified',
    opened: 0,
    password: 2,
    contents: `Dr. Evel's next meeting is in Detroit.`
};

var secret = getSecret(superSecretFile, superSecretFile.password);
console.log(secret); // Dr. Evel's next meeting is in Detroit.
console.log('The file was opened ' + superSecretFile.opened + ' time'); // The file was opened 1 time

setSecret(superSecretFile, superSecretFile.password, `Dr. Evel's next meeting is in Philadelphia.`);

secret = getSecret(superSecretFile, superSecretFile.password);
console.log(secret); // Dr. Evel's next meeting is in Philadelphia.
console.log('The file was opened ' + superSecretFile.opened + ' time'); // The file was opened 1 time
