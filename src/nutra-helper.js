import Fs from 'fs'
import Path from 'path'
import Rimraf from 'rimraf'

var Public = {
    getPathPastCWD (file) {
        return file.replace(Path.join(process.cwd(), '/'), '')
    },
    getFileKey (filename) {
        return this.getPathPastCWD(filename).replace(/\//g, '|')
    },
    cloneObject (object, immutable) {
        var newObject = Object.assign({}, object)
        switch (immutable) {
            case 'sealed':
                newObject = Object.seal(newObject)
                break
            case 'freezed':
                newObject = Object.freeze(newObject)
                break;
        }
        return newObject
    },
    makeDirectory (dir) {
        if (!Fs.existsSync(dir)) {
            Fs.mkdirSync(dir)
        }
        return dir
    },
    removeDirectory (dir) {
        Rimraf.sync(dir)
    }
}

export default Object.freeze(Public)
