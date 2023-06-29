interface IdeaObject {
  [key: string]: string;
}

export type Ideas = {
  [K in keyof IdeaObject as `idea${K & keyof IdeaObject}`]: string;
};

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}
