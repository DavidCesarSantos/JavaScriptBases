const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Sdiscount' });
});

router.get('/collection', (req, res, next) => {
  const rslt = [
    {
      sku: 'CCT-06',
      category: 'MAISON SARAH LAVOINE',
      name: 'California Crusty Tuna',
      url: 'https://www.sushishop.fr/product-6569-400x400/california-crusty-tuna.png',
      price: 6.9,
      currency: '€',
      pieces: 6,
      composition: ['Thon', 'Sésame', 'Oeufs de masago', 'Sauce Épicée', 'Croûton'],
      flavor: ['Thon'],
      description:
        'Ce roll réveillera vos papilles avec sa sauce épicée, ses croûtons croquants et ses œufs de masago. Une véritable explosion en bouche !',
    },
    {
      sku: 'TTA-01',
      category: 'TEMAKI',
      name: 'Temaki Thon Avocat',
      url: 'https://www.sushishop.fr/product-5483-400x400/temaki-thon-avocat.png',
      price: 4.9,
      currency: '€',
      pieces: 1,
      composition: ['Thon', 'Avocat', 'Sésame', 'Algues', 'Riz', 'Algues'],
      flavor: ['Thon', 'Avocat'],
      description:
        "Le Temaki Thon Avocat allie la fraîcheur du thon à l'onctuosité de l'avocat, cette association ravira vos papilles.",
    },
    {
      sku: 'TC-01',
      category: 'TEMAKI',
      name: 'Temaki California',
      url: 'https://www.sushishop.fr/product-5480-400x400/temaki-california.png',
      price: 4.9,
      currency: '€',
      pieces: 1,
      composition: [
        'Chair De Crabe',
        'Avocat',
        'Sauce Mayonnaise Ponzu',
        'Ciboulette',
        'Riz',
        'Algues',
      ],
      flavor: ['Crabe', 'Avocat'],
      description:
        "Le Temaki California allie la chair de crabe à l'avocat et fait de ce Temaki le plus onctueux avec sa mayonnaise, pour votre plus grand plaisir.",
    },
  ];
  res.json({ status: 200, data: rslt });
  res.end();
});

module.exports = router;
