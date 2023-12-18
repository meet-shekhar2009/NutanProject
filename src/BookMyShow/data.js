export const movies = [
    { id: 1, name: 'Iron Man', price: 300 },
    { id: 2, name: 'Thor', price: 250 },
    { id: 3, name: 'The Shawshank Redemption', price: 350 },
    { id: 4, name: 'City of God', price: 200 },
    { id: 5, name: 'Avatar', price: 400 }];

export const seats = new Array(78).fill('').map((k, i) => ({ seat: `s-${i}` }));