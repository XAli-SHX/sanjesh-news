import {NewsItem} from "./NewsItem"

export interface NewsList {
    title: string;
    link: string;
    description: string;
    language: string;
    items: NewsItem[];
}