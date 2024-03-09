import {ReactNode} from "react";
import {FaNodeJs} from "react-icons/fa6";
import {SiTypescript} from "react-icons/si";

export interface CategoriesMap {
    [key: string]: ReactNode
}

export let categoriesMap: CategoriesMap = {
    'typescript': <SiTypescript size={25}/>,
    'nodejs': <FaNodeJs size={25}/>
}

export function getCategoryIcon(category: string) {
    return categoriesMap[category.toLowerCase()] || null
}