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
    story: [], // Array of Chapters
    load(game) {},
    start() {},
    exit() {},
    pause() {},
    do(Command, ...args) {},
}

Map {
    name: string,
    tag: string, //unique
    description: string,
    rooms: [], // array of Rooms
}

Command {
    tag: string, // the word which triggers the command,
    trigger: Trigger, // 
    args: {}, // variable: Object Type
    text: string, // the output of the command
}
```

# Story 
```
Chpater {
    name: string,
    script: [], // an array of Scripts to be done in order base
}

Script {
    tag: string, // unique
    trigger: Trigger
    dialog:
    scripts: {}, // trigger word: Script
}

Trigger {
    tag: string, // unique,
}
```

## Character
```
Character {
    name: string,
    tag: string, // unique
    description: string,
    profession: Profession,
    race: Race,
    location: Room.tag,
    skills: {}, // keyword: Skill (move, talk, search, look, profession and race skills)
    points {
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
    possessions: [], // array of Items owned
    create() {},
    rest(hours) {},
    do(Skill, object) {},
    take(Item) {},
    drop(Item) {},
    equip(Item) {},
    unequip(Item) {},
    use(Item) {},
}
```

## Profession
```
Profession {
    name: string,
    tag: string, // unique
    description: string,
    skills: [], // array of Skills for listing purposes only
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
}

Wall extends Direction {
    items: [], // an array of Items to interact with in that direction
}

Door extends Direction {
    hidden: boolean,
    to: Room.tag,
    from: Room.tag,
    exit: boolean, // true = game end
    locked: boolean,
    key: Key,
    open(key) {}
}

Key extends Item {
    for: Item,
    physical: boolean, // true = physical key, false = combination
    combination: string, // string of characters to open lock
}
```

## Item
```
Item {
    name: string,
    tag: string, // unique
    description: string,
    carry: integer, // how much it space it takes
    type: string, // body, weapon, accessory, bag, key, other
    look() {},
    search() {},
    use(target) {},
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

Person extends Npc{
    scripts: {}, // trigger word: Script
}
```
