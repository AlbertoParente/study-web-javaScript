/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////// Description \\\\\\\\\\\\\\\\\\\\\\\\

// C = consultation
// E = expiration

/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////// CLIENT \\\\\\\\\\\\\\\\\\\\\\\\\\\

socket = Socket(1);
ipServer = '192.168.1.1';
serverPort = 2;
package = Package('type: C; CPF: 123.123.123.12', ipServer, serverPort);
packageSent = socket.sendPackage(package);
receivedPackage = socket.receivePackage();

if (receivedPackagereceivedPackage.content.totalDebt > 0) {
    package = Package('type: E; CPF: 123.123.123.12', ipServer, serverPort);
    packageSent = socket.sendPackage(package);
    receivedPackage = socket.receivePackage();
}

/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////// SERVER \\\\\\\\\\\\\\\\\\\\\\\\\\\

socket = Socket(2);
ipClient = '192.168.1.15';
clientPort = 1;

while (true) {
    receivedPackage = socket.receivePackage();

    if (receivedPackage.content.type === 'C') {
        package = Package('totalDebt: sumTotal', ipClient, clientPort);
        packageSent = socket.sendPackage(package);
    } else if (receivedPackage.content.type === 'E') {
        package = Package('dueDate: valueExpiration.generateAutomatic()', ipClient, clientPort);
        packageSent = socket.sendPackage(package);
    }
}
