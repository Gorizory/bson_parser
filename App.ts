import * as fs from 'fs';
import * as bson from 'bson';

const parser = new bson.BSON();

const parseBSON = (data: ArrayBuffer) => {
    return parser.deserialize(Buffer.from(data), {promoteBuffers: true});
};

const tessellations = fs.readdirSync('./tess').filter((fileName) => fileName.endsWith('.json'));
tessellations.forEach((fileName) => {
    console.log(fileName);
    console.log(parseBSON(fs.readFileSync(`./tess/${fileName}`)));
});
