# Objects


## Character
```
Character {
    name: string,
    description: string,
    level: integer,
    profession: [Profession](#profession),
    race: [Race](#race),
    location: [Room](#room),
    points {
        life: integer,
        action: integer,
        carry: integer,
    },
    inventory: [], // [Item](#item)s
    levelUp() {},
    rest(hours) {},
    do([Skill](#skill)) {},
    take([Item](#item)) {},
    drop([Item](#item)) {},
    say(something, someone) {},
    move(direction) {},
}
```
## Profession

## Race

## Room

## Item

## Skill

