const _description = new WeakMap();

class Room {
    constructor(data = null) {
        if(data === null) {
            this.name = 'Default Room';
            this.tag = 'room';
            _description.set(this, '');
        }
        else {
            this.name = data.name;
            this.tag = data.tag;
            _description.set(this, data.description);
        }
    }

    look() {
        return `You look around.\n\n ${_description.get(this)}`;
    }

    static create(json) {
        this.name = json.name;
        this.tag = json.tag;
        _description.set(this, data.description);
    }
}

export default Room;