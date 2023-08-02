import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Language } from "./Language";
import { Service } from "./Service";
import { Skill } from "./Skill";

export interface MyData {
  firstName: string;
  lastName: string;
  summary: string;
  education: Education[];
  skills: Skill[];
  experience: Experience[];
  services: Service[];
  languages: Language[];
  contact: Contact;
}
