import Fs from 'fs'
import Path from 'path'
import Rimraf from 'rimraf'
import Mkdirp from 'mkdirp'
import _ from 'lodash'

var Public = {
    _,
    getPathPastCWD (file) {
        return file.replace(Path.normalize(process.cwd() + '/'), '')
    },
    getFileKey (filename) {
        return this.getPathPastCWD(filename).replace(/\\|\//g, '|')
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
        Mkdirp.sync(dir)
    },
    removeDirectory (dir) {
        Rimraf.sync(dir)
    }
}

export default Object.freeze(Public)
