import React from 'react';
import { ListingProps, ListingItem } from '../types/listing.types';

/**
 * Обрезает заголовок до 50 символов
 */
const truncateTitle = (title: string): string => {
  if (!title) return '';
  return title.length > 50 ? title.slice(0, 50) + '…' : title;
};

/**
 * Форматирует цену в зависимости от валюты
 */
const formatPrice = (price: string, currencyCode: string): string => {
  switch (currencyCode) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    case 'GBP':
      return `£${price}`;
    default:
      return `${currencyCode} ${price}`;
  }
};

/**
 * Определяет CSS-класс для бейджа остатка
 */
const getStockClass = (quantity: number): string => {
  if (quantity <= 10) return 'stock-low';
  if (quantity <= 20) return 'stock-medium';
  return 'stock-high';
};

/**
 * Компонент для отображения списка товаров с Etsy
 */
const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  // Фильтруем только валидные товары (с картинкой и id)
  const validItems: ListingItem[] = items.filter(
    (item) => item && item.listing_id && item.MainImage?.url_570xN
  );

  return (
    <div className="product-grid">
      {validItems.map((item: ListingItem) => {
        const imageUrl: string = item.MainImage!.url_570xN;
        const title: string = truncateTitle(item.title);
        const price: string = formatPrice(item.price, item.currency_code);
        const stockClass: string = getStockClass(item.quantity);
        const stockText: string = `${item.quantity} left`;

        return (
          <div key={item.listing_id} className="product-card">
            {item.is_digital && <span className="digital-badge">Digital</span>}
            <img src={imageUrl} alt={title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{title}</h3>
              <div className="price-container">
                <div className="product-price">{price}</div>
                <span className={`stock-badge ${stockClass}`}>
                  {stockText}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;