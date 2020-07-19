/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'

export default {
  input: {
    margin: 15,
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  dropdown: {
    margin: 15,
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 15,
    height: 40,
  },
}
