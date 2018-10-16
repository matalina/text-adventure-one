# Objects

* [Character](#character)
* [Profession](#profession)
* [Race](#race)
* [Room](#room)
* [Skill](#skill)
* [Item](#item)
* [Map](#map)
* [Npc](#npc)


## Character
```
Character {
    name: string,
    description: string,
    level: integer,
    profession: Profession,
    race: Race,
    location: Room,
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
    levelUp() {},
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
    description: string,
    skills: [], // array of Skills for listing purposes only
    levels: [], // array of Levels
}
```

## Race
```
Race {
    name: string,
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
    description: string,
    directions: {
        north: Direction, 
        east: Direction,
        south: Direction,
        west: Direction,
    },
    items: [], // an array of Items in the room
    npcs: [], // an array of NPCs in the room
}

Direction {
    name: string,
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
    description: string,
    carry: integer, // how much it space it takes
    type: string, // body, weapon, accessory, bag, other
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
    current: Room,
}
```

## NPC
```
Npc {
    name: string,
    description: string,
}
```
