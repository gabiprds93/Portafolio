import store from './store';

export function navSelect(selectedKey) 
{
    let newActiveKey = store.getState().activeKey;
    store.setState({activeKey: selectedKey});
}