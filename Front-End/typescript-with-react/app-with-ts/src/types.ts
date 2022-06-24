export type Profile = {
  user: User,
  pages: Page[]
}

type User = {
  name: string;
}

type Page = {
  name: string;
}