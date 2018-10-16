# Objects

* [Character](#character)
* [Profession](#profession)
* [Race][#race)
* [Room][#room)
* [Skill](#skill)
* [Item](#item)


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
        life: integer,
        action: integer,
        carry: integer,
    },
    inventory: [], // Items
    levelUp() {},
    rest(hours) {},
    do(Skill) {},
    take(Item) {},
    drop(Item) {},
    say(something, someone) {},
    move(direction) {},
}
```
## Profession

## Race

## Room

## Item

## Skill

