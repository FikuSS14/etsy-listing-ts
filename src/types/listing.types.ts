/**
 * Тип для главного изображения товара
 */
export interface MainImage {
    url_570xN: string;
  }
  
  /**
   * Тип для одного товара из Etsy
   */
  export interface ListingItem {
    listing_id: number;
    title: string;
    price: string;
    currency_code: string;
    quantity: number;
    is_digital: boolean;
    MainImage?: MainImage;
    url?: string;
  }
  
  /**
   * Тип для пропсов компонента Listing
   */
  export interface ListingProps {
    items: ListingItem[];
  }