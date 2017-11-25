import store from './store';
// import './typed.js';

export function navSelect(selectedKey) 
{
    let newActiveKey = store.getState().activeKey;
    store.setState({activeKey: selectedKey});
}

// $(function(){
//     $("#typed").typed({
//         strings: ["Creado con JQuery y typed.js", "Visible en todos los navegadores", "100% editable", "Si te ha gustado...", "COMPARTELO !!"],
//         typeSpeed: 30,
//         backDelay: 500,
//         loop: false,
//         loopCount: false,
//         callback: function(){ foo(); }
//     });
//     function foo(){ console.log("Callback"); }
// });