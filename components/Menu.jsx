// Components
import { Container, Title, Item } from '@components/menu/MenuStructure';
// Utils
import menuItems from '../utils/menuItems';

const Menu = () => {
	return (
		<Container>
			<Title />
			<Item menuItems={menuItems} />
		</Container>
	);
};

export default Menu;
