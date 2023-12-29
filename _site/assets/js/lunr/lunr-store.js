var store = [{
        "title": "[2023-12-22]TIL",
        "excerpt":"오늘의 학습     프로그래머스 레벨2 2문제 풀이            최솟값 만들기       올바른 괄호           새로 알게 된 사실     String의 경우 .equal(“A”)로 비교하는데 char의 경우 == ‘A’로 비교하게 된다.     1 2 String.equal(\"A\") char == 'A'          ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL1/",
        "teaser": null
      },{
        "title": "[2023-12-26]TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 과일장수 카드뭉치 모의고사완전탐색 소수만들기 덧칠하기 기사단원의무기 숫자짝꿍 체육복 문자열나누기 대충만든자판 둘만의암호 새로 알게 된 사실 약수 개수 구하기 n의 약수의 개수를 구하는 코드에서 1~n까지 돌면서 구하는 코드는 시간 복잡도를 고려하면 n이 커졌을 때 시간초과가 났다. 1 2 3 4 5 6 7 int count = 0;...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL2/",
        "teaser": null
      },{
        "title": "[Java] Primitive Type(원시타입)과 Reference Type(참조타입)",
        "excerpt":" ","categories": ["Java"],
        "tags": ["CS","Java"],
        "url": "/java/%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%83%80%EC%9E%85/",
        "teaser": null
      },{
        "title": "[2023-12-27]TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 성격유형검사하기 바탕화면정리 개인정보수집유효기간 달리기경주 신고결과 받기 JadenCase 문자열만들기 이진변환 반복하기 피보나치수 카펫 예상대진표 N개의 최소공배수 멀리뛰기 귤 고르기 괄호 회전하기 연속 부분 수열 합의 개수 새로 공부한 내용 문자열을 이진문자열로 바꾸는 메소드 binary = Integer.toBinaryString(str) 나머지 연산의 성질 피보나치 문제를 풀면서 알게된 사실이다. 1 (a +...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL3/",
        "teaser": null
      },{
        "title": "[2023-12-27]Github Blog 설정 방법",
        "excerpt":"카테고리 설정 _pages&gt;categoreis 내부 파일 위 코드에서 10번줄 site.categories.TIL이 부분의 마지막 부분(TIL)이 글을 작성할 때 카테고리에 들어갈 카테고리 이름이 된다. nav_list_mian 이 부분은 왼쪽 네비게이션의 카테고리를 관리하는 부분이다. 이 부분에선 44번줄의 if category[0] == \"Datastructure\" 이 부분에 글작성에서 썼던 카테고리 명이 들어가면 된다. 그리고 a태그의 링크는 카테고리 정의 페이지의 permalink:...","categories": ["Github Blog"],
        "tags": ["Blog","Github"],
        "url": "/github%20blog/%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[자료구조] 큐(Queue)의 정의와 java에서 사용법",
        "excerpt":"큐(Queue)? 기본적인 자료구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 자료구조이다. 나중에 넣은 데이터가 먼저 나오는 스택(Stack)과 반대되는 개념이다. 큐(Queue)의 특징 FIFO(First In First Out)선입선출 구조이다. 한쪽 끝(rear)에서는 삽입(enQueue)만 이루어지고 한쪽 끝(front)에서는 삭제(deQueue)만 이루어 진다. 그래프의 넓이 우선 탐색(BFS)에서 사용된다. 컴퓨터 버퍼에서 주로 사용된다. 여러...","categories": ["Datastructure"],
        "tags": ["자료구조","CS","Java"],
        "url": "/datastructure/Queue/",
        "teaser": null
      },{
        "title": "[2023-12-28]TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 H-Index n^2배열 자르기 행렬의 곱셈 할인 행사 의상 기능개발 -큐 프로세스 -큐 피로도 -dfs 타겟넘버 새로 공부한 내용 조건을 and(&amp;&amp;)로 걸어 줄 때 순서 if 혹은 while문 등 조건문을 걸어주는 상황에서 &amp;&amp;(and)로 조건을 여러개 사용하는 경우 조건을 앞부터 순서대로 검증하기 때문에 순서를 유의해서 사용해야 한다. 1...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL4/",
        "teaser": null
      },{
        "title": "[2023-12-29]TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 주차 요금 계산(문제발생, 풀이 90분, 문제해결 90분) k진수에서 소수 개수 구하기 새로 공부한 내용 map.keySet() 사용할 때 주의점 map.keySet() 을 사용해서 key를 추출하고 해당 키를 사용해 로직을 수행한 후 .remove(key)를 진행하려 했다. 하지만 .keySet()을 사용하고 있는데 동시에 키를 삭제해서 동시성 오류가 발생한거 같다. 정확한 답변은 튜터님께...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL5/",
        "teaser": null
      },{
        "title": "[알고리즘]소수 판별, 구하기",
        "excerpt":"소수 판별 소수를 판별하는 알고리즘은 크게 3가지로 구현할 수 있다. 포스팅의 순서대로 마지막이 시간복잡도 기준에서 유리한 알고리즘이다. N이하 수 나누기 - O(n) $\\sqrt N$ 이하 수 나누기 - O($\\sqrt n$) 그리고 n까지의 수 중 소수를 구하고 싶을 때는 에라토스테네스의 체를 사용할 수 있다. N이하 수 나누기(O(n)) - 소수인지 판별할 때...","categories": ["Algorithm"],
        "tags": ["알고리즘"],
        "url": "/algorithm/%EC%86%8C%EC%88%98%ED%8C%90%EB%B3%84/",
        "teaser": null
      }]
