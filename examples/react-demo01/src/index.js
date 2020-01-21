import  App  from  "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
// import { DatePicker } from 'antd';
import DatePicker from 'antd/es/date-picker'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS

// //  document.write('react-demo01')

 class CustomButton extends HTMLElement {
  constructor() {
    super();
    
    const shadowRoot = this.attachShadow({ mode: "open" });

    const divObj = document.createElement("div")
    const btnObj = document.createElement("button")
    const style = document.createElement('style')
    const styleAntd = document.createElement('style')
    const linkAntd = document.createElement('link')
    // const scriptAntd = document.createElement('script')



    // link.setAttribute('style','import')
    // styleAntd.setAttribute('type','text/html')
    // styleAntd.textContent = `@import url('antd/dist/antd.css')`
    linkAntd.setAttribute('rel','stylesheet')
    linkAntd.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css') 
    linkAntd.setAttribute('type','text/css')
    // scriptAntd.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.js')
    


    console.log(style)
    style.textContent = `
      .custom-button{
        cursor: pointer;
        background: hsla(130, 70%, 50%, 1);
        color: #ffffff;
        width:30px;
        height:20px;
      }
    `
    divObj.setAttribute("id", "root")
    btnObj.setAttribute('class', 'custom-button')
    
    shadowRoot.appendChild(linkAntd)
    // shadowRoot.appendChild(scriptAntd)
    shadowRoot.appendChild(styleAntd)
    shadowRoot.appendChild(divObj)
    shadowRoot.appendChild(btnObj)
    shadowRoot.appendChild(style)
    
    
    ReactDOM.render(<App />,divObj)
    ReactDOM.render(<DatePicker />,divObj)
     
    
     


    // this.addEventListener("click", e => {
    //   this.toggleCard();
    // });
  }
  
  // toggleCard() {
  //   alert("lalal")
  // }

    //当 custom element首次被插入文档DOM时，被调用。
  connectedCallback () {
    console.log('111')
   
  }

  //当 custom element从文档DOM中删除时，被调用。
  disconnectedCallback (){
    console.log('222')
  }

  //当 custom element被移动到新的文档时，被调用。
  adoptedCallback () {
    console.log('333')
  }

  //当 custom element增加、删除、修改自身属性时，被调用。
  attributeChangedCallback (name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }

}

customElements.define("test-compontent", CustomButton);



