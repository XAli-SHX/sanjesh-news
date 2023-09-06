export interface Welcome5 {
    rss: RSS;
}

export interface RSS {
    channel: Channel;
    "_xmlns:media": string;
    _version: string;
}

export interface Channel {
    title: string;
    link: string;
    description: string;
    language: string;
    item: Item[];
}

export interface Item {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content?: Content;
}

export interface Content {
    _url: string;
    _width: string;
    _height: string;
    _type: Type;
    __prefix: Prefix;
}

export enum Prefix {
    Media = "media",
}

export enum Type {
    ImageJPG = "Image/JPG",
    ImageJpg = "Image/jpg",
    ImagePNG = "Image/png",
}
