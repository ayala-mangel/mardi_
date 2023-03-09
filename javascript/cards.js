let cards = [
  {
    h1: "Ace Hotel New Orleans",
    p: "Sits at the corner of Carondelet and Lafayette Street in a beautiful 1928 Art Deco building, flanked by museums and galleries in the city's culturally-vibrant Warehouse District. A stone's throw from the French Quarter and home to some of the finest dining and drink in the city, a rooftop pool and a music venue right on site.",
    a: "https://www.neworleans.com/listing/ace-hotel-new-orleans/29292/",
  },
  {
    h1: "The Ritz -Carlton, New Orleans",
    p: "The Ritz-Carlton, New Orleans (Ritz-Carlton, New Orleans) Hotel is located on the edge of the French Quarter (French Quarter) and offers on-site dining options and a spa offering more than 100 treatments. Bourbon Street (Bourbon Street) is located only / 500 only from the hotel.",
    a: "https://www.ritzcarlton.com/en",
  },
  {
    h1: "Museum of Death",
    p: "The world-famous Museum of Death is located in New Orleans' French Quarter. Those brave enough to visit can view and learn more about body bags, coffins, skulls, morticians, cannibalism and much more. Special displays include Manson family photos, crime morgue scene photos and more.",
    a: "https://www.neworleans.com/listing/museum-of-death/37175/",
  },
  {
    h1: "Sheraton New Orleans Hotel",
    p: "Steps from the French Quarter located in downtown New Orleans. Luxurious suites with 2, 3 and 4 bedrooms can be rented",
    a: "https://www.marriott.com/",
  },
  {
    h1: "Premium Parking - P402",
    p: "Our goal at Premium Parking is not to be the biggest parking operator, but the best.Find parking costs, opening hours and a parking map of Premium Parking Lot #P402 300 N Peters St as well as other parking lots, street parking, parking meters",
    a: "https://thehauntedmuseum.com/",
  },
  {
    h1: "Walk -On's Bistreaux and Bar ",
    p: "Fine dining restaurant of all styles and types",
    a: "https://walk-ons.com",
  },

  {
    h1: "Louisiana Children's Museum",
    p: "The Louisiana Children's Museum (LCM) has taken their endless opportunities to explore,experience and learn outside to their new home in New Orleans City Park.",
    a: "https://www.lcm.org",
  },
];
function modalcards(i) {
  document.querySelector(".modal-body").innerHTML = cards[i].p;
  document.getElementById("exampleModalLabel").innerText = cards[i].h1;
  document.getElementById("as").href = cards[i].a;
}
