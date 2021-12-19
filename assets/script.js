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

function gethighereducation(event) {
  if(event.target.value == "yes"){
    document.getElementById("highereducation").innerHTML = `
    <p>정보 <span class="red">*</span></p>
    <input class="w-100" type="text" placeholder="학교 이름" required>
    <input class="w-100" type="text" placeholder="전공 / 연구 분야" required>
    <input class="w-100" type="text" placeholder="학위 종류 (전문학사학위, 학사학위, 석사학위 등)" required>
    <p>학위 상태 <span class="red">*</span></p>
    <select class="w-100" name="gender" id="select" required>
    <option value="재학중" selected>재학중</option>
    <option value="불완전" >불완전</option>
    <option value="졸업" >졸업</option>
    </select>
    `;
  }
  if(event.target.value == "no"){
    document.getElementById("highereducation").innerHTML = ` `;
  }
}

function getexperience(event) {
  if(event.target.value == "yes"){
    document.getElementById("result").innerHTML = `
    <p>우리 팀에서 무슨 일을 할 수 있는지 소개하십시오 <span class="red">*</span></p>
    <textarea id="subject" name="subject" placeholder="여기에 선택적으로 자기소개를 쓰세요." style="height:200px" required></textarea>
    `;
  }
  if(event.target.value == "no"){
    document.getElementById("result").innerHTML = `
    <p>근무한 직장에 대해 <span class="red">*</span></p>
    <input class="w-100" type="text" placeholder="고용주" required>
    <input class="w-100" type="text" placeholder="웹사이트 또는 프로필 등" required>
    <p>당신의 직위와 근무 기간 <span class="red">*</span></p>
    <input class="w-100" type="text" placeholder="직위" required>
    <select class="w-100" name="gender" id="select" required>
      <option value="한달 미만" selected>한달 미만</option>
      <option value="1개월 이상 ~ 3개월 미만" >1개월 이상 ~ 3개월 미만</option>
      <option value="3개월 이상 ~ 6개월 미만" >3개월 이상 ~ 6개월 미만</option>
      <option value="6개월 이상 ~ 9개월 미만" >6개월 이상 ~ 9개월 미만</option>
      <option value="9개월 이상 ~ 1년 미만" >9개월 이상 ~ 1년 미만</option>
      <option value="Transgender">1년 이상</option>
    </select>
    <p>현재도 해당 직장, 팀에서 근무하고 계신가요? <span class="red">*</span></p>
    <input type='radio' name='work' value="근무중" required/>네
    <input type='radio' name='work' value="근무하지않습니다" checked required/>아니요
    `;
  }
}