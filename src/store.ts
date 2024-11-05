import lasagneImage from "./assets/images/lasagne.jpg";

import { createStore } from "vuex";

import type { Recipe } from "./types/recipes";

const API_URL =
  "https://gourmand-f4950-default-rtdb.firebaseio.com/recipes.json";

export const store = createStore({
  state() {
    return {
      recipes: [
        {
          id: "r1",
          name: "Mini-Lasagne",
          imagePath: lasagneImage,
          description: "Keine Beschreibung verfügbar.",
          ingredients: [
            "24 Lasagneplatte(n)",
            "450g Schweinemett",
            "Olivenöl",
            "Salz und Pfeffer",
            "1 Zwiebel(n)",
            "Karotte(n)",
            "Und noch mehr",
          ],
          preparationSteps: [
            `Olivenöl in einem Topf erhitzen und das Mett darin krümelig braten. Zwiebel-, 
                  Knoblauch- und Karottenwürfel, Fenchelsaat und Thymian dazugeben und kurz mit anrösten. Mit Salz und Pfeffer würzen. 
                  Die Tomaten einrühren und die Soße 20 - 30 min einköcheln lassen. Ricotta und Basilikum vermischen und 
                  mit Salz und Pfeffer würzen.`,
            ` Lasagneplatten in kochendem Wasser 3 min vorgaren, dabei umrühren. In kaltem Wasser kurz abschrecken und auf einem Brett auslegen. 
                  Mit einem Messer quer halbieren.`,
            ` Den Backofen auf 160 °C Umluft vorheizen. Das Muffin-Backblech buttern und mit Grieß dünn ausstreuen.`,
            `Je die Hälfte einer Lasagneplatte in eine Vertiefung drücken. Mit 1 EL Fleischsoße und 1 
                  TL Ricotta-Mischung befüllen und ein zweites Lasagneblatt darauf drücken. Ebenfalls mit Soße und Ricotta-Mischung füllen. 
                  Alles mit Käse bestreuen und die Teigränder dünn mit Olivenöl einstreichen.`,
            `Im heißen Ofen in 20 - 25 Minuten goldbraun backen.`,
          ],
        },
        {
          id: "r2",
          name: "Marokkanisches Ofengemüse",
          imagePath: lasagneImage,
          description: "Keine Beschreibung verfügbar.",
          ingredients: [
            "1/2 Blumenkohl",
            "1 Süßkartoffel(n)",
            "2 EL Olivenöl",
            "1 Paprikakaschote(n)",
            "1 rote Zwiebel",
            "1 Dose Kischererbsen",
            "3 feine gehaackte Knochblauchzehe",
            "1 EL Korianderpulver",
            "1 EL Kreuzkümmelpulver",
            "1/2 TL Zimtpulver",
            "Chiliflocken",
            "Salz und Pfeffer",
            "1 Becher	Joghurt, vegan oder vegetarisch",
            "1/2 Zirton",
            "100g Sultanien",
          ],
          preparationSteps: [
            `Den Ofen auf 200 °C Ober-/Unterhitze vorheizen. Blumenkohlröschen und Süßkartoffel auf ein Backblech geben, 
                  mit Olivenöl beträufeln und einmassieren. Für 15 Min. backen.`,
            `In der Zwischenzeit alle Zutaten für die Gewürzmischung in einer kleinen Schüssel vermischen.`,
            `Paprika und rote Zwiebel in grobe Stücke schneiden, Kichererbsen abtropfen lassen.`,
            `Paprikastücke, Kichererbsen und Zwiebel auf dem Blech verteilen und alles mit der Gewürzmischung bestreichen.
                  Das Blech erneut für 20 Min. Im Ofen backen.`,
            `Nach Belieben mit (veganem) Joghurt, Zitronenstücken und Sultaninen garnieren.
                  Dazu schmeckt Reis, Bulgur oder Couscous.`,
          ],
        },
        {
          id: "r3",
          name: "High Protein Feta-Muffins",
          imagePath: lasagneImage,
          description: "Keine Beschreibung verfügbar.",
          ingredients: [
            "2 Pck. HENGLEIN Flammkuchenteig",
            "1 EL Öl",
            "500g Spinat",
            "250g Magerquark",
            "2 Ei(er)",
            "1 Knochbauchzehe(n)",
            "Salz und Pfeffer",
            "Muskantnuss",
            "Feta-Käse",
          ],
          preparationSteps: [
            `Den Backofen auf 200 Grad (Heißluft) vorheizen. Flammkuchenteig in 12 x 12 cm große Kreise ausstechen. Die Muffin-Form mit dem Speiseöl 
                  einstreichen und die Teigkreise in die Mulden drücken.`,
            `Den TK-Spinat auftauen lassen, dann zusammen mit dem Quark, Eiern, geriebenem Knoblauch und den Gewürzen verrühren. 
                  Jeweils 1 EL der Masse in die Flammkuchenmulden geben. Zum Schluss noch den Feta über die Spinatmasse bröseln und für 15 - 20 Minuten 
                  goldbraun backen.`,
          ],
        },
        {
          id: "r4",
          name: "Linguine mit veganen Pesto, getrockneten Tomaten und Blumenkohl",
          imagePath: lasagneImage,
          description: "Keine Beschreibung verfügbar.",
          ingredients: [
            "120g Pesto Barilla Basilico Vegan",
            "320g Barilla Collezione Linguine",
            "240g Blumenkohl",
            "60g getrocknete Tomaten",
            "1 EL natives Olivenöl",
            "1 Handvoll Rosinien",
            "einige Basilikumblätter",
            "Salz und Pfeffer",
          ],
          preparationSteps: [
            `Rosinen in lauwarmes Wasser legen, um sie weich zu machen. Getrocknete Tomaten klein schneiden.`,
            `Einen großen Topf mit Wasser zum Kochen bringen. Anschließend Salz hinzugeben und die 
                  Pasta nach Packungsangaben „al dente“ kochen.`,
            `Blumenkohl in kleine Röschen teilen, in leicht gesalzenes, kochendes Wasser geben und blanchieren. 
                  Danach beiseitelegen.`,
            `Öl in einer Pfanne erhitzen und den Blumenkohl darin leicht anbraten. Die getrockneten Tomaten 
                  und die abgetropften Rosinen hinzufügen. Pasta hinzugeben und mit Pesto Basilico Vegan vermengen.
                  Mit Salz und Pfeffer würzen, mit Basilikumblättern verfeinern und servieren.`,
          ],
        },
        {
          id: "r5",
          name: "Honey Explosion Burger - Teriyaki Burger mit cremiger Aioli",
          imagePath: lasagneImage,
          description: "Keine Beschreibung verfügbar.",
          ingredients: [
            "4 Burger Buns",
            "400g Rinderhacfleisch",
            "100g Kerrygold Original Irische Burger Cheddar",
            "1 EL Honig",
            "1 Schuss Wasser",
            "100ml Teriyakisauce",
            "150g Dipsauce (Honig-Aioli)",
            "8 Salatblätter",
            "2 Tomaten",
            "Salz und Pfeffer",
            "Öl zum Braten",
          ],
          preparationSteps: [
            `Rosinen in lauwarmes Wasser legen, um sie weich zu machen. Getrocknete Tomaten klein schneiden.`,
            `Einen großen Topf mit Wasser zum Kochen bringen. Anschließend Salz hinzugeben und die 
                  Pasta nach Packungsangaben „al dente“ kochen.`,
            `Blumenkohl in kleine Röschen teilen, in leicht gesalzenes, kochendes Wasser geben und blanchieren. 
                  Danach beiseitelegen.`,
            `Öl in einer Pfanne erhitzen und den Blumenkohl darin leicht anbraten. Die getrockneten Tomaten 
                  und die abgetropften Rosinen hinzufügen. Pasta hinzugeben und mit Pesto Basilico Vegan vermengen.
                  Mit Salz und Pfeffer würzen, mit Basilikumblättern verfeinern und servieren.`,
          ],
        },
      ],
    };
  },
  getters: {
    foundRecipes: (state) => (searchInput: string) => {
      return state.recipes.filter((currRecipe: Recipe) =>
        currRecipe.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    },
    hasRecipeWithId: (state) => (id: string) => {
      return state.recipes.find((currRecipe: Recipe) => currRecipe.id === id);
    },
  },
  actions: {
    async loadRecipes(context) {
      const response = await fetch(API_URL);

      if (!response.ok) {
      }

      const data = await response.json();

      const recipesData: Recipe[] = [];
      Object.entries(data).forEach(([key, value]) => {
        recipesData.push({
          id: key,
          name: (value as Recipe).name,
          imagePath: (value as Recipe).imagePath,
          description: (value as Recipe).description,
          ingredients: (value as Recipe).ingredients,
          preparationSteps: (value as Recipe).preparationSteps,
        });
      });

      context.commit("iniRecipes", recipesData);
    },
    async addRecipe(context, data) {
      const recipeData = data;
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(recipeData),
        });

        if (!response.ok) {
          throw new Error("Recipe could not be saved.");
        }

        context.commit("addRecipe");
      } catch (error: any) {
        console.error("An error occured while processing the request:");
        console.error(error);
      }
    },
  },
  mutations: {
    addRecipe(state, payload) {
      state.recipes.push(payload);
    },
    iniRecipes(state, payload) {
      state.recipes = payload;
    },
  },
});
