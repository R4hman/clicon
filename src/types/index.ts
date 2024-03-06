export type TBrand = {
  _id: string;
  name: string;
  categories: TCategory[];
  products: string[];
  __v: number;
};

export type TCategory = {
  _id: string;
  name: string;
  image?: string;
  products?: string[];
  __v?: number;
};

export type TSlider = {
  _id: string;
  headTitle: string;
  title: string;
  description: string;
  status: boolean;
  order: number;
  btnUrl: string;
  price: number;
  __v: number;
  image: string;
};

export type TData = {
  id: string;
  name: string;
  url: string;
  subcategories?: string[];
  products?: TProduct[];
  mainDiscount?: TMainDiscount;
};

export type TProduct = {
  _id: string;
  reviews?: string[];
  name: string;
  categoryId: {
    _id: string;
    name: string;
  };
  brandId: {
    _id: string;
    name: string;
  };
  features: {
    name: string;
    option: string;
    _id: string;
  }[];
  colors: string[];
  description: string;
  costPrice: number;
  salePrice: number;
  discountPercent: number;
  images: {
    imageUrl: string;
    imageStatus: boolean;
    _id: string;
  }[];
  bestDiscountPercent: number;
  sellerCount: number;
  viewCount: number;
  // stockStatus: boolean;
  stockCount: number;
  isHot: boolean;
  rate?: number;
  isFeature: boolean;
  productCount?: number;
  __v: number;
};

export type TMainDiscount = TProduct & {
  url: string;
};

export type TSets = Omit<TProduct, "subtitle"> & {
  description: string;
  mainTitle: string;
};

export type TCarousel = {
  img: string;
  name: string;
};

//type for login or sign up
export type TLogin = {
  type?: string;
  setType?: React.Dispatch<React.SetStateAction<string>>;
};

// type TProduct2 = Partial<TProduct>;
// type TProduct3 = Omit<TProduct, "price">;

// register data
export type TRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type TSignUp = {
  email: string;
  password: string;
};

export type TLoginUser = {
  user: {
    userId: string;
    role: string;
  };
  orders: string[];
  basketItems: string[];
  refreshTokenJWT: string;
  accessTokenJwt: string;
};

export type TFilterOptions = {
  categoryId: string;
  brandId: string[];
  min_price: string;
  max_price: string;
  name: string;
  page: string;
  page_size: string;
  price: string;
  search: string;
};

export type TVerifyEmail = {
  verificationToken: string;
  email: string;
};

export type ChangeUserPassword = Omit<TRegister, "name">;
export type TChangeUserInfo = {
  firstName?: string;
  lastName?: string;
  userName?: string;
  address?: string;
};

export type TOrder = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  text?: string;
};
