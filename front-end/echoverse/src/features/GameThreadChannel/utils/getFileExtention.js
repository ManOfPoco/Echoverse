export function getFileExtention(fileName) {
    const cleanFileName = fileName.split("?")[0];
    const fileExtention = cleanFileName.split(".").at(-1);

    return fileExtention;
}
