import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray_600,
  },
  containerHeaderTasks: {
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperTasksQuantity: {
    flexDirection: 'row',
  },
  textTaskCreated: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.Blue,
  },
  textTaskCompleted: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.Purple,
  },
  boxTaskCreated: {
    width: 24,
    height: 20,
    borderRadius: 12,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Gray_400,
  },
  numberTasks: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.Gray_200,
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmpatyImage: {
    marginTop: 48,
    marginBottom: 16,
  },
  listEmptyTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: colors.Gray_300,
  },
  listEmptySubTitle: {
    fontSize: 14,
    color: colors.Gray_300,
  },
});