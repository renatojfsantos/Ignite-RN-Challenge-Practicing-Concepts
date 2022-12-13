import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    marginTop: -26,
  },
  input: {
    flex: 1,
    height: 52,
    borderRadius: 6,
    marginRight: 4,
    padding: 16,
    fontSize: 16,
    color: colors.Gray_100,
    backgroundColor: colors.Gray_500,
  },
  placeholderTextColor: {
    color: colors.Gray_300,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: colors.Blue_Dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
