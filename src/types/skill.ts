export interface SkillType {
  id: number;
  category: string;
  techStack: {
    id: number;
    name: string;
  }[];
}
