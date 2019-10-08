import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//optional libraries: 'enzime-to-json' / 'sinon' / 'chai'