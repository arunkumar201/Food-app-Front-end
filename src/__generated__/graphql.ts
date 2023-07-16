/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export type CreateOrderInput = {
  UserId: Scalars['String']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryInstructions: Scalars['String']['input'];
  deliveryPersonName: Scalars['String']['input'];
  deliveryPersonPhone: Scalars['String']['input'];
  deliveryTime: Scalars['String']['input'];
  items: Array<OrderItemInput>;
  paymentMethod: Scalars['String']['input'];
  paymentStatus: Scalars['String']['input'];
  total: Scalars['Float']['input'];
};

export type CreateRestaurantInput = {
  address: Scalars['String']['input'];
  categories: Array<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['Float']['input']>;
  coverImage: Scalars['String']['input'];
  description: Scalars['String']['input'];
  lat: Scalars['String']['input'];
  lng: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  menus: Array<MenuInput>;
  name: Scalars['String']['input'];
  ownerName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  shippingFeePerKm?: Scalars['Float']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  userDetails: UserDetails;
};

export type Menu = {
  __typename?: 'Menu';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type MenuInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type MenuUpdateInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteOrderById: Scalars['String']['output'];
  DeleteRestaurantByName: Restaurant;
  createOrder: Order;
  createRestaurant: Restaurant;
  createUser: User;
  deleteUser: Scalars['String']['output'];
  getUserByEmail: User;
  login: LoginResponse;
  updateOrderById: Order;
  updateRestaurant: Restaurant;
  updateUser: User;
};


export type MutationDeleteOrderByIdArgs = {
  OrderId: Scalars['String']['input'];
};


export type MutationDeleteRestaurantByNameArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateOrderArgs = {
  createOrderData: CreateOrderInput;
};


export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  UserId: Scalars['String']['input'];
};


export type MutationGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationUpdateOrderByIdArgs = {
  OrderId: Scalars['String']['input'];
  updateOrderData: UpdateOrderInput;
};


export type MutationUpdateRestaurantArgs = {
  name: Scalars['String']['input'];
  updateRestaurantInput: UpdateRestaurantInput;
};


export type MutationUpdateUserArgs = {
  UserId: Scalars['String']['input'];
  updateUserData: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  OrderId: Scalars['String']['output'];
  UserId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deliveryAddress: Scalars['String']['output'];
  deliveryInstructions: Scalars['String']['output'];
  deliveryPersonName: Scalars['String']['output'];
  deliveryPersonPhone: Scalars['String']['output'];
  deliveryTime: Scalars['String']['output'];
  items: Array<OrderItemOutput>;
  paymentMethod: Scalars['String']['output'];
  paymentStatus: Scalars['String']['output'];
  status: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type OrderItemOutput = {
  __typename?: 'OrderItemOutput';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllOrder: Array<Order>;
  getAllRestaurant: Array<Restaurant>;
  getAllUsers: Array<User>;
  getHello: Scalars['String']['output'];
  getOrderById: Order;
  getRestaurantDetails: Restaurant;
  getUser: User;
};


export type QueryGetOrderByIdArgs = {
  OrderId: Scalars['String']['input'];
};


export type QueryGetRestaurantDetailsArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  UserId: Scalars['String']['input'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  _id: Scalars['Int']['output'];
  address: Scalars['String']['output'];
  categories: Array<Scalars['String']['output']>;
  cityId: Scalars['Float']['output'];
  coverImage: Scalars['String']['output'];
  description: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  lat: Scalars['String']['output'];
  lng: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  menus: Array<Menu>;
  name: Scalars['String']['output'];
  ownerName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  shippingFeePerKm: Scalars['Float']['output'];
};

export type UpdateOrderInput = {
  OrderId?: InputMaybe<Scalars['String']['input']>;
  UserId?: InputMaybe<Scalars['String']['input']>;
  deliveryAddress?: InputMaybe<Scalars['String']['input']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  deliveryInstructions?: InputMaybe<Scalars['String']['input']>;
  deliveryPersonName?: InputMaybe<Scalars['String']['input']>;
  deliveryPersonPhone?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<OrderItemInput>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRestaurantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  lng?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  menus?: InputMaybe<Array<MenuUpdateInput>>;
  ownerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  shippingFeePerKm?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  UserId: Scalars['String']['output'];
  address: Address;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type UserAddress = {
  __typename?: 'UserAddress';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  address: UserAddress;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type CreateUserInput = {
  address: AddressInput;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};
