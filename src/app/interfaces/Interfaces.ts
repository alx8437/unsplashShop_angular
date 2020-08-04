interface Urls {
  small: string;
  regular: string;
}

export interface PictureDate {
  id: string;
  urls: Urls;
  isChecked: boolean;
  width: number;
  height: number;
}

export interface ParamListPictures {
  page: number;
  per_page: number;
  query: string;
}

export interface GetSearch {
  results: PictureDate[];
  total_pages: number;
  total: number;
}
