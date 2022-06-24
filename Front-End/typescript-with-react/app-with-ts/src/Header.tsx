import React, { FC } from "react";
import { Profile } from './types';

type Prop = {
  profile: Profile
}

export const Header: FC<Prop> = props => (
  <header>
    {props.profile.pages.map(page => (
      <button>{page.name}</button>
    ))}
    <span>Welcome {props.profile.user.name}</span>
  </header>
);
