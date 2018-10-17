function Room(data) {
    let name = data.name,
            tag = data.tag,
            description = data.description;
            //directions = data.directions, // object of directions direction: Wall/Door
            //items = data.items, // array of Items
            //npcs = data.npcs; // array of NPCs

    this.look = function () {
        return "You look around. \n\n" + description;
    };

    /*this.getVisible = function (type) {
        let visible = [];
        for(let index in [type]) {
            if(! [type][index].hidden) {
                visible.push([type][index].tag);
            }
        }
        return visible;
    };*/

    Object.defineProperties(this, {
        name: {
            get: function () {
                return name;
            }
        },
        tag: {
            get: function () {
                return tag;
            }
        }
    })
}

export default Room;