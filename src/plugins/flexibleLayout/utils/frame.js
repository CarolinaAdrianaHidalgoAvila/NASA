import { v4 as uuid } from 'uuid';

class Frame {
    constructor(domainObjectidentifier, size) {
        this.id = uuid();
        this.domainObjectidentifier = domainObjectidentifier;
        this.size = size;

        this.noFrame = false;
    }
}

export default Frame;
