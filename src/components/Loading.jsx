import styled from '@emotion/styled';
import { size } from 'polished';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { colors } from '../styles';


const Loading = styled(Logo)(size(64), {
  display: 'block',
  margin: 'auto',
  fill: colors.grey,
  path: {
    transformOrigin: 'center',
  },
});

export default Loading;