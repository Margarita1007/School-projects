export type Options = {
    article?: string;
    name?: string;
    theme?: string;
    modules?: number;
    width?: number;
    height?: number;
    imgsrc?: string;
    price?: number;
}

export type Data = [{
    article?: string;
    name: string;
    theme?: string;
    modules?: number;
    width?: number;
    height?: number;
    imgsrc: string;
    price: number;
}]

export type CBGeneric<T> = (data: T) => void;