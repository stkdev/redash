import React from 'react';
import { react2angular } from 'react2angular';
import { UserProfile } from '../proptypes';

export const UserShow = ({ user: { name, email, profileImageUrl } }) => (
  <div className="col-md-4 col-md-offset-4 profile__container">
    <img
      alt="profile"
      src={profileImageUrl}
      className="profile__image"
      width="40"
    />

    <h3 className="profile__h3">{name}</h3>

    <hr />

    <dl className="profile__dl">
      <dt>Name:</dt>
      <dd>{name}</dd>
      <dt>Email:</dt>
      <dd>{email}</dd>
    </dl>
  </div>
);

UserShow.propTypes = {
  user: UserProfile.isRequired,
};

export default function init(ngModule) {
  ngModule.component('userShow', react2angular(UserShow));
}

init.init = true;
