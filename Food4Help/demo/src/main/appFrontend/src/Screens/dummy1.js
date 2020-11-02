export const stockData = [
    {
       id: "1",
       companyName: "Wendy's",
       phone: "7871234567",
       ownerName: "Juan",
       ownerLastName: "Pepino",
       email: "juanpepino@wendys.com",
       category: "Fast Food",
       meeting: "8:30 am - 12:00 pm",
       review: [
                  {
                      user: "luisperez01",
                      title: "Amazing experience with this company",
                      description: "Great state of the food, the person who meet me for the charity was so kind. I hope we share a lot of food.",
                      stars: 5,
                  }, {
                   user: "mariaruiz02",
                   title: "Not good service",
                   description: "The food was awesome but the services for the charity not the best. Hope next time will be better.",
                   stars: 3,
                  }, {
                   user: "pedrolobo03",
                   title: "Good food",
                   description: "Awesome service and the food was great. So graceful about the charity.",
                   stars: 5,
                  }, {
                   user: "wandaroman04",
                   title: "Slow service",
                   description: "I was at 9 am in the appointment but the person who gave me the charity arrived late at 9:21 am. The food was great instead.",
                   stars: 4,
                  }
              ],
       food: [
            {
               "Cann Food": [
                "Red Beans"
             ]
           }, {
               "Frozen Food": [
                "Ice Cream",
                "Fish Fillets",
                "Chicken Breast",
                "French Fries",
                "Meat",
                "Bread"
               ]
           }, {
               "Vegetables": [
                "Broccoli",
                "Lettuce",
                "Avocado",
                "Corn",
                "Onions",
                "Peppers"
               ]
           }, {
               "Fruit": [
                   "Apples"
               ]
           }, {
               "Drinks": [
                   "Coca Cola",
                   "Sprite",
                   "Iced Tea",
                   "Orange Juice",
                   "Apple Juice",
                   "Water",
                   "Pepsi",
                   "7up"
               ]
           }
        ]
    }, {
        id: "2",
        companyName: "Pueblo",
        phone: "7871234568",
        ownerName: "Fernando",
        ownerLastName: "Del Barrio",
        email: "fernandodelbarrio@pueblo.com",
        category: "Supermarket",
        meeting: "9:00 am - 11:45 pm",
        review: [
                    {
                        user: "omarperez01",
                        title: "Great experience with this company",
                        description: "Great state of the food, the person who meet me for the charity was so kind. I hope we share a lot of food. But arrived 5 minutes late.",
                        stars: 4,
                    }, {
                     user: "arielcoman02",
                     title: "Not good service  but good food",
                     description: "The food was awesome but the services for the charity not the best. Hope next time will be better.",
                     stars: 2,
                    }, {
                     user: "adrianlopez03",
                     title: "Spectacular food",
                     description: "Awesome service and the food was great. So graceful about the charity.",
                     stars: 5,
                    }, {
                     user: "roncabrera04",
                     title: "Fast service",
                     description: "I was at 9 am in the appointment and the person who gave me the charity arrived before. The food was great instead.",
                     stars: 4,
                    }
                ],
        food: [
             {
                "Cann Food": [
                 "Tuna",
                 "Corned Beef",
                 "Vienna Sausages",
                 "Spam",
                 "Red Beans"
              ]
            }, {
                "Frozen Food": [
                 "Ice Cream",
                 "Fish Fillets",
                 "Chicken Breast",
                 "Chicken Wings",
                 "French Fries",
                 "Meat",
                 "Bread"
                ]
            }, {
                "Vegetables": [
                 "Broccoli",
                 "Spinach",
                 "Carrots",
                 "Sweet Potatoes",
                 "Lettuce",
                 "Avocado",
                 "Corn",
                 "Onions",
                 "Peppers"
                ]
            }, {
                "Fruit": [
                    "Bananas",
                    "Apples",
                    "Grapes",
                    "Strawberries",
                    "Oranges",
                    "Lemons",
                    "Blueberries",
                    "Peaches"
                ]
            }, {
                "Drinks": [
                    "Coca Cola",
                    "Sprite",
                    "Iced Tea",
                    "Orange Juice",
                    "Apple Juice",
                    "Water",
                    "Pepsi",
                    "7up",
                    "Grape Juice"
                ]
            }
         ]
         }
];

//<List className={classes.root} subheader={<li />}>
//              {stockData.map((sectionId) => (
//                <li key={`section-${sectionId}`} className={classes.listSection}>
//                  <ul className={classes.ul}>
//                    {stockData.map((item) => (
//                      <ListItem key={`item-${sectionId}-${item.companyName}`}>
//                        <ListItemText primary={`${item.companyName}`} />
//                      </ListItem>
//                    ))}
//                  </ul>
//                </li>
//              ))}
//            </List>