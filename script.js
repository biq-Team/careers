class vititle extends HTMLElement{
    constructor(){
      super();
      this.style.fontSize="30px";
      this.style.margin="15px 0 15px 0";
      this.style.display="inline-block";
    }
}
class vinote extends HTMLElement{
    constructor(){
      super();
      this.style.borderRadius="2px";
      this.style.borderLeft="solid 3.5px rgb(0, 140, 255)";
      this.style.backgroundColor="rgb(245, 247, 247)";
      this.style.padding="13px 15px 13px 15px";
      this.style.display="block";
      this.style.margin="20px 0 20px 0";
      this.style.color="rgb(67, 79, 81)";
      this.style.fontSize="15px";
    }
}
class vibtn extends HTMLElement{
    constructor(){
      super();
      this.style.fontWeight="bold";
      this.style.fontSize="16px";
      this.style.borderRadius="4px";
      this.style.padding="10px 40px";
      this.style.textAlign="center";
      this.style.display="inline-block";
      this.style.textDecoration="none";
    }
}
customElements.define('vi-title',vititle);
customElements.define('vi-note',vinote);
customElements.define('vi-btn',vibtn);
