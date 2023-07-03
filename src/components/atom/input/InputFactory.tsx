import React from 'react';
import HidePasswordIcon from '../../../assets/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../../assets/icons/ShowPasswordIcon';
import { IIconProps } from './Input.types';

const RenderEyes = (icon: IIconProps, isPasswordVisible: boolean) => {
  let returnedNode;
  if (icon?.svg) {
    if (isPasswordVisible) {
      returnedNode = icon?.svg.hideSvg;
    } else {
      returnedNode = icon?.svg.showSvg;
    }
  } else {
    if (isPasswordVisible) {
      returnedNode = <HidePasswordIcon />;
    } else returnedNode = <ShowPasswordIcon />;
  }
  return returnedNode;
};

export { RenderEyes };
