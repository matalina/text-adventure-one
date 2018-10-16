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


## Character
```
Character {
    name: string,
    description: string,
    level: integer,
    profession: Profession,
    race: Race,
    location: Room,
    points {
        experience: integer,
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
    do(Skill) {},
    take(Item) {},
    drop(Item) {},
    equip(Item) {},
    unequip(Item) {},
    say(something, someone) {},
    move(direction) {},
}
```
## Profession
```
Profession {
    name: string,
    description: string,
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
