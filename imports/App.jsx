import React from 'react';

import Monopoly from '/imports/ui/Monopoly';
import {SessionProvider} from '/imports/components/SessionContext';

const App = () => (
    <SessionProvider>
        <Monopoly></Monopoly>
    </SessionProvider>
);

export default App;
