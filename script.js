/*-------- Dark Mode --------*/

let html = document.querySelector("html");
document.getElementById("dark").addEventListener("click", () => {
  let theme = html.getAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", theme == "dark" ? "light" : "dark");
});
/*----------------------------*/

// Set image link to html element
document.querySelectorAll(".slider .img").forEach((image) => {
  image.style.backgroundImage = `url(${image.getAttribute("data-img-link")})`;
});

/*---------- Image Slider-----------*/
let images = document.querySelectorAll(".slider .img");
let slider;
let image_num = 0;
set_slider();
function set_slider() {
  slider = setInterval(() => {
    if (image_num == images.length) {
      image_num = 0;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
    }
    images[image_num].classList.add("selected");
    image_num++;
  }, 1000);
}
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("img")) {
    clearInterval(slider);
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("img")) {
    for (var i = 0; i < images.length; i++) {
      if (images[i].classList.contains("selected")) {
        image_num = i;
      }
    }
    set_slider();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn_link")) {
      eval(e.target.id.slice(0, -4))();
    document.getElementById(e.target.id.slice(0, -4)).style.display = "flex";
    // console.log(e.target.id.slice(0,-4));
  }
});

function home() {

    display_none();
}
function pizza() {
        display_none();

  let recipes = [
    {
      publisher: "101 Cookbooks",
      title: "Best Pizza Dough Ever",
      source_url: "http://www.101cookbooks.com/archives/001199.html",
      recipe_id: "47746",
      image_url:
        "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
      social_rank: 100,
      publisher_url: "http://www.101cookbooks.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Deep Dish Fruit Pizza",
      source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
      recipe_id: "46956",
      image_url: "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
      social_rank: 100,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Pizza Dip",
      source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html",
      recipe_id: "35477",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg",
      social_rank: 99.99999999999994,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
      source_url:
        "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
      recipe_id: "41470",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
      social_rank: 99.9999999999994,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Pizza Quesadillas (aka Pizzadillas)",
      source_url:
        "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
      recipe_id: "35478",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
      social_rank: 99.99999999999835,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
      source_url:
        "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
      recipe_id: "54454",
      image_url:
        "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
      social_rank: 99.9999999991673,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Pizza Dip",
      source_url: "http://www.mybakingaddiction.com/pizza-dip/",
      recipe_id: "2ec050",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
      social_rank: 99.99999999826605,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Pizza Potato Skins",
      source_url:
        "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/",
      recipe_id: "6fab1c",
      image_url: "http://forkify-api.herokuapp.com/images/pizza3464.jpg",
      social_rank: 99.99999999760887,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Bon Appetit",
      title: "No-Knead Pizza Dough",
      source_url:
        "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
      recipe_id: "49346",
      image_url:
        "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
      social_rank: 99.99999999743466,
      publisher_url: "http://www.bonappetit.com",
    },
    {
      publisher: "Simply Recipes",
      title: "Homemade Pizza",
      source_url: "http://www.simplyrecipes.com/recipes/homemade_pizza/",
      recipe_id: "36453",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg",
      social_rank: 99.99999998833789,
      publisher_url: "http://simplyrecipes.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Taco Quesadilla Pizzas",
      source_url:
        "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
      recipe_id: "35626",
      image_url:
        "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
      social_rank: 99.99999998319973,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "All Recipes",
      title: "Jay’s Signature Pizza Crust",
      source_url:
        "http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx",
      recipe_id: "17796",
      image_url: "http://forkify-api.herokuapp.com/images/237891b5e4.jpg",
      social_rank: 99.99999997246182,
      publisher_url: "http://allrecipes.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Avocado Breakfast Pizza with Fried Egg",
      source_url:
        "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html",
      recipe_id: "35097",
      image_url:
        "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
      social_rank: 99.99999990783806,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Pepperoni Pizza Burgers",
      source_url:
        "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/",
      recipe_id: "46895",
      image_url: "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
      social_rank: 99.99999990525365,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title: "Thai Chicken Pizza with Sweet Chili Sauce",
      source_url:
        "http://www.closetcooking.com/2012/02/thai-chicken-pizza-with-sweet-chili.html",
      recipe_id: "35635",
      image_url:
        "http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg",
      social_rank: 99.99999990065892,
      publisher_url: "http://closetcooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "One Basic Pizza Crust",
      source_url:
        "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/",
      recipe_id: "47000",
      image_url:
        "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
      social_rank: 99.99999981149679,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Peach, Basil, Mozzarella, & Balsamic Pizza",
      source_url:
        "http://www.twopeasandtheirpod.com/peach-basil-mozzarella-balsamic-pizza/",
      recipe_id: "54491",
      image_url:
        "http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg",
      social_rank: 99.99999980232263,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "Real Simple",
      title: "English-Muffin Egg Pizzas",
      source_url:
        "http://www.realsimple.com/food-recipes/browse-all-recipes/english-muffin-egg-pizzas-10000000663044/index.html",
      recipe_id: "38812",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
      social_rank: 99.99999978548222,
      publisher_url: "http://realsimple.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Simple No Knead Pizza Dough",
      source_url:
        "http://www.mybakingaddiction.com/no-knead-pizza-dough-recipe/",
      recipe_id: "dd21dd",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
      social_rank: 99.9999995838859,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Grilled Veggie Pizza",
      source_url:
        "http://thepioneerwoman.com/cooking/2011/07/grilled-vegetable-pizza/",
      recipe_id: "47011",
      image_url:
        "http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg",
      social_rank: 99.99999947603048,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Spicy Chicken and Pepper Jack Pizza",
      source_url:
        "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/",
      recipe_id: "0fb8f4",
      image_url:
        "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
      social_rank: 99.99999927351223,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "Simply Recipes",
      title: "How to Grill Pizza",
      source_url: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
      recipe_id: "36476",
      image_url:
        "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
      social_rank: 99.99999704095504,
      publisher_url: "http://simplyrecipes.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "PW’s Favorite Pizza",
      source_url:
        "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/",
      recipe_id: "47161",
      image_url:
        "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
      social_rank: 99.99999689667648,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "My Baking Addiction",
      title: "Barbecue Chicken Pizza",
      source_url:
        "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/",
      recipe_id: "a723e8",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg",
      social_rank: 99.9999968917598,
      publisher_url: "http://www.mybakingaddiction.com",
    },
    {
      publisher: "Two Peas and Their Pod",
      title: "Avocado Pita Pizza with Cilantro Sauce",
      source_url:
        "http://www.twopeasandtheirpod.com/avocado-pita-pizza-with-cilantro-sauce/",
      recipe_id: "54388",
      image_url:
        "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg",
      social_rank: 99.99999665701256,
      publisher_url: "http://www.twopeasandtheirpod.com",
    },
    {
      publisher: "What's Gaby Cooking",
      title: "Pizza Monkey Bread",
      source_url: "http://whatsgabycooking.com/pizza-monkey-bread/",
      recipe_id: "ead4e0",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg",
      social_rank: 99.99999570141472,
      publisher_url: "http://whatsgabycooking.com",
    },
    {
      publisher: "The Pioneer Woman",
      title: "Supreme Pizza Burgers",
      source_url:
        "http://thepioneerwoman.com/cooking/2012/10/supreme-pizza-burgers/",
      recipe_id: "46892",
      image_url: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
      social_rank: 99.99999283988569,
      publisher_url: "http://thepioneerwoman.com",
    },
    {
      publisher: "Closet Cooking",
      title:
        "Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon",
      source_url:
        "http://www.closetcooking.com/2012/07/balsamic-strawberry-and-chicken-pizza.html",
      recipe_id: "35128",
      image_url:
        "http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg",
      social_rank: 99.99998682928603,
      publisher_url: "http://closetcooking.com",
    },
  ];

  recipes.map((recipe) => {
    // let card = document.createElement("div");
    // card.classList.add("card m-2 text-center p-0");
    document.getElementById("pizza").innerHTML += `
            <div class="card m-3" style="width: 18rem;">
            
            <div style="width:100%;height:200px ;background-image:url(${recipe.image_url});
             background-size:cover;background-repeat:no-repeat;)"></div>
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
               
                <a href="${recipe.source_url}" target="_blank" class="btn btn-danger w-100">Browse</a>
            </div>
            </div>       
            `;
  });
}
function steak() {
        display_none();

let recipes = [
{
"publisher": "The Pioneer Woman",
"title": "The Marlboro Man Sandwich",
"source_url": "http://thepioneerwoman.com/cooking/2007/06/marlboro_mans_f/",
"recipe_id": "686088",
"image_url": "http://forkify-api.herokuapp.com/images/445199228_8f4145eedc671d.jpg",
"social_rank": 100,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Beef with Snow Peas",
"source_url": "http://thepioneerwoman.com/cooking/2010/10/beef-with-snow-peas/",
"recipe_id": "47090",
"image_url": "http://forkify-api.herokuapp.com/images/5112225022_e4d9aef755_zb721.jpg",
"social_rank": 99.99999999999999,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Fried Round Steak",
"source_url": "http://thepioneerwoman.com/cooking/2010/08/fried-round-steak/",
"recipe_id": "47107",
"image_url": "http://forkify-api.herokuapp.com/images/4928543066_775b277fa7_o2132.jpg",
"social_rank": 99.99999999999983,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Chicken Fried Steak",
"source_url": "http://thepioneerwoman.com/cooking/2011/02/chicken-fried-steak/",
"recipe_id": "47050",
"image_url": "http://forkify-api.herokuapp.com/images/5474444101_0e1db7dfb4_oaadc.jpg",
"social_rank": 99.9999999999949,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Steak Fingers & Gravy",
"source_url": "http://thepioneerwoman.com/cooking/2012/07/steak-fingers-with-gravy/",
"recipe_id": "46913",
"image_url": "http://forkify-api.herokuapp.com/images/steakfingers0a45.jpg",
"social_rank": 99.99999999998657,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "Jamie Oliver",
"title": "Joolss favourite beef stew",
"source_url": "http://www.jamieoliver.com/recipes/beef-recipes/jools-s-favourite-beef-stew",
"recipe_id": "316ca9",
"image_url": "http://forkify-api.herokuapp.com/images/299_1_1350900322_lrgbeb4.jpg",
"social_rank": 99.99999999540083,
"publisher_url": "http://www.jamieoliver.com"
},
{
"publisher": "The Pioneer Woman",
"title": "One Basic Pizza Crust",
"source_url": "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/",
"recipe_id": "47000",
"image_url": "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
"social_rank": 99.99999981149679,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "BBC Good Food",
"title": "Beef &amp; vegetable casserole",
"source_url": "http://www.bbcgoodfood.com/recipes/3923/beef-and-vegetable-casserole",
"recipe_id": "0c8922",
"image_url": "http://forkify-api.herokuapp.com/images/3923_MEDIUM2a00.jpg",
"social_rank": 99.99999826306804,
"publisher_url": "http://www.bbcgoodfood.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Surf & Turf Cajun Pasta",
"source_url": "http://thepioneerwoman.com/cooking/2012/09/surf-turf-cajun-pasta/",
"recipe_id": "46899",
"image_url": "http://forkify-api.herokuapp.com/images/cajun3e5c5.jpg",
"social_rank": 99.999998205766,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "Simply Recipes",
"title": "Grilled Marinated Flank Steak",
"source_url": "http://www.simplyrecipes.com/recipes/grilled_marinated_flank_steak/",
"recipe_id": "36413",
"image_url": "http://forkify-api.herokuapp.com/images/grilledflanksteak300x200e0831991.jpg",
"social_rank": 99.99999769632937,
"publisher_url": "http://simplyrecipes.com"
},
{
"publisher": "All Recipes",
"title": "Marinated Flank Steak",
"source_url": "http://allrecipes.com/Recipe/Marinated-Flank-Steak/Detail.aspx",
"recipe_id": "21700",
"image_url": "http://forkify-api.herokuapp.com/images/870716f5.jpg",
"social_rank": 99.99999473949457,
"publisher_url": "http://allrecipes.com"
},
{
"publisher": "All Recipes",
"title": "Balsamic Roasted Pork Loin",
"source_url": "http://allrecipes.com/Recipe/Balsamic-Roasted-Pork-Loin/Detail.aspx",
"recipe_id": "2715",
"image_url": "http://forkify-api.herokuapp.com/images/2196416db9.jpg",
"social_rank": 99.99998950698912,
"publisher_url": "http://allrecipes.com"
},
{
"publisher": "BBC Good Food",
"title": "Tuna pasta bake",
"source_url": "http://www.bbcgoodfood.com/recipes/9649/tuna-pasta-bake",
"recipe_id": "efa22e",
"image_url": "http://forkify-api.herokuapp.com/images/9649_MEDIUM7140.jpg",
"social_rank": 99.99997752176691,
"publisher_url": "http://www.bbcgoodfood.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Beef with Peppers",
"source_url": "http://thepioneerwoman.com/cooking/2011/03/beef-with-peppers/",
"recipe_id": "47040",
"image_url": "http://forkify-api.herokuapp.com/images/5572969276_8f4385a0e2_o081c.jpg",
"social_rank": 99.99996166207426,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "All Recipes",
"title": "Taqueria-Style Tacos (Carne Asada)",
"source_url": "http://allrecipes.com/Recipe/Taqueria-Style-Tacos---Carne-Asada/Detail.aspx",
"recipe_id": "32024",
"image_url": "http://forkify-api.herokuapp.com/images/157596897.jpg",
"social_rank": 99.99993983983244,
"publisher_url": "http://allrecipes.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Ginger Steak Salad",
"source_url": "http://thepioneerwoman.com/cooking/2009/03/ginger-steak-salad/",
"recipe_id": "47249",
"image_url": "http://forkify-api.herokuapp.com/images/3327439142_56c49630a69bee.jpg",
"social_rank": 99.99990262934416,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "Simply Recipes",
"title": "Santa Maria Style Tri Tip",
"source_url": "http://www.simplyrecipes.com/recipes/santa_maria_style_tri_tip/",
"recipe_id": "36883",
"image_url": "http://forkify-api.herokuapp.com/images/grilledtritipsantamariaa300x200c834aed6.jpg",
"social_rank": 99.999862125299,
"publisher_url": "http://simplyrecipes.com"
},
{
"publisher": "Epicurious",
"title": "Bibimbap at Home",
"source_url": "http://www.epicurious.com/recipes/food/views/Bibimbap-at-Home-51140460",
"recipe_id": "991f5f",
"image_url": "http://forkify-api.herokuapp.com/images/511404604fd7.jpg",
"social_rank": 99.9997588951622,
"publisher_url": "http://www.epicurious.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Steak Bites",
"source_url": "http://thepioneerwoman.com/cooking/2009/01/steak-bites/",
"recipe_id": "47266",
"image_url": "http://forkify-api.herokuapp.com/images/3190843697_88ceb2c27f8217.jpg",
"social_rank": 99.99893728315017,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "The Pioneer Woman",
"title": "Beef Fajita Nachos",
"source_url": "http://thepioneerwoman.com/cooking/2011/02/beef-fajita-nachos/",
"recipe_id": "47056",
"image_url": "http://forkify-api.herokuapp.com/images/5399163424_3893f0580c_o7c75.jpg",
"social_rank": 99.99892521992827,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "Real Simple",
"title": "Asian Steak Salad With Mango",
"source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/asian-steak-salad-with-mango-00000000050967/index.html",
"recipe_id": "38748",
"image_url": "http://forkify-api.herokuapp.com/images/asiansteak_30094cc76e0.jpg",
"social_rank": 99.9979867593255,
"publisher_url": "http://realsimple.com"
},
{
"publisher": "Epicurious",
"title": "Beer-Marinated Flank Steak with Aji and Guacamole",
"source_url": "http://www.epicurious.com/recipes/food/views/Beer-Marinated-Flank-Steak-with-Aji-and-Guacamole-353782",
"recipe_id": "f5ebca",
"image_url": "http://forkify-api.herokuapp.com/images/353782378b.jpg",
"social_rank": 99.99782657115233,
"publisher_url": "http://www.epicurious.com"
},
{
"publisher": "Chow",
"title": "Pepper-Crusted Filet Mignon Recipe",
"source_url": "http://www.chow.com/recipes/29302-pepper-crusted-filet-mignon",
"recipe_id": "6dcbdb",
"image_url": "http://forkify-api.herokuapp.com/images/29302_pepper_filet_mignon_2_62048b9.jpg",
"social_rank": 99.99704750206465,
"publisher_url": "http://www.chow.com"
},
{
"publisher": "Jamie Oliver",
"title": "Beef &amp; vegetable stir-fry",
"source_url": "http://www.jamieoliver.com/recipes/beef-recipes/beef-and-vegetable-stir-fry",
"recipe_id": "a1ef43",
"image_url": "http://forkify-api.herokuapp.com/images/73_1_1350385276_lrge754.jpg",
"social_rank": 99.9966801272894,
"publisher_url": "http://www.jamieoliver.com"
},
{
"publisher": "The Pioneer Woman",
"title": "MM Sandwich, Adorned",
"source_url": "http://thepioneerwoman.com/cooking/2011/05/make-this-today/",
"recipe_id": "47027",
"image_url": "http://forkify-api.herokuapp.com/images/sandaac8.jpg",
"social_rank": 99.99649628554812,
"publisher_url": "http://thepioneerwoman.com"
},
{
"publisher": "All Recipes",
"title": "Easy Yet Romantic Filet Mignon",
"source_url": "http://allrecipes.com/Recipe/Easy-Yet-Romantic-Filet-Mignon/Detail.aspx",
"recipe_id": "12481",
"image_url": "http://forkify-api.herokuapp.com/images/587653a60a.jpg",
"social_rank": 99.9955218547831,
"publisher_url": "http://allrecipes.com"
},
{
"publisher": "BBC Good Food",
"title": "Italian-style beef stew",
"source_url": "http://www.bbcgoodfood.com/recipes/2209/italianstyle-beef-stew",
"recipe_id": "348ecd",
"image_url": "http://forkify-api.herokuapp.com/images/2209_MEDIUM61b0.jpg",
"social_rank": 99.99484728050668,
"publisher_url": "http://www.bbcgoodfood.com"
}
]
recipes.map((recipe) => {
    // let card = document.createElement("div");
    // card.classList.add("card m-2 text-center p-0");
    document.getElementById("steak").innerHTML += `
            <div class="card m-3" style="width: 18rem;">
            
            <div style="width:100%;height:200px ;background-image:url(${recipe.image_url});
             background-size:cover;background-repeat:no-repeat;)"></div>
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
               
                <a href="${recipe.source_url}" target="_blank" class="btn btn-primary w-100">Browse</a>
            </div>
            </div>       
            `;
  });


}
function fries() {
        display_none();


    let recipes =[
        {
        "publisher": "Simply Recipes",
        "title": "Oven Baked Sweet Potato Fries",
        "source_url": "http://www.simplyrecipes.com/recipes/oven_baked_sweet_potato_fries/",
        "recipe_id": "36665",
        "image_url": "http://forkify-api.herokuapp.com/images/sweetpotatofriesa300x200177a9e27.jpg",
        "social_rank": 100,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "publisher": "The Pioneer Woman",
        "title": "Perfect French Fries",
        "source_url": "http://thepioneerwoman.com/cooking/2012/01/perfect-french-fries/",
        "recipe_id": "46959",
        "image_url": "http://forkify-api.herokuapp.com/images/fries4d41.jpg",
        "social_rank": 99.99999999999984,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "publisher": "Serious Eats",
        "title": "Cakespy: Pie Fries",
        "source_url": "http://www.seriouseats.com/recipes/2010/11/cakespy-pie-fries-recipe.html",
        "recipe_id": "13020e",
        "image_url": "http://forkify-api.herokuapp.com/images/11fd31.21.2010piefries.jpg",
        "social_rank": 99.99999994715034,
        "publisher_url": "http://www.seriouseats.com/"
        },
        {
        "publisher": "All Recipes",
        "title": "Homemade Crispy Seasoned French Fries",
        "source_url": "http://allrecipes.com/Recipe/Homemade-Crispy-Seasoned-French-Fries/Detail.aspx",
        "recipe_id": "16576",
        "image_url": "http://forkify-api.herokuapp.com/images/1704805a60.jpg",
        "social_rank": 99.99999987628188,
        "publisher_url": "http://allrecipes.com"
        },
        {
        "publisher": "Closet Cooking",
        "title": "Crispy Baked Eggplant Fries with Marinara Dipping Sauce (aka Eggplant Parmesan Fries!)",
        "source_url": "http://www.closetcooking.com/2012/09/crispy-baked-eggplant-fries-with.html",
        "recipe_id": "35264",
        "image_url": "http://forkify-api.herokuapp.com/images/Crispy2BBaked2BEggplant2BFries2B5002B6435ed2879a0.jpg",
        "social_rank": 99.99999955513634,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "publisher": "Closet Cooking",
        "title": "Beer Battered Crispy Baked Pickle Fries",
        "source_url": "http://www.closetcooking.com/2013/02/beer-battered-crispy-baked-pickle-fries.html",
        "recipe_id": "41455",
        "image_url": "http://forkify-api.herokuapp.com/images/Beer2BBattered2BCrispy2BBaked2BPickle2BFries2B5002B1479c5c9de6d.jpg",
        "social_rank": 99.99999885883223,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "publisher": "Closet Cooking",
        "title": "Crispy Baked Portobello Mushroom Fries",
        "source_url": "http://www.closetcooking.com/2012/08/crispy-baked-portobello-mushroom-fries.html",
        "recipe_id": "35266",
        "image_url": "http://forkify-api.herokuapp.com/images/Crispy2BBaked2BPortobello2BMushroom2BFries2B5002B528055b36987.jpg",
        "social_rank": 99.99999616612044,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "publisher": "Two Peas and Their Pod",
        "title": "Baked Zucchini Fries",
        "source_url": "http://www.twopeasandtheirpod.com/baked-zucchini-fries-recipe/",
        "recipe_id": "54670",
        "image_url": "http://forkify-api.herokuapp.com/images/4448479444_21d592399be1f4.jpg",
        "social_rank": 99.99999556830828,
        "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
        "publisher": "All Recipes",
        "title": "Cottage Fries",
        "source_url": "http://allrecipes.com/Recipe/Potato-Latkes-I/Detail.aspx",
        "recipe_id": "25251",
        "image_url": "http://forkify-api.herokuapp.com/images/3119204282.jpg",
        "social_rank": 99.99984656357303,
        "publisher_url": "http://allrecipes.com"
        },
        {
        "publisher": "The Pioneer Woman",
        "title": "Mushroom and Swiss Sliders with Spicy Fry Sauce",
        "source_url": "http://thepioneerwoman.com/cooking/2010/08/mushroom-and-swiss-sliders-with-spicy-fry-sauce/",
        "recipe_id": "47114",
        "image_url": "http://forkify-api.herokuapp.com/images/TPW_916082de.jpg",
        "social_rank": 99.99981748862247,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "publisher": "All Recipes",
        "title": "Ginger Veggie Stir-Fry",
        "source_url": "http://allrecipes.com/Recipe/Ginger-Veggie-Stir-Fry/Detail.aspx",
        "recipe_id": "14546",
        "image_url": "http://forkify-api.herokuapp.com/images/462654406.jpg",
        "social_rank": 99.99970100827667,
        "publisher_url": "http://allrecipes.com"
        },
        {
        "publisher": "Simply Recipes",
        "title": "Pork Stir Fry with Green Onion",
        "source_url": "http://www.simplyrecipes.com/recipes/pork_stir_fry_with_green_onion/",
        "recipe_id": "36760",
        "image_url": "http://forkify-api.herokuapp.com/images/porkstirfrywithgreenonions300x2006f6830c7.jpg",
        "social_rank": 99.99895817826844,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "publisher": "Simply Recipes",
        "title": "Celery Stir Fry",
        "source_url": "http://www.simplyrecipes.com/recipes/celery_stir_fry/",
        "recipe_id": "35908",
        "image_url": "http://forkify-api.herokuapp.com/images/celerystirfryc300x2009bfe4679.jpg",
        "social_rank": 99.99892552103536,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "publisher": "Jamie Oliver",
        "title": "Beef &amp; vegetable stir-fry",
        "source_url": "http://www.jamieoliver.com/recipes/beef-recipes/beef-and-vegetable-stir-fry",
        "recipe_id": "a1ef43",
        "image_url": "http://forkify-api.herokuapp.com/images/73_1_1350385276_lrge754.jpg",
        "social_rank": 99.9966801272894,
        "publisher_url": "http://www.jamieoliver.com"
        },
        {
        "publisher": "BBC Good Food",
        "title": "Thai prawn, ginger &amp; spring onion stir-fry",
        "source_url": "http://www.bbcgoodfood.com/recipes/468653/thai-prawn-ginger-and-spring-onion-stirfry",
        "recipe_id": "c79dfb",
        "image_url": "http://forkify-api.herokuapp.com/images/468653_MEDIUMe0ac.jpg",
        "social_rank": 99.99537181809886,
        "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
        "publisher": "Closet Cooking",
        "title": "Crispy Baked Asparagus Fries",
        "source_url": "http://feedproxy.google.com/~r/ClosetCooking/~3/4AdcxGwDOD0/crispy-baked-asparagus-fries.html",
        "recipe_id": "54981",
        "image_url": "http://forkify-api.herokuapp.com/images/CrispyBakedAsparagusFries5009142f745f1d7.jpg",
        "social_rank": 99.9926446183974,
        "publisher_url": "http://closetcooking.com"
        },
        {
        "publisher": "101 Cookbooks",
        "title": "Lemony Chickpea Stir-fry",
        "source_url": "http://www.101cookbooks.com/archives/lemony-chickpea-stirfry-recipe.html",
        "recipe_id": "47947",
        "image_url": "http://forkify-api.herokuapp.com/images/chickpea_stirfry_recipe85ab.jpg",
        "social_rank": 99.99194606265412,
        "publisher_url": "http://www.101cookbooks.com"
        },
        {
        "publisher": "101 Cookbooks",
        "title": "Sunchoke and Cashew Stir-fry",
        "source_url": "http://www.101cookbooks.com/archives/sunchoke-and-cashew-stirfry-recipe.html",
        "recipe_id": "47982",
        "image_url": "http://forkify-api.herokuapp.com/images/sunchoke_cashew_stirfry_recipe9ba2.jpg",
        "social_rank": 99.98563644746056,
        "publisher_url": "http://www.101cookbooks.com"
        },
        {
        "publisher": "The Pioneer Woman",
        "title": "Summer Stir-Fry",
        "source_url": "http://thepioneerwoman.com/cooking/2010/06/summer-stir-fry/",
        "recipe_id": "47126",
        "image_url": "http://forkify-api.herokuapp.com/images/4726442102_6739483506_b2247.jpg",
        "social_rank": 99.9697872314992,
        "publisher_url": "http://thepioneerwoman.com"
        },
        {
        "publisher": "Bon Appetit",
        "title": "Baked Parsnip Fries with Rosemary",
        "source_url": "http://www.bonappetit.com/recipes/quick-recipes/2012/03/baked-parsnip-fries-with-rosemary",
        "recipe_id": "49388",
        "image_url": "http://forkify-api.herokuapp.com/images/bakedparsnipfrieswithrosemary646df73.jpg",
        "social_rank": 99.96116641246638,
        "publisher_url": "http://www.bonappetit.com"
        },
        {
        "publisher": "Simply Recipes",
        "title": "Stir Fry Ginger Beef",
        "source_url": "http://www.simplyrecipes.com/recipes/stir_fry_ginger_beef/",
        "recipe_id": "37016",
        "image_url": "http://forkify-api.herokuapp.com/images/gingerbeef300x20098eb8ba9.jpg",
        "social_rank": 99.95871877989599,
        "publisher_url": "http://simplyrecipes.com"
        },
        {
        "publisher": "Steamy Kitchen",
        "title": "Chinese Broccoli Beef Noodle Stir Fry Recipe",
        "source_url": "http://www.steamykitchen.com/4997-broccoli-beef-noodle-stir-fry.html",
        "recipe_id": "48355",
        "image_url": "http://forkify-api.herokuapp.com/images/broccolibeefnoodles591200x150b058.jpg",
        "social_rank": 99.93900593714639,
        "publisher_url": "http://www.steamykitchen.com"
        },
        {
        "publisher": "Epicurious",
        "title": "Summer Vegetable Stir-Fry",
        "source_url": "http://www.epicurious.com/recipes/food/views/Summer-Vegetable-Stir-Fry-51108260",
        "recipe_id": "fe922c",
        "image_url": "http://forkify-api.herokuapp.com/images/511082606e2d.jpg",
        "social_rank": 99.93769297437935,
        "publisher_url": "http://www.epicurious.com"
        },
        {
        "publisher": "All Recipes",
        "title": "Tofu Peanut Stir-Fry",
        "source_url": "http://allrecipes.com/Recipe/Tofu-Peanut-Stir-Fry/Detail.aspx",
        "recipe_id": "32819",
        "image_url": "http://forkify-api.herokuapp.com/images/211788a414.jpg",
        "social_rank": 99.93425894131171,
        "publisher_url": "http://allrecipes.com"
        },
        {
        "publisher": "101 Cookbooks",
        "title": "Baked Carrot Oven Fries",
        "source_url": "http://www.101cookbooks.com/archives/001529.html",
        "recipe_id": "47977",
        "image_url": "http://forkify-api.herokuapp.com/images/bakedcarrotfries1e0d2.jpg",
        "social_rank": 99.90037013279755,
        "publisher_url": "http://www.101cookbooks.com"
        },
        {
        "publisher": "101 Cookbooks",
        "title": "Black Pepper and Lime Oven Fries",
        "source_url": "http://www.101cookbooks.com/archives/001545.html",
        "recipe_id": "47975",
        "image_url": "http://forkify-api.herokuapp.com/images/ovenfries07efc6.jpg",
        "social_rank": 99.87283995116005,
        "publisher_url": "http://www.101cookbooks.com"
        },
        {
        "publisher": "101 Cookbooks",
        "title": "Baked Polenta Fries",
        "source_url": "http://www.101cookbooks.com/archives/001473.html",
        "recipe_id": "47627",
        "image_url": "http://forkify-api.herokuapp.com/images/bakedpolentafriesf35f.jpg",
        "social_rank": 99.83825060496766,
        "publisher_url": "http://www.101cookbooks.com"
        }
        ]

        recipes.map((recipe) => {
            // let card = document.createElement("div");
            // card.classList.add("card m-2 text-center p-0");
            document.getElementById("fries").innerHTML += `
                    <div class="card m-3" style="width: 18rem;">
                    
                    <div style="width:100%;height:200px ;background-image:url(${recipe.image_url});
                     background-size:cover;background-repeat:no-repeat;)"></div>
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                       
                        <a href="${recipe.source_url}" target="_blank" class="btn btn-warning w-100">Browse</a>
                    </div>
                    </div>       
                    `;
          });
        
}

function display_none() {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
}
