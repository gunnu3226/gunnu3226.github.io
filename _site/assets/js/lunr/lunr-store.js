var store = [{
        "title": "[TIL]2023.12.27 TIL",
        "excerpt":"오늘의 학습     프로그래머스 레벨2 2문제 풀이            최솟값 만들기       올바른 괄호           새로 알게 된 사실     String의 경우 .equal(“A”)로 비교하는데 char의 경우 == ‘A’로 비교하게 된다.     1 2 String.equal(\"A\") char == 'A'          ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL1/",
        "teaser": null
      },{
        "title": "[TIL]2023.12.27 TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 과일장수 카드뭉치 모의고사완전탐색 소수만들기 덧칠하기 기사단원의무기 숫자짝꿍 체육복 문자열나누기 대충만든자판 둘만의암호 새로 알게 된 사실 약수 개수 구하기 n의 약수의 개수를 구하는 코드에서 1~n까지 돌면서 구하는 코드는 시간 복잡도를 고려하면 n이 커졌을 때 시간초과가 났다. 1 2 3 4 5 6 7 int count = 0;...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL2/",
        "teaser": null
      },{
        "title": "[자료구조] 큐(Queue)의 정의와 java에서 사용법",
        "excerpt":"큐(Queue)? 기본적인 자료구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 자료구조이다. 나중에 넣은 데이터가 먼저 나오는 스택(Stack)과 반대되는 개념이다. 큐(Queue)의 특징 FIFO(First In First Out)선입선출 구조이다. 한쪽 끝(rear)에서는 삽입(enQueue)만 이루어지고 한쪽 끝(front)에서는 삭제(deQueue)만 이루어 진다. 그래프의 넓이 우선 탐색(BFS)에서 사용된다. 컴퓨터 버퍼에서 주로 사용된다. 여러...","categories": ["Datastructure"],
        "tags": ["자료구조","CS","Java"],
        "url": "/datastructure/Queue/",
        "teaser": null
      },{
        "title": "[Java] Primitive Type(원시타입)과 Reference Type(참조타입)",
        "excerpt":" ","categories": ["Java"],
        "tags": ["CS","Java"],
        "url": "/java/%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%83%80%EC%9E%85/",
        "teaser": null
      },{
        "title": "[TIL]2023.12.27 TIL",
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
        "title": "[TIL]2023.12.29 TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 H-Index n^2배열 자르기 행렬의 곱셈 할인 행사 의상 기능개발 -큐 프로세스 -큐 피로도 -dfs 타겟넘버 새로 공부한 내용 조건을 and(&amp;&amp;)로 걸어 줄 때 순서 if 혹은 while문 등 조건문을 걸어주는 상황에서 &amp;&amp;(and)로 조건을 여러개 사용하는 경우 조건을 앞부터 순서대로 검증하기 때문에 순서를 유의해서 사용해야 한다. 1...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL4/",
        "teaser": null
      },{
        "title": "[알고리즘]소수 판별, 구하기",
        "excerpt":"소수 판별 소수를 판별하는 알고리즘은 크게 3가지로 구현할 수 있다. 포스팅의 순서대로 마지막이 시간복잡도 기준에서 유리한 알고리즘이다. N이하 수 나누기 - O(n) $\\sqrt N$ 이하 수 나누기 - O($\\sqrt n$) 그리고 n까지의 수 중 소수를 구하고 싶을 때는 에라토스테네스의 체를 사용할 수 있다. N이하 수 나누기(O(n)) - 소수인지 판별할 때...","categories": ["Algorithm"],
        "tags": ["알고리즘","Java"],
        "url": "/algorithm/%EC%86%8C%EC%88%98%ED%8C%90%EB%B3%84/",
        "teaser": null
      },{
        "title": "[TIL]2023.12.29 TIL",
        "excerpt":"오늘의 학습 프로그래머스 문제풀이 주차 요금 계산(문제발생, 풀이 90분, 문제해결 90분) k진수에서 소수 개수 구하기 모음사전 -&gt; 다시 풀어보기 뒤에 있는 큰 수 찾기 -&gt;다시풀어보기 롤케이크 자르기 -&gt; 다시 풀어보기 숫자 변환하기 -bfs,dp 다리를 지나는 트럭 -큐, 객체 새로 공부한 내용 map.keySet() 사용할 때 주의점 map.keySet() 을 사용해서 key를 추출하고...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL5/",
        "teaser": null
      },{
        "title": "[TIL]2023.12.30 TIL",
        "excerpt":"오늘의 학습 Java문법 기본강의 1회독 완강(스파르타) 개인과제 키오스크 만들기 시작 우선 필수기능 구현 성공 구현 후 mvc구조?로 리팩토링 해봄 내일 해야할 일 어떤 메뉴만들건지 찾아서 메뉴 바꾸기 showMenuInfo에서 조건 처리하는 부분 동적으로 바꾸기 -&gt; getmenuorder도 동적으로 바꿔야함 (해결) Order객체로 사용하는 부분(?) 찾아보기 추가 기능 구현 부분 구현하기 키오스크 만들면서 고민한...","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL6/",
        "teaser": null
      },{
        "title": "[TIL]2024.01.02 TIL",
        "excerpt":"오늘의 학습     프로그래머스 문제풀이            가장 큰 수           키오스크 옵션기능 구현   김영한의 실전 자바 강의 수강(완강)            다형성, 추상클래스, 인터페이스          ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL7/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 가장 큰 수 Java",
        "excerpt":"문제 풀이 생각해낸 풀이 숫자를 써서 비교해보니 첫번째 자리의 숫자로 먼저 정렬하고 두번째 숫자로 정렬하는 식으로 쭉 정렬해서 이어 붙인다면 문제에서 원하는 가장 큰 수가 된다. 코드 구현을 시도하면서 해당 부분을 어떻게 해야할지 몰라 문법을 찾아 참고하였다. Comparator인터페이스의 compareTo()메서드 (o2 + 01).compareTo(o1 + o2)를 사용하면 두 문자열을 더한 수 중...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/%EA%B0%80%EC%9E%A5%ED%81%B0%EC%88%98/",
        "teaser": null
      },{
        "title": "[TIL]2024.01.03 TIL",
        "excerpt":"오늘의 학습     프로그래머스 2문제 풀이            소수 찾기                 풀이       - 택배상자       풀이           스프링 핵심 원리 - 기본편 수강  ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL8/",
        "teaser": null
      },{
        "title": "[Spring] 스프링에 대해서",
        "excerpt":"스프링의 핵심     스프링은 자바 언어 기반의 프레임워크   자바 언어의 가장 큰 특징 - 객체지향 언어   스프링은 객체 지향 언어가 가진 강력한 특징을 살려내는 프레임워크   스프링은 좋은 객체 지향 애플리케이션을 개발할 수 있게 도와주는 프레임워크   ## 스프링과 스프링 부트     스프링 부트는 스프링을 편리하게 사용할 수 있도록 지원해주는 것   ##  ","categories": ["Spring"],
        "tags": ["Spring","Java"],
        "url": "/spring/spring%EC%9D%B4%EB%9E%80/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 소수 찾기 Java",
        "excerpt":"문제 풀이 문제를 먼저 보고 든 생각은 소수를 판별하는 로직이 필요하니 일단 소수 판별 메서드를 만들고 시작하자였다. 그런데 문제에서 문자열로 입력이 들어와서 문자열을 바꾸어 처리하는 로직도 넣었다. 메서드는 하나의 기능만 가져야 한다고 하는데 우선 문제풀이니까… 1 2 3 4 5 6 7 8 9 10 public static boolean checkPrime(String num)...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 택배상자 Java",
        "excerpt":"문제 풀이 코드를 짜기 전 어떻게 짤지 먼저 구성해 보았다. 1부터 오더의 배열의 길이만큼 진행한다. i == order[현재] 이면 차에 싣고 현재+1 같지 않으면 스택에 저장 스택이 비지않고 값이 일치하면 차에 싣고 현재+1 머릿속에 구조는 떠오르는데 말로 표현하니 매끄럽지 않다. 계속 연습하면 나아지겠지.. ### 1 2 3 4 5 6...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/%ED%83%9D%EB%B0%B0%EC%83%81%EC%9E%90/",
        "teaser": null
      },{
        "title": "[TIL]2024.01.04 TIL",
        "excerpt":"오늘의 학습     프로그래머스 2문제 풀이            삼각 달팽이                 풀이       - 연속된 부분 수열의 합       풀이           키오스크 옵션 선택 코드 구현 완료            이후 메뉴랑 상품 싱글톤으로 생성자 계속 호출 안되게 시도 -&gt; 실패          ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL9/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 삼각 달팽이 Java",
        "excerpt":"문제 풀이 무언가 규칙성이 있을것이라 생각하고 하나씩 그리며 찾아보기로 했다. 삼각 달팽이 안에 들어가는 숫자는 1부터 1~n까지의 합과 같다. -&gt; n(n+1)/2 삼각형 모양을 왼쪽으로 밀어서 보면 아래와 같은 형식이다. | 1 | | | | |—|—-|—|—| | 2 | 9 | | | | 3 | 10 | 8 |...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/%EC%82%BC%EA%B0%81-%EB%8B%AC%ED%8C%BD%EC%9D%B4/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 연속된 부분 수열의 합 Java",
        "excerpt":"문제 풀이 임의의 두 인덱스와 그 사이의 부분 수열의 합이 k 합이 k인 수열이 여러개일 경우 가장 짧은거 가장 짧은게 여러개일 경우 가장 앞에거 주어진 수열을 0번 인덱스부터 돌면서 인덱스 값이 k보다 작거나 같을 때 부분수열 길이와 시작 인덱스를 저장하는 변수를 만들어서 인덱스의 값이 k와 같으면 시작 인덱스만 비교 인덱스의...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/%EC%97%B0%EC%86%8D%EB%90%9C-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4%EC%9D%98-%ED%95%A9/",
        "teaser": null
      },{
        "title": "[알고리즘] 캐시 교체 알고리즘",
        "excerpt":"캐시(Cache)란? 알고리즘을 이해하기 위해 캐시가 무엇인지 알아야 한다. Cache란 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 장소를 가리킨다. Cache에 데이터를 미리 복사해 놓으면 접근시간 없이 빠르게 데이터에 접근할 수 있다. 결국 Cache는 반복적으로 데이터를 불러오는 경우, Memory에 데이터를 저장하여 불러다 쓰는 것을 의미한다. 이때 원하는 데이터가 Cache에 존재할 경우Cache...","categories": ["Algorithm"],
        "tags": ["알고리즘","Java"],
        "url": "/algorithm/%EC%BA%90%EC%8B%9C%EA%B5%90%EC%B2%B4%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/",
        "teaser": null
      },{
        "title": "[TIL]2024.01.05 TIL",
        "excerpt":"오늘의 학습     프로그래머스 2문제 풀이            [1차] 캐시 - 풀이       튜플 - 풀이                문제를 풀며 알게된 캐시, 캐시교체 알고리즘에 대해 정리해 보았다.    캐시 교체 알고리즘       스프링 핵심원리 - 기본편 완강            완벽하게 내용을 숙지하기 보다는 흐름을 이해하고 기본적인 스프링의 내용을 가져가는 첫 수강. 이 후 필요한 부분을 찾아보며 다시 공부할 계획.          ","categories": ["TIL"],
        "tags": ["TIL","Java"],
        "url": "/til/TIL10/",
        "teaser": null
      },{
        "title": "[프로그래머스] LV.2 [1차] 캐시 Java",
        "excerpt":"문제 풀이 처음엔 LRU알고리즘이 무엇을 의미하는지 몰라서 공부를 진행하였다. 캐시 교체 알고리즘 간단하게 말하면 LRU는 데이터에 접근할 때, 캐시에 존재하는 데이터라면 가장 최근에 사용된 데이터로 표시하고 가장 오래 전에 사용된 데이터를 먼저 제거하여 캐시를 관리하는 알고리즘이다. 코드 1 2 3 4 5 6 7 8 9 10 11 12 13...","categories": ["Programmers"],
        "tags": ["코딩테스트","프로그래머스","Java"],
        "url": "/programmers/1%EC%B0%A8-%EC%BA%90%EC%8B%9C/",
        "teaser": null
      },{
        "title": "[개발공부] 좋은 객체지향 설계의 5가지 원칙, SOLID",
        "excerpt":"객체 지향 프로그래밍? 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러개의 독립된 단위, 즉 객체들의 모임으로 파악하고자 하는것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다.(협력) 객체 지향 프로그래밍 프로그램은 유연하고 변경이 용이하게 만들기 때문에 대규모 소프트웨어 개발에 많이 사용된다. 좋은 객체 지향 설계의 5가지 원칙(SOLID) 클린코드로 유명한 로버트 마틴이...","categories": ["개발공부"],
        "tags": ["개발공부","Java"],
        "url": "/%EA%B0%9C%EB%B0%9C%EA%B3%B5%EB%B6%80/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5/",
        "teaser": null
      }]
