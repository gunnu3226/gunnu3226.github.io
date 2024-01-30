---
published: true;
title:  "[SpringSecurity] Spring Security + Jwt과 로그인"
excerpt: "회원가입과 로그인"

categories:
  - Spring
tags:
  - [Spring, Java, SpringSecurity, Jwt]

toc: true
toc_sticky: true
published: true
 
date: 2024-01-29
last_modified_at: 2024-01-29
---

## \[ 인증(Authentication)과 인가 (Authorization) \]
- **인증(Authentication)**
    - 보호된 리소스에 접근하는 대상에게 적절한 접근 권한이 있는지 확인하는 일련의 과정을 의미한다. 이때 보호된 리소스에 접근하는 대상(사용자)를 접근 주체(Principal)이라고 한다.
- **인가(Authorization)**
    - 인증절차가 끝난 접근 주체가 보호된 특정 리소스에 접근 가능한지를 결정하는 것을 의미한다.

쉽게 이해해보자면 로그인을 하는 행위는 인증 절차라고 볼 수 있고, 회원과 비회원 여부에 따라 다른 권한을 받는 것이 인가라고 할 수 있다. 스프링 시큐리티는 **Spring의 프레임워크**로 Srping 서버에 필요한 **인증 및 인가를 위해 많은 기능을 제공**하여 개발자에게 수고를 덜어준다.

## \[ 스프링 시큐리티의 구조 \]

스프링 시큐리티는 주로 서블릿 필터와 이들로 구성된 필터체인을 사용하고 있다. 로그인 과정에서 스프링 시큐리티의 플로우를 바탕으로 인증과 관련된 구조를 살펴본다.

![images_jkijki12_post_c85d836e-9eab-4102-9e00-4d6c40f160d0_image](https://github.com/gunnu3226/Coding-test/assets/139452702/d1648aa0-58c4-494d-9496-79ab52928015)

1. 사용자가 로그인 정보와 함께 인증 요청(Http Request)
2. AuthenticationFilter가 요청을 가로챈다. 이때 가로챈 정보를 통해 UsernamePasswordAuthenticationToken이라는 인증용 객채를 생성한다.
3. Authen