import {Home} from '@common/router';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SignedInStackParamList = {
  [Home]: undefined;
};
export type PropsHome = NativeStackScreenProps<
  SignedInStackParamList,
  typeof Home
>;
