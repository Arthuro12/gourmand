export type Recipe = {
  id?: string;
  name: string;
  imagePath?: string;
  description: string;
  ingredients: string[];
  preparationSteps: string[];
};
