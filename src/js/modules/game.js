import Axios from 'axios';
import * as Matter from 'gray-matter';

const _start = new WeakMap();
const _map = new WeakMap();
const _story = new WeakMap();

class Game {
    constructor(data = null) {
        if(data === null) {
            this.name = 'Default Game';
            this.tag = 'default';
            this.description = '';
            this.character = null;

            _start.set(this,null);
            _map.set(this,null);
            _story.set(this,null);
        }
        else {
            this.name = data.name;
            this.tag = data.tag;
            this.description = data.description;
            this.character = data.character;

            _start.set(this,data.start);
            _map.set(this,data.map);
            _story.set(this,data.story);
        }
    }


    static async load(game) {
        let base_url = window.location.href.split('#')[0],
                url = `${base_url}games/${game}/game.config`;

        async function getGame(url) {
            let response = await Axios.get(url),
                    string = response.data,
                    contents = Matter(string),
                    yaml = contents.data,
                    description = contents.content,
                    data = {};


            data.name = yaml.name;
            data.tag = yaml.tag;
            data.description = description;

            return new Game(data);
        }

        return await getGame(url);
    }
}

export default Game;