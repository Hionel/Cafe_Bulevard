export interface Product {
  productName: string;
  description?: string;
  quantity?: string;
  type?: string;
  price: number;
}

export interface Subcategory {
  subcategoryName: string;
  description?: string;
  items: Product[];
}

export interface Category {
  categoryName: string;
  backgroundUrl:string;
  subcategories: Subcategory[];
}

export interface Menu {
  categories: Category[];
}
