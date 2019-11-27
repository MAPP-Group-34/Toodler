import * as FileSystem from 'expo-file-system';
const boardDirectory = `${FileSystem.documentDirectory}boards`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(boardDirectory);
}

export const createFile = async (name, url, newLocation) => {
      let fileUri = FileSystem.boardDirectory + "text.txt";
      await FileSystem.writeAsStringAsync(newLocation, name + ";" + url, { encoding: FileSystem.EncodingType.UTF8 });
}

export const addBoard = async (id, name, url) => {
    await onException(() => createFile(name, url, `${boardDirectory}/${id}.txt`));
    console.log(id, name, url);
    return {
        name: id,
        type: 'text',
        file: await loadBoard(id)
    };
}

export const remove = async name => {
    return await onException(() => FileSystem.deleteAsync(`${boardDirectory}/${name}`, { idempotent: true }));
}

export const loadBoard = async fileName => {
    const file = await onException(() => FileSystem.readAsStringAsync(`${boardDirectory}/${fileName}.txt`, {
        encoding: FileSystem.EncodingType.Base64
    }))
    const fileText = file.split(';');
    const newBoard = {"id": fileName,
                      "name": fileText[0],
                      "url": fileText[1]};
    return newBoard;
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(boardDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(boardDirectory);
    }
}

export const getAllBoards = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(boardDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'text',
            file: await loadBoard(fileName)
        };
    }));
}
