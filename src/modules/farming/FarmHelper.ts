import BerryType from '../enums/BerryType';

class FarmHelper {
    public static getBerryImage(index: number) {
        return `assets/images/items/berry/${BerryType[index]}.png`;
    }
}

export default FarmHelper;
