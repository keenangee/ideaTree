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

export interface SignInFormData {
  email: string;
  password: string;
}

export interface DisplayName {
  displayName: string | null;
}
