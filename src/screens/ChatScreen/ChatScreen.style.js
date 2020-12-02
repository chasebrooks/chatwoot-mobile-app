import { Dimensions } from 'react-native';

const styles = (theme) => ({
  mainContainer: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },

  keyboardView: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarView: {
    marginHorizontal: 4,
  },
  titleView: {
    marginHorizontal: 8,
  },
  headerTitle: {
    textTransform: 'capitalize',
    fontWeight: theme['font-semi-bold'],
    fontSize: theme['font-size-large'],
  },
  subHeaderTitle: {
    fontSize: theme['font-size-extra-small'],
    color: theme['color-gray'],
    paddingTop: 4,
    paddingLeft: 4,
  },

  container: {
    flex: 1,
    backgroundColor: theme['color-background'],
  },
  chatView: {
    flex: 13,
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 8,
  },
  loadMoreSpinnerView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },

  spinnerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  overflowMenu: {
    padding: 8,
    borderRadius: 8,
    width: Dimensions.get('window').width / 1.5,
  },

  inputView: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme['background-basic-color-1'],
  },
  input: {
    flex: 1,
    fontSize: theme['text-primary-size'],
    color: theme['text-basic-color'],
    margin: 0,
    marginHorizontal: 4,
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 4,
    height: 48,
  },
  addMessageButton: {
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  backdrop: {
    backgroundColor: theme['back-drop-color'],
  },
});

export default styles;
