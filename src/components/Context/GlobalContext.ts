import React from 'react';
import GlobalStore from '../Store/GlobalStore';

export default React.createContext<{ globalStore: GlobalStore }>({} as any);
