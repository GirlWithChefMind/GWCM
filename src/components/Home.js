import React, { useState } from "react";
// import recipe from "./recipe";

import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const recipe = [
  {
    id: "1",
    image: "1.jpg",
    title: "Raj Kachori",
    ingredients: [
      "125gms/ ½ cup + 1tbsp Rava/Suji (semolina) ",
      " 500ml/ ¼ cup Warm Water",
      "FOR STUFFING",
      "35gms/ ¼ cup + ½ Tbsp Besan (gram flour)",
      "15gms/ 1¼ tbsp Rava/Suji (semolina) ",
      "½ tsp Baking Soda",
      "35ml/ 2½ tbsp Warm Water",
      "For Frying Oil",
      " FOR FILLING",
      " Boiled Potato diced",
      " Dal Moth",
      " Chickpeas (Boiled)",
      " Chaat masala",
      " Green chilli chopped",
      " Sev (thin)",
      " Curd",
      " Tamarind Chutney",
      " Mint chutney",
      " Ginger julienne",
      " Beetroot (julienne)",
    ],
    cooking:
      "Make sure to use fine grain semolina, if you have a thicker variety then simply grind it into a finger grain in a mixer grinder. To make the dough mix together semolina and warm water. Make a very wet dough as semolina will absorb water and become stiff. When making the dough you don’t have to kneed a lot. Cover the dough with damp cloth and give rest for 15min. Warm water is added so that the semolina readily blooms and softens. In the meantime prepare the stuffing by mixing together gram flour, semolina, baking soda and water. Keep the stuffing moist and soft just as the same consistency as the dough. Cover with a damp cloth and rest for 10min. Now knead the dough to mix it together so as to soften he dough. If the dough becomes too stiff then sprinkle some water to make it pliable. Divide the dough into equal size balls of about 10gms each. Cover with damp cloth and start mixing the stuffing and divide it into equal size balls of 3gms each. Make sure that the consistency of the dough and the stuffing is almost the same. Now lightly flatten and spread the dough ball with your fingers and place the stuffing int he centre and gently roll the dough to a ball. This is just like stuffing a paratha. Do this for the entire dough and place them back under a damp cloth. Heat oil in a kadai to medium hot. Lightly oil the counter and the rolling pin (belan) and roll out the dough to make a thin disc about 3.5inches in diameter. While rolling make sure that the stuffing is evenly distributed. As the stuffing has the baking soda so the more evenly it spreads the more evenly it will puff up. Gently lift and slide into hot oil, pour hot oil on top using a frying spoon till it puffs. Turn over and cook on both sides till it turns light brown. Remove to an absorbent paper and let it rest. Leave it to rest for 2 hours for it to get crisp before you use it. Once crisp and cooled poke on one side and fill it up with the list of filling mentioned in the ingredients list above. Make sure to filling in and drop on to the plate extra yogurt, tamarind chutney and mint chutney. Serve it immediately.",
  },
  {
    id: "2",
    image: "/2.jpg",
    title: "Ghevar",
    ingredients: [
      "FOR GHEWAR BATTER",
      "63 gms Desi Ghee",
      "1100ml Water",
      "250gm Maida",
      "for frying upto 1.5L Oil",
      "few Ice Cubes",
      "FOR SUGAR SYRUP",
      "2cups Sugar",
      "½ cup Water",
      "½ tsp Cardamom powder",
      "FOR RABRI",
      "1lt Milk",
      "2tbsp Sugar",
      "½ tsp Cardamom powder",
    ],
    cooking:
      "Begin by heating the ghee, once the ghee gets a little hotter than luke warm, remove from the pan and transfer to a parat or a flat utensil. Add in the ice over the ghee and begin to move around ice so that the ghee cools and starts to solidify. Make sure all of ghee solidifies again but remains soft. At this stage remove all the ice cubes and water. Using your fingers scrape and bring all the ghee on to one side of the utensil and squeeze it to remove any water. Now using the palm of your hand start rubbing the ghee to make it softer and creamy. Do this for 4-5mins till the ghee resembles like sift white butter. At this point begin adding the maida slowly in small batches and mix with the tips of your fingers. Once about half of the maida has been incorporated, it will begin resemble a texture like bread crumbs. At this point transfer the rest of the maida to the parat and incorporate using a similar technique. Rub the ghee and maida together to make it crumbly. Gradually add in the water slowly in small batches to avoid splashing and form a stable emulsion. Make sure as you add water you keep rubbing the batter with the palm of your hand to avoid any lumps Incorporate all of the water to warm an extremely thin batter and strain it though a sieve to avoid any lumps. The batter should be watery thin with light coating on the hands. Fill a heavy kadhai (about 12-15inches wide from the top) with oil to the middle and begin to heat. The oil should be medium to high hot before we add the batter. Fill the batter in a laddle and slowly drizzle it in the centre of the hot oil in one motion. Make sure to drop the batter from at least 10inches from the surface of the oil. Doing this step enables that the batter quickly disintegrates into tiny holes like pattern and run towards the outer side, making a web in the process. Add another laddle of the batter in the centre again and keep repeating till you get a solid mass covering the kadai. Make sure that each time you add batter the temperature of the oil should be med - high. Once it reaches the desired size let it brown lightly and then using a handle of a wooden laddle lift the ghewar out and hold it out of the oil over the kadai to drain excess oil. Place it gently over a ring cutter or a cup to drain all the oil. Once it cools completely place it on to a try for toppings. FOR SUGAR SYRUP Mix together sugar, water and cardamom powder and bring to a boil. Cook till sugar dissolves and we get a thick single string consistency. Remove from heat and let it cool completely. FOR RABRI Heat milk in a pan and bring to a boil and let it simmer. Cook the milk till it reduces to ¼ of the original quantity of milk. Make sure to stir the milk constantly during the process of reducing the milk and also keep scrapping the sides. Once it reduces to ¼th add sugar and cardamom powder, stir till sugar dissolves and remove it from heat to cool. Rabri is ready. ASSEMBLING THE GHEWAR - FOR PLAIN GHEWAR For plain ghewar pour some sugar syrup over the ghewar and garnish it with some chopped nuts. Let it sit for 15mins, remove to a platter and serve. FOR GHEWAR WITH RABRI Pour some sugar syrup over the ghewar and add the rabri on top. Spread the rabri evenly and garnish it with chopped nuts on top.",
  },
  {
    id: "3",
    image: "3.jpg",
    title: "Kharbooja Cooler | Summer Melon Drink",
    ingredients: [
      "Musk Melon (medium sized) – 3 wedges",
      "Condensed Milk – 1½ tbsp",
      "Nutmeg powder – a pinch",
      " Mint Leaves – Handful",
      " Water (chilled) – a dash",
    ],
    cooking:
      "Peel the skin off the melon and place the wedges in a blender jar along with condensed milk, nutmeg powder, mint leaves and water. Blend it into a puree and pour it out in a glass with few ice cubes. Serve chilled.",
  },
  {
    id: "4",
    image: "4.jpg",
    title: "Chocolate Paan Latte",
    ingredients: [
      "Paan Leaves – 4 nos",
      "Cherry Glazed – 6 nos",
      "Vanilla Ice Cream – 3 scoops",
      "Crushed Ice – 1 cup",
      "Tooth pick – 2 nos",
      "Gulkand – 2 tbsp",
      "Saunf (candy) – 1 tbsp",
      "Milk (cold) – 1 1/2cups",
      "Chocolate Syrup – for garnishing",
    ],
    cooking:
      "Tear the paan leaves into smaller pieces. In a blender add the leaves, gulkand, 4 no glazed cherries, saunf, vanilla ice cream, milk and crushed ice. Blend it till it is smooth. In a tall glass pour chocolate sauce on the sides of the glasss. Pour the chilled latte into the glass and serve it immediately. Garnish with a glazed cherry in a toothpick.",
  },
  {
    id: "5",
    image: "5.jpg",
    title: "Toffee Shape Samosa",
    ingredients: [
      "Refined flour – 2cups",
      "Ghee – ¼ cup",
      "Salt – a generous pinch",
      "Ajwain – 1tsp",
      "Water – as required",
      "For Stuffing",
      "Oil – 3tbsp",
      "Heeng – ½ tsp",
      "Cumin – 2tsp",
      "Coriander seeds – 1tbsp",
      "Green chilli chopped – 2tsp",
      "Turmeric – ½ tsp",
      "Chilli powder – 1tsp",
      "Coriander powder – 1tbsp",
      "Potato (boiled) – 3no",
      "Salt",
      "Amachur – 1tps",
      "Chaat masala – 2tsp",
      "Coriander chopped – handful",
      "Paneer (small cubes) – ½ cup",
    ],
    cooking:
      "For the dough Mix and rub together flour salt ajwain ghee to crumble them together. Add water to make a stiff dough and keep aside for 20mins For the stuffing heat a pan and pour in oil. Sprinkle heeng, cumin, coriander seeds, and give a quick stir. Add green chillies, turmeric, chilli powder, coriander powder and give a quick stir. crush the boiled potatoes between your hands and add it to the pan along with salt, amchur and chaat masala. Mix them cook the potatoes for 5mins. Sprinkle chopped coriander and add paneer. Stir for a minute and remove to a plate. Spread the mixture to cool it completely.Roll out flat like a disc and place some filling towards the edge of the dough. Roll and fold the dough along with the filling till half way. Brush the remaining open half with water and using a sharp knife give slits on it. Roll the dough fully and press from the sides where the filling ends giving it a toffee/candy wrapper shape. Heat oil to medium hot and fry them till they start to float on top. Now increase the heat and fry till golden brown. Remove and serve them hot.",
  },
  {
    id: "6",
    image: "6.jpg",
    title: "Naankhatai",
    ingredients: [
      "Ghee – 1cup",
      "Sugar (powdered) – 1cup",
      " Flour (all purpose) – 1cup ",
      "Gram flour (besan) – ½ cup",
      " Semolina – 4tbsp",
      "Baking powder – ½ tsp",
      "Baking soda – ½ tsp",
      "Cardamom powder – 1tsp",
      "Pista chopped – for garnish ",
    ],
    cooking:
      "In a bowl add ghee which is soft and pouring. Make sure that the ghee is granulated and not totally molten. Add in sugar and whisk it together for 10mins or till it turns creamy. This is an important step so make sure it is done right. Now add in the rest of the ingredients and mix them together to make a cookie like dough. Place the dough in the fridge for 15mins to make the ghee solid again. Remove and cut into smaller 16 pieces of equal size. Roll them into balls and place them on to a plate lined with a butter paper. Garnish them with pistachios and you can cook them in an oven at 10c for 12-15mins. Alternatively you can cook them in a deep pan or kadai on a bed of hot salt. For the same fill the vessel with salt upto ¾ th of the height of the vessel. Place a ring in the centre of the salt and heat the salt on high heat for 20mins. Now place the plate with the naam khatai on to the ring and cover the vessel and cook for 15mins or till they start to brown. Remove and let them cool completely before serving.",
  },

  {
    id: "7",
    image: "7.jpg",
    title: "Kathal Biryani",
    ingredients: [
      "Kathal Chunks – 5cups",
      "Salt",
      "Chilli powder – 2tsp",
      "Turmeric – ¾ tsp",
      "Coriander powder – 1tbsp",
      "Ginger paste – 1 tbsp",
      "Garlic paste – 1 tbsp",
      "Bhuna besan – 3 tbsp",
      "Oil – 4tbsp",
      "For Jhol",
      "Oil – 1 cup",
      "Shahi Jeera – 2 tsp",
      "Cardamom – 5no",
      "Cinnamon stick – 1no",
      "Onion sliced – 2½ cups",
      "Garlic paste – 1 tbsp",
      "Ginger paste – 1 tbsp",
      "Water – a dash",
      "Turmeric – ¾ tsp",
      "Chilli powder – 1tbsp",
      "Coriander powder – 1½ tbsp",
      "Curd – 1½ cups",
      "Salt – to taste",
      "Cardamom powder – ½ tsp",
      "Mace (javitri) powder – ½ tsp",
      "Kewra water – 1 tbsp",
      "Rose water – 1tbsp",
      "Green chilli – 2 nos",
      "Mint leaves – 1 cup",
      "For rice",
      "Basmati rice – 3 cups",
      "Water – 3 lts",
      "Salt – handful",
      "Green chilli – 1 no",
      "Cardamom – 4-5 nos",
      "Rose water – 1 tbsp",
      "Kewra water – ½ tbsp",
      "Saffron (dissolved in 2tbsp milk) – a pinch",
      "Water from Blanched Rice – 1 cup",
      "Ghee/Leftover oil – 3 tbsp",
      "Mint leaves – handful",
      "Fried onion – handful",
      "Dough – for sealing",
    ],
    cooking:
      "Lightly marinate the kathal with salt, chilli powder, turmeric, coriander powder, javitri elichi powder, ginger garlic paste and bhuna besan. On a tawa heat oil and shallow fry them on both sides. It need not be cooked completely, but should get the brown colour. Remove and let it cool before use. In a separate bowl mix all the ingredients under marination except for oil and onions. Keep it aside. In a deep pan heat oil and add onions. Brown the onions and then strain them removing the oil. Add the fried onions back to the pan along with 3tbsp of the strained oil. Keep the remaining oil on the side. Add the marination to the onions and give a quick boil. Add the kathal and cook for 4 mins. Separately boil water add 1 tbsp of oil(leftover strained oil), cardamom, cinnamon, green chilli, and salt. Boil for 5 mins and then strain the spices and chilli. Add kewra and rose water. Now add the soaked and drained rice. Cook till rice is ¾th cooked. Strain the rice and retain the water. Spread the strained rice over the veggies and drizzle dissolved saffron, 1 cup of strained water(from rice), 3tbsp of oil(from fried onions), mint leaves and fried onions. Using the dough and a lid seal the top of the vessel. Seal the vessel with dough and a tight-fitting lid. Cook on high heat for a minute, now lower the heat and cook on dum for 12-15min. Remove from heat and let it sit for 10 mins before opening the lid. Serve hot with raita.",
  },
  {
    id: "8",
    image: "8.jpg",
    title: "Coconut Laddoo",
    ingredients: [
      "Condensed milk caramelised – 1 cup",
      "Cardamom – ½tsp",
      "Dried desiccated coconut – 2 cups",
      "Vanilla extract – 1 tsp",
    ],
    cooking:
      "Place an unopened can in a sauce pan and cover it with water. Boil it covered for 2 hours. Remove the can and let it cool and then open it. Pour out 1 cup of this caramelised condensed milk in a bowl. Add desiccated coconut, cardamom powder and vanilla extract. Mix them thoroughly and shape them into small ladoos(balls). Once again dunk them in dried coconut and serve",
  },
  {
    id: "9",
    image: "9.jpg",
    title: "Vada Pav",
    ingredients: [
      "FOR BATTER",
      "1 cup Besan (gram flour)",
      "1 tsp Salt",
      "3/4 tsp Chilli powder",
      " 1/2 tsp Turmeric",
      "1 cup Water",
      "Pao (soft buns) - 6 nos Kashmiri Chilly Powder",
      "FOR POTATO",
      "2 tbsp Oil",
      " 1 tsp Mustard seeds",
      " 1/2 tsp Heeng (asafoetida)",
      " 2 no Green chilly chopped",
      " handful Curry leaves chopped",
      "(optional) - 2 tsp Ginger chopped",
      "1/2 tsp Turmeric",
      "1 1/2 cup Boiled Potato diced",
      "3/4 tsp Salt",
      " For frying Oil",
      " FOR GARLIC CHUTNEY",
      "2 tbsp Oil",
      " 12 nos Garlic cloves",
      " 1/4 cup Peanuts",
      " 3 tbsp Sesame seeds",
      " 1 tbsp Kashmiri Chilly Powder",
      " 1/2 tbsp Coriander powder",
      " 1 tbsp Kashmiri Chilly Powder",
      " 1tsp Salt",
      " Grated coconut(dried) - 1/2 cup",
    ],
    cooking:
      "To make the batter combine all the dry ingredients and whisk it. Add water and make it into a thick pouring batter. For the potato mixture heat oil and add hing & mustard seeds, once it pops add chopped green chilly and curry leaves.Add the ginger and garlic (optional) and sauce for 2 minutes. Now add turmeric and give a quick stir. Add boiled & roughly mashed potatoes along with salt and cook them for 3 minutes. Remove and let it cool completely. Now make round balls of the potato mixture and dip it in the batter and deep fry on medium hot oil. Once cooked remove and the vada is ready. To make garlic chutney heat a pan and add oil. Then add garlic cloves and lightly cook them and once they brown add peanuts and cook till lightly toasted followed by sesame and turn off the fire.  Now add chilly powder, coriander powder, salt and dried coconut. Mix and place them back on fire to stir fry them for 2 minutes. Remove and add this mixture into a blender and make a coarse powder. Garlic chutney is ready. Now take a pao and slit it in the middle. Place the vada inside the bread and sprinkle with garlic chutney. Press gently and serve",
  },

  {
    id: "10",
    image: "10.jpg",
    title: "Chocolate Ice Cream",
    ingredients: [
      "1cup or 250gms Dairy Cream or Whipping Cream",
      "½ cup or 150 gms Condensed milk",
      "4½ tbsp or 35 gms Cocoa powder",
      "handful Almonds (roasted)",
      "handful Chocolate Chips",
      "½ tsp Cinnamon powder",
    ],
    cooking:
      "To begin make sure that the cream is chilled. Whip it using either an electric whisk or a hand whisk, just make sure to whisk it in one direction, clockwise or anti-clock wise. Once it get to soft peak stage we are ready to proceed further. Pour condensed milk in a bowl and using a fine strainer sieve the cocoa powder right on top of it, whisk them together to combine. Now add a little bit of the whipped cream in the condensed milk and mix it vigorously. Scoop the remaining whipped cream and fold it into the mixture till mixed properly. Add roasted almonds, cinnamon powder and chocolate chips and mix them in. Pour it out into the desired moulds and deep freeze it for at least 24hours to properly set.Remove and scoop then out and serve them frozen. You can also garnish with extra choice chips, roasted almonds",
  },
];

function Home() {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const filterData = (id) => {
    let arr = recipe.filter((item) => {
      return id === item.id;
    });
    setState(arr[0]);
    console.log(arr);
  };
  // const click = () => (sid) => {};
  return (
    <div className="container mt-4">
      {recipe.map((item) => (
        <div className="container mt-4 ">
          <img src={item.image} alt="" style={{ height: "50 rem" }} />
          <div className="row">
            <div className="col-7">
              <h4 className="m-3">{item.title}</h4>
            </div>
            <div
              className="col-5"
              style={{ display: "flex", justifyContent: "flex-right" }}
            >
              <button
                type="button"
                style={{ marginLeft: "auto" }}
                className="btn btn-dark m-3 "
                onClick={() => {
                  filterData(item.id);
                  setShow(true);
                }}
              >
                See Recipe
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal
        show={show}
        onHide={handleClose}
        scrollable={true}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>{state.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={state.image} className="mb-3" />
          <br />
          <h6>Ingredients</h6>
          <ul>
            {state.ingredients &&
              state.ingredients.map((val) => {
                return <li>{val}</li>;
              })}
          </ul>
          <h6>Cooking Instruction</h6>
          <p>{state.cooking}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
