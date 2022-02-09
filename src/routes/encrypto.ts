import crypto from 'crypto';
import { config } from '../global';
function psw_hash(source: string) {
    let cryption = crypto.createHash(config["security-settings"]["hash-algorithm"]);
    cryption.update(source);
    return cryption.digest().toString('utf-8');
}

export { psw_hash };
