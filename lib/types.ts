import { type } from "os";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
