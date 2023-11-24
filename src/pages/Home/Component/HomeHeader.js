import DropDownF from './DropdownF';
import { HomeTypes } from '../HomeConstant';
import { Appbar, useTheme } from 'react-native-paper';

export function HomeHeader({ navigation, homeType, setHomeType }) {
  const theme = useTheme();
  return (
    <Appbar.Header
      elevated={true}
      style={{
        backgroundColor: theme.colors.elevation.level3,
        borderBottomColor: theme.colors.backdrop,
        borderBottomWidth: 1
      }}
    >
      <Appbar.Action icon='menu' onPress={navigation.toggleDrawer} />
      <DropDownF
        width={150}
        value={homeType}
        items={HomeTypes}
        setValue={setHomeType}
        style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}
      />
    </Appbar.Header>
  );
}
