import React, {Component} from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Signup2 from './screens/Signup2';
import Signup3 from './screens/Signup3';
import Dashboard from './screens/dashboardMain';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import DrivesMain from './screens/DrivesMain';
import AppIntro from './screens/GettingStarted';

import { Provider } from 'react-redux';
import store from './store';

// const initialState = {
//     counter: 0
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREASE_COUNTER':
//             return { counter: state.counter + 1 }
//         case 'DECREASE_COUNTER':
//             return { counter: state.counter - 1 }
//     }
//     return state
// }

// const store = createStore(reducer)


EStyleSheet.build({
   //$primaryBlue: '#92C7C7',
   $primaryBlue: '#4B97A1',
   //$primaryBlue: '#258895',
   //$primaryBlue: '#3D96A1',
   $blueBackground: '#D3E3E6',
   // $blueBackground: '#D8EAE2',
   $teal: '#6FACB4',
   $white: '#fff',
   $border: '#E2E2E2',
   $inputText: 'grey',
   $lightGray: '#F0F0F0',
   $background: "#FFF",
   $buttonBackground: 'grey',
   $LoginScreenText: '#3D96A1',
   $textColor: '#3D96A1',
   $textFont: 'Avenir',
   $headingFont: 'Avenir',
   $logoFont: 'Avenir',

   //$outline: 1, //Use this to outline containers
});

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

export default App

//export default () => <Navigator/>;
//export default () => <AppIntro/>;
