import { ResponseModel } from "./../shared/models/ResponseModel";
import { InvoiceModel } from "./invoice.model";
import { ICategory } from "./CategoryModels";

export interface ProductModel {
  name: string;
  price: number;
  previousPrice: number;
  description: string;
  categoryId: number;
  category: Category;
  imageUrl: string;
  unit: number;
  productImages: any[];
  id: number;
  createdOn: string;
}
// Generated by https://quicktype.io

export interface CreateProductModel {
  name: string;
  price: number;
  previousPrice: number;
  description: string;
  categoryId: number;
  imageUrl: string;
  unit: number;
  imageUrls: string[];
  userId: string;
  paymentOptions?: string,
  shipments?: CreateShipmentModel[];
  options?: CreateProductOption[];
}
export interface ProductWithOptionAndShipmentModel extends ProductModel {
  productShipments: CreateShipmentModel[];
  productOptions: CreateProductOption[];
}
export interface EditProductModel extends ProductModel {
  productShipments: CreateShipmentModel[];
  productOptions: CreateProductOption[];
}

export interface CreateProductResponse extends ResponseModel {
  data: CreateProductModel & { category?: ICategory };
}

export interface CreateProductOptionResponse extends ResponseModel {
  data: ProductOption;
}

export interface ProductShipmentResponse extends ResponseModel {
  data: ProductShipment;
}

export interface EditProductItem extends ResponseModel {
  data: EditProductModel;
}

export interface ProductResponse extends EditProductItem {}

export interface ProductCartModel extends ProductModel {
  orderedUnit: number;
  shipmentOption:string;
  productOptions?:string;
}

export interface Category {
  name: string;
  description: null;
  id: number;
  createdOn: string;
}

// Generated by https://quicktype.io

export interface IApiResponseModel {
  message: string;
  status: string;
  data: object;
}

export interface IPagerModel {}

export interface ProductsApiModel extends IApiResponseModel {
  data: IProductPage;
}

export interface IProductPage extends IPagerResponse {
  data: ProductModel[];
}
export interface IPagerResponse {
  data: object;
  pager: IPage;
}

export interface IPage {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
  totalItemCount: number;
}
// Generated by https://quicktype.io

export interface CreateShipmentModel {
  sn?: number;
  countryCode: string;
  state: string;
  city: string;
  cost: number;
}

export interface ProductShipment extends CreateShipmentModel {
  id?: number;
  productId: number;
  loading?: boolean;
  editable?: boolean;
}
// Generated by https://quicktype.io

export interface CreateProductOption {
  sn?: number;
  title: string;
  value: string;
  shortDescription: string;
  cost: number | string;
  description: string;
}

export interface ProductOption extends CreateProductOption {
  id?: number;
  productId: number;
  product?: CreateProductModel;
  loading?: boolean;
  editable?: boolean;
}

// export interface ProductItem {
//   imageUrl: string;
//   product: string;
//   cost: number;
//   unitsold: number;
//   unitleft: number;
//   income: number;
//   button: string;

// }
export class OverView {
  totalProducts: number;
  totalOrders: number;
  pendingOrders: number;
  revenue: number;
}

export interface OverviewApiModel extends IApiResponseModel {
  data: OverView;
}
export interface MostSelling {
  name: string;
  imageUrl: string;
  unit: number;
  unitSold: number;
  category: string;
  revenue: number;
}

export interface MostSellingResponse extends IApiResponseModel {
  data: MostSelling[];
}
// export interface IApiResponseModelMS {
//   message: string;
//   status: string;
//   data: object;
// }

export class NewOrders {
  userId: string;
  billingAddress: string;
  country: string;
  city: string;
  status: string;
  transReferenceNo: string;
  orders: [];
}
