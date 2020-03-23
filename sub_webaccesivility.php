<? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/start.html" ?>
<!-- header 영역 시작 -->
<? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/header.html" ?>
<!-- header 영역 끝 -->
<!-- web accesivility 영역 시작 -->
<section id="accesivility_wrap">
    <h2 class="sub_con_title">WEB ACCESIVILITY</h2>
    <p class="sub_con_text">한국형 웹 콘텐츠 접근성 지침 (KWCAG 2.1)을 준수한 마크업</p>
    <ul id="accesivility_list">
        <li>
            <p class="accesivility_text">메인 메뉴 제작에 있어 Tab키로 이동이 용이하도록 메인 메뉴의 li 안에 서브 메뉴의 ul, li로 구조를 설계하였습니다.</br></br>단순히 서브메뉴를 따로 만들어 제작했다면, tab키로 이동 시에 메인 메뉴를 먼저 거치고 서브 메뉴를 읽게 됩니다. 만약 이런 구조를 가진 사이트를 시각 장애인이 사용하게 된다면, tab키를 통해 메인 메뉴에 접근할 때 메뉴 계층 구조에 대한 이해가 어려울 수 있습니다. </br></br>또한, jQuery를 통해 메인 메뉴 인터렉션을 구현하였습니다. MainMenuOver 함수와 MainMenuOut 함수로 함수를 그룹핑하여 제작하였으며, focus와 focusout 이벤트를 추가하여 tab키로 이동할 경우도 고려하였습니다.</p>
            <p class="accesivility_mainmenu"></p>
        </li>
        <li>
            <p class="accesivility_text">tab키로 접근 시에 메인 메뉴와 주요 컨텐츠로 이동할 수 있는 skip 메뉴 설계로 사용자의 편의성을 고려하였습니다.</br></br>skip 메뉴가 없다면, 본 사이트에 여러 번 접속하는 사용자들 중에 tab키로 접근해야 하는 사용자들은 불필요한 컨텐츠를 모두 거쳐야 하는 불편함이 생기게 됩니다. skip 메뉴는 tab키로 접속 시에도 하단 정보영역에 있는 정보만을 원하는 사용자가 쉽고 편리하게 하단으로 바로 이동할 수 있습니다.</p>
            <p class="accesivility_skipmenu"></p>
        </li>
        <li>
            <p class="accesivility_text">img 태그 사용 시에는 alt 태그로, a 태그 사용 시에는 title 태그로 대체 텍스트를 사용하여 접근성을 고려하였습니다.</br></br>대체 텍스트는 웹 접근성의 기본중에 기본이라고 생각합니다. 따라서 코딩 후에는 반드시 W3C 웹 표준 검사 사이트를 통해 유효성 검사를 거치며, 기본에 충실한 사이트를 제작하고자 하였습니다.</p>
            <p class="accesivility_markup"></p>
        </li>
    </ul>
    <div class="back_btn"><a href="http://dongsong.dothome.co.kr/"><img src="/images/back_btn.png" alt="홈으로가기"></div>
</section>
<!-- web accesivility 영역 끝 -->
<!-- footer 영역 시작 -->
<? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/footer.html" ?>
<!-- footer 영역 끝 -->