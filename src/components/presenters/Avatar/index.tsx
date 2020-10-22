import React from 'react';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import ResponsiveImage from '../../../libs/responsiveImage';

import { AvatarContainer } from './styles';

interface UserAvatarProp {
  testID?: string;
  postImageUrl?: string;
  style?: { width: number; height: number };
}
const dummyAvatar = 'https://bit.ly/2TcUWv4';

const UserAvatar = (props: UserAvatarProp) => (
  <AvatarContainer style={props.style}>
    <ResponsiveImage
      imageUrl={props.postImageUrl || dummyAvatar}
      width={WP(30)}
      height={WP(30)}
    />
  </AvatarContainer>
);

export default UserAvatar;
