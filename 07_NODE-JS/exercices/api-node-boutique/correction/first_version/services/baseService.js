import { readFileSync, writeFileSync } from "fs"

export class BaseService {
    constructor(file){
        this.data = []
        this.count = 0
        this.file = file
    }

    readFromJson() {
        const dataString = readFileSync(this.file).toString()
        this.data = JSON.parse(dataString)
        this.count = this.data.length > 0 ? this.data[this.data.length-1].id : 0

    }

    writeToJson() {
        writeFileSync(this.file, JSON.stringify(this.data))
    }

}