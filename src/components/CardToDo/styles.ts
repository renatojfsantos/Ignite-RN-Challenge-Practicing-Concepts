import { StyleSheet } from 'react-native'

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: colors.Gray_400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDescriptionChecked: {
    flex: 1,
    color: colors.Gray_300,
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
  textDescriptionUnChecked : {
    flex: 1,
    color: colors.Gray_100,
    fontSize: 14,
    lineHeight: 20,
  },
  buttonCheck: {
    height: 24,
    width: 24,
    marginLeft: 12,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    height: 17,
    width: 17,
  },
  buttonDelete: {
    height: 32,
    width: 32,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashIcon: {
    height: 14,
    width: 12,
    color: colors.Danger,
  },
  trashIconChecked: {
    height: 14,
    width: 12,
    color: colors.Purple,
  },
});