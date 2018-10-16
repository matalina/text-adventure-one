# Objects

* [Character](#character)
* [Profession](#profession)
* [Race](#race)
* [Room](#room)
* [Skill](#skill)
* [Item](#item)
* [Quest](#quest)
* [Journal](#journal)
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
}
```

## Room
```
Room {
    name: string,
    description: string,
}
```

## Item
```
Item {
    name: string,
    description: string,
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
    description: string,
}
```

## Quest
```
Quest {
    name: string,
    description: string,
}
```

## Journal 
```
Journal {
    name: string,
    description: string,
}
```

## Map 
```
Map {
    name: string,
    description: string,
}
```

## NPC
```
Npc {
    name: string,
    description: string,
}
```
