//Array.map() review

// const names = ['anne', 'barry', 'chole'];
// const bigNames = names.map((name) => name.toUpperCase());

// console.log(bigNames);
// console.log(names); 

//Array.filter() and Array.find() basic syntax

// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn); 

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

//const myFavoriteThings = things.filter((thing) => thing.favorite); 
//console.log(myFavoriteThings);

// const pointsGreaterThan50 = things.filter((thing) => thing.points > 50);
// console.log(pointsGreaterThan50); 

const thingsMatchId4 = things.find((thing) => thing.id === 4);
console.log(thingsMatchId4); 

const selectThingsByID = (id) => {
    return things.find((thing) => thing.id === id);
}

const selectedThing = selectThingsByID(4);
console.log(selectedThing)

const firstThingWithFeatureTrue = things.find((thing) => thing.featured === 'true');
console.log(firstThingWithFeatureTrue); 