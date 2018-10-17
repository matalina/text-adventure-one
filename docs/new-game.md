```json
{ 
    name: 'Escape Room',
    tag: 'escape-room-1', // unique
    description: 'Try to escape the room',
    start: 'room',
    map: [
        {
            name: 'Escape Room',
            description: "",
            tag: 'room', // unique
            directions: {
                north: {
                    type: 'wall',
                    name: 'north',
                    tag: 'north',
                    description: "",
                    items: [],
                }, 
                east: {
                    type: 'wall',
                    name: 'north',
                    tag: 'north',
                    description: "",
                    items: [],
                },
                south: {
                    type: 'wall',
                    name: 'north',
                    tag: 'north',
                    description: "",
                    items: [],
                },
                west: {
                    type: 'door',
                    name: 'west',
                    tag: 'west',
                    description: "",
                    hidden: boolean,
                    to: null,
                    from: 'room',
                    exit: true,
                    locked: boolean
                    key: {
                        type: 'key',
                    },
                }
            },
            items: [], 
            npcs: [], 
        }
    ],
}
```
