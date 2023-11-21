import DropDownF from './DropdownF';
import { HomeTypes } from '../HomeConstant';

export function HomeHeader(homeType, setHomeType) {
  return function (){
    return (
      <DropDownF
        width={150}
        value={homeType}
        items={HomeTypes}
        setValue={setHomeType}
      />
    );
  }
}
