import {Films} from '../types/films';

export const films: Films = [
  {
    id: '1',
    filmName: 'The Grand Budapest Hotel',
    srcImg:  'img/the-grand-budapest-hotel-poster.jpg',
    backgroundSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    posterSrc:'img/the-grand-budapest-hotel-poster.jpg',
    genre: 'Fantasy',
    date: 2014,
    runTime: '1h 1m',
    overview: {
      rating: {
        score: 8.9,
        result: 'Very good',
        amountOfReviews: 240
      },
      description: 'The Grand Budapest Hotel, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Wes Anderson',
      starring: ['film 1 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1082214569/preview/stock-footage-air-plane-window-view-time-lapse-clouds-and-blue-sunny-sky-loop-of-white-clouds-over-blue-sky-with.webm',
    reviews: [
      {
        id:1,
        text: '1 1 text',
        author: '1 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '1 2 text',
        author: '1 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '2',
    filmName: 'Bohemian Rhapsody',
    srcImg:' img/bohemian-rhapsody.jpg',
    backgroundSrc: 'img/bg-bohemian-rhapsody.jpg',
    posterSrc:'img/bohemian-rhapsody-poster.jpg',
    genre: 'Drama',
    date: 2010,
    runTime: '1h 2m',
    overview: {
      rating: {
        score: 10,
        result: 'Awesome',
        amountOfReviews: 10
      },
      description: 'Bohemian Rhapsody, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Bohemian Rhapsody',
      starring: ['film 2 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1059312542/preview/stock-footage-time-lapse-retail-warehouse-full-of-shelves-with-goods-in-cardboard-boxes-workers-scan-and-sort.webm',
    reviews: [
      {
        id:1,
        text: '2 1 text',
        author: '2 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '2 2 text',
        author: '2 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '3',
    filmName: 'Macbeth',
    srcImg:' img/macbeth.jpg',
    genre: 'Comedy',
    date: 2013,
    runTime: '1h 3m',
    overview: {
      rating: {
        score: 8.2,
        result: 'Very good',
        amountOfReviews: 1
      },
      description: 'Macbeth, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Macbeth',
      starring: ['film 3 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1058325193/preview/stock-footage-growing-plants-in-timelapse-sprouts-germination-newborn-plant.webm',
    reviews: [
      {
        id:1,
        text: '3 1 text',
        author: '3 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '3 2 text',
        author: '3 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '4',
    filmName: 'Aviator',
    srcImg:' img/aviator.jpg',
    genre: 'Documentary',
    date: 2022,
    runTime: '1h 4m',
    overview: {
      rating: {
        score: 9.5,
        result: 'Very good',
        amountOfReviews: 52255
      },
      description: 'Aviator, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Aviator',
      starring: ['film 4 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1083845854/preview/stock-footage-sun-and-sky-reflecting-in-the-watch-during-the-time-passing-by-time-lapse-on-a-modern-white-clock.webm',
    reviews: [
      {
        id:1,
        text: '4 1 text',
        author: '4 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '4 2 text',
        author: '4 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '5',
    filmName: 'We need to talk about Kevin',
    srcImg:  'img/we-need-to-talk-about-kevin.jpg',
    genre: 'Comedy',
    date: 2015,
    runTime: '1h 5m',
    overview: {
      rating: {
        score: 0.5,
        result: 'Bad',
        amountOfReviews: 1
      },
      description: 'We need to talk about Kevin, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'We need to talk about Kevin',
      starring: ['film 5 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1065503581/preview/stock-footage-times-square-new-york-usa-timelapse-of-busy-times-square-as-the-sun-sets.webm',
    reviews: [
      {
        id:1,
        text: '5 1 text',
        author: '5 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '5 2 text',
        author: '5 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '6',
    filmName: 'What We Do in the Shadows',
    srcImg: 'img/what-we-do-in-the-shadows.jpg',
    genre: 'Horror',
    date: 2010,
    runTime: '1h 6m',
    overview: {
      rating: {
        score: 9.9,
        result: 'Awesome',
        amountOfReviews: 222
      },
      description: 'What We Do in the Shadows, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'What We Do in the Shadows',
      starring: ['film 6 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1077627401/preview/stock-footage-aerial-car-factory-d-concept-automated-robot-arm-assembly-line-manufacturing-high-tech-green.webm',
    reviews: [
      {
        id:1,
        text: '6 1 text',
        author: '6 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '6 2 text',
        author: '6 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '7',
    filmName: 'Revenant',
    srcImg:' img/revenant.jpg',
    genre: 'Fantasy',
    date: 2020,
    runTime: '1h 7m',
    overview: {
      rating: {
        score: 8.0,
        result: 'Very good',
        amountOfReviews: 123
      },
      description: 'Revenant, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Revenant',
      starring: ['film 7 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://www.shutterstock.com/shutterstock/videos/1063472734/preview/stock-footage--k-time-lapse-of-majestic-sunset-or-sunrise-landscape-amazing-light-of-nature-cloudscape-sky-and.webm',
    reviews: [
      {
        id:1,
        text: '7 1 text',
        author: '7 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '7 2 text',
        author: '7 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  },
  {
    id: '8',
    filmName: 'Johnny English',
    srcImg:' img/johnny-english.jpg',
    genre: 'Comedy',
    date: 2015,
    runTime: '1h 8m',
    overview: {
      rating: {
        score: 9.1,
        result: 'Very good',
        amountOfReviews: 321
      },
      description: 'Johnny English, a fictional novel by J.K. Rowling, follows a magical young man named Newt on a journey to find his beasts that escaped. Newt Scamander is a wizard unlike any other, he uses not only his powers but the powers of his magical animals.',
      director: 'Johnny English',
      starring: ['film 8 actor 1', 'actor 2', 'actor 3', 'actor 4', 'actor 5', 'actor 6']
    },
    player: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        text: '8 1 text',
        author: '8 1 author',
        date: '13-11-2012',
        rating: 9.4
      },
      {
        id:2,
        text: '8 2 text',
        author: '8 2 author',
        date: '13-11-2012',
        rating: 9.4
      }
    ]
  }
];
