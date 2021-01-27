export interface IBanner {
  id?: number;
  nombre?: string;
  imageContentType?: string;
  image?: any;
}

export class Banner implements IBanner {
  constructor(public id?: number, public nombre?: string, public imageContentType?: string, public image?: any) {}
}
