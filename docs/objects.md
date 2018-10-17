# Objects

* [Game](#game)
* [Character](#character)
* [Profession](#profession)
* [Race](#race)
* [Room](#room)
* [Skill](#skill)
* [Item](#item)
* [Map](#map)
* [Npc](#npc)

## Game
```
Game {
    name: string,
    tag: string, // unique
    description: string,
    start: Room.tag,
    map: Map,
    character: Character,
    load(game) {},
    start() {},
    exit() {},
    pause() {},
    command(command) {},
}
```

## Character
```
Character {
    name: string,
    tag: string, // unique
    description: string,
    level: integer,
    profession: Profession,
    race: Race,
    location: Room.tag,
    skills: {}, // keyword: Skill (move, talk, search, look, profession and race skills)
    hotkeys [], // #: Skill
    points {
        experience: {
            total: integer, // total experience gained overall
            level: integer, // total experience gained for this level
        },
        life: integer,
        action: integer,
        carry: integer,
        currency: integer,
    },
    equipment: {
        body: Item,
        weapon: Item,
        accessory: Item,
        bag: LargeCarryItem,
        pouch: SmallCarryItem,
    },
    create() {},
    levelUp(level) {},
    rest(hours) {},
    do(Skill, object) {},
    take(Item) {},
    drop(Item) {},
    equip(Item) {},
    unequip(Item) {},
    use(Item) {},
    addPoints(type, amount) {},
}
```

## Level
```
Level {
    name: string,
    tag: string, // unique
    description: string,
    
    skills: [], // array of Skills gained at this level
    add: { // gained at this level
        life: integer,
        action: integer, 
        carry: integer, 
    },
    experience: integer, // number of points needed to level Up from previous level
    items: [], // array of Items 
}
```

## Profession
```
Profession {
    name: string,
    tag: string, // unique
    description: string,
    skills: [], // array of Skills for listing purposes only
    levels: [], // array of Levels
}
```

## Race
```
Race {
    name: string,
    tag: string, // unique
    tag: string, // unique
    description: string,
    skills: [], // array of Skills available for the race
    points: { // point modifiers
        life: integer, // +/- to life
        action: integer, // +/- to action
        carry: integer, // +/- to carry weight
    }
}
```

## Room
```
Room {
    name: string,
    tag: string, // unique
    description: string,
    directions: {
        north: Direction, 
        east: Direction,
        south: Direction,
        west: Direction,
    },
    items: [], // an array of Items in the room
    npcs: [], // an array of NPCs in the room
    look(something) {},
    move(direction) {},
    search(something) {},
}

Direction {
    name: string,
    tag: string, // unique
    description: string,
    hidden: boolean,
    to: Room,
    from: Room,
    
}

Wall extends Direction {
    hidden: false,
    to: null,
    items: [], // an array of Items to interact with in that direction
}
```

## Item
```
Item {
    name: string,
    tag: string, // unique
    description: string,
    carry: integer, // how much it space it takes
    type: string, // body, weapon, accessory, bag, other
    look() {},
    search() {},
    use() {},
}

Box { 
    items: [], // list of items contained inside the item
    open() {}
}

UsableItem extends Item {
    type: 'other',
    reusable: boolean,
    use: string, // what happens when you use the item text
    does: {
        attribute: string, // which attribute it affects
        amount: integer, // +/- to given attribute
    },
    target: string, // Name of some other object
}

Weapon extends Item {
    type: 'weapon',
    damage: integer, // damage delivered based on random roll
}

Armor extends Item {
    type: 'body',
    armor: integer, // number added to life
}

MagicItem extends Item {
    active: boolean, // true = active in inventory, false = must be equipped
    powers: {
       life: integer, // +/- to life
       action: integer, // +/- to action
       carry: integer, // +/- to carry
    }
}

CarryItem extends Item {
   capacity: integer,
   inventory: [], // Items 
   tardis: boolean,
}

SmallCarryItem extends CarryItem {
    max_capacity: 5,
    tardis: false,
}

LargeCarryItem extends CarryItem {
    max_capacity: 50,
    tardis: false,
}
```

## Skill
```
Skill {
    name: string,
    tag: string, // unique
    cost: integer, // how many action points does the skill cost
    description: string,
    command: string,
    shortcut: char, 
    output: string, // text to display,
    powers: {
       life: integer, // +/- to life
       action: integer, // +/- to action
       carry: integer, // +/- to carry
    },
    do(target) {},  // target is some other object
}
```

## Map 
```
Map {
    tag: string, // unique
    current: Room,
    rooms: [], // array of Rooms
    move(direction) {},
}
```

## NPC
```
Npc {
    name: string,
    tag: string, // unique
    description: string,
    greeting: string, // string the NPC greets you with
    say(trigger) {},
}

Monster extends Npc {
    life: integer, // monster's life
    skills: [], // array of Skills,
    weapon: Item,
    drops: [], // array of Items to drop on death
    experience: integer // worth on death
}

Person extends Npc{
    scripts: {}, // trigger word: Script
}

Script {
    tag: string, // unique
    dialog:
    scripts: {}, // trigger word: Script
}
```
