export interface User {
  name: string;
  email: string;
  imageUrl: string;
}

declare global {
  namespace Express {
    export interface User {
      name: string;
      email: string;
      imageUrl: string;
    }

    export interface Request {
      user?: User;
    }
  }
}
