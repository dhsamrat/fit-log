export interface IMuscle {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  equipment: string;
  image: string;
  instructions: string[];
  muscleGroups: string[];
  rating: number;
  reps: string;
  sets: number;
}